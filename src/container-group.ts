// https://www.terraform.io/docs/providers/azurerm/r/container_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#dns_name_label ContainerGroup#dns_name_label}
  */
  readonly dnsNameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#exposed_port ContainerGroup#exposed_port}
  */
  readonly exposedPort?: ContainerGroupExposedPort[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#ip_address_type ContainerGroup#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#location ContainerGroup#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#network_profile_id ContainerGroup#network_profile_id}
  */
  readonly networkProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#os_type ContainerGroup#os_type}
  */
  readonly osType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#resource_group_name ContainerGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#restart_policy ContainerGroup#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#tags ContainerGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#container ContainerGroup#container}
  */
  readonly container: ContainerGroupContainer[];
  /**
  * diagnostics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#diagnostics ContainerGroup#diagnostics}
  */
  readonly diagnostics?: ContainerGroupDiagnostics[];
  /**
  * dns_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#dns_config ContainerGroup#dns_config}
  */
  readonly dnsConfig?: ContainerGroupDnsConfig[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#identity ContainerGroup#identity}
  */
  readonly identity?: ContainerGroupIdentity[];
  /**
  * image_registry_credential block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#image_registry_credential ContainerGroup#image_registry_credential}
  */
  readonly imageRegistryCredential?: ContainerGroupImageRegistryCredential[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#timeouts ContainerGroup#timeouts}
  */
  readonly timeouts?: ContainerGroupTimeouts;
}
export interface ContainerGroupExposedPort {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#protocol ContainerGroup#protocol}
  */
  readonly protocol?: string;
}

function containerGroupExposedPortToTerraform(struct?: ContainerGroupExposedPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ContainerGroupContainerGpu {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#count ContainerGroup#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#sku ContainerGroup#sku}
  */
  readonly sku?: string;
}

function containerGroupContainerGpuToTerraform(struct?: ContainerGroupContainerGpu): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    sku: cdktf.stringToTerraform(struct!.sku),
  }
}

export interface ContainerGroupContainerLivenessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#path ContainerGroup#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#scheme ContainerGroup#scheme}
  */
  readonly scheme?: string;
}

function containerGroupContainerLivenessProbeHttpGetToTerraform(struct?: ContainerGroupContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}

export interface ContainerGroupContainerLivenessProbe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#exec ContainerGroup#exec}
  */
  readonly exec?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#failure_threshold ContainerGroup#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#initial_delay_seconds ContainerGroup#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#period_seconds ContainerGroup#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#success_threshold ContainerGroup#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#timeout_seconds ContainerGroup#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#http_get ContainerGroup#http_get}
  */
  readonly httpGet?: ContainerGroupContainerLivenessProbeHttpGet[];
}

function containerGroupContainerLivenessProbeToTerraform(struct?: ContainerGroupContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    http_get: cdktf.listMapper(containerGroupContainerLivenessProbeHttpGetToTerraform)(struct!.httpGet),
  }
}

export interface ContainerGroupContainerPorts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#protocol ContainerGroup#protocol}
  */
  readonly protocol?: string;
}

function containerGroupContainerPortsToTerraform(struct?: ContainerGroupContainerPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ContainerGroupContainerReadinessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#path ContainerGroup#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#scheme ContainerGroup#scheme}
  */
  readonly scheme?: string;
}

function containerGroupContainerReadinessProbeHttpGetToTerraform(struct?: ContainerGroupContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}

export interface ContainerGroupContainerReadinessProbe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#exec ContainerGroup#exec}
  */
  readonly exec?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#failure_threshold ContainerGroup#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#initial_delay_seconds ContainerGroup#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#period_seconds ContainerGroup#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#success_threshold ContainerGroup#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#timeout_seconds ContainerGroup#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#http_get ContainerGroup#http_get}
  */
  readonly httpGet?: ContainerGroupContainerReadinessProbeHttpGet[];
}

function containerGroupContainerReadinessProbeToTerraform(struct?: ContainerGroupContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    http_get: cdktf.listMapper(containerGroupContainerReadinessProbeHttpGetToTerraform)(struct!.httpGet),
  }
}

export interface ContainerGroupContainerVolumeGitRepo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#directory ContainerGroup#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#revision ContainerGroup#revision}
  */
  readonly revision?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#url ContainerGroup#url}
  */
  readonly url: string;
}

