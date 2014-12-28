# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant::configure("2") do |config|

 config.vm.provider :virtualbox do |vb|
    vb.customize [
      "modifyvm", :id,
      "--memory", "2048",
      "--cpus", "2",
      "--ioapic", "on"
      ]
    end

  config.vm.box = "ubuntu/trusty64"

  config.vm.hostname = "devbox"
  config.vm.synced_folder ".", "/vagrant", type: "nfs"

  config.vm.network :private_network, ip: "192.168.50.10"

  config.vm.provision :shell, path: "shell/start.sh"
end