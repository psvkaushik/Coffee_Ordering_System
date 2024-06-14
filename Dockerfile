FROM python:3-alpine

RUN apk add --update --no-cache ansible bash openssh

WORKDIR /pipeline
COPY . /pipeline/
#COPY ~/.ssh/ /.ssh/

ENTRYPOINT []

CMD /bin/sh -c "export ANSIBLE_HOST_KEY_CHECKING=False && ansible-playbook -i /pipeline/hosts.yaml /pipeline/build.yaml"
