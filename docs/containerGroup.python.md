# `containerGroup` Submodule <a name="`containerGroup` Submodule" id="@cdktf/provider-azurerm.containerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerGroup <a name="ContainerGroup" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group azurerm_container_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container: typing.Union[IResolvable, typing.List[ContainerGroupContainer]],
  location: str,
  name: str,
  os_type: str,
  resource_group_name: str,
  diagnostics: ContainerGroupDiagnostics = None,
  dns_config: ContainerGroupDnsConfig = None,
  dns_name_label: str = None,
  dns_name_label_reuse_policy: str = None,
  exposed_port: typing.Union[IResolvable, typing.List[ContainerGroupExposedPort]] = None,
  id: str = None,
  identity: ContainerGroupIdentity = None,
  image_registry_credential: typing.Union[IResolvable, typing.List[ContainerGroupImageRegistryCredential]] = None,
  init_container: typing.Union[IResolvable, typing.List[ContainerGroupInitContainer]] = None,
  ip_address_type: str = None,
  key_vault_key_id: str = None,
  key_vault_user_assigned_identity_id: str = None,
  network_profile_id: str = None,
  priority: str = None,
  restart_policy: str = None,
  sku: str = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  timeouts: ContainerGroupTimeouts = None,
  zones: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.container">container</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>]]</code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#location ContainerGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#os_type ContainerGroup#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#resource_group_name ContainerGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.diagnostics">diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a></code> | diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dnsConfig">dns_config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dnsNameLabel">dns_name_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#dns_name_label ContainerGroup#dns_name_label}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dnsNameLabelReusePolicy">dns_name_label_reuse_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#dns_name_label_reuse_policy ContainerGroup#dns_name_label_reuse_policy}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.exposedPort">exposed_port</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#exposed_port ContainerGroup#exposed_port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#id ContainerGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.imageRegistryCredential">image_registry_credential</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>]]</code> | image_registry_credential block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.initContainer">init_container</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>]]</code> | init_container block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#ip_address_type ContainerGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#key_vault_key_id ContainerGroup#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.keyVaultUserAssignedIdentityId">key_vault_user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#key_vault_user_assigned_identity_id ContainerGroup#key_vault_user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.networkProfileId">network_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#network_profile_id ContainerGroup#network_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.priority">priority</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#priority ContainerGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.restartPolicy">restart_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#restart_policy ContainerGroup#restart_policy}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#sku ContainerGroup#sku}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#subnet_ids ContainerGroup#subnet_ids}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#tags ContainerGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#zones ContainerGroup#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.container"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>]]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#container ContainerGroup#container}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#location ContainerGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.osType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#os_type ContainerGroup#os_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#resource_group_name ContainerGroup#resource_group_name}.

---

##### `diagnostics`<sup>Optional</sup> <a name="diagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.diagnostics"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#diagnostics ContainerGroup#diagnostics}

---

##### `dns_config`<sup>Optional</sup> <a name="dns_config" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dnsConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#dns_config ContainerGroup#dns_config}

---

##### `dns_name_label`<sup>Optional</sup> <a name="dns_name_label" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dnsNameLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#dns_name_label ContainerGroup#dns_name_label}.

---

##### `dns_name_label_reuse_policy`<sup>Optional</sup> <a name="dns_name_label_reuse_policy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.dnsNameLabelReusePolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#dns_name_label_reuse_policy ContainerGroup#dns_name_label_reuse_policy}.

---

##### `exposed_port`<sup>Optional</sup> <a name="exposed_port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.exposedPort"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#exposed_port ContainerGroup#exposed_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#id ContainerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#identity ContainerGroup#identity}

---

##### `image_registry_credential`<sup>Optional</sup> <a name="image_registry_credential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.imageRegistryCredential"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>]]

image_registry_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#image_registry_credential ContainerGroup#image_registry_credential}

---

##### `init_container`<sup>Optional</sup> <a name="init_container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.initContainer"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>]]

init_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#init_container ContainerGroup#init_container}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#ip_address_type ContainerGroup#ip_address_type}.

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.keyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#key_vault_key_id ContainerGroup#key_vault_key_id}.

---

##### `key_vault_user_assigned_identity_id`<sup>Optional</sup> <a name="key_vault_user_assigned_identity_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.keyVaultUserAssignedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#key_vault_user_assigned_identity_id ContainerGroup#key_vault_user_assigned_identity_id}.

---

##### `network_profile_id`<sup>Optional</sup> <a name="network_profile_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.networkProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#network_profile_id ContainerGroup#network_profile_id}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.priority"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#priority ContainerGroup#priority}.

---

##### `restart_policy`<sup>Optional</sup> <a name="restart_policy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.restartPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#restart_policy ContainerGroup#restart_policy}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#sku ContainerGroup#sku}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#subnet_ids ContainerGroup#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#tags ContainerGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#timeouts ContainerGroup#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.zones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#zones ContainerGroup#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putContainer">put_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDiagnostics">put_diagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDnsConfig">put_dns_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putExposedPort">put_exposed_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putImageRegistryCredential">put_image_registry_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putInitContainer">put_init_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDiagnostics">reset_diagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsConfig">reset_dns_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabel">reset_dns_name_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabelReusePolicy">reset_dns_name_label_reuse_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetExposedPort">reset_exposed_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetImageRegistryCredential">reset_image_registry_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetInitContainer">reset_init_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultKeyId">reset_key_vault_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultUserAssignedIdentityId">reset_key_vault_user_assigned_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetNetworkProfileId">reset_network_profile_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetRestartPolicy">reset_restart_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSku">reset_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetZones">reset_zones</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_container` <a name="put_container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putContainer"></a>

