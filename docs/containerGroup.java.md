# `containerGroup` Submodule <a name="`containerGroup` Submodule" id="@cdktf/provider-azurerm.containerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerGroup <a name="ContainerGroup" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group azurerm_container_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroup;

ContainerGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .container(IResolvable)
    .container(java.util.List<ContainerGroupContainer>)
    .location(java.lang.String)
    .name(java.lang.String)
    .osType(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .diagnostics(ContainerGroupDiagnostics)
//  .dnsConfig(ContainerGroupDnsConfig)
//  .dnsNameLabel(java.lang.String)
//  .dnsNameLabelReusePolicy(java.lang.String)
//  .exposedPort(IResolvable)
//  .exposedPort(java.util.List<ContainerGroupExposedPort>)
//  .id(java.lang.String)
//  .identity(ContainerGroupIdentity)
//  .imageRegistryCredential(IResolvable)
//  .imageRegistryCredential(java.util.List<ContainerGroupImageRegistryCredential>)
//  .initContainer(IResolvable)
//  .initContainer(java.util.List<ContainerGroupInitContainer>)
//  .ipAddressType(java.lang.String)
//  .keyVaultKeyId(java.lang.String)
//  .keyVaultUserAssignedIdentityId(java.lang.String)
//  .networkProfileId(java.lang.String)
//  .priority(java.lang.String)
//  .restartPolicy(java.lang.String)
//  .sku(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ContainerGroupTimeouts)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.container">container</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>></code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#location ContainerGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#os_type ContainerGroup#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#resource_group_name ContainerGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.diagnostics">diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a></code> | diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dnsNameLabel">dnsNameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#dns_name_label ContainerGroup#dns_name_label}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dnsNameLabelReusePolicy">dnsNameLabelReusePolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#dns_name_label_reuse_policy ContainerGroup#dns_name_label_reuse_policy}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.exposedPort">exposedPort</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#exposed_port ContainerGroup#exposed_port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#id ContainerGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.imageRegistryCredential">imageRegistryCredential</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>></code> | image_registry_credential block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.initContainer">initContainer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>></code> | init_container block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#ip_address_type ContainerGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#key_vault_key_id ContainerGroup#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.keyVaultUserAssignedIdentityId">keyVaultUserAssignedIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#key_vault_user_assigned_identity_id ContainerGroup#key_vault_user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.networkProfileId">networkProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#network_profile_id ContainerGroup#network_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.priority">priority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#priority ContainerGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.restartPolicy">restartPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#restart_policy ContainerGroup#restart_policy}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#sku ContainerGroup#sku}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#subnet_ids ContainerGroup#subnet_ids}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#tags ContainerGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#zones ContainerGroup#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.container"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#container ContainerGroup#container}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#location ContainerGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#name ContainerGroup#name}.

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.osType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#os_type ContainerGroup#os_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#resource_group_name ContainerGroup#resource_group_name}.

---

##### `diagnostics`<sup>Optional</sup> <a name="diagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.diagnostics"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#diagnostics ContainerGroup#diagnostics}

---

##### `dnsConfig`<sup>Optional</sup> <a name="dnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dnsConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#dns_config ContainerGroup#dns_config}

---

##### `dnsNameLabel`<sup>Optional</sup> <a name="dnsNameLabel" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dnsNameLabel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#dns_name_label ContainerGroup#dns_name_label}.

---

##### `dnsNameLabelReusePolicy`<sup>Optional</sup> <a name="dnsNameLabelReusePolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dnsNameLabelReusePolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#dns_name_label_reuse_policy ContainerGroup#dns_name_label_reuse_policy}.

---

##### `exposedPort`<sup>Optional</sup> <a name="exposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.exposedPort"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#exposed_port ContainerGroup#exposed_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#id ContainerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#identity ContainerGroup#identity}

---

##### `imageRegistryCredential`<sup>Optional</sup> <a name="imageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.imageRegistryCredential"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>>

image_registry_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#image_registry_credential ContainerGroup#image_registry_credential}

---

##### `initContainer`<sup>Optional</sup> <a name="initContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.initContainer"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>>

init_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#init_container ContainerGroup#init_container}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#ip_address_type ContainerGroup#ip_address_type}.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.keyVaultKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#key_vault_key_id ContainerGroup#key_vault_key_id}.

---

##### `keyVaultUserAssignedIdentityId`<sup>Optional</sup> <a name="keyVaultUserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.keyVaultUserAssignedIdentityId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#key_vault_user_assigned_identity_id ContainerGroup#key_vault_user_assigned_identity_id}.

---

##### `networkProfileId`<sup>Optional</sup> <a name="networkProfileId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.networkProfileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#network_profile_id ContainerGroup#network_profile_id}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.priority"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#priority ContainerGroup#priority}.

---

##### `restartPolicy`<sup>Optional</sup> <a name="restartPolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.restartPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#restart_policy ContainerGroup#restart_policy}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.sku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#sku ContainerGroup#sku}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#subnet_ids ContainerGroup#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#tags ContainerGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#timeouts ContainerGroup#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.zones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#zones ContainerGroup#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDiagnostics">putDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDnsConfig">putDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putExposedPort">putExposedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putImageRegistryCredential">putImageRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putInitContainer">putInitContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDiagnostics">resetDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsConfig">resetDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabel">resetDnsNameLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabelReusePolicy">resetDnsNameLabelReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetExposedPort">resetExposedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetImageRegistryCredential">resetImageRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetInitContainer">resetInitContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultUserAssignedIdentityId">resetKeyVaultUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetNetworkProfileId">resetNetworkProfileId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetRestartPolicy">resetRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainer` <a name="putContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putContainer"></a>

```java
public void putContainer(IResolvable OR java.util.List<ContainerGroupContainer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putContainer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>>

---

##### `putDiagnostics` <a name="putDiagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDiagnostics"></a>

```java
public void putDiagnostics(ContainerGroupDiagnostics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

---

##### `putDnsConfig` <a name="putDnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDnsConfig"></a>

```java
public void putDnsConfig(ContainerGroupDnsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

---

##### `putExposedPort` <a name="putExposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putExposedPort"></a>

```java
public void putExposedPort(IResolvable OR java.util.List<ContainerGroupExposedPort> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putExposedPort.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putIdentity"></a>

```java
public void putIdentity(ContainerGroupIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

---

##### `putImageRegistryCredential` <a name="putImageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putImageRegistryCredential"></a>

```java
public void putImageRegistryCredential(IResolvable OR java.util.List<ContainerGroupImageRegistryCredential> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putImageRegistryCredential.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>>

---

##### `putInitContainer` <a name="putInitContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putInitContainer"></a>

```java
public void putInitContainer(IResolvable OR java.util.List<ContainerGroupInitContainer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putInitContainer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts"></a>

```java
public void putTimeouts(ContainerGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

---

##### `resetDiagnostics` <a name="resetDiagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDiagnostics"></a>

```java
public void resetDiagnostics()
```

##### `resetDnsConfig` <a name="resetDnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsConfig"></a>

```java
public void resetDnsConfig()
```

##### `resetDnsNameLabel` <a name="resetDnsNameLabel" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabel"></a>

```java
public void resetDnsNameLabel()
```

##### `resetDnsNameLabelReusePolicy` <a name="resetDnsNameLabelReusePolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabelReusePolicy"></a>

```java
public void resetDnsNameLabelReusePolicy()
```

##### `resetExposedPort` <a name="resetExposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetExposedPort"></a>

```java
public void resetExposedPort()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetImageRegistryCredential` <a name="resetImageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetImageRegistryCredential"></a>

```java
public void resetImageRegistryCredential()
```

##### `resetInitContainer` <a name="resetInitContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetInitContainer"></a>

```java
public void resetInitContainer()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultKeyId"></a>

```java
public void resetKeyVaultKeyId()
```

##### `resetKeyVaultUserAssignedIdentityId` <a name="resetKeyVaultUserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultUserAssignedIdentityId"></a>

```java
public void resetKeyVaultUserAssignedIdentityId()
```

##### `resetNetworkProfileId` <a name="resetNetworkProfileId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetNetworkProfileId"></a>

```java
public void resetNetworkProfileId()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRestartPolicy` <a name="resetRestartPolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetRestartPolicy"></a>

```java
public void resetRestartPolicy()
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSku"></a>

```java
public void resetSku()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetZones"></a>

```java
public void resetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroup;

ContainerGroup.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroup;

ContainerGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroup;

ContainerGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroup;

ContainerGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContainerGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContainerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList">ContainerGroupContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnostics">diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference">ContainerGroupDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference">ContainerGroupDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPort">exposedPort</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList">ContainerGroupExposedPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference">ContainerGroupIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredential">imageRegistryCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList">ContainerGroupImageRegistryCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainer">initContainer</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList">ContainerGroupInitContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference">ContainerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.containerInput">containerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnosticsInput">diagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfigInput">dnsConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelInput">dnsNameLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicyInput">dnsNameLabelReusePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPortInput">exposedPortInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredentialInput">imageRegistryCredentialInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainerInput">initContainerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityIdInput">keyVaultUserAssignedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileIdInput">networkProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicyInput">restartPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabel">dnsNameLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicy">dnsNameLabelReusePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityId">keyVaultUserAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileId">networkProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicy">restartPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.container"></a>

```java
public ContainerGroupContainerList getContainer();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList">ContainerGroupContainerList</a>

---

##### `diagnostics`<sup>Required</sup> <a name="diagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnostics"></a>

```java
public ContainerGroupDiagnosticsOutputReference getDiagnostics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference">ContainerGroupDiagnosticsOutputReference</a>

---

##### `dnsConfig`<sup>Required</sup> <a name="dnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfig"></a>

```java
public ContainerGroupDnsConfigOutputReference getDnsConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference">ContainerGroupDnsConfigOutputReference</a>

---

##### `exposedPort`<sup>Required</sup> <a name="exposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPort"></a>

```java
public ContainerGroupExposedPortList getExposedPort();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList">ContainerGroupExposedPortList</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identity"></a>

```java
public ContainerGroupIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference">ContainerGroupIdentityOutputReference</a>

---

##### `imageRegistryCredential`<sup>Required</sup> <a name="imageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredential"></a>

```java
public ContainerGroupImageRegistryCredentialList getImageRegistryCredential();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList">ContainerGroupImageRegistryCredentialList</a>

---

##### `initContainer`<sup>Required</sup> <a name="initContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainer"></a>

```java
public ContainerGroupInitContainerList getInitContainer();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList">ContainerGroupInitContainerList</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeouts"></a>

```java
public ContainerGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference">ContainerGroupTimeoutsOutputReference</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.containerInput"></a>

```java
public java.lang.Object getContainerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>>

---

##### `diagnosticsInput`<sup>Optional</sup> <a name="diagnosticsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnosticsInput"></a>

```java
public ContainerGroupDiagnostics getDiagnosticsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

---

##### `dnsConfigInput`<sup>Optional</sup> <a name="dnsConfigInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfigInput"></a>

```java
public ContainerGroupDnsConfig getDnsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

---

##### `dnsNameLabelInput`<sup>Optional</sup> <a name="dnsNameLabelInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelInput"></a>

```java
public java.lang.String getDnsNameLabelInput();
```

- *Type:* java.lang.String

---

##### `dnsNameLabelReusePolicyInput`<sup>Optional</sup> <a name="dnsNameLabelReusePolicyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicyInput"></a>

```java
public java.lang.String getDnsNameLabelReusePolicyInput();
```

- *Type:* java.lang.String

---

##### `exposedPortInput`<sup>Optional</sup> <a name="exposedPortInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPortInput"></a>

```java
public java.lang.Object getExposedPortInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identityInput"></a>

```java
public ContainerGroupIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageRegistryCredentialInput`<sup>Optional</sup> <a name="imageRegistryCredentialInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredentialInput"></a>

```java
public java.lang.Object getImageRegistryCredentialInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>>

---

##### `initContainerInput`<sup>Optional</sup> <a name="initContainerInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainerInput"></a>

```java
public java.lang.Object getInitContainerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>>

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyIdInput"></a>

```java
public java.lang.String getKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultUserAssignedIdentityIdInput`<sup>Optional</sup> <a name="keyVaultUserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityIdInput"></a>

```java
public java.lang.String getKeyVaultUserAssignedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkProfileIdInput`<sup>Optional</sup> <a name="networkProfileIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileIdInput"></a>

```java
public java.lang.String getNetworkProfileIdInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `restartPolicyInput`<sup>Optional</sup> <a name="restartPolicyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicyInput"></a>

```java
public java.lang.String getRestartPolicyInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsNameLabel`<sup>Required</sup> <a name="dnsNameLabel" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabel"></a>

```java
public java.lang.String getDnsNameLabel();
```

- *Type:* java.lang.String

---

##### `dnsNameLabelReusePolicy`<sup>Required</sup> <a name="dnsNameLabelReusePolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicy"></a>

```java
public java.lang.String getDnsNameLabelReusePolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `keyVaultUserAssignedIdentityId`<sup>Required</sup> <a name="keyVaultUserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityId"></a>

```java
public java.lang.String getKeyVaultUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkProfileId`<sup>Required</sup> <a name="networkProfileId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileId"></a>

```java
public java.lang.String getNetworkProfileId();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicy"></a>

```java
public java.lang.String getRestartPolicy();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerGroupConfig <a name="ContainerGroupConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupConfig;

ContainerGroupConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .container(IResolvable)
    .container(java.util.List<ContainerGroupContainer>)
    .location(java.lang.String)
    .name(java.lang.String)
    .osType(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .diagnostics(ContainerGroupDiagnostics)
//  .dnsConfig(ContainerGroupDnsConfig)
//  .dnsNameLabel(java.lang.String)
//  .dnsNameLabelReusePolicy(java.lang.String)
//  .exposedPort(IResolvable)
//  .exposedPort(java.util.List<ContainerGroupExposedPort>)
//  .id(java.lang.String)
//  .identity(ContainerGroupIdentity)
//  .imageRegistryCredential(IResolvable)
//  .imageRegistryCredential(java.util.List<ContainerGroupImageRegistryCredential>)
//  .initContainer(IResolvable)
//  .initContainer(java.util.List<ContainerGroupInitContainer>)
//  .ipAddressType(java.lang.String)
//  .keyVaultKeyId(java.lang.String)
//  .keyVaultUserAssignedIdentityId(java.lang.String)
//  .networkProfileId(java.lang.String)
//  .priority(java.lang.String)
//  .restartPolicy(java.lang.String)
//  .sku(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ContainerGroupTimeouts)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.container">container</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>></code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#location ContainerGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#os_type ContainerGroup#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#resource_group_name ContainerGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.diagnostics">diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a></code> | diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabel">dnsNameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#dns_name_label ContainerGroup#dns_name_label}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabelReusePolicy">dnsNameLabelReusePolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#dns_name_label_reuse_policy ContainerGroup#dns_name_label_reuse_policy}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.exposedPort">exposedPort</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#exposed_port ContainerGroup#exposed_port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#id ContainerGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.imageRegistryCredential">imageRegistryCredential</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>></code> | image_registry_credential block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.initContainer">initContainer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>></code> | init_container block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#ip_address_type ContainerGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#key_vault_key_id ContainerGroup#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultUserAssignedIdentityId">keyVaultUserAssignedIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#key_vault_user_assigned_identity_id ContainerGroup#key_vault_user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.networkProfileId">networkProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#network_profile_id ContainerGroup#network_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.priority">priority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#priority ContainerGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.restartPolicy">restartPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#restart_policy ContainerGroup#restart_policy}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#sku ContainerGroup#sku}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#subnet_ids ContainerGroup#subnet_ids}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#tags ContainerGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#zones ContainerGroup#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.container"></a>

```java
public java.lang.Object getContainer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#container ContainerGroup#container}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#location ContainerGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#name ContainerGroup#name}.

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#os_type ContainerGroup#os_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#resource_group_name ContainerGroup#resource_group_name}.

---

##### `diagnostics`<sup>Optional</sup> <a name="diagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.diagnostics"></a>

```java
public ContainerGroupDiagnostics getDiagnostics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#diagnostics ContainerGroup#diagnostics}

---

##### `dnsConfig`<sup>Optional</sup> <a name="dnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsConfig"></a>

```java
public ContainerGroupDnsConfig getDnsConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#dns_config ContainerGroup#dns_config}

---

##### `dnsNameLabel`<sup>Optional</sup> <a name="dnsNameLabel" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabel"></a>

```java
public java.lang.String getDnsNameLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#dns_name_label ContainerGroup#dns_name_label}.

---

##### `dnsNameLabelReusePolicy`<sup>Optional</sup> <a name="dnsNameLabelReusePolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabelReusePolicy"></a>

```java
public java.lang.String getDnsNameLabelReusePolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#dns_name_label_reuse_policy ContainerGroup#dns_name_label_reuse_policy}.

---

##### `exposedPort`<sup>Optional</sup> <a name="exposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.exposedPort"></a>

```java
public java.lang.Object getExposedPort();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#exposed_port ContainerGroup#exposed_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#id ContainerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.identity"></a>

```java
public ContainerGroupIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#identity ContainerGroup#identity}

---

##### `imageRegistryCredential`<sup>Optional</sup> <a name="imageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.imageRegistryCredential"></a>

```java
public java.lang.Object getImageRegistryCredential();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>>

image_registry_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#image_registry_credential ContainerGroup#image_registry_credential}

---

##### `initContainer`<sup>Optional</sup> <a name="initContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.initContainer"></a>

```java
public java.lang.Object getInitContainer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>>

init_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#init_container ContainerGroup#init_container}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#ip_address_type ContainerGroup#ip_address_type}.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#key_vault_key_id ContainerGroup#key_vault_key_id}.

---

##### `keyVaultUserAssignedIdentityId`<sup>Optional</sup> <a name="keyVaultUserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultUserAssignedIdentityId"></a>

```java
public java.lang.String getKeyVaultUserAssignedIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#key_vault_user_assigned_identity_id ContainerGroup#key_vault_user_assigned_identity_id}.

---

##### `networkProfileId`<sup>Optional</sup> <a name="networkProfileId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.networkProfileId"></a>

```java
public java.lang.String getNetworkProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#network_profile_id ContainerGroup#network_profile_id}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#priority ContainerGroup#priority}.

---

##### `restartPolicy`<sup>Optional</sup> <a name="restartPolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.restartPolicy"></a>

```java
public java.lang.String getRestartPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#restart_policy ContainerGroup#restart_policy}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#sku ContainerGroup#sku}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#subnet_ids ContainerGroup#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#tags ContainerGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.timeouts"></a>

```java
public ContainerGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#timeouts ContainerGroup#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#zones ContainerGroup#zones}.

---

### ContainerGroupContainer <a name="ContainerGroupContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainer;

ContainerGroupContainer.builder()
    .cpu(java.lang.Number)
    .image(java.lang.String)
    .memory(java.lang.Number)
    .name(java.lang.String)
//  .commands(java.util.List<java.lang.String>)
//  .cpuLimit(java.lang.Number)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .gpu(ContainerGroupContainerGpu)
//  .gpuLimit(ContainerGroupContainerGpuLimit)
//  .livenessProbe(ContainerGroupContainerLivenessProbe)
//  .memoryLimit(java.lang.Number)
//  .ports(IResolvable)
//  .ports(java.util.List<ContainerGroupContainerPorts>)
//  .readinessProbe(ContainerGroupContainerReadinessProbe)
//  .secureEnvironmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .security(IResolvable)
//  .security(java.util.List<ContainerGroupContainerSecurity>)
//  .volume(IResolvable)
//  .volume(java.util.List<ContainerGroupContainerVolume>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#cpu ContainerGroup#cpu}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#image ContainerGroup#image}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memory">memory</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#memory ContainerGroup#memory}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.commands">commands</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#commands ContainerGroup#commands}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpuLimit">cpuLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#cpu_limit ContainerGroup#cpu_limit}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.gpu">gpu</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a></code> | gpu block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.gpuLimit">gpuLimit</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a></code> | gpu_limit block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#memory_limit ContainerGroup#memory_limit}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.ports">ports</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>></code> | ports block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.readinessProbe">readinessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a></code> | readiness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.secureEnvironmentVariables">secureEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.security">security</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.volume">volume</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>></code> | volume block. |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#cpu ContainerGroup#cpu}.

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#image ContainerGroup#image}.

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#memory ContainerGroup#memory}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#name ContainerGroup#name}.

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.commands"></a>

```java
public java.util.List<java.lang.String> getCommands();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#commands ContainerGroup#commands}.

---

##### `cpuLimit`<sup>Optional</sup> <a name="cpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpuLimit"></a>

```java
public java.lang.Number getCpuLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#cpu_limit ContainerGroup#cpu_limit}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.gpu"></a>

```java
public ContainerGroupContainerGpu getGpu();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a>

gpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#gpu ContainerGroup#gpu}

---

##### `gpuLimit`<sup>Optional</sup> <a name="gpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.gpuLimit"></a>

```java
public ContainerGroupContainerGpuLimit getGpuLimit();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a>

gpu_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#gpu_limit ContainerGroup#gpu_limit}

---

##### `livenessProbe`<sup>Optional</sup> <a name="livenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.livenessProbe"></a>

```java
public ContainerGroupContainerLivenessProbe getLivenessProbe();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#liveness_probe ContainerGroup#liveness_probe}

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memoryLimit"></a>

```java
public java.lang.Number getMemoryLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#memory_limit ContainerGroup#memory_limit}.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.ports"></a>

```java
public java.lang.Object getPorts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>>

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#ports ContainerGroup#ports}

---

##### `readinessProbe`<sup>Optional</sup> <a name="readinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.readinessProbe"></a>

```java
public ContainerGroupContainerReadinessProbe getReadinessProbe();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

readiness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#readiness_probe ContainerGroup#readiness_probe}

---

##### `secureEnvironmentVariables`<sup>Optional</sup> <a name="secureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.secureEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecureEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.security"></a>

```java
public java.lang.Object getSecurity();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#security ContainerGroup#security}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.volume"></a>

```java
public java.lang.Object getVolume();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#volume ContainerGroup#volume}

---

### ContainerGroupContainerGpu <a name="ContainerGroupContainerGpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerGpu;

ContainerGroupContainerGpu.builder()
//  .count(java.lang.Number)
//  .sku(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#count ContainerGroup#count}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#sku ContainerGroup#sku}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#count ContainerGroup#count}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#sku ContainerGroup#sku}.

---

### ContainerGroupContainerGpuLimit <a name="ContainerGroupContainerGpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerGpuLimit;

ContainerGroupContainerGpuLimit.builder()
//  .count(java.lang.Number)
//  .sku(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#count ContainerGroup#count}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#sku ContainerGroup#sku}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#count ContainerGroup#count}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#sku ContainerGroup#sku}.

---

### ContainerGroupContainerLivenessProbe <a name="ContainerGroupContainerLivenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerLivenessProbe;

ContainerGroupContainerLivenessProbe.builder()
//  .exec(java.util.List<java.lang.String>)
//  .failureThreshold(java.lang.Number)
//  .httpGet(IResolvable)
//  .httpGet(java.util.List<ContainerGroupContainerLivenessProbeHttpGet>)
//  .initialDelaySeconds(java.lang.Number)
//  .periodSeconds(java.lang.Number)
//  .successThreshold(java.lang.Number)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.exec">exec</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#exec ContainerGroup#exec}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.httpGet">httpGet</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>></code> | http_get block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.successThreshold">successThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.exec"></a>

```java
public java.util.List<java.lang.String> getExec();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#exec ContainerGroup#exec}.

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}.

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.httpGet"></a>

```java
public java.lang.Object getHttpGet();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#http_get ContainerGroup#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}.

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}.

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.successThreshold"></a>

```java
public java.lang.Number getSuccessThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}.

---

### ContainerGroupContainerLivenessProbeHttpGet <a name="ContainerGroupContainerLivenessProbeHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerLivenessProbeHttpGet;

ContainerGroupContainerLivenessProbeHttpGet.builder()
//  .httpHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .path(java.lang.String)
//  .port(java.lang.Number)
//  .scheme(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#http_headers ContainerGroup#http_headers}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#path ContainerGroup#path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.scheme">scheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#scheme ContainerGroup#scheme}. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.httpHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHttpHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#http_headers ContainerGroup#http_headers}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#path ContainerGroup#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#port ContainerGroup#port}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#scheme ContainerGroup#scheme}.

---

### ContainerGroupContainerPorts <a name="ContainerGroupContainerPorts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerPorts;

ContainerGroupContainerPorts.builder()
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#protocol ContainerGroup#protocol}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#port ContainerGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#protocol ContainerGroup#protocol}.

---

### ContainerGroupContainerReadinessProbe <a name="ContainerGroupContainerReadinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerReadinessProbe;

ContainerGroupContainerReadinessProbe.builder()
//  .exec(java.util.List<java.lang.String>)
//  .failureThreshold(java.lang.Number)
//  .httpGet(IResolvable)
//  .httpGet(java.util.List<ContainerGroupContainerReadinessProbeHttpGet>)
//  .initialDelaySeconds(java.lang.Number)
//  .periodSeconds(java.lang.Number)
//  .successThreshold(java.lang.Number)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.exec">exec</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#exec ContainerGroup#exec}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.httpGet">httpGet</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>></code> | http_get block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.successThreshold">successThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.exec"></a>

```java
public java.util.List<java.lang.String> getExec();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#exec ContainerGroup#exec}.

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}.

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.httpGet"></a>

```java
public java.lang.Object getHttpGet();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#http_get ContainerGroup#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}.

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}.

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.successThreshold"></a>

```java
public java.lang.Number getSuccessThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}.

---

### ContainerGroupContainerReadinessProbeHttpGet <a name="ContainerGroupContainerReadinessProbeHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerReadinessProbeHttpGet;

ContainerGroupContainerReadinessProbeHttpGet.builder()
//  .httpHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .path(java.lang.String)
//  .port(java.lang.Number)
//  .scheme(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#http_headers ContainerGroup#http_headers}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#path ContainerGroup#path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.scheme">scheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#scheme ContainerGroup#scheme}. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.httpHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHttpHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#http_headers ContainerGroup#http_headers}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#path ContainerGroup#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#port ContainerGroup#port}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#scheme ContainerGroup#scheme}.

---

### ContainerGroupContainerSecurity <a name="ContainerGroupContainerSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerSecurity;

ContainerGroupContainerSecurity.builder()
    .privilegeEnabled(java.lang.Boolean)
    .privilegeEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity.property.privilegeEnabled">privilegeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}. |

---

##### `privilegeEnabled`<sup>Required</sup> <a name="privilegeEnabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity.property.privilegeEnabled"></a>

```java
public java.lang.Object getPrivilegeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}.

---

### ContainerGroupContainerVolume <a name="ContainerGroupContainerVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerVolume;

ContainerGroupContainerVolume.builder()
    .mountPath(java.lang.String)
    .name(java.lang.String)
//  .emptyDir(java.lang.Boolean)
//  .emptyDir(IResolvable)
//  .gitRepo(ContainerGroupContainerVolumeGitRepo)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .secret(java.util.Map<java.lang.String, java.lang.String>)
//  .shareName(java.lang.String)
//  .storageAccountKey(java.lang.String)
//  .storageAccountName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#mount_path ContainerGroup#mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.emptyDir">emptyDir</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.gitRepo">gitRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a></code> | git_repo block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#read_only ContainerGroup#read_only}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.secret">secret</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#secret ContainerGroup#secret}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.shareName">shareName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#share_name ContainerGroup#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#mount_path ContainerGroup#mount_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#name ContainerGroup#name}.

---

##### `emptyDir`<sup>Optional</sup> <a name="emptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.emptyDir"></a>

```java
public java.lang.Object getEmptyDir();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}.

---

##### `gitRepo`<sup>Optional</sup> <a name="gitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.gitRepo"></a>

```java
public ContainerGroupContainerVolumeGitRepo getGitRepo();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

git_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#git_repo ContainerGroup#git_repo}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#read_only ContainerGroup#read_only}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.secret"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecret();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#secret ContainerGroup#secret}.

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#share_name ContainerGroup#share_name}.

---

##### `storageAccountKey`<sup>Optional</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}.

---

##### `storageAccountName`<sup>Optional</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}.

---

### ContainerGroupContainerVolumeGitRepo <a name="ContainerGroupContainerVolumeGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerVolumeGitRepo;

ContainerGroupContainerVolumeGitRepo.builder()
    .url(java.lang.String)
//  .directory(java.lang.String)
//  .revision(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#url ContainerGroup#url}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.directory">directory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#directory ContainerGroup#directory}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.revision">revision</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#revision ContainerGroup#revision}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#url ContainerGroup#url}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#directory ContainerGroup#directory}.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#revision ContainerGroup#revision}.

---

### ContainerGroupDiagnostics <a name="ContainerGroupDiagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupDiagnostics;

ContainerGroupDiagnostics.builder()
    .logAnalytics(ContainerGroupDiagnosticsLogAnalytics)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics.property.logAnalytics">logAnalytics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a></code> | log_analytics block. |

---

##### `logAnalytics`<sup>Required</sup> <a name="logAnalytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics.property.logAnalytics"></a>

```java
public ContainerGroupDiagnosticsLogAnalytics getLogAnalytics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

log_analytics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#log_analytics ContainerGroup#log_analytics}

---

### ContainerGroupDiagnosticsLogAnalytics <a name="ContainerGroupDiagnosticsLogAnalytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupDiagnosticsLogAnalytics;

ContainerGroupDiagnosticsLogAnalytics.builder()
    .workspaceId(java.lang.String)
    .workspaceKey(java.lang.String)
//  .logType(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#workspace_id ContainerGroup#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceKey">workspaceKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#workspace_key ContainerGroup#workspace_key}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.logType">logType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#log_type ContainerGroup#log_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#metadata ContainerGroup#metadata}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#workspace_id ContainerGroup#workspace_id}.

---

##### `workspaceKey`<sup>Required</sup> <a name="workspaceKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceKey"></a>

```java
public java.lang.String getWorkspaceKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#workspace_key ContainerGroup#workspace_key}.

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#log_type ContainerGroup#log_type}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#metadata ContainerGroup#metadata}.

---

### ContainerGroupDnsConfig <a name="ContainerGroupDnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupDnsConfig;

ContainerGroupDnsConfig.builder()
    .nameservers(java.util.List<java.lang.String>)
//  .options(java.util.List<java.lang.String>)
//  .searchDomains(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.nameservers">nameservers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#nameservers ContainerGroup#nameservers}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#options ContainerGroup#options}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.searchDomains">searchDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#search_domains ContainerGroup#search_domains}. |

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.nameservers"></a>

```java
public java.util.List<java.lang.String> getNameservers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#nameservers ContainerGroup#nameservers}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#options ContainerGroup#options}.

---

##### `searchDomains`<sup>Optional</sup> <a name="searchDomains" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.searchDomains"></a>

```java
public java.util.List<java.lang.String> getSearchDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#search_domains ContainerGroup#search_domains}.

---

### ContainerGroupExposedPort <a name="ContainerGroupExposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupExposedPort;

ContainerGroupExposedPort.builder()
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#protocol ContainerGroup#protocol}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#port ContainerGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#protocol ContainerGroup#protocol}.

---

### ContainerGroupIdentity <a name="ContainerGroupIdentity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupIdentity;

ContainerGroupIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#type ContainerGroup#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#identity_ids ContainerGroup#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#type ContainerGroup#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#identity_ids ContainerGroup#identity_ids}.

---

### ContainerGroupImageRegistryCredential <a name="ContainerGroupImageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupImageRegistryCredential;

ContainerGroupImageRegistryCredential.builder()
    .server(java.lang.String)
//  .password(java.lang.String)
//  .userAssignedIdentityId(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.server">server</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#server ContainerGroup#server}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#password ContainerGroup#password}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | The User Assigned Identity to use for Container Registry access. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#username ContainerGroup#username}. |

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#server ContainerGroup#server}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#password ContainerGroup#password}.

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

The User Assigned Identity to use for Container Registry access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#user_assigned_identity_id ContainerGroup#user_assigned_identity_id}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#username ContainerGroup#username}.

---

### ContainerGroupInitContainer <a name="ContainerGroupInitContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupInitContainer;

ContainerGroupInitContainer.builder()
    .image(java.lang.String)
    .name(java.lang.String)
//  .commands(java.util.List<java.lang.String>)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .secureEnvironmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .security(IResolvable)
//  .security(java.util.List<ContainerGroupInitContainerSecurity>)
//  .volume(IResolvable)
//  .volume(java.util.List<ContainerGroupInitContainerVolume>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#image ContainerGroup#image}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.commands">commands</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#commands ContainerGroup#commands}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.secureEnvironmentVariables">secureEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.security">security</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.volume">volume</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>></code> | volume block. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#image ContainerGroup#image}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#name ContainerGroup#name}.

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.commands"></a>

```java
public java.util.List<java.lang.String> getCommands();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#commands ContainerGroup#commands}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}.

---

##### `secureEnvironmentVariables`<sup>Optional</sup> <a name="secureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.secureEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecureEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.security"></a>

```java
public java.lang.Object getSecurity();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#security ContainerGroup#security}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.volume"></a>

```java
public java.lang.Object getVolume();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#volume ContainerGroup#volume}

---

### ContainerGroupInitContainerSecurity <a name="ContainerGroupInitContainerSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupInitContainerSecurity;

ContainerGroupInitContainerSecurity.builder()
    .privilegeEnabled(java.lang.Boolean)
    .privilegeEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity.property.privilegeEnabled">privilegeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}. |

---

##### `privilegeEnabled`<sup>Required</sup> <a name="privilegeEnabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity.property.privilegeEnabled"></a>

```java
public java.lang.Object getPrivilegeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}.

---

### ContainerGroupInitContainerVolume <a name="ContainerGroupInitContainerVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupInitContainerVolume;

ContainerGroupInitContainerVolume.builder()
    .mountPath(java.lang.String)
    .name(java.lang.String)
//  .emptyDir(java.lang.Boolean)
//  .emptyDir(IResolvable)
//  .gitRepo(ContainerGroupInitContainerVolumeGitRepo)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .secret(java.util.Map<java.lang.String, java.lang.String>)
//  .shareName(java.lang.String)
//  .storageAccountKey(java.lang.String)
//  .storageAccountName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#mount_path ContainerGroup#mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.emptyDir">emptyDir</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.gitRepo">gitRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a></code> | git_repo block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#read_only ContainerGroup#read_only}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.secret">secret</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#secret ContainerGroup#secret}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.shareName">shareName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#share_name ContainerGroup#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#mount_path ContainerGroup#mount_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#name ContainerGroup#name}.

---

##### `emptyDir`<sup>Optional</sup> <a name="emptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.emptyDir"></a>

```java
public java.lang.Object getEmptyDir();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}.

---

##### `gitRepo`<sup>Optional</sup> <a name="gitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.gitRepo"></a>

```java
public ContainerGroupInitContainerVolumeGitRepo getGitRepo();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

git_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#git_repo ContainerGroup#git_repo}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#read_only ContainerGroup#read_only}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.secret"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecret();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#secret ContainerGroup#secret}.

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#share_name ContainerGroup#share_name}.

---

##### `storageAccountKey`<sup>Optional</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}.

---

##### `storageAccountName`<sup>Optional</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}.

---

### ContainerGroupInitContainerVolumeGitRepo <a name="ContainerGroupInitContainerVolumeGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupInitContainerVolumeGitRepo;

ContainerGroupInitContainerVolumeGitRepo.builder()
    .url(java.lang.String)
//  .directory(java.lang.String)
//  .revision(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#url ContainerGroup#url}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.directory">directory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#directory ContainerGroup#directory}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.revision">revision</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#revision ContainerGroup#revision}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#url ContainerGroup#url}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#directory ContainerGroup#directory}.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#revision ContainerGroup#revision}.

---

### ContainerGroupTimeouts <a name="ContainerGroupTimeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupTimeouts;

ContainerGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#create ContainerGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#delete ContainerGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#read ContainerGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#update ContainerGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#create ContainerGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#delete ContainerGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#read ContainerGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/container_group#update ContainerGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerGroupContainerGpuLimitOutputReference <a name="ContainerGroupContainerGpuLimitOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerGpuLimitOutputReference;

new ContainerGroupContainerGpuLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resetSku">resetSku</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resetSku"></a>

```java
public void resetSku()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.internalValue"></a>

```java
public ContainerGroupContainerGpuLimit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a>

---


### ContainerGroupContainerGpuOutputReference <a name="ContainerGroupContainerGpuOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerGpuOutputReference;

new ContainerGroupContainerGpuOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resetSku">resetSku</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resetSku"></a>

```java
public void resetSku()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.internalValue"></a>

```java
public ContainerGroupContainerGpu getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a>

---


### ContainerGroupContainerList <a name="ContainerGroupContainerList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerList;

new ContainerGroupContainerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.get"></a>

```java
public ContainerGroupContainerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>>

---


### ContainerGroupContainerLivenessProbeHttpGetList <a name="ContainerGroupContainerLivenessProbeHttpGetList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerLivenessProbeHttpGetList;

new ContainerGroupContainerLivenessProbeHttpGetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.get"></a>

```java
public ContainerGroupContainerLivenessProbeHttpGetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>>

---


### ContainerGroupContainerLivenessProbeHttpGetOutputReference <a name="ContainerGroupContainerLivenessProbeHttpGetOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerLivenessProbeHttpGetOutputReference;

new ContainerGroupContainerLivenessProbeHttpGetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```java
public void resetHttpHeaders()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetScheme"></a>

```java
public void resetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHttpHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHttpHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>

---


### ContainerGroupContainerLivenessProbeOutputReference <a name="ContainerGroupContainerLivenessProbeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerLivenessProbeOutputReference;

new ContainerGroupContainerLivenessProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetExec">resetExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetSuccessThreshold">resetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpGet` <a name="putHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.putHttpGet"></a>

```java
public void putHttpGet(IResolvable OR java.util.List<ContainerGroupContainerLivenessProbeHttpGet> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>>

---

##### `resetExec` <a name="resetExec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetExec"></a>

```java
public void resetExec()
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetFailureThreshold"></a>

```java
public void resetFailureThreshold()
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetHttpGet"></a>

```java
public void resetHttpGet()
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```java
public void resetInitialDelaySeconds()
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetPeriodSeconds"></a>

```java
public void resetPeriodSeconds()
```

##### `resetSuccessThreshold` <a name="resetSuccessThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetSuccessThreshold"></a>

```java
public void resetSuccessThreshold()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList">ContainerGroupContainerLivenessProbeHttpGetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.execInput">execInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThresholdInput">successThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.exec">exec</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThreshold">successThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGet"></a>

```java
public ContainerGroupContainerLivenessProbeHttpGetList getHttpGet();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList">ContainerGroupContainerLivenessProbeHttpGetList</a>

---

##### `execInput`<sup>Optional</sup> <a name="execInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.execInput"></a>

```java
public java.util.List<java.lang.String> getExecInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThresholdInput"></a>

```java
public java.lang.Number getFailureThresholdInput();
```

- *Type:* java.lang.Number

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGetInput"></a>

```java
public java.lang.Object getHttpGetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```java
public java.lang.Number getInitialDelaySecondsInput();
```

- *Type:* java.lang.Number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSecondsInput"></a>

```java
public java.lang.Number getPeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `successThresholdInput`<sup>Optional</sup> <a name="successThresholdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThresholdInput"></a>

```java
public java.lang.Number getSuccessThresholdInput();
```

- *Type:* java.lang.Number

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `exec`<sup>Required</sup> <a name="exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.exec"></a>

```java
public java.util.List<java.lang.String> getExec();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThreshold"></a>

```java
public java.lang.Number getSuccessThreshold();
```

- *Type:* java.lang.Number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.internalValue"></a>

```java
public ContainerGroupContainerLivenessProbe getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

---


### ContainerGroupContainerOutputReference <a name="ContainerGroupContainerOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerOutputReference;

new ContainerGroupContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpu">putGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpuLimit">putGpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe">putLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe">putReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putSecurity">putSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCommands">resetCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCpuLimit">resetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetGpu">resetGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetGpuLimit">resetGpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetLivenessProbe">resetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetMemoryLimit">resetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetReadinessProbe">resetReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecureEnvironmentVariables">resetSecureEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecurity">resetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGpu` <a name="putGpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpu"></a>

```java
public void putGpu(ContainerGroupContainerGpu value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a>

---

##### `putGpuLimit` <a name="putGpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpuLimit"></a>

```java
public void putGpuLimit(ContainerGroupContainerGpuLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpuLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a>

---

##### `putLivenessProbe` <a name="putLivenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe"></a>

```java
public void putLivenessProbe(ContainerGroupContainerLivenessProbe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

---

##### `putPorts` <a name="putPorts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putPorts"></a>

```java
public void putPorts(IResolvable OR java.util.List<ContainerGroupContainerPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putPorts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>>

---

##### `putReadinessProbe` <a name="putReadinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe"></a>

```java
public void putReadinessProbe(ContainerGroupContainerReadinessProbe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

---

##### `putSecurity` <a name="putSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putSecurity"></a>

```java
public void putSecurity(IResolvable OR java.util.List<ContainerGroupContainerSecurity> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putSecurity.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putVolume"></a>

```java
public void putVolume(IResolvable OR java.util.List<ContainerGroupContainerVolume> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putVolume.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>>

---

##### `resetCommands` <a name="resetCommands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCommands"></a>

```java
public void resetCommands()
```

##### `resetCpuLimit` <a name="resetCpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCpuLimit"></a>

```java
public void resetCpuLimit()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetGpu` <a name="resetGpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetGpu"></a>

```java
public void resetGpu()
```

##### `resetGpuLimit` <a name="resetGpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetGpuLimit"></a>

```java
public void resetGpuLimit()
```

##### `resetLivenessProbe` <a name="resetLivenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetLivenessProbe"></a>

```java
public void resetLivenessProbe()
```

##### `resetMemoryLimit` <a name="resetMemoryLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetMemoryLimit"></a>

```java
public void resetMemoryLimit()
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetPorts"></a>

```java
public void resetPorts()
```

##### `resetReadinessProbe` <a name="resetReadinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetReadinessProbe"></a>

```java
public void resetReadinessProbe()
```

##### `resetSecureEnvironmentVariables` <a name="resetSecureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecureEnvironmentVariables"></a>

```java
public void resetSecureEnvironmentVariables()
```

##### `resetSecurity` <a name="resetSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecurity"></a>

```java
public void resetSecurity()
```

##### `resetVolume` <a name="resetVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetVolume"></a>

```java
public void resetVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpu">gpu</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference">ContainerGroupContainerGpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuLimit">gpuLimit</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference">ContainerGroupContainerGpuLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference">ContainerGroupContainerLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList">ContainerGroupContainerPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbe">readinessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference">ContainerGroupContainerReadinessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList">ContainerGroupContainerSecurityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList">ContainerGroupContainerVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commandsInput">commandsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimitInput">cpuLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuInput">gpuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuLimitInput">gpuLimitInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbeInput">livenessProbeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimitInput">memoryLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.portsInput">portsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbeInput">readinessProbeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariablesInput">secureEnvironmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.securityInput">securityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volumeInput">volumeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commands">commands</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimit">cpuLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memory">memory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimit">memoryLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariables">secureEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gpu`<sup>Required</sup> <a name="gpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpu"></a>

```java
public ContainerGroupContainerGpuOutputReference getGpu();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference">ContainerGroupContainerGpuOutputReference</a>

---

##### `gpuLimit`<sup>Required</sup> <a name="gpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuLimit"></a>

```java
public ContainerGroupContainerGpuLimitOutputReference getGpuLimit();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference">ContainerGroupContainerGpuLimitOutputReference</a>

---

##### `livenessProbe`<sup>Required</sup> <a name="livenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbe"></a>

```java
public ContainerGroupContainerLivenessProbeOutputReference getLivenessProbe();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference">ContainerGroupContainerLivenessProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.ports"></a>

```java
public ContainerGroupContainerPortsList getPorts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList">ContainerGroupContainerPortsList</a>

---

##### `readinessProbe`<sup>Required</sup> <a name="readinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbe"></a>

```java
public ContainerGroupContainerReadinessProbeOutputReference getReadinessProbe();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference">ContainerGroupContainerReadinessProbeOutputReference</a>

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.security"></a>

```java
public ContainerGroupContainerSecurityList getSecurity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList">ContainerGroupContainerSecurityList</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volume"></a>

```java
public ContainerGroupContainerVolumeList getVolume();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList">ContainerGroupContainerVolumeList</a>

---

##### `commandsInput`<sup>Optional</sup> <a name="commandsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commandsInput"></a>

```java
public java.util.List<java.lang.String> getCommandsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuInput"></a>

```java
public java.lang.Number getCpuInput();
```

- *Type:* java.lang.Number

---

##### `cpuLimitInput`<sup>Optional</sup> <a name="cpuLimitInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimitInput"></a>

```java
public java.lang.Number getCpuLimitInput();
```

- *Type:* java.lang.Number

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `gpuInput`<sup>Optional</sup> <a name="gpuInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuInput"></a>

```java
public ContainerGroupContainerGpu getGpuInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a>

---

##### `gpuLimitInput`<sup>Optional</sup> <a name="gpuLimitInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuLimitInput"></a>

```java
public ContainerGroupContainerGpuLimit getGpuLimitInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `livenessProbeInput`<sup>Optional</sup> <a name="livenessProbeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbeInput"></a>

```java
public ContainerGroupContainerLivenessProbe getLivenessProbeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryInput"></a>

```java
public java.lang.Number getMemoryInput();
```

- *Type:* java.lang.Number

---

##### `memoryLimitInput`<sup>Optional</sup> <a name="memoryLimitInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimitInput"></a>

```java
public java.lang.Number getMemoryLimitInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.portsInput"></a>

```java
public java.lang.Object getPortsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>>

---

##### `readinessProbeInput`<sup>Optional</sup> <a name="readinessProbeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbeInput"></a>

```java
public ContainerGroupContainerReadinessProbe getReadinessProbeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

---

##### `secureEnvironmentVariablesInput`<sup>Optional</sup> <a name="secureEnvironmentVariablesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecureEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `securityInput`<sup>Optional</sup> <a name="securityInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.securityInput"></a>

```java
public java.lang.Object getSecurityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>>

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volumeInput"></a>

```java
public java.lang.Object getVolumeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>>

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commands"></a>

```java
public java.util.List<java.lang.String> getCommands();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

---

##### `cpuLimit`<sup>Required</sup> <a name="cpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimit"></a>

```java
public java.lang.Number getCpuLimit();
```

- *Type:* java.lang.Number

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

---

##### `memoryLimit`<sup>Required</sup> <a name="memoryLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimit"></a>

```java
public java.lang.Number getMemoryLimit();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secureEnvironmentVariables`<sup>Required</sup> <a name="secureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecureEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>

---


### ContainerGroupContainerPortsList <a name="ContainerGroupContainerPortsList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerPortsList;

new ContainerGroupContainerPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.get"></a>

```java
public ContainerGroupContainerPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>>

---


### ContainerGroupContainerPortsOutputReference <a name="ContainerGroupContainerPortsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerPortsOutputReference;

new ContainerGroupContainerPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>

---


### ContainerGroupContainerReadinessProbeHttpGetList <a name="ContainerGroupContainerReadinessProbeHttpGetList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerReadinessProbeHttpGetList;

new ContainerGroupContainerReadinessProbeHttpGetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.get"></a>

```java
public ContainerGroupContainerReadinessProbeHttpGetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>>

---


### ContainerGroupContainerReadinessProbeHttpGetOutputReference <a name="ContainerGroupContainerReadinessProbeHttpGetOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerReadinessProbeHttpGetOutputReference;

new ContainerGroupContainerReadinessProbeHttpGetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```java
public void resetHttpHeaders()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetScheme"></a>

```java
public void resetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHttpHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHttpHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>

---


### ContainerGroupContainerReadinessProbeOutputReference <a name="ContainerGroupContainerReadinessProbeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerReadinessProbeOutputReference;

new ContainerGroupContainerReadinessProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetExec">resetExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetSuccessThreshold">resetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpGet` <a name="putHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.putHttpGet"></a>

```java
public void putHttpGet(IResolvable OR java.util.List<ContainerGroupContainerReadinessProbeHttpGet> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>>

---

##### `resetExec` <a name="resetExec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetExec"></a>

```java
public void resetExec()
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetFailureThreshold"></a>

```java
public void resetFailureThreshold()
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetHttpGet"></a>

```java
public void resetHttpGet()
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetInitialDelaySeconds"></a>

```java
public void resetInitialDelaySeconds()
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetPeriodSeconds"></a>

```java
public void resetPeriodSeconds()
```

##### `resetSuccessThreshold` <a name="resetSuccessThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetSuccessThreshold"></a>

```java
public void resetSuccessThreshold()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList">ContainerGroupContainerReadinessProbeHttpGetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.execInput">execInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThresholdInput">successThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.exec">exec</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThreshold">successThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGet"></a>

```java
public ContainerGroupContainerReadinessProbeHttpGetList getHttpGet();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList">ContainerGroupContainerReadinessProbeHttpGetList</a>

---

##### `execInput`<sup>Optional</sup> <a name="execInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.execInput"></a>

```java
public java.util.List<java.lang.String> getExecInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThresholdInput"></a>

```java
public java.lang.Number getFailureThresholdInput();
```

- *Type:* java.lang.Number

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGetInput"></a>

```java
public java.lang.Object getHttpGetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySecondsInput"></a>

```java
public java.lang.Number getInitialDelaySecondsInput();
```

- *Type:* java.lang.Number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSecondsInput"></a>

```java
public java.lang.Number getPeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `successThresholdInput`<sup>Optional</sup> <a name="successThresholdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThresholdInput"></a>

```java
public java.lang.Number getSuccessThresholdInput();
```

- *Type:* java.lang.Number

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `exec`<sup>Required</sup> <a name="exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.exec"></a>

```java
public java.util.List<java.lang.String> getExec();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThreshold"></a>

```java
public java.lang.Number getSuccessThreshold();
```

- *Type:* java.lang.Number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.internalValue"></a>

```java
public ContainerGroupContainerReadinessProbe getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

---


### ContainerGroupContainerSecurityList <a name="ContainerGroupContainerSecurityList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerSecurityList;

new ContainerGroupContainerSecurityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.get"></a>

```java
public ContainerGroupContainerSecurityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>>

---


### ContainerGroupContainerSecurityOutputReference <a name="ContainerGroupContainerSecurityOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerSecurityOutputReference;

new ContainerGroupContainerSecurityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabledInput">privilegeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabled">privilegeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privilegeEnabledInput`<sup>Optional</sup> <a name="privilegeEnabledInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabledInput"></a>

```java
public java.lang.Object getPrivilegeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privilegeEnabled`<sup>Required</sup> <a name="privilegeEnabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabled"></a>

```java
public java.lang.Object getPrivilegeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>

---


### ContainerGroupContainerVolumeGitRepoOutputReference <a name="ContainerGroupContainerVolumeGitRepoOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerVolumeGitRepoOutputReference;

new ContainerGroupContainerVolumeGitRepoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetRevision">resetRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetDirectory"></a>

```java
public void resetDirectory()
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetRevision"></a>

```java
public void resetRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.internalValue"></a>

```java
public ContainerGroupContainerVolumeGitRepo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

---


### ContainerGroupContainerVolumeList <a name="ContainerGroupContainerVolumeList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerVolumeList;

new ContainerGroupContainerVolumeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.get"></a>

```java
public ContainerGroupContainerVolumeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>>

---


### ContainerGroupContainerVolumeOutputReference <a name="ContainerGroupContainerVolumeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupContainerVolumeOutputReference;

new ContainerGroupContainerVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.putGitRepo">putGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetEmptyDir">resetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetGitRepo">resetGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetShareName">resetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountKey">resetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountName">resetStorageAccountName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGitRepo` <a name="putGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.putGitRepo"></a>

```java
public void putGitRepo(ContainerGroupContainerVolumeGitRepo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.putGitRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

---

##### `resetEmptyDir` <a name="resetEmptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetEmptyDir"></a>

```java
public void resetEmptyDir()
```

##### `resetGitRepo` <a name="resetGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetGitRepo"></a>

```java
public void resetGitRepo()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetSecret"></a>

```java
public void resetSecret()
```

##### `resetShareName` <a name="resetShareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetShareName"></a>

```java
public void resetShareName()
```

##### `resetStorageAccountKey` <a name="resetStorageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountKey"></a>

```java
public void resetStorageAccountKey()
```

##### `resetStorageAccountName` <a name="resetStorageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountName"></a>

```java
public void resetStorageAccountName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepo">gitRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference">ContainerGroupContainerVolumeGitRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDirInput">emptyDirInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepoInput">gitRepoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secretInput">secretInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDir">emptyDir</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secret">secret</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareName">shareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gitRepo`<sup>Required</sup> <a name="gitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepo"></a>

```java
public ContainerGroupContainerVolumeGitRepoOutputReference getGitRepo();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference">ContainerGroupContainerVolumeGitRepoOutputReference</a>

---

##### `emptyDirInput`<sup>Optional</sup> <a name="emptyDirInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDirInput"></a>

```java
public java.lang.Object getEmptyDirInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gitRepoInput`<sup>Optional</sup> <a name="gitRepoInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepoInput"></a>

```java
public ContainerGroupContainerVolumeGitRepo getGitRepoInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secretInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecretInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareNameInput"></a>

```java
public java.lang.String getShareNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKeyInput"></a>

```java
public java.lang.String getStorageAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountNameInput"></a>

```java
public java.lang.String getStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `emptyDir`<sup>Required</sup> <a name="emptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDir"></a>

```java
public java.lang.Object getEmptyDir();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secret"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecret();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>

---


### ContainerGroupDiagnosticsLogAnalyticsOutputReference <a name="ContainerGroupDiagnosticsLogAnalyticsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupDiagnosticsLogAnalyticsOutputReference;

new ContainerGroupDiagnosticsLogAnalyticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetLogType">resetLogType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogType` <a name="resetLogType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetLogType"></a>

```java
public void resetLogType()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKeyInput">workspaceKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logType">logType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKey">workspaceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logTypeInput"></a>

```java
public java.lang.String getLogTypeInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceKeyInput`<sup>Optional</sup> <a name="workspaceKeyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKeyInput"></a>

```java
public java.lang.String getWorkspaceKeyInput();
```

- *Type:* java.lang.String

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `workspaceKey`<sup>Required</sup> <a name="workspaceKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKey"></a>

```java
public java.lang.String getWorkspaceKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.internalValue"></a>

```java
public ContainerGroupDiagnosticsLogAnalytics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

---


### ContainerGroupDiagnosticsOutputReference <a name="ContainerGroupDiagnosticsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupDiagnosticsOutputReference;

new ContainerGroupDiagnosticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics">putLogAnalytics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogAnalytics` <a name="putLogAnalytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics"></a>

```java
public void putLogAnalytics(ContainerGroupDiagnosticsLogAnalytics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalytics">logAnalytics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference">ContainerGroupDiagnosticsLogAnalyticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalyticsInput">logAnalyticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logAnalytics`<sup>Required</sup> <a name="logAnalytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalytics"></a>

```java
public ContainerGroupDiagnosticsLogAnalyticsOutputReference getLogAnalytics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference">ContainerGroupDiagnosticsLogAnalyticsOutputReference</a>

---

##### `logAnalyticsInput`<sup>Optional</sup> <a name="logAnalyticsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalyticsInput"></a>

```java
public ContainerGroupDiagnosticsLogAnalytics getLogAnalyticsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.internalValue"></a>

```java
public ContainerGroupDiagnostics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

---


### ContainerGroupDnsConfigOutputReference <a name="ContainerGroupDnsConfigOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupDnsConfigOutputReference;

new ContainerGroupDnsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetSearchDomains">resetSearchDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetSearchDomains` <a name="resetSearchDomains" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetSearchDomains"></a>

```java
public void resetSearchDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameserversInput">nameserversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.optionsInput">optionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomainsInput">searchDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameservers">nameservers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomains">searchDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameserversInput`<sup>Optional</sup> <a name="nameserversInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameserversInput"></a>

```java
public java.util.List<java.lang.String> getNameserversInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.optionsInput"></a>

```java
public java.util.List<java.lang.String> getOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchDomainsInput`<sup>Optional</sup> <a name="searchDomainsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomainsInput"></a>

```java
public java.util.List<java.lang.String> getSearchDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameservers"></a>

```java
public java.util.List<java.lang.String> getNameservers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchDomains`<sup>Required</sup> <a name="searchDomains" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomains"></a>

```java
public java.util.List<java.lang.String> getSearchDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.internalValue"></a>

```java
public ContainerGroupDnsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

---


### ContainerGroupExposedPortList <a name="ContainerGroupExposedPortList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupExposedPortList;

new ContainerGroupExposedPortList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.get"></a>

```java
public ContainerGroupExposedPortOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>>

---


### ContainerGroupExposedPortOutputReference <a name="ContainerGroupExposedPortOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupExposedPortOutputReference;

new ContainerGroupExposedPortOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>

---


### ContainerGroupIdentityOutputReference <a name="ContainerGroupIdentityOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupIdentityOutputReference;

new ContainerGroupIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.internalValue"></a>

```java
public ContainerGroupIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

---


### ContainerGroupImageRegistryCredentialList <a name="ContainerGroupImageRegistryCredentialList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupImageRegistryCredentialList;

new ContainerGroupImageRegistryCredentialList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.get"></a>

```java
public ContainerGroupImageRegistryCredentialOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>>

---


### ContainerGroupImageRegistryCredentialOutputReference <a name="ContainerGroupImageRegistryCredentialOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupImageRegistryCredentialOutputReference;

new ContainerGroupImageRegistryCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUserAssignedIdentityId"></a>

```java
public void resetUserAssignedIdentityId()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityIdInput"></a>

```java
public java.lang.String getUserAssignedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>

---


### ContainerGroupInitContainerList <a name="ContainerGroupInitContainerList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupInitContainerList;

new ContainerGroupInitContainerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.get"></a>

```java
public ContainerGroupInitContainerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>>

---


### ContainerGroupInitContainerOutputReference <a name="ContainerGroupInitContainerOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupInitContainerOutputReference;

new ContainerGroupInitContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putSecurity">putSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetCommands">resetCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecureEnvironmentVariables">resetSecureEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecurity">resetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecurity` <a name="putSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putSecurity"></a>

```java
public void putSecurity(IResolvable OR java.util.List<ContainerGroupInitContainerSecurity> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putSecurity.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putVolume"></a>

```java
public void putVolume(IResolvable OR java.util.List<ContainerGroupInitContainerVolume> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putVolume.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>>

---

##### `resetCommands` <a name="resetCommands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetCommands"></a>

```java
public void resetCommands()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetSecureEnvironmentVariables` <a name="resetSecureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecureEnvironmentVariables"></a>

```java
public void resetSecureEnvironmentVariables()
```

##### `resetSecurity` <a name="resetSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecurity"></a>

```java
public void resetSecurity()
```

##### `resetVolume` <a name="resetVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetVolume"></a>

```java
public void resetVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList">ContainerGroupInitContainerSecurityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList">ContainerGroupInitContainerVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commandsInput">commandsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariablesInput">secureEnvironmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.securityInput">securityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volumeInput">volumeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commands">commands</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariables">secureEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.security"></a>

```java
public ContainerGroupInitContainerSecurityList getSecurity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList">ContainerGroupInitContainerSecurityList</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volume"></a>

```java
public ContainerGroupInitContainerVolumeList getVolume();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList">ContainerGroupInitContainerVolumeList</a>

---

##### `commandsInput`<sup>Optional</sup> <a name="commandsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commandsInput"></a>

```java
public java.util.List<java.lang.String> getCommandsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secureEnvironmentVariablesInput`<sup>Optional</sup> <a name="secureEnvironmentVariablesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecureEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `securityInput`<sup>Optional</sup> <a name="securityInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.securityInput"></a>

```java
public java.lang.Object getSecurityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>>

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volumeInput"></a>

```java
public java.lang.Object getVolumeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>>

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commands"></a>

```java
public java.util.List<java.lang.String> getCommands();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secureEnvironmentVariables`<sup>Required</sup> <a name="secureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecureEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>

---


### ContainerGroupInitContainerSecurityList <a name="ContainerGroupInitContainerSecurityList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupInitContainerSecurityList;

new ContainerGroupInitContainerSecurityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.get"></a>

```java
public ContainerGroupInitContainerSecurityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>>

---


### ContainerGroupInitContainerSecurityOutputReference <a name="ContainerGroupInitContainerSecurityOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupInitContainerSecurityOutputReference;

new ContainerGroupInitContainerSecurityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabledInput">privilegeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabled">privilegeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privilegeEnabledInput`<sup>Optional</sup> <a name="privilegeEnabledInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabledInput"></a>

```java
public java.lang.Object getPrivilegeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privilegeEnabled`<sup>Required</sup> <a name="privilegeEnabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabled"></a>

```java
public java.lang.Object getPrivilegeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>

---


### ContainerGroupInitContainerVolumeGitRepoOutputReference <a name="ContainerGroupInitContainerVolumeGitRepoOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupInitContainerVolumeGitRepoOutputReference;

new ContainerGroupInitContainerVolumeGitRepoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetRevision">resetRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetDirectory"></a>

```java
public void resetDirectory()
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetRevision"></a>

```java
public void resetRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.internalValue"></a>

```java
public ContainerGroupInitContainerVolumeGitRepo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

---


### ContainerGroupInitContainerVolumeList <a name="ContainerGroupInitContainerVolumeList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupInitContainerVolumeList;

new ContainerGroupInitContainerVolumeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.get"></a>

```java
public ContainerGroupInitContainerVolumeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>>

---


### ContainerGroupInitContainerVolumeOutputReference <a name="ContainerGroupInitContainerVolumeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupInitContainerVolumeOutputReference;

new ContainerGroupInitContainerVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.putGitRepo">putGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetEmptyDir">resetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetGitRepo">resetGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetShareName">resetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountKey">resetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountName">resetStorageAccountName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGitRepo` <a name="putGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.putGitRepo"></a>

```java
public void putGitRepo(ContainerGroupInitContainerVolumeGitRepo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.putGitRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

---

##### `resetEmptyDir` <a name="resetEmptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetEmptyDir"></a>

```java
public void resetEmptyDir()
```

##### `resetGitRepo` <a name="resetGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetGitRepo"></a>

```java
public void resetGitRepo()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetSecret"></a>

```java
public void resetSecret()
```

##### `resetShareName` <a name="resetShareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetShareName"></a>

```java
public void resetShareName()
```

##### `resetStorageAccountKey` <a name="resetStorageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountKey"></a>

```java
public void resetStorageAccountKey()
```

##### `resetStorageAccountName` <a name="resetStorageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountName"></a>

```java
public void resetStorageAccountName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepo">gitRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference">ContainerGroupInitContainerVolumeGitRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDirInput">emptyDirInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepoInput">gitRepoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secretInput">secretInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDir">emptyDir</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secret">secret</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareName">shareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gitRepo`<sup>Required</sup> <a name="gitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepo"></a>

```java
public ContainerGroupInitContainerVolumeGitRepoOutputReference getGitRepo();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference">ContainerGroupInitContainerVolumeGitRepoOutputReference</a>

---

##### `emptyDirInput`<sup>Optional</sup> <a name="emptyDirInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDirInput"></a>

```java
public java.lang.Object getEmptyDirInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gitRepoInput`<sup>Optional</sup> <a name="gitRepoInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepoInput"></a>

```java
public ContainerGroupInitContainerVolumeGitRepo getGitRepoInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secretInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecretInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareNameInput"></a>

```java
public java.lang.String getShareNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKeyInput"></a>

```java
public java.lang.String getStorageAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountNameInput"></a>

```java
public java.lang.String getStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `emptyDir`<sup>Required</sup> <a name="emptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDir"></a>

```java
public java.lang.Object getEmptyDir();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secret"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecret();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>

---


### ContainerGroupTimeoutsOutputReference <a name="ContainerGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_group.ContainerGroupTimeoutsOutputReference;

new ContainerGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

---