function containerGroupContainerVolumeGitRepoToTerraform(struct?: ContainerGroupContainerVolumeGitRepo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    revision: cdktf.stringToTerraform(struct!.revision),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface ContainerGroupContainerVolume {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#empty_dir ContainerGroup#empty_dir}
  */
  readonly emptyDir?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#mount_path ContainerGroup#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#read_only ContainerGroup#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#secret ContainerGroup#secret}
  */
  readonly secret?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#share_name ContainerGroup#share_name}
  */
  readonly shareName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#storage_account_key ContainerGroup#storage_account_key}
  */
  readonly storageAccountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#storage_account_name ContainerGroup#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * git_repo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#git_repo ContainerGroup#git_repo}
  */
  readonly gitRepo?: ContainerGroupContainerVolumeGitRepo[];
}

function containerGroupContainerVolumeToTerraform(struct?: ContainerGroupContainerVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    empty_dir: cdktf.booleanToTerraform(struct!.emptyDir),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.secret),
    share_name: cdktf.stringToTerraform(struct!.shareName),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    git_repo: cdktf.listMapper(containerGroupContainerVolumeGitRepoToTerraform)(struct!.gitRepo),
  }
}

export interface ContainerGroupContainer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#commands ContainerGroup#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#cpu ContainerGroup#cpu}
  */
  readonly cpu: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#environment_variables ContainerGroup#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#image ContainerGroup#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#memory ContainerGroup#memory}
  */
  readonly memory: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#secure_environment_variables ContainerGroup#secure_environment_variables}
  */
  readonly secureEnvironmentVariables?: { [key: string]: string };
  /**
  * gpu block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#gpu ContainerGroup#gpu}
  */
  readonly gpu?: ContainerGroupContainerGpu[];
  /**
  * liveness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#liveness_probe ContainerGroup#liveness_probe}
  */
  readonly livenessProbe?: ContainerGroupContainerLivenessProbe[];
  /**
  * ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#ports ContainerGroup#ports}
  */
  readonly ports?: ContainerGroupContainerPorts[];
  /**
  * readiness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#readiness_probe ContainerGroup#readiness_probe}
  */
  readonly readinessProbe?: ContainerGroupContainerReadinessProbe[];
  /**
  * volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#volume ContainerGroup#volume}
  */
  readonly volume?: ContainerGroupContainerVolume[];
}

function containerGroupContainerToTerraform(struct?: ContainerGroupContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    commands: cdktf.listMapper(cdktf.stringToTerraform)(struct!.commands),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environmentVariables),
    image: cdktf.stringToTerraform(struct!.image),
    memory: cdktf.numberToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    secure_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.secureEnvironmentVariables),
    gpu: cdktf.listMapper(containerGroupContainerGpuToTerraform)(struct!.gpu),
    liveness_probe: cdktf.listMapper(containerGroupContainerLivenessProbeToTerraform)(struct!.livenessProbe),
    ports: cdktf.listMapper(containerGroupContainerPortsToTerraform)(struct!.ports),
    readiness_probe: cdktf.listMapper(containerGroupContainerReadinessProbeToTerraform)(struct!.readinessProbe),
    volume: cdktf.listMapper(containerGroupContainerVolumeToTerraform)(struct!.volume),
  }
}

export interface ContainerGroupDiagnosticsLogAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#log_type ContainerGroup#log_type}
  */
  readonly logType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#metadata ContainerGroup#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#workspace_id ContainerGroup#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#workspace_key ContainerGroup#workspace_key}
  */
  readonly workspaceKey: string;
}

function containerGroupDiagnosticsLogAnalyticsToTerraform(struct?: ContainerGroupDiagnosticsLogAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_type: cdktf.stringToTerraform(struct!.logType),
    metadata: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.metadata),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
    workspace_key: cdktf.stringToTerraform(struct!.workspaceKey),
  }
}

export interface ContainerGroupDiagnostics {
  /**
  * log_analytics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#log_analytics ContainerGroup#log_analytics}
  */
  readonly logAnalytics: ContainerGroupDiagnosticsLogAnalytics[];
}

function containerGroupDiagnosticsToTerraform(struct?: ContainerGroupDiagnostics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_analytics: cdktf.listMapper(containerGroupDiagnosticsLogAnalyticsToTerraform)(struct!.logAnalytics),
  }
}

export interface ContainerGroupDnsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#nameservers ContainerGroup#nameservers}
  */
  readonly nameservers: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#options ContainerGroup#options}
  */
  readonly options: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#search_domains ContainerGroup#search_domains}
  */
  readonly searchDomains: string[];
}

function containerGroupDnsConfigToTerraform(struct?: ContainerGroupDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nameservers),
    options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.options),
    search_domains: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searchDomains),
  }
}

export interface ContainerGroupIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#identity_ids ContainerGroup#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#type ContainerGroup#type}
  */
  readonly type: string;
}

function containerGroupIdentityToTerraform(struct?: ContainerGroupIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ContainerGroupImageRegistryCredential {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#password ContainerGroup#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#server ContainerGroup#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#username ContainerGroup#username}
  */
  readonly username: string;
}

function containerGroupImageRegistryCredentialToTerraform(struct?: ContainerGroupImageRegistryCredential): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface ContainerGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#create ContainerGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#delete ContainerGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#read ContainerGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html#update ContainerGroup#update}
  */
  readonly update?: string;
}