```python
def put_container(
  value: typing.Union[IResolvable, typing.List[ContainerGroupContainer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putContainer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>]]

---

##### `put_diagnostics` <a name="put_diagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDiagnostics"></a>

```python
def put_diagnostics(
  log_analytics: ContainerGroupDiagnosticsLogAnalytics
) -> None
```

###### `log_analytics`<sup>Required</sup> <a name="log_analytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDiagnostics.parameter.logAnalytics"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

log_analytics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#log_analytics ContainerGroup#log_analytics}

---

##### `put_dns_config` <a name="put_dns_config" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDnsConfig"></a>

```python
def put_dns_config(
  nameservers: typing.List[str],
  options: typing.List[str] = None,
  search_domains: typing.List[str] = None
) -> None
```

###### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDnsConfig.parameter.nameservers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#nameservers ContainerGroup#nameservers}.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDnsConfig.parameter.options"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#options ContainerGroup#options}.

---

###### `search_domains`<sup>Optional</sup> <a name="search_domains" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDnsConfig.parameter.searchDomains"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#search_domains ContainerGroup#search_domains}.

---

##### `put_exposed_port` <a name="put_exposed_port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putExposedPort"></a>

```python
def put_exposed_port(
  value: typing.Union[IResolvable, typing.List[ContainerGroupExposedPort]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putExposedPort.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#type ContainerGroup#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#identity_ids ContainerGroup#identity_ids}.

---

##### `put_image_registry_credential` <a name="put_image_registry_credential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putImageRegistryCredential"></a>

```python
def put_image_registry_credential(
  value: typing.Union[IResolvable, typing.List[ContainerGroupImageRegistryCredential]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putImageRegistryCredential.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>]]

---

##### `put_init_container` <a name="put_init_container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putInitContainer"></a>

```python
def put_init_container(
  value: typing.Union[IResolvable, typing.List[ContainerGroupInitContainer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putInitContainer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#create ContainerGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#delete ContainerGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#read ContainerGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#update ContainerGroup#update}.

---

##### `reset_diagnostics` <a name="reset_diagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDiagnostics"></a>

```python
def reset_diagnostics() -> None
```

##### `reset_dns_config` <a name="reset_dns_config" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsConfig"></a>

```python
def reset_dns_config() -> None
```

##### `reset_dns_name_label` <a name="reset_dns_name_label" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabel"></a>

```python
def reset_dns_name_label() -> None
```

##### `reset_dns_name_label_reuse_policy` <a name="reset_dns_name_label_reuse_policy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabelReusePolicy"></a>

```python
def reset_dns_name_label_reuse_policy() -> None
```

##### `reset_exposed_port` <a name="reset_exposed_port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetExposedPort"></a>

```python
def reset_exposed_port() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_image_registry_credential` <a name="reset_image_registry_credential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetImageRegistryCredential"></a>

```python
def reset_image_registry_credential() -> None
```

##### `reset_init_container` <a name="reset_init_container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetInitContainer"></a>

```python
def reset_init_container() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_key_vault_key_id` <a name="reset_key_vault_key_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultKeyId"></a>

```python
def reset_key_vault_key_id() -> None
```

##### `reset_key_vault_user_assigned_identity_id` <a name="reset_key_vault_user_assigned_identity_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultUserAssignedIdentityId"></a>

```python
def reset_key_vault_user_assigned_identity_id() -> None
```

##### `reset_network_profile_id` <a name="reset_network_profile_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetNetworkProfileId"></a>

```python
def reset_network_profile_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_restart_policy` <a name="reset_restart_policy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetRestartPolicy"></a>

```python
def reset_restart_policy() -> None
```

##### `reset_sku` <a name="reset_sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSku"></a>

```python
def reset_sku() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetZones"></a>

```python
def reset_zones() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroup.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList">ContainerGroupContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnostics">diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference">ContainerGroupDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfig">dns_config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference">ContainerGroupDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPort">exposed_port</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList">ContainerGroupExposedPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference">ContainerGroupIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredential">image_registry_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList">ContainerGroupImageRegistryCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainer">init_container</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList">ContainerGroupInitContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference">ContainerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.containerInput">container_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnosticsInput">diagnostics_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfigInput">dns_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelInput">dns_name_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicyInput">dns_name_label_reuse_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPortInput">exposed_port_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredentialInput">image_registry_credential_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainerInput">init_container_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityIdInput">key_vault_user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileIdInput">network_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.priorityInput">priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicyInput">restart_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabel">dns_name_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicy">dns_name_label_reuse_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityId">key_vault_user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileId">network_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.priority">priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicy">restart_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.container"></a>

```python
container: ContainerGroupContainerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList">ContainerGroupContainerList</a>

---

##### `diagnostics`<sup>Required</sup> <a name="diagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnostics"></a>

```python
diagnostics: ContainerGroupDiagnosticsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference">ContainerGroupDiagnosticsOutputReference</a>

---

##### `dns_config`<sup>Required</sup> <a name="dns_config" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfig"></a>

```python
dns_config: ContainerGroupDnsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference">ContainerGroupDnsConfigOutputReference</a>

---

##### `exposed_port`<sup>Required</sup> <a name="exposed_port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPort"></a>

```python
exposed_port: ContainerGroupExposedPortList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList">ContainerGroupExposedPortList</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identity"></a>

```python
identity: ContainerGroupIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference">ContainerGroupIdentityOutputReference</a>

---

##### `image_registry_credential`<sup>Required</sup> <a name="image_registry_credential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredential"></a>

```python
image_registry_credential: ContainerGroupImageRegistryCredentialList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList">ContainerGroupImageRegistryCredentialList</a>

---

##### `init_container`<sup>Required</sup> <a name="init_container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainer"></a>

```python
init_container: ContainerGroupInitContainerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList">ContainerGroupInitContainerList</a>

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeouts"></a>

```python
timeouts: ContainerGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference">ContainerGroupTimeoutsOutputReference</a>

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.containerInput"></a>

```python
container_input: typing.Union[IResolvable, typing.List[ContainerGroupContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>]]

---

##### `diagnostics_input`<sup>Optional</sup> <a name="diagnostics_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnosticsInput"></a>

```python
diagnostics_input: ContainerGroupDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

---

##### `dns_config_input`<sup>Optional</sup> <a name="dns_config_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfigInput"></a>

```python
dns_config_input: ContainerGroupDnsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

---

##### `dns_name_label_input`<sup>Optional</sup> <a name="dns_name_label_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelInput"></a>

```python
dns_name_label_input: str
```

- *Type:* str

---

##### `dns_name_label_reuse_policy_input`<sup>Optional</sup> <a name="dns_name_label_reuse_policy_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicyInput"></a>

```python
dns_name_label_reuse_policy_input: str
```

- *Type:* str

---

##### `exposed_port_input`<sup>Optional</sup> <a name="exposed_port_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPortInput"></a>

```python
exposed_port_input: typing.Union[IResolvable, typing.List[ContainerGroupExposedPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>]]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identityInput"></a>

```python
identity_input: ContainerGroupIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_registry_credential_input`<sup>Optional</sup> <a name="image_registry_credential_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredentialInput"></a>

```python
image_registry_credential_input: typing.Union[IResolvable, typing.List[ContainerGroupImageRegistryCredential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>]]

---

##### `init_container_input`<sup>Optional</sup> <a name="init_container_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainerInput"></a>

```python
init_container_input: typing.Union[IResolvable, typing.List[ContainerGroupInitContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>]]

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `key_vault_user_assigned_identity_id_input`<sup>Optional</sup> <a name="key_vault_user_assigned_identity_id_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityIdInput"></a>

```python
key_vault_user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_profile_id_input`<sup>Optional</sup> <a name="network_profile_id_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileIdInput"></a>

```python
network_profile_id_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.priorityInput"></a>

```python
priority_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `restart_policy_input`<sup>Optional</sup> <a name="restart_policy_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicyInput"></a>

```python
restart_policy_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>]

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_name_label`<sup>Required</sup> <a name="dns_name_label" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabel"></a>

```python
dns_name_label: str
```

- *Type:* str

---

##### `dns_name_label_reuse_policy`<sup>Required</sup> <a name="dns_name_label_reuse_policy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicy"></a>

```python
dns_name_label_reuse_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `key_vault_user_assigned_identity_id`<sup>Required</sup> <a name="key_vault_user_assigned_identity_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityId"></a>

```python
key_vault_user_assigned_identity_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_profile_id`<sup>Required</sup> <a name="network_profile_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileId"></a>

```python
network_profile_id: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.priority"></a>

```python
priority: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `restart_policy`<sup>Required</sup> <a name="restart_policy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicy"></a>

```python
restart_policy: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerGroupConfig <a name="ContainerGroupConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container: typing.Union[IResolvable, typing.List[ContainerGroupContainer]],
  location: str,
  name: str,
  os_type: str,
  resource_group_name: str,
  diagnostics: ContainerGroupDiagnostics = None,
  dns_config: ContainerGroupDnsConfig = None,
  dns_name_label: str = None,
  dns_name_label_reuse_policy: str = None,
  exposed_port: typing.Union[IResolvable, typing.List[ContainerGroupExposedPort]] = None,
  id: str = None,
  identity: ContainerGroupIdentity = None,
  image_registry_credential: typing.Union[IResolvable, typing.List[ContainerGroupImageRegistryCredential]] = None,
  init_container: typing.Union[IResolvable, typing.List[ContainerGroupInitContainer]] = None,
  ip_address_type: str = None,
  key_vault_key_id: str = None,
  key_vault_user_assigned_identity_id: str = None,
  network_profile_id: str = None,
  priority: str = None,
  restart_policy: str = None,
  sku: str = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  timeouts: ContainerGroupTimeouts = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.container">container</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>]]</code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#location ContainerGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#os_type ContainerGroup#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#resource_group_name ContainerGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.diagnostics">diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a></code> | diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsConfig">dns_config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabel">dns_name_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#dns_name_label ContainerGroup#dns_name_label}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabelReusePolicy">dns_name_label_reuse_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#dns_name_label_reuse_policy ContainerGroup#dns_name_label_reuse_policy}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.exposedPort">exposed_port</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#exposed_port ContainerGroup#exposed_port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#id ContainerGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.imageRegistryCredential">image_registry_credential</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>]]</code> | image_registry_credential block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.initContainer">init_container</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>]]</code> | init_container block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#ip_address_type ContainerGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#key_vault_key_id ContainerGroup#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultUserAssignedIdentityId">key_vault_user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#key_vault_user_assigned_identity_id ContainerGroup#key_vault_user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.networkProfileId">network_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#network_profile_id ContainerGroup#network_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.priority">priority</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#priority ContainerGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.restartPolicy">restart_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#restart_policy ContainerGroup#restart_policy}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#sku ContainerGroup#sku}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#subnet_ids ContainerGroup#subnet_ids}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#tags ContainerGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#zones ContainerGroup#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.container"></a>

```python
container: typing.Union[IResolvable, typing.List[ContainerGroupContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>]]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#container ContainerGroup#container}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#location ContainerGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.osType"></a>

```python
os_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#os_type ContainerGroup#os_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#resource_group_name ContainerGroup#resource_group_name}.

---

##### `diagnostics`<sup>Optional</sup> <a name="diagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.diagnostics"></a>

```python
diagnostics: ContainerGroupDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#diagnostics ContainerGroup#diagnostics}

---

##### `dns_config`<sup>Optional</sup> <a name="dns_config" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsConfig"></a>

```python
dns_config: ContainerGroupDnsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#dns_config ContainerGroup#dns_config}

---

##### `dns_name_label`<sup>Optional</sup> <a name="dns_name_label" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabel"></a>

```python
dns_name_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#dns_name_label ContainerGroup#dns_name_label}.

---

##### `dns_name_label_reuse_policy`<sup>Optional</sup> <a name="dns_name_label_reuse_policy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabelReusePolicy"></a>

```python
dns_name_label_reuse_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#dns_name_label_reuse_policy ContainerGroup#dns_name_label_reuse_policy}.

---

##### `exposed_port`<sup>Optional</sup> <a name="exposed_port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.exposedPort"></a>

```python
exposed_port: typing.Union[IResolvable, typing.List[ContainerGroupExposedPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#exposed_port ContainerGroup#exposed_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#id ContainerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.identity"></a>

```python
identity: ContainerGroupIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#identity ContainerGroup#identity}

---

##### `image_registry_credential`<sup>Optional</sup> <a name="image_registry_credential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.imageRegistryCredential"></a>

```python
image_registry_credential: typing.Union[IResolvable, typing.List[ContainerGroupImageRegistryCredential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>]]

image_registry_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#image_registry_credential ContainerGroup#image_registry_credential}

---

##### `init_container`<sup>Optional</sup> <a name="init_container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.initContainer"></a>

```python
init_container: typing.Union[IResolvable, typing.List[ContainerGroupInitContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>]]

init_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#init_container ContainerGroup#init_container}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#ip_address_type ContainerGroup#ip_address_type}.

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#key_vault_key_id ContainerGroup#key_vault_key_id}.

---

##### `key_vault_user_assigned_identity_id`<sup>Optional</sup> <a name="key_vault_user_assigned_identity_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultUserAssignedIdentityId"></a>

```python
key_vault_user_assigned_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#key_vault_user_assigned_identity_id ContainerGroup#key_vault_user_assigned_identity_id}.

---

##### `network_profile_id`<sup>Optional</sup> <a name="network_profile_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.networkProfileId"></a>

```python
network_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#network_profile_id ContainerGroup#network_profile_id}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.priority"></a>

```python
priority: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#priority ContainerGroup#priority}.

---

##### `restart_policy`<sup>Optional</sup> <a name="restart_policy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.restartPolicy"></a>

```python
restart_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#restart_policy ContainerGroup#restart_policy}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#sku ContainerGroup#sku}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#subnet_ids ContainerGroup#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#tags ContainerGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.timeouts"></a>

```python
timeouts: ContainerGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#timeouts ContainerGroup#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#zones ContainerGroup#zones}.

---

### ContainerGroupContainer <a name="ContainerGroupContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainer(
  cpu: typing.Union[int, float],
  image: str,
  memory: typing.Union[int, float],
  name: str,
  commands: typing.List[str] = None,
  cpu_limit: typing.Union[int, float] = None,
  environment_variables: typing.Mapping[str] = None,
  gpu: ContainerGroupContainerGpu = None,
  gpu_limit: ContainerGroupContainerGpuLimit = None,
  liveness_probe: ContainerGroupContainerLivenessProbe = None,
  memory_limit: typing.Union[int, float] = None,
  ports: typing.Union[IResolvable, typing.List[ContainerGroupContainerPorts]] = None,
  readiness_probe: ContainerGroupContainerReadinessProbe = None,
  secure_environment_variables: typing.Mapping[str] = None,
  security: typing.Union[IResolvable, typing.List[ContainerGroupContainerSecurity]] = None,
  volume: typing.Union[IResolvable, typing.List[ContainerGroupContainerVolume]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#cpu ContainerGroup#cpu}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#image ContainerGroup#image}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#memory ContainerGroup#memory}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.commands">commands</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#commands ContainerGroup#commands}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpuLimit">cpu_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#cpu_limit ContainerGroup#cpu_limit}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.gpu">gpu</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a></code> | gpu block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.gpuLimit">gpu_limit</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a></code> | gpu_limit block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.livenessProbe">liveness_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memoryLimit">memory_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#memory_limit ContainerGroup#memory_limit}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.ports">ports</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>]]</code> | ports block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.readinessProbe">readiness_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a></code> | readiness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.secureEnvironmentVariables">secure_environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.security">security</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>]]</code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.volume">volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>]]</code> | volume block. |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#cpu ContainerGroup#cpu}.

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#image ContainerGroup#image}.

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#memory ContainerGroup#memory}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#commands ContainerGroup#commands}.

---

##### `cpu_limit`<sup>Optional</sup> <a name="cpu_limit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpuLimit"></a>

```python
cpu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#cpu_limit ContainerGroup#cpu_limit}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.gpu"></a>

```python
gpu: ContainerGroupContainerGpu
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a>

gpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#gpu ContainerGroup#gpu}

---

##### `gpu_limit`<sup>Optional</sup> <a name="gpu_limit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.gpuLimit"></a>

```python
gpu_limit: ContainerGroupContainerGpuLimit
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a>

gpu_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#gpu_limit ContainerGroup#gpu_limit}

---

##### `liveness_probe`<sup>Optional</sup> <a name="liveness_probe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.livenessProbe"></a>

```python
liveness_probe: ContainerGroupContainerLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#liveness_probe ContainerGroup#liveness_probe}

---

##### `memory_limit`<sup>Optional</sup> <a name="memory_limit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memoryLimit"></a>

```python
memory_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#memory_limit ContainerGroup#memory_limit}.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.ports"></a>

```python
ports: typing.Union[IResolvable, typing.List[ContainerGroupContainerPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>]]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#ports ContainerGroup#ports}

---

##### `readiness_probe`<sup>Optional</sup> <a name="readiness_probe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.readinessProbe"></a>

```python
readiness_probe: ContainerGroupContainerReadinessProbe
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

readiness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#readiness_probe ContainerGroup#readiness_probe}

---

##### `secure_environment_variables`<sup>Optional</sup> <a name="secure_environment_variables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.secureEnvironmentVariables"></a>

```python
secure_environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.security"></a>

```python
security: typing.Union[IResolvable, typing.List[ContainerGroupContainerSecurity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>]]

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#security ContainerGroup#security}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.volume"></a>

```python
volume: typing.Union[IResolvable, typing.List[ContainerGroupContainerVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>]]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#volume ContainerGroup#volume}

---

### ContainerGroupContainerGpu <a name="ContainerGroupContainerGpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerGpu(
  count: typing.Union[int, float] = None,
  sku: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#count ContainerGroup#count}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#sku ContainerGroup#sku}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#count ContainerGroup#count}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#sku ContainerGroup#sku}.

---

### ContainerGroupContainerGpuLimit <a name="ContainerGroupContainerGpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerGpuLimit(
  count: typing.Union[int, float] = None,
  sku: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#count ContainerGroup#count}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#sku ContainerGroup#sku}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#count ContainerGroup#count}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#sku ContainerGroup#sku}.

---

### ContainerGroupContainerLivenessProbe <a name="ContainerGroupContainerLivenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerLivenessProbe(
  exec: typing.List[str] = None,
  failure_threshold: typing.Union[int, float] = None,
  http_get: typing.Union[IResolvable, typing.List[ContainerGroupContainerLivenessProbeHttpGet]] = None,
  initial_delay_seconds: typing.Union[int, float] = None,
  period_seconds: typing.Union[int, float] = None,
  success_threshold: typing.Union[int, float] = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.exec">exec</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#exec ContainerGroup#exec}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.httpGet">http_get</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>]]</code> | http_get block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.initialDelaySeconds">initial_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.exec"></a>

```python
exec: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#exec ContainerGroup#exec}.

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}.

---

##### `http_get`<sup>Optional</sup> <a name="http_get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.httpGet"></a>

```python
http_get: typing.Union[IResolvable, typing.List[ContainerGroupContainerLivenessProbeHttpGet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>]]

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#http_get ContainerGroup#http_get}

---

##### `initial_delay_seconds`<sup>Optional</sup> <a name="initial_delay_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.initialDelaySeconds"></a>

```python
initial_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}.

---

##### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}.

---

##### `success_threshold`<sup>Optional</sup> <a name="success_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.successThreshold"></a>

```python
success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}.

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}.

---

### ContainerGroupContainerLivenessProbeHttpGet <a name="ContainerGroupContainerLivenessProbeHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerLivenessProbeHttpGet(
  http_headers: typing.Mapping[str] = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  scheme: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.httpHeaders">http_headers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#path ContainerGroup#path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.scheme">scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#scheme ContainerGroup#scheme}. |

---

##### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.httpHeaders"></a>

```python
http_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#path ContainerGroup#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#port ContainerGroup#port}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#scheme ContainerGroup#scheme}.

---

### ContainerGroupContainerPorts <a name="ContainerGroupContainerPorts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerPorts(
  port: typing.Union[int, float] = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#protocol ContainerGroup#protocol}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#port ContainerGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#protocol ContainerGroup#protocol}.

---

### ContainerGroupContainerReadinessProbe <a name="ContainerGroupContainerReadinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerReadinessProbe(
  exec: typing.List[str] = None,
  failure_threshold: typing.Union[int, float] = None,
  http_get: typing.Union[IResolvable, typing.List[ContainerGroupContainerReadinessProbeHttpGet]] = None,
  initial_delay_seconds: typing.Union[int, float] = None,
  period_seconds: typing.Union[int, float] = None,
  success_threshold: typing.Union[int, float] = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.exec">exec</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#exec ContainerGroup#exec}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.httpGet">http_get</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>]]</code> | http_get block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.initialDelaySeconds">initial_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.exec"></a>

```python
exec: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#exec ContainerGroup#exec}.

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}.

---

##### `http_get`<sup>Optional</sup> <a name="http_get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.httpGet"></a>

```python
http_get: typing.Union[IResolvable, typing.List[ContainerGroupContainerReadinessProbeHttpGet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>]]

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#http_get ContainerGroup#http_get}

---

##### `initial_delay_seconds`<sup>Optional</sup> <a name="initial_delay_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.initialDelaySeconds"></a>

```python
initial_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}.

---

##### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}.

---

##### `success_threshold`<sup>Optional</sup> <a name="success_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.successThreshold"></a>

```python
success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}.

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}.

---

### ContainerGroupContainerReadinessProbeHttpGet <a name="ContainerGroupContainerReadinessProbeHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerReadinessProbeHttpGet(
  http_headers: typing.Mapping[str] = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  scheme: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.httpHeaders">http_headers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#path ContainerGroup#path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.scheme">scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#scheme ContainerGroup#scheme}. |

---

##### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.httpHeaders"></a>

```python
http_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#path ContainerGroup#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#port ContainerGroup#port}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#scheme ContainerGroup#scheme}.

---

### ContainerGroupContainerSecurity <a name="ContainerGroupContainerSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerSecurity(
  privilege_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity.property.privilegeEnabled">privilege_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}. |

---

##### `privilege_enabled`<sup>Required</sup> <a name="privilege_enabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity.property.privilegeEnabled"></a>

```python
privilege_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}.

---

### ContainerGroupContainerVolume <a name="ContainerGroupContainerVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerVolume(
  mount_path: str,
  name: str,
  empty_dir: typing.Union[bool, IResolvable] = None,
  git_repo: ContainerGroupContainerVolumeGitRepo = None,
  read_only: typing.Union[bool, IResolvable] = None,
  secret: typing.Mapping[str] = None,
  share_name: str = None,
  storage_account_key: str = None,
  storage_account_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.mountPath">mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.emptyDir">empty_dir</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.gitRepo">git_repo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a></code> | git_repo block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#read_only ContainerGroup#read_only}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.secret">secret</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#secret ContainerGroup#secret}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.shareName">share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#share_name ContainerGroup#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}. |

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `empty_dir`<sup>Optional</sup> <a name="empty_dir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.emptyDir"></a>