function containerGroupTimeoutsToTerraform(struct?: ContainerGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html azurerm_container_group}
*/
export class ContainerGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/container_group.html azurerm_container_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dnsNameLabel = config.dnsNameLabel;
    this._exposedPort = config.exposedPort;
    this._ipAddressType = config.ipAddressType;
    this._location = config.location;
    this._name = config.name;
    this._networkProfileId = config.networkProfileId;
    this._osType = config.osType;
    this._resourceGroupName = config.resourceGroupName;
    this._restartPolicy = config.restartPolicy;
    this._tags = config.tags;
    this._container = config.container;
    this._diagnostics = config.diagnostics;
    this._dnsConfig = config.dnsConfig;
    this._identity = config.identity;
    this._imageRegistryCredential = config.imageRegistryCredential;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name_label - computed: false, optional: true, required: false
  private _dnsNameLabel?: string;
  public get dnsNameLabel() {
    return this.getStringAttribute('dns_name_label');
  }
  public set dnsNameLabel(value: string ) {
    this._dnsNameLabel = value;
  }
  public resetDnsNameLabel() {
    this._dnsNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameLabelInput() {
    return this._dnsNameLabel
  }

  // exposed_port - computed: true, optional: true, required: false
  private _exposedPort?: ContainerGroupExposedPort[]
  public get exposedPort(): ContainerGroupExposedPort[] {
    return this.interpolationForAttribute('exposed_port') as any; // Getting the computed value is not yet implemented
  }
  public set exposedPort(value: ContainerGroupExposedPort[]) {
    this._exposedPort = value;
  }
  public resetExposedPort() {
    this._exposedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedPortInput() {
    return this._exposedPort
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string;
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string ) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // network_profile_id - computed: false, optional: true, required: false
  private _networkProfileId?: string;
  public get networkProfileId() {
    return this.getStringAttribute('network_profile_id');
  }
  public set networkProfileId(value: string ) {
    this._networkProfileId = value;
  }
  public resetNetworkProfileId() {
    this._networkProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileIdInput() {
    return this._networkProfileId
  }

  // os_type - computed: false, optional: false, required: true
  private _osType: string;
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string;
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string ) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // container - computed: false, optional: false, required: true
  private _container: ContainerGroupContainer[];
  public get container() {
    return this.interpolationForAttribute('container') as any;
  }
  public set container(value: ContainerGroupContainer[]) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container
  }

  // diagnostics - computed: false, optional: true, required: false
  private _diagnostics?: ContainerGroupDiagnostics[];
  public get diagnostics() {
    return this.interpolationForAttribute('diagnostics') as any;
  }
  public set diagnostics(value: ContainerGroupDiagnostics[] ) {
    this._diagnostics = value;
  }
  public resetDiagnostics() {
    this._diagnostics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticsInput() {
    return this._diagnostics
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig?: ContainerGroupDnsConfig[];
  public get dnsConfig() {
    return this.interpolationForAttribute('dns_config') as any;
  }
  public set dnsConfig(value: ContainerGroupDnsConfig[] ) {
    this._dnsConfig = value;
  }
  public resetDnsConfig() {
    this._dnsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: ContainerGroupIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: ContainerGroupIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // image_registry_credential - computed: false, optional: true, required: false
  private _imageRegistryCredential?: ContainerGroupImageRegistryCredential[];
  public get imageRegistryCredential() {
    return this.interpolationForAttribute('image_registry_credential') as any;
  }
  public set imageRegistryCredential(value: ContainerGroupImageRegistryCredential[] ) {
    this._imageRegistryCredential = value;
  }
  public resetImageRegistryCredential() {
    this._imageRegistryCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryCredentialInput() {
    return this._imageRegistryCredential
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ContainerGroupTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_name_label: cdktf.stringToTerraform(this._dnsNameLabel),
      exposed_port: cdktf.listMapper(containerGroupExposedPortToTerraform)(this._exposedPort),
      ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_profile_id: cdktf.stringToTerraform(this._networkProfileId),
      os_type: cdktf.stringToTerraform(this._osType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      restart_policy: cdktf.stringToTerraform(this._restartPolicy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      container: cdktf.listMapper(containerGroupContainerToTerraform)(this._container),
      diagnostics: cdktf.listMapper(containerGroupDiagnosticsToTerraform)(this._diagnostics),
      dns_config: cdktf.listMapper(containerGroupDnsConfigToTerraform)(this._dnsConfig),
      identity: cdktf.listMapper(containerGroupIdentityToTerraform)(this._identity),
      image_registry_credential: cdktf.listMapper(containerGroupImageRegistryCredentialToTerraform)(this._imageRegistryCredential),
      timeouts: containerGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