```python
empty_dir: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}.

---

##### `git_repo`<sup>Optional</sup> <a name="git_repo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.gitRepo"></a>

```python
git_repo: ContainerGroupContainerVolumeGitRepo
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

git_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#git_repo ContainerGroup#git_repo}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#read_only ContainerGroup#read_only}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.secret"></a>

```python
secret: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#secret ContainerGroup#secret}.

---

##### `share_name`<sup>Optional</sup> <a name="share_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#share_name ContainerGroup#share_name}.

---

##### `storage_account_key`<sup>Optional</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}.

---

##### `storage_account_name`<sup>Optional</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}.

---

### ContainerGroupContainerVolumeGitRepo <a name="ContainerGroupContainerVolumeGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerVolumeGitRepo(
  url: str,
  directory: str = None,
  revision: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#url ContainerGroup#url}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.directory">directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#directory ContainerGroup#directory}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.revision">revision</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#revision ContainerGroup#revision}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#url ContainerGroup#url}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.directory"></a>

```python
directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#directory ContainerGroup#directory}.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.revision"></a>

```python
revision: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#revision ContainerGroup#revision}.

---

### ContainerGroupDiagnostics <a name="ContainerGroupDiagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupDiagnostics(
  log_analytics: ContainerGroupDiagnosticsLogAnalytics
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics.property.logAnalytics">log_analytics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a></code> | log_analytics block. |

---

##### `log_analytics`<sup>Required</sup> <a name="log_analytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics.property.logAnalytics"></a>

```python
log_analytics: ContainerGroupDiagnosticsLogAnalytics
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

log_analytics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#log_analytics ContainerGroup#log_analytics}

---

### ContainerGroupDiagnosticsLogAnalytics <a name="ContainerGroupDiagnosticsLogAnalytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupDiagnosticsLogAnalytics(
  workspace_id: str,
  workspace_key: str,
  log_type: str = None,
  metadata: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#workspace_id ContainerGroup#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceKey">workspace_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#workspace_key ContainerGroup#workspace_key}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.logType">log_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#log_type ContainerGroup#log_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#metadata ContainerGroup#metadata}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#workspace_id ContainerGroup#workspace_id}.

---

##### `workspace_key`<sup>Required</sup> <a name="workspace_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceKey"></a>

```python
workspace_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#workspace_key ContainerGroup#workspace_key}.

---

##### `log_type`<sup>Optional</sup> <a name="log_type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.logType"></a>

```python
log_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#log_type ContainerGroup#log_type}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#metadata ContainerGroup#metadata}.

---

### ContainerGroupDnsConfig <a name="ContainerGroupDnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupDnsConfig(
  nameservers: typing.List[str],
  options: typing.List[str] = None,
  search_domains: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.nameservers">nameservers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#nameservers ContainerGroup#nameservers}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.options">options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#options ContainerGroup#options}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.searchDomains">search_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#search_domains ContainerGroup#search_domains}. |

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.nameservers"></a>

```python
nameservers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#nameservers ContainerGroup#nameservers}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#options ContainerGroup#options}.

---

##### `search_domains`<sup>Optional</sup> <a name="search_domains" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.searchDomains"></a>

```python
search_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#search_domains ContainerGroup#search_domains}.

---

### ContainerGroupExposedPort <a name="ContainerGroupExposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupExposedPort(
  port: typing.Union[int, float] = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#protocol ContainerGroup#protocol}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#port ContainerGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#protocol ContainerGroup#protocol}.

---

### ContainerGroupIdentity <a name="ContainerGroupIdentity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#type ContainerGroup#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#identity_ids ContainerGroup#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#type ContainerGroup#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#identity_ids ContainerGroup#identity_ids}.

---

### ContainerGroupImageRegistryCredential <a name="ContainerGroupImageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupImageRegistryCredential(
  server: str,
  password: str = None,
  user_assigned_identity_id: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#server ContainerGroup#server}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#password ContainerGroup#password}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | The User Assigned Identity to use for Container Registry access. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#username ContainerGroup#username}. |

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#server ContainerGroup#server}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#password ContainerGroup#password}.

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

The User Assigned Identity to use for Container Registry access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#user_assigned_identity_id ContainerGroup#user_assigned_identity_id}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#username ContainerGroup#username}.

---

### ContainerGroupInitContainer <a name="ContainerGroupInitContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupInitContainer(
  image: str,
  name: str,
  commands: typing.List[str] = None,
  environment_variables: typing.Mapping[str] = None,
  secure_environment_variables: typing.Mapping[str] = None,
  security: typing.Union[IResolvable, typing.List[ContainerGroupInitContainerSecurity]] = None,
  volume: typing.Union[IResolvable, typing.List[ContainerGroupInitContainerVolume]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#image ContainerGroup#image}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.commands">commands</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#commands ContainerGroup#commands}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.secureEnvironmentVariables">secure_environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.security">security</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>]]</code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.volume">volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>]]</code> | volume block. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#image ContainerGroup#image}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#commands ContainerGroup#commands}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}.

---

##### `secure_environment_variables`<sup>Optional</sup> <a name="secure_environment_variables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.secureEnvironmentVariables"></a>

```python
secure_environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.security"></a>

```python
security: typing.Union[IResolvable, typing.List[ContainerGroupInitContainerSecurity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>]]

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#security ContainerGroup#security}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.volume"></a>

```python
volume: typing.Union[IResolvable, typing.List[ContainerGroupInitContainerVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>]]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#volume ContainerGroup#volume}

---

### ContainerGroupInitContainerSecurity <a name="ContainerGroupInitContainerSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupInitContainerSecurity(
  privilege_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity.property.privilegeEnabled">privilege_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}. |

---

##### `privilege_enabled`<sup>Required</sup> <a name="privilege_enabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity.property.privilegeEnabled"></a>

```python
privilege_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}.

---

### ContainerGroupInitContainerVolume <a name="ContainerGroupInitContainerVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupInitContainerVolume(
  mount_path: str,
  name: str,
  empty_dir: typing.Union[bool, IResolvable] = None,
  git_repo: ContainerGroupInitContainerVolumeGitRepo = None,
  read_only: typing.Union[bool, IResolvable] = None,
  secret: typing.Mapping[str] = None,
  share_name: str = None,
  storage_account_key: str = None,
  storage_account_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.mountPath">mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.emptyDir">empty_dir</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.gitRepo">git_repo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a></code> | git_repo block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#read_only ContainerGroup#read_only}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.secret">secret</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#secret ContainerGroup#secret}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.shareName">share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#share_name ContainerGroup#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}. |

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `empty_dir`<sup>Optional</sup> <a name="empty_dir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.emptyDir"></a>

```python
empty_dir: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}.

---

##### `git_repo`<sup>Optional</sup> <a name="git_repo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.gitRepo"></a>

```python
git_repo: ContainerGroupInitContainerVolumeGitRepo
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

git_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#git_repo ContainerGroup#git_repo}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#read_only ContainerGroup#read_only}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.secret"></a>

```python
secret: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#secret ContainerGroup#secret}.

---

##### `share_name`<sup>Optional</sup> <a name="share_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#share_name ContainerGroup#share_name}.

---

##### `storage_account_key`<sup>Optional</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}.

---

##### `storage_account_name`<sup>Optional</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}.

---

### ContainerGroupInitContainerVolumeGitRepo <a name="ContainerGroupInitContainerVolumeGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupInitContainerVolumeGitRepo(
  url: str,
  directory: str = None,
  revision: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#url ContainerGroup#url}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.directory">directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#directory ContainerGroup#directory}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.revision">revision</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#revision ContainerGroup#revision}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#url ContainerGroup#url}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.directory"></a>

```python
directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#directory ContainerGroup#directory}.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.revision"></a>

```python
revision: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#revision ContainerGroup#revision}.

---

### ContainerGroupTimeouts <a name="ContainerGroupTimeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#create ContainerGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#delete ContainerGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#read ContainerGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#update ContainerGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#create ContainerGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#delete ContainerGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#read ContainerGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#update ContainerGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerGroupContainerGpuLimitOutputReference <a name="ContainerGroupContainerGpuLimitOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerGpuLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resetSku">reset_sku</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_sku` <a name="reset_sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.resetSku"></a>

```python
def reset_sku() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference.property.internalValue"></a>

```python
internal_value: ContainerGroupContainerGpuLimit
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a>

---


### ContainerGroupContainerGpuOutputReference <a name="ContainerGroupContainerGpuOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerGpuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resetSku">reset_sku</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_sku` <a name="reset_sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.resetSku"></a>

```python
def reset_sku() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference.property.internalValue"></a>

```python
internal_value: ContainerGroupContainerGpu
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a>

---


### ContainerGroupContainerList <a name="ContainerGroupContainerList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerGroupContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerGroupContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>]]

---


### ContainerGroupContainerLivenessProbeHttpGetList <a name="ContainerGroupContainerLivenessProbeHttpGetList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerLivenessProbeHttpGetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerGroupContainerLivenessProbeHttpGetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerGroupContainerLivenessProbeHttpGet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>]]

---


### ContainerGroupContainerLivenessProbeHttpGetOutputReference <a name="ContainerGroupContainerLivenessProbeHttpGetOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetHttpHeaders">reset_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetScheme">reset_scheme</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_headers` <a name="reset_http_headers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```python
def reset_http_headers() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetScheme"></a>

```python
def reset_scheme() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeadersInput">http_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeaders">http_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_headers_input`<sup>Optional</sup> <a name="http_headers_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```python
http_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `http_headers`<sup>Required</sup> <a name="http_headers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```python
http_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerGroupContainerLivenessProbeHttpGet]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>]

---


### ContainerGroupContainerLivenessProbeOutputReference <a name="ContainerGroupContainerLivenessProbeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerLivenessProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.putHttpGet">put_http_get</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetExec">reset_exec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetHttpGet">reset_http_get</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetInitialDelaySeconds">reset_initial_delay_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetPeriodSeconds">reset_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetSuccessThreshold">reset_success_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_http_get` <a name="put_http_get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.putHttpGet"></a>

```python
def put_http_get(
  value: typing.Union[IResolvable, typing.List[ContainerGroupContainerLivenessProbeHttpGet]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>]]

---

##### `reset_exec` <a name="reset_exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetExec"></a>

```python
def reset_exec() -> None
```

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```

##### `reset_http_get` <a name="reset_http_get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetHttpGet"></a>

```python
def reset_http_get() -> None
```

##### `reset_initial_delay_seconds` <a name="reset_initial_delay_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```python
def reset_initial_delay_seconds() -> None
```

##### `reset_period_seconds` <a name="reset_period_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetPeriodSeconds"></a>

```python
def reset_period_seconds() -> None
```

##### `reset_success_threshold` <a name="reset_success_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetSuccessThreshold"></a>

```python
def reset_success_threshold() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGet">http_get</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList">ContainerGroupContainerLivenessProbeHttpGetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.execInput">exec_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGetInput">http_get_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySecondsInput">initial_delay_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSecondsInput">period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThresholdInput">success_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.exec">exec</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySeconds">initial_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_get`<sup>Required</sup> <a name="http_get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGet"></a>

```python
http_get: ContainerGroupContainerLivenessProbeHttpGetList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList">ContainerGroupContainerLivenessProbeHttpGetList</a>

---

##### `exec_input`<sup>Optional</sup> <a name="exec_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.execInput"></a>

```python
exec_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_get_input`<sup>Optional</sup> <a name="http_get_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGetInput"></a>

```python
http_get_input: typing.Union[IResolvable, typing.List[ContainerGroupContainerLivenessProbeHttpGet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>]]

---

##### `initial_delay_seconds_input`<sup>Optional</sup> <a name="initial_delay_seconds_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```python
initial_delay_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds_input`<sup>Optional</sup> <a name="period_seconds_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSecondsInput"></a>

```python
period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_threshold_input`<sup>Optional</sup> <a name="success_threshold_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThresholdInput"></a>

```python
success_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exec`<sup>Required</sup> <a name="exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.exec"></a>

```python
exec: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_delay_seconds`<sup>Required</sup> <a name="initial_delay_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```python
initial_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds`<sup>Required</sup> <a name="period_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_threshold`<sup>Required</sup> <a name="success_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThreshold"></a>

```python
success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.internalValue"></a>

```python
internal_value: ContainerGroupContainerLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

---


### ContainerGroupContainerOutputReference <a name="ContainerGroupContainerOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpu">put_gpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpuLimit">put_gpu_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe">put_liveness_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putPorts">put_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe">put_readiness_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putSecurity">put_security</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putVolume">put_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCommands">reset_commands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCpuLimit">reset_cpu_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetGpu">reset_gpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetGpuLimit">reset_gpu_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetLivenessProbe">reset_liveness_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetMemoryLimit">reset_memory_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetPorts">reset_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetReadinessProbe">reset_readiness_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecureEnvironmentVariables">reset_secure_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecurity">reset_security</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetVolume">reset_volume</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gpu` <a name="put_gpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpu"></a>

```python
def put_gpu(
  count: typing.Union[int, float] = None,
  sku: str = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpu.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#count ContainerGroup#count}.

---

###### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpu.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#sku ContainerGroup#sku}.

---

##### `put_gpu_limit` <a name="put_gpu_limit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpuLimit"></a>

```python
def put_gpu_limit(
  count: typing.Union[int, float] = None,
  sku: str = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpuLimit.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#count ContainerGroup#count}.

---

###### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putGpuLimit.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#sku ContainerGroup#sku}.

---

##### `put_liveness_probe` <a name="put_liveness_probe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe"></a>

```python
def put_liveness_probe(
  exec: typing.List[str] = None,
  failure_threshold: typing.Union[int, float] = None,
  http_get: typing.Union[IResolvable, typing.List[ContainerGroupContainerLivenessProbeHttpGet]] = None,
  initial_delay_seconds: typing.Union[int, float] = None,
  period_seconds: typing.Union[int, float] = None,
  success_threshold: typing.Union[int, float] = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe.parameter.exec"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#exec ContainerGroup#exec}.

---

###### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}.

---

###### `http_get`<sup>Optional</sup> <a name="http_get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe.parameter.httpGet"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>]]

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#http_get ContainerGroup#http_get}

---

###### `initial_delay_seconds`<sup>Optional</sup> <a name="initial_delay_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe.parameter.initialDelaySeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}.

---

###### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe.parameter.periodSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}.

---

###### `success_threshold`<sup>Optional</sup> <a name="success_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe.parameter.successThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}.

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}.

---

##### `put_ports` <a name="put_ports" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putPorts"></a>

```python
def put_ports(
  value: typing.Union[IResolvable, typing.List[ContainerGroupContainerPorts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putPorts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>]]

---

##### `put_readiness_probe` <a name="put_readiness_probe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe"></a>

```python
def put_readiness_probe(
  exec: typing.List[str] = None,
  failure_threshold: typing.Union[int, float] = None,
  http_get: typing.Union[IResolvable, typing.List[ContainerGroupContainerReadinessProbeHttpGet]] = None,
  initial_delay_seconds: typing.Union[int, float] = None,
  period_seconds: typing.Union[int, float] = None,
  success_threshold: typing.Union[int, float] = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe.parameter.exec"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#exec ContainerGroup#exec}.

---

###### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}.

---

###### `http_get`<sup>Optional</sup> <a name="http_get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe.parameter.httpGet"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>]]

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#http_get ContainerGroup#http_get}

---

###### `initial_delay_seconds`<sup>Optional</sup> <a name="initial_delay_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe.parameter.initialDelaySeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}.

---

###### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe.parameter.periodSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}.

---

###### `success_threshold`<sup>Optional</sup> <a name="success_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe.parameter.successThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}.

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}.

---

##### `put_security` <a name="put_security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putSecurity"></a>

```python
def put_security(
  value: typing.Union[IResolvable, typing.List[ContainerGroupContainerSecurity]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putSecurity.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>]]

---

##### `put_volume` <a name="put_volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putVolume"></a>

```python
def put_volume(
  value: typing.Union[IResolvable, typing.List[ContainerGroupContainerVolume]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putVolume.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>]]

---

##### `reset_commands` <a name="reset_commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCommands"></a>

```python
def reset_commands() -> None
```

##### `reset_cpu_limit` <a name="reset_cpu_limit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCpuLimit"></a>

```python
def reset_cpu_limit() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_gpu` <a name="reset_gpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetGpu"></a>

```python
def reset_gpu() -> None
```

##### `reset_gpu_limit` <a name="reset_gpu_limit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetGpuLimit"></a>

```python
def reset_gpu_limit() -> None
```

##### `reset_liveness_probe` <a name="reset_liveness_probe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetLivenessProbe"></a>

```python
def reset_liveness_probe() -> None
```

##### `reset_memory_limit` <a name="reset_memory_limit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetMemoryLimit"></a>

```python
def reset_memory_limit() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```

##### `reset_readiness_probe` <a name="reset_readiness_probe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetReadinessProbe"></a>

```python
def reset_readiness_probe() -> None
```

##### `reset_secure_environment_variables` <a name="reset_secure_environment_variables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecureEnvironmentVariables"></a>

```python
def reset_secure_environment_variables() -> None
```

##### `reset_security` <a name="reset_security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecurity"></a>

```python
def reset_security() -> None
```

##### `reset_volume` <a name="reset_volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetVolume"></a>

```python
def reset_volume() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpu">gpu</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference">ContainerGroupContainerGpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuLimit">gpu_limit</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference">ContainerGroupContainerGpuLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbe">liveness_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference">ContainerGroupContainerLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList">ContainerGroupContainerPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbe">readiness_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference">ContainerGroupContainerReadinessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList">ContainerGroupContainerSecurityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList">ContainerGroupContainerVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commandsInput">commands_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimitInput">cpu_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuInput">gpu_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuLimitInput">gpu_limit_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbeInput">liveness_probe_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryInput">memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimitInput">memory_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.portsInput">ports_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbeInput">readiness_probe_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariablesInput">secure_environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.securityInput">security_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volumeInput">volume_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commands">commands</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimit">cpu_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimit">memory_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariables">secure_environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gpu`<sup>Required</sup> <a name="gpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpu"></a>

```python
gpu: ContainerGroupContainerGpuOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuOutputReference">ContainerGroupContainerGpuOutputReference</a>

---

##### `gpu_limit`<sup>Required</sup> <a name="gpu_limit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuLimit"></a>

```python
gpu_limit: ContainerGroupContainerGpuLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimitOutputReference">ContainerGroupContainerGpuLimitOutputReference</a>

---

##### `liveness_probe`<sup>Required</sup> <a name="liveness_probe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbe"></a>

```python
liveness_probe: ContainerGroupContainerLivenessProbeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference">ContainerGroupContainerLivenessProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.ports"></a>

```python
ports: ContainerGroupContainerPortsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList">ContainerGroupContainerPortsList</a>

---

##### `readiness_probe`<sup>Required</sup> <a name="readiness_probe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbe"></a>

```python
readiness_probe: ContainerGroupContainerReadinessProbeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference">ContainerGroupContainerReadinessProbeOutputReference</a>

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.security"></a>

```python
security: ContainerGroupContainerSecurityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList">ContainerGroupContainerSecurityList</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volume"></a>

```python
volume: ContainerGroupContainerVolumeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList">ContainerGroupContainerVolumeList</a>

---

##### `commands_input`<sup>Optional</sup> <a name="commands_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commandsInput"></a>

```python
commands_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_limit_input`<sup>Optional</sup> <a name="cpu_limit_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimitInput"></a>

```python
cpu_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `gpu_input`<sup>Optional</sup> <a name="gpu_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuInput"></a>

```python
gpu_input: ContainerGroupContainerGpu
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpu">ContainerGroupContainerGpu</a>

---

##### `gpu_limit_input`<sup>Optional</sup> <a name="gpu_limit_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.gpuLimitInput"></a>

```python
gpu_limit_input: ContainerGroupContainerGpuLimit
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerGpuLimit">ContainerGroupContainerGpuLimit</a>

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `liveness_probe_input`<sup>Optional</sup> <a name="liveness_probe_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbeInput"></a>

```python
liveness_probe_input: ContainerGroupContainerLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryInput"></a>

```python
memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_limit_input`<sup>Optional</sup> <a name="memory_limit_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimitInput"></a>

```python
memory_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.portsInput"></a>

```python
ports_input: typing.Union[IResolvable, typing.List[ContainerGroupContainerPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>]]

---

##### `readiness_probe_input`<sup>Optional</sup> <a name="readiness_probe_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbeInput"></a>

```python
readiness_probe_input: ContainerGroupContainerReadinessProbe
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

---

##### `secure_environment_variables_input`<sup>Optional</sup> <a name="secure_environment_variables_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariablesInput"></a>

```python
secure_environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `security_input`<sup>Optional</sup> <a name="security_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.securityInput"></a>

```python
security_input: typing.Union[IResolvable, typing.List[ContainerGroupContainerSecurity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>]]

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volumeInput"></a>

```python
volume_input: typing.Union[IResolvable, typing.List[ContainerGroupContainerVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>]]

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_limit`<sup>Required</sup> <a name="cpu_limit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimit"></a>

```python
cpu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_limit`<sup>Required</sup> <a name="memory_limit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimit"></a>

```python
memory_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secure_environment_variables`<sup>Required</sup> <a name="secure_environment_variables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariables"></a>

```python
secure_environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerGroupContainer]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>]

---


### ContainerGroupContainerPortsList <a name="ContainerGroupContainerPortsList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerGroupContainerPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerGroupContainerPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>]]

---


### ContainerGroupContainerPortsOutputReference <a name="ContainerGroupContainerPortsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerGroupContainerPorts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>]

---


### ContainerGroupContainerReadinessProbeHttpGetList <a name="ContainerGroupContainerReadinessProbeHttpGetList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerReadinessProbeHttpGetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerGroupContainerReadinessProbeHttpGetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerGroupContainerReadinessProbeHttpGet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>]]

---


### ContainerGroupContainerReadinessProbeHttpGetOutputReference <a name="ContainerGroupContainerReadinessProbeHttpGetOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetHttpHeaders">reset_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetScheme">reset_scheme</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_headers` <a name="reset_http_headers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```python
def reset_http_headers() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetScheme"></a>

```python
def reset_scheme() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeadersInput">http_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeaders">http_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_headers_input`<sup>Optional</sup> <a name="http_headers_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```python
http_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `http_headers`<sup>Required</sup> <a name="http_headers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeaders"></a>

```python
http_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerGroupContainerReadinessProbeHttpGet]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>]

---


### ContainerGroupContainerReadinessProbeOutputReference <a name="ContainerGroupContainerReadinessProbeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerReadinessProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.putHttpGet">put_http_get</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetExec">reset_exec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetHttpGet">reset_http_get</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetInitialDelaySeconds">reset_initial_delay_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetPeriodSeconds">reset_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetSuccessThreshold">reset_success_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_http_get` <a name="put_http_get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.putHttpGet"></a>

```python
def put_http_get(
  value: typing.Union[IResolvable, typing.List[ContainerGroupContainerReadinessProbeHttpGet]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>]]

---

##### `reset_exec` <a name="reset_exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetExec"></a>

```python
def reset_exec() -> None
```

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```

##### `reset_http_get` <a name="reset_http_get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetHttpGet"></a>

```python
def reset_http_get() -> None
```

##### `reset_initial_delay_seconds` <a name="reset_initial_delay_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetInitialDelaySeconds"></a>

```python
def reset_initial_delay_seconds() -> None
```

##### `reset_period_seconds` <a name="reset_period_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetPeriodSeconds"></a>

```python
def reset_period_seconds() -> None
```

##### `reset_success_threshold` <a name="reset_success_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetSuccessThreshold"></a>

```python
def reset_success_threshold() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGet">http_get</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList">ContainerGroupContainerReadinessProbeHttpGetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.execInput">exec_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGetInput">http_get_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySecondsInput">initial_delay_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSecondsInput">period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThresholdInput">success_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.exec">exec</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySeconds">initial_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_get`<sup>Required</sup> <a name="http_get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGet"></a>

```python
http_get: ContainerGroupContainerReadinessProbeHttpGetList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList">ContainerGroupContainerReadinessProbeHttpGetList</a>

---

##### `exec_input`<sup>Optional</sup> <a name="exec_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.execInput"></a>

```python
exec_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_get_input`<sup>Optional</sup> <a name="http_get_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGetInput"></a>

```python
http_get_input: typing.Union[IResolvable, typing.List[ContainerGroupContainerReadinessProbeHttpGet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>]]

---

##### `initial_delay_seconds_input`<sup>Optional</sup> <a name="initial_delay_seconds_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySecondsInput"></a>

```python
initial_delay_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds_input`<sup>Optional</sup> <a name="period_seconds_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSecondsInput"></a>

```python
period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_threshold_input`<sup>Optional</sup> <a name="success_threshold_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThresholdInput"></a>

```python
success_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exec`<sup>Required</sup> <a name="exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.exec"></a>

```python
exec: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_delay_seconds`<sup>Required</sup> <a name="initial_delay_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySeconds"></a>

```python
initial_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds`<sup>Required</sup> <a name="period_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_threshold`<sup>Required</sup> <a name="success_threshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThreshold"></a>

```python
success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.internalValue"></a>

```python
internal_value: ContainerGroupContainerReadinessProbe
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

---


### ContainerGroupContainerSecurityList <a name="ContainerGroupContainerSecurityList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerSecurityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerGroupContainerSecurityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerGroupContainerSecurity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>]]

---


### ContainerGroupContainerSecurityOutputReference <a name="ContainerGroupContainerSecurityOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerSecurityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabledInput">privilege_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabled">privilege_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `privilege_enabled_input`<sup>Optional</sup> <a name="privilege_enabled_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabledInput"></a>

```python
privilege_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privilege_enabled`<sup>Required</sup> <a name="privilege_enabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabled"></a>

```python
privilege_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerGroupContainerSecurity]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>]

---


### ContainerGroupContainerVolumeGitRepoOutputReference <a name="ContainerGroupContainerVolumeGitRepoOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetDirectory">reset_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetRevision">reset_revision</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_directory` <a name="reset_directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetDirectory"></a>

```python
def reset_directory() -> None
```

##### `reset_revision` <a name="reset_revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetRevision"></a>

```python
def reset_revision() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directoryInput">directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directory">directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_input`<sup>Optional</sup> <a name="directory_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directoryInput"></a>

```python
directory_input: str
```

- *Type:* str

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directory"></a>

```python
directory: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.internalValue"></a>

```python
internal_value: ContainerGroupContainerVolumeGitRepo
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

---


### ContainerGroupContainerVolumeList <a name="ContainerGroupContainerVolumeList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerGroupContainerVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerGroupContainerVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>]]

---


### ContainerGroupContainerVolumeOutputReference <a name="ContainerGroupContainerVolumeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupContainerVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.putGitRepo">put_git_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetEmptyDir">reset_empty_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetGitRepo">reset_git_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetShareName">reset_share_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountKey">reset_storage_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountName">reset_storage_account_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_git_repo` <a name="put_git_repo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.putGitRepo"></a>

```python
def put_git_repo(
  url: str,
  directory: str = None,
  revision: str = None
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.putGitRepo.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#url ContainerGroup#url}.

---

###### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.putGitRepo.parameter.directory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#directory ContainerGroup#directory}.

---

###### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.putGitRepo.parameter.revision"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#revision ContainerGroup#revision}.

---

##### `reset_empty_dir` <a name="reset_empty_dir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetEmptyDir"></a>

```python
def reset_empty_dir() -> None
```

##### `reset_git_repo` <a name="reset_git_repo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetGitRepo"></a>

```python
def reset_git_repo() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_share_name` <a name="reset_share_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetShareName"></a>

```python
def reset_share_name() -> None
```

##### `reset_storage_account_key` <a name="reset_storage_account_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountKey"></a>

```python
def reset_storage_account_key() -> None
```

##### `reset_storage_account_name` <a name="reset_storage_account_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountName"></a>

```python
def reset_storage_account_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepo">git_repo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference">ContainerGroupContainerVolumeGitRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDirInput">empty_dir_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepoInput">git_repo_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secretInput">secret_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKeyInput">storage_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountNameInput">storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDir">empty_dir</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secret">secret</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git_repo`<sup>Required</sup> <a name="git_repo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepo"></a>

```python
git_repo: ContainerGroupContainerVolumeGitRepoOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference">ContainerGroupContainerVolumeGitRepoOutputReference</a>

---

##### `empty_dir_input`<sup>Optional</sup> <a name="empty_dir_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDirInput"></a>

```python
empty_dir_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `git_repo_input`<sup>Optional</sup> <a name="git_repo_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepoInput"></a>

```python
git_repo_input: ContainerGroupContainerVolumeGitRepo
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secretInput"></a>

```python
secret_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `storage_account_key_input`<sup>Optional</sup> <a name="storage_account_key_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKeyInput"></a>

```python
storage_account_key_input: str
```

- *Type:* str

---

##### `storage_account_name_input`<sup>Optional</sup> <a name="storage_account_name_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountNameInput"></a>

```python
storage_account_name_input: str
```

- *Type:* str

---

##### `empty_dir`<sup>Required</sup> <a name="empty_dir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDir"></a>

```python
empty_dir: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secret"></a>

```python
secret: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerGroupContainerVolume]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>]

---


### ContainerGroupDiagnosticsLogAnalyticsOutputReference <a name="ContainerGroupDiagnosticsLogAnalyticsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetLogType">reset_log_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_type` <a name="reset_log_type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetLogType"></a>

```python
def reset_log_type() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKeyInput">workspace_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKey">workspace_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_key_input`<sup>Optional</sup> <a name="workspace_key_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKeyInput"></a>

```python
workspace_key_input: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `workspace_key`<sup>Required</sup> <a name="workspace_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKey"></a>

```python
workspace_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerGroupDiagnosticsLogAnalytics
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

---


### ContainerGroupDiagnosticsOutputReference <a name="ContainerGroupDiagnosticsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupDiagnosticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics">put_log_analytics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_log_analytics` <a name="put_log_analytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics"></a>

```python
def put_log_analytics(
  workspace_id: str,
  workspace_key: str,
  log_type: str = None,
  metadata: typing.Mapping[str] = None
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#workspace_id ContainerGroup#workspace_id}.

---

###### `workspace_key`<sup>Required</sup> <a name="workspace_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics.parameter.workspaceKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#workspace_key ContainerGroup#workspace_key}.

---

###### `log_type`<sup>Optional</sup> <a name="log_type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics.parameter.logType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#log_type ContainerGroup#log_type}.

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#metadata ContainerGroup#metadata}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalytics">log_analytics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference">ContainerGroupDiagnosticsLogAnalyticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalyticsInput">log_analytics_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_analytics`<sup>Required</sup> <a name="log_analytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalytics"></a>

```python
log_analytics: ContainerGroupDiagnosticsLogAnalyticsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference">ContainerGroupDiagnosticsLogAnalyticsOutputReference</a>

---

##### `log_analytics_input`<sup>Optional</sup> <a name="log_analytics_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalyticsInput"></a>

```python
log_analytics_input: ContainerGroupDiagnosticsLogAnalytics
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerGroupDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

---


### ContainerGroupDnsConfigOutputReference <a name="ContainerGroupDnsConfigOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupDnsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetSearchDomains">reset_search_domains</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_options` <a name="reset_options" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_search_domains` <a name="reset_search_domains" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetSearchDomains"></a>

```python
def reset_search_domains() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameserversInput">nameservers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.optionsInput">options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomainsInput">search_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameservers">nameservers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.options">options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomains">search_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nameservers_input`<sup>Optional</sup> <a name="nameservers_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameserversInput"></a>

```python
nameservers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.optionsInput"></a>

```python
options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_domains_input`<sup>Optional</sup> <a name="search_domains_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomainsInput"></a>

```python
search_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameservers"></a>

```python
nameservers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_domains`<sup>Required</sup> <a name="search_domains" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomains"></a>

```python
search_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerGroupDnsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

---


### ContainerGroupExposedPortList <a name="ContainerGroupExposedPortList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupExposedPortList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerGroupExposedPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerGroupExposedPort]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>]]

---


### ContainerGroupExposedPortOutputReference <a name="ContainerGroupExposedPortOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupExposedPortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerGroupExposedPort]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>]

---


### ContainerGroupIdentityOutputReference <a name="ContainerGroupIdentityOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.internalValue"></a>

```python
internal_value: ContainerGroupIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

---


### ContainerGroupImageRegistryCredentialList <a name="ContainerGroupImageRegistryCredentialList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupImageRegistryCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerGroupImageRegistryCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerGroupImageRegistryCredential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>]]

---


### ContainerGroupImageRegistryCredentialOutputReference <a name="ContainerGroupImageRegistryCredentialOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupImageRegistryCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUserAssignedIdentityId">reset_user_assigned_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_user_assigned_identity_id` <a name="reset_user_assigned_identity_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUserAssignedIdentityId"></a>

```python
def reset_user_assigned_identity_id() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityIdInput">user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `user_assigned_identity_id_input`<sup>Optional</sup> <a name="user_assigned_identity_id_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityIdInput"></a>

```python
user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerGroupImageRegistryCredential]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>]

---


### ContainerGroupInitContainerList <a name="ContainerGroupInitContainerList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupInitContainerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerGroupInitContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerGroupInitContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>]]

---


### ContainerGroupInitContainerOutputReference <a name="ContainerGroupInitContainerOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupInitContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putSecurity">put_security</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putVolume">put_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetCommands">reset_commands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecureEnvironmentVariables">reset_secure_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecurity">reset_security</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetVolume">reset_volume</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_security` <a name="put_security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putSecurity"></a>

```python
def put_security(
  value: typing.Union[IResolvable, typing.List[ContainerGroupInitContainerSecurity]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putSecurity.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>]]

---

##### `put_volume` <a name="put_volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putVolume"></a>

```python
def put_volume(
  value: typing.Union[IResolvable, typing.List[ContainerGroupInitContainerVolume]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putVolume.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>]]

---

##### `reset_commands` <a name="reset_commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetCommands"></a>

```python
def reset_commands() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_secure_environment_variables` <a name="reset_secure_environment_variables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecureEnvironmentVariables"></a>

```python
def reset_secure_environment_variables() -> None
```

##### `reset_security` <a name="reset_security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecurity"></a>

```python
def reset_security() -> None
```

##### `reset_volume` <a name="reset_volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetVolume"></a>

```python
def reset_volume() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList">ContainerGroupInitContainerSecurityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList">ContainerGroupInitContainerVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commandsInput">commands_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariablesInput">secure_environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.securityInput">security_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volumeInput">volume_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commands">commands</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariables">secure_environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.security"></a>

```python
security: ContainerGroupInitContainerSecurityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList">ContainerGroupInitContainerSecurityList</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volume"></a>

```python
volume: ContainerGroupInitContainerVolumeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList">ContainerGroupInitContainerVolumeList</a>

---

##### `commands_input`<sup>Optional</sup> <a name="commands_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commandsInput"></a>

```python
commands_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secure_environment_variables_input`<sup>Optional</sup> <a name="secure_environment_variables_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariablesInput"></a>

```python
secure_environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `security_input`<sup>Optional</sup> <a name="security_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.securityInput"></a>

```python
security_input: typing.Union[IResolvable, typing.List[ContainerGroupInitContainerSecurity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>]]

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volumeInput"></a>

```python
volume_input: typing.Union[IResolvable, typing.List[ContainerGroupInitContainerVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>]]

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secure_environment_variables`<sup>Required</sup> <a name="secure_environment_variables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariables"></a>

```python
secure_environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerGroupInitContainer]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>]

---


### ContainerGroupInitContainerSecurityList <a name="ContainerGroupInitContainerSecurityList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupInitContainerSecurityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerGroupInitContainerSecurityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerGroupInitContainerSecurity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>]]

---


### ContainerGroupInitContainerSecurityOutputReference <a name="ContainerGroupInitContainerSecurityOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupInitContainerSecurityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabledInput">privilege_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabled">privilege_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `privilege_enabled_input`<sup>Optional</sup> <a name="privilege_enabled_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabledInput"></a>

```python
privilege_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privilege_enabled`<sup>Required</sup> <a name="privilege_enabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabled"></a>

```python
privilege_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerGroupInitContainerSecurity]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>]

---


### ContainerGroupInitContainerVolumeGitRepoOutputReference <a name="ContainerGroupInitContainerVolumeGitRepoOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetDirectory">reset_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetRevision">reset_revision</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_directory` <a name="reset_directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetDirectory"></a>

```python
def reset_directory() -> None
```

##### `reset_revision` <a name="reset_revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetRevision"></a>

```python
def reset_revision() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directoryInput">directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directory">directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_input`<sup>Optional</sup> <a name="directory_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directoryInput"></a>

```python
directory_input: str
```

- *Type:* str

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directory"></a>

```python
directory: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.internalValue"></a>

```python
internal_value: ContainerGroupInitContainerVolumeGitRepo
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

---


### ContainerGroupInitContainerVolumeList <a name="ContainerGroupInitContainerVolumeList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupInitContainerVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerGroupInitContainerVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerGroupInitContainerVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>]]

---


### ContainerGroupInitContainerVolumeOutputReference <a name="ContainerGroupInitContainerVolumeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupInitContainerVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.putGitRepo">put_git_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetEmptyDir">reset_empty_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetGitRepo">reset_git_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetShareName">reset_share_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountKey">reset_storage_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountName">reset_storage_account_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_git_repo` <a name="put_git_repo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.putGitRepo"></a>

```python
def put_git_repo(
  url: str,
  directory: str = None,
  revision: str = None
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.putGitRepo.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#url ContainerGroup#url}.

---

###### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.putGitRepo.parameter.directory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#directory ContainerGroup#directory}.

---

###### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.putGitRepo.parameter.revision"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/container_group#revision ContainerGroup#revision}.

---

##### `reset_empty_dir` <a name="reset_empty_dir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetEmptyDir"></a>

```python
def reset_empty_dir() -> None
```

##### `reset_git_repo` <a name="reset_git_repo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetGitRepo"></a>

```python
def reset_git_repo() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_share_name` <a name="reset_share_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetShareName"></a>

```python
def reset_share_name() -> None
```

##### `reset_storage_account_key` <a name="reset_storage_account_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountKey"></a>

```python
def reset_storage_account_key() -> None
```

##### `reset_storage_account_name` <a name="reset_storage_account_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountName"></a>

```python
def reset_storage_account_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepo">git_repo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference">ContainerGroupInitContainerVolumeGitRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDirInput">empty_dir_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepoInput">git_repo_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secretInput">secret_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKeyInput">storage_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountNameInput">storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDir">empty_dir</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secret">secret</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git_repo`<sup>Required</sup> <a name="git_repo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepo"></a>

```python
git_repo: ContainerGroupInitContainerVolumeGitRepoOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference">ContainerGroupInitContainerVolumeGitRepoOutputReference</a>

---

##### `empty_dir_input`<sup>Optional</sup> <a name="empty_dir_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDirInput"></a>

```python
empty_dir_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `git_repo_input`<sup>Optional</sup> <a name="git_repo_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepoInput"></a>

```python
git_repo_input: ContainerGroupInitContainerVolumeGitRepo
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secretInput"></a>

```python
secret_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `storage_account_key_input`<sup>Optional</sup> <a name="storage_account_key_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKeyInput"></a>

```python
storage_account_key_input: str
```

- *Type:* str

---

##### `storage_account_name_input`<sup>Optional</sup> <a name="storage_account_name_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountNameInput"></a>

```python
storage_account_name_input: str
```

- *Type:* str

---

##### `empty_dir`<sup>Required</sup> <a name="empty_dir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDir"></a>

```python
empty_dir: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secret"></a>

```python
secret: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerGroupInitContainerVolume]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>]

---


### ContainerGroupTimeoutsOutputReference <a name="ContainerGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_group

containerGroup.ContainerGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>]

---



