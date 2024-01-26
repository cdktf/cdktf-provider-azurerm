# `keyVault` Submodule <a name="`keyVault` Submodule" id="@cdktf/provider-azurerm.keyVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVault <a name="KeyVault" id="@cdktf/provider-azurerm.keyVault.KeyVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault azurerm_key_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVault(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  tenant_id: str,
  access_policy: typing.Union[IResolvable, typing.List[KeyVaultAccessPolicy]] = None,
  contact: typing.Union[IResolvable, typing.List[KeyVaultContact]] = None,
  enabled_for_deployment: typing.Union[bool, IResolvable] = None,
  enabled_for_disk_encryption: typing.Union[bool, IResolvable] = None,
  enabled_for_template_deployment: typing.Union[bool, IResolvable] = None,
  enable_rbac_authorization: typing.Union[bool, IResolvable] = None,
  id: str = None,
  network_acls: KeyVaultNetworkAcls = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  purge_protection_enabled: typing.Union[bool, IResolvable] = None,
  soft_delete_retention_days: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: KeyVaultTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#location KeyVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#name KeyVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#resource_group_name KeyVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#sku_name KeyVault#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.accessPolicy">access_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#access_policy KeyVault#access_policy}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.contact">contact</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>]]</code> | contact block. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.enabledForDeployment">enabled_for_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enabled_for_deployment KeyVault#enabled_for_deployment}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.enabledForDiskEncryption">enabled_for_disk_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enabled_for_disk_encryption KeyVault#enabled_for_disk_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.enabledForTemplateDeployment">enabled_for_template_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enabled_for_template_deployment KeyVault#enabled_for_template_deployment}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.enableRbacAuthorization">enable_rbac_authorization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enable_rbac_authorization KeyVault#enable_rbac_authorization}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#id KeyVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.networkAcls">network_acls</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a></code> | network_acls block. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#public_network_access_enabled KeyVault#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.purgeProtectionEnabled">purge_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#purge_protection_enabled KeyVault#purge_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.softDeleteRetentionDays">soft_delete_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#soft_delete_retention_days KeyVault#soft_delete_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#tags KeyVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#location KeyVault#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#name KeyVault#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#resource_group_name KeyVault#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#sku_name KeyVault#sku_name}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}.

---

##### `access_policy`<sup>Optional</sup> <a name="access_policy" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.accessPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#access_policy KeyVault#access_policy}.

---

##### `contact`<sup>Optional</sup> <a name="contact" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.contact"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>]]

contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#contact KeyVault#contact}

---

##### `enabled_for_deployment`<sup>Optional</sup> <a name="enabled_for_deployment" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.enabledForDeployment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enabled_for_deployment KeyVault#enabled_for_deployment}.

---

##### `enabled_for_disk_encryption`<sup>Optional</sup> <a name="enabled_for_disk_encryption" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.enabledForDiskEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enabled_for_disk_encryption KeyVault#enabled_for_disk_encryption}.

---

##### `enabled_for_template_deployment`<sup>Optional</sup> <a name="enabled_for_template_deployment" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.enabledForTemplateDeployment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enabled_for_template_deployment KeyVault#enabled_for_template_deployment}.

---

##### `enable_rbac_authorization`<sup>Optional</sup> <a name="enable_rbac_authorization" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.enableRbacAuthorization"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enable_rbac_authorization KeyVault#enable_rbac_authorization}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#id KeyVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_acls`<sup>Optional</sup> <a name="network_acls" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.networkAcls"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

network_acls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#network_acls KeyVault#network_acls}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#public_network_access_enabled KeyVault#public_network_access_enabled}.

---

##### `purge_protection_enabled`<sup>Optional</sup> <a name="purge_protection_enabled" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.purgeProtectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#purge_protection_enabled KeyVault#purge_protection_enabled}.

---

##### `soft_delete_retention_days`<sup>Optional</sup> <a name="soft_delete_retention_days" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.softDeleteRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#soft_delete_retention_days KeyVault#soft_delete_retention_days}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#tags KeyVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#timeouts KeyVault#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.putAccessPolicy">put_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.putContact">put_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.putNetworkAcls">put_network_acls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetAccessPolicy">reset_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetContact">reset_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForDeployment">reset_enabled_for_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForDiskEncryption">reset_enabled_for_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForTemplateDeployment">reset_enabled_for_template_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetEnableRbacAuthorization">reset_enable_rbac_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetNetworkAcls">reset_network_acls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetPurgeProtectionEnabled">reset_purge_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetSoftDeleteRetentionDays">reset_soft_delete_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVault.KeyVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.keyVault.KeyVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVault.KeyVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVault.KeyVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.keyVault.KeyVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.keyVault.KeyVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.keyVault.KeyVault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.keyVault.KeyVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.keyVault.KeyVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.keyVault.KeyVault.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.keyVault.KeyVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.keyVault.KeyVault.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.keyVault.KeyVault.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVault.KeyVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_policy` <a name="put_access_policy" id="@cdktf/provider-azurerm.keyVault.KeyVault.putAccessPolicy"></a>

```python
def put_access_policy(
  value: typing.Union[IResolvable, typing.List[KeyVaultAccessPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVault.KeyVault.putAccessPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>]]

---

##### `put_contact` <a name="put_contact" id="@cdktf/provider-azurerm.keyVault.KeyVault.putContact"></a>

```python
def put_contact(
  value: typing.Union[IResolvable, typing.List[KeyVaultContact]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVault.KeyVault.putContact.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>]]

---

##### `put_network_acls` <a name="put_network_acls" id="@cdktf/provider-azurerm.keyVault.KeyVault.putNetworkAcls"></a>

```python
def put_network_acls(
  bypass: str,
  default_action: str,
  ip_rules: typing.List[str] = None,
  virtual_network_subnet_ids: typing.List[str] = None
) -> None
```

###### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.keyVault.KeyVault.putNetworkAcls.parameter.bypass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#bypass KeyVault#bypass}.

---

###### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.keyVault.KeyVault.putNetworkAcls.parameter.defaultAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#default_action KeyVault#default_action}.

---

###### `ip_rules`<sup>Optional</sup> <a name="ip_rules" id="@cdktf/provider-azurerm.keyVault.KeyVault.putNetworkAcls.parameter.ipRules"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#ip_rules KeyVault#ip_rules}.

---

###### `virtual_network_subnet_ids`<sup>Optional</sup> <a name="virtual_network_subnet_ids" id="@cdktf/provider-azurerm.keyVault.KeyVault.putNetworkAcls.parameter.virtualNetworkSubnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#virtual_network_subnet_ids KeyVault#virtual_network_subnet_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.keyVault.KeyVault.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVault.KeyVault.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#create KeyVault#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVault.KeyVault.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#delete KeyVault#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVault.KeyVault.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#read KeyVault#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVault.KeyVault.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#update KeyVault#update}.

---

##### `reset_access_policy` <a name="reset_access_policy" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetAccessPolicy"></a>

```python
def reset_access_policy() -> None
```

##### `reset_contact` <a name="reset_contact" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetContact"></a>

```python
def reset_contact() -> None
```

##### `reset_enabled_for_deployment` <a name="reset_enabled_for_deployment" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForDeployment"></a>

```python
def reset_enabled_for_deployment() -> None
```

##### `reset_enabled_for_disk_encryption` <a name="reset_enabled_for_disk_encryption" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForDiskEncryption"></a>

```python
def reset_enabled_for_disk_encryption() -> None
```

##### `reset_enabled_for_template_deployment` <a name="reset_enabled_for_template_deployment" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForTemplateDeployment"></a>

```python
def reset_enabled_for_template_deployment() -> None
```

##### `reset_enable_rbac_authorization` <a name="reset_enable_rbac_authorization" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetEnableRbacAuthorization"></a>

```python
def reset_enable_rbac_authorization() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_acls` <a name="reset_network_acls" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetNetworkAcls"></a>

```python
def reset_network_acls() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_purge_protection_enabled` <a name="reset_purge_protection_enabled" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetPurgeProtectionEnabled"></a>

```python
def reset_purge_protection_enabled() -> None
```

##### `reset_soft_delete_retention_days` <a name="reset_soft_delete_retention_days" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetSoftDeleteRetentionDays"></a>

```python
def reset_soft_delete_retention_days() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KeyVault resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.keyVault.KeyVault.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVault.KeyVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KeyVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KeyVault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KeyVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.accessPolicy">access_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList">KeyVaultAccessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.contact">contact</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList">KeyVaultContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.networkAcls">network_acls</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference">KeyVaultNetworkAclsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference">KeyVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.vaultUri">vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.accessPolicyInput">access_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.contactInput">contact_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDeploymentInput">enabled_for_deployment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDiskEncryptionInput">enabled_for_disk_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForTemplateDeploymentInput">enabled_for_template_deployment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enableRbacAuthorizationInput">enable_rbac_authorization_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.networkAclsInput">network_acls_input</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.purgeProtectionEnabledInput">purge_protection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.softDeleteRetentionDaysInput">soft_delete_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDeployment">enabled_for_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDiskEncryption">enabled_for_disk_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForTemplateDeployment">enabled_for_template_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enableRbacAuthorization">enable_rbac_authorization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.purgeProtectionEnabled">purge_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.softDeleteRetentionDays">soft_delete_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_policy`<sup>Required</sup> <a name="access_policy" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.accessPolicy"></a>

```python
access_policy: KeyVaultAccessPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList">KeyVaultAccessPolicyList</a>

---

##### `contact`<sup>Required</sup> <a name="contact" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.contact"></a>

```python
contact: KeyVaultContactList
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList">KeyVaultContactList</a>

---

##### `network_acls`<sup>Required</sup> <a name="network_acls" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.networkAcls"></a>

```python
network_acls: KeyVaultNetworkAclsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference">KeyVaultNetworkAclsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.timeouts"></a>

```python
timeouts: KeyVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference">KeyVaultTimeoutsOutputReference</a>

---

##### `vault_uri`<sup>Required</sup> <a name="vault_uri" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.vaultUri"></a>

```python
vault_uri: str
```

- *Type:* str

---

##### `access_policy_input`<sup>Optional</sup> <a name="access_policy_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.accessPolicyInput"></a>

```python
access_policy_input: typing.Union[IResolvable, typing.List[KeyVaultAccessPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>]]

---

##### `contact_input`<sup>Optional</sup> <a name="contact_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.contactInput"></a>

```python
contact_input: typing.Union[IResolvable, typing.List[KeyVaultContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>]]

---

##### `enabled_for_deployment_input`<sup>Optional</sup> <a name="enabled_for_deployment_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDeploymentInput"></a>

```python
enabled_for_deployment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_for_disk_encryption_input`<sup>Optional</sup> <a name="enabled_for_disk_encryption_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDiskEncryptionInput"></a>

```python
enabled_for_disk_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_for_template_deployment_input`<sup>Optional</sup> <a name="enabled_for_template_deployment_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForTemplateDeploymentInput"></a>

```python
enabled_for_template_deployment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_rbac_authorization_input`<sup>Optional</sup> <a name="enable_rbac_authorization_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enableRbacAuthorizationInput"></a>

```python
enable_rbac_authorization_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_acls_input`<sup>Optional</sup> <a name="network_acls_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.networkAclsInput"></a>

```python
network_acls_input: KeyVaultNetworkAcls
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `purge_protection_enabled_input`<sup>Optional</sup> <a name="purge_protection_enabled_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.purgeProtectionEnabledInput"></a>

```python
purge_protection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `soft_delete_retention_days_input`<sup>Optional</sup> <a name="soft_delete_retention_days_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.softDeleteRetentionDaysInput"></a>

```python
soft_delete_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KeyVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a>]

---

##### `enabled_for_deployment`<sup>Required</sup> <a name="enabled_for_deployment" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDeployment"></a>

```python
enabled_for_deployment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_for_disk_encryption`<sup>Required</sup> <a name="enabled_for_disk_encryption" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDiskEncryption"></a>

```python
enabled_for_disk_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_for_template_deployment`<sup>Required</sup> <a name="enabled_for_template_deployment" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForTemplateDeployment"></a>

```python
enabled_for_template_deployment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_rbac_authorization`<sup>Required</sup> <a name="enable_rbac_authorization" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enableRbacAuthorization"></a>

```python
enable_rbac_authorization: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `purge_protection_enabled`<sup>Required</sup> <a name="purge_protection_enabled" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.purgeProtectionEnabled"></a>

```python
purge_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `soft_delete_retention_days`<sup>Required</sup> <a name="soft_delete_retention_days" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.softDeleteRetentionDays"></a>

```python
soft_delete_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultAccessPolicy <a name="KeyVaultAccessPolicy" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVaultAccessPolicy(
  application_id: str = None,
  certificate_permissions: typing.List[str] = None,
  key_permissions: typing.List[str] = None,
  object_id: str = None,
  secret_permissions: typing.List[str] = None,
  storage_permissions: typing.List[str] = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#application_id KeyVault#application_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.certificatePermissions">certificate_permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#certificate_permissions KeyVault#certificate_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.keyPermissions">key_permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#key_permissions KeyVault#key_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#object_id KeyVault#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.secretPermissions">secret_permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#secret_permissions KeyVault#secret_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.storagePermissions">storage_permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#storage_permissions KeyVault#storage_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}. |

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#application_id KeyVault#application_id}.

---

##### `certificate_permissions`<sup>Optional</sup> <a name="certificate_permissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.certificatePermissions"></a>

```python
certificate_permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#certificate_permissions KeyVault#certificate_permissions}.

---

##### `key_permissions`<sup>Optional</sup> <a name="key_permissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.keyPermissions"></a>

```python
key_permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#key_permissions KeyVault#key_permissions}.

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#object_id KeyVault#object_id}.

---

##### `secret_permissions`<sup>Optional</sup> <a name="secret_permissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.secretPermissions"></a>

```python
secret_permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#secret_permissions KeyVault#secret_permissions}.

---

##### `storage_permissions`<sup>Optional</sup> <a name="storage_permissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.storagePermissions"></a>

```python
storage_permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#storage_permissions KeyVault#storage_permissions}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}.

---

### KeyVaultConfig <a name="KeyVaultConfig" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVaultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  tenant_id: str,
  access_policy: typing.Union[IResolvable, typing.List[KeyVaultAccessPolicy]] = None,
  contact: typing.Union[IResolvable, typing.List[KeyVaultContact]] = None,
  enabled_for_deployment: typing.Union[bool, IResolvable] = None,
  enabled_for_disk_encryption: typing.Union[bool, IResolvable] = None,
  enabled_for_template_deployment: typing.Union[bool, IResolvable] = None,
  enable_rbac_authorization: typing.Union[bool, IResolvable] = None,
  id: str = None,
  network_acls: KeyVaultNetworkAcls = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  purge_protection_enabled: typing.Union[bool, IResolvable] = None,
  soft_delete_retention_days: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: KeyVaultTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#location KeyVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#name KeyVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#resource_group_name KeyVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#sku_name KeyVault#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.accessPolicy">access_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#access_policy KeyVault#access_policy}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.contact">contact</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>]]</code> | contact block. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForDeployment">enabled_for_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enabled_for_deployment KeyVault#enabled_for_deployment}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForDiskEncryption">enabled_for_disk_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enabled_for_disk_encryption KeyVault#enabled_for_disk_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForTemplateDeployment">enabled_for_template_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enabled_for_template_deployment KeyVault#enabled_for_template_deployment}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enableRbacAuthorization">enable_rbac_authorization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enable_rbac_authorization KeyVault#enable_rbac_authorization}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#id KeyVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.networkAcls">network_acls</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a></code> | network_acls block. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#public_network_access_enabled KeyVault#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.purgeProtectionEnabled">purge_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#purge_protection_enabled KeyVault#purge_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.softDeleteRetentionDays">soft_delete_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#soft_delete_retention_days KeyVault#soft_delete_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#tags KeyVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#location KeyVault#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#name KeyVault#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#resource_group_name KeyVault#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#sku_name KeyVault#sku_name}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}.

---

##### `access_policy`<sup>Optional</sup> <a name="access_policy" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.accessPolicy"></a>

```python
access_policy: typing.Union[IResolvable, typing.List[KeyVaultAccessPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#access_policy KeyVault#access_policy}.

---

##### `contact`<sup>Optional</sup> <a name="contact" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.contact"></a>

```python
contact: typing.Union[IResolvable, typing.List[KeyVaultContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>]]

contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#contact KeyVault#contact}

---

##### `enabled_for_deployment`<sup>Optional</sup> <a name="enabled_for_deployment" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForDeployment"></a>

```python
enabled_for_deployment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enabled_for_deployment KeyVault#enabled_for_deployment}.

---

##### `enabled_for_disk_encryption`<sup>Optional</sup> <a name="enabled_for_disk_encryption" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForDiskEncryption"></a>

```python
enabled_for_disk_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enabled_for_disk_encryption KeyVault#enabled_for_disk_encryption}.

---

##### `enabled_for_template_deployment`<sup>Optional</sup> <a name="enabled_for_template_deployment" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForTemplateDeployment"></a>

```python
enabled_for_template_deployment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enabled_for_template_deployment KeyVault#enabled_for_template_deployment}.

---

##### `enable_rbac_authorization`<sup>Optional</sup> <a name="enable_rbac_authorization" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enableRbacAuthorization"></a>

```python
enable_rbac_authorization: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#enable_rbac_authorization KeyVault#enable_rbac_authorization}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#id KeyVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_acls`<sup>Optional</sup> <a name="network_acls" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.networkAcls"></a>

```python
network_acls: KeyVaultNetworkAcls
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

network_acls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#network_acls KeyVault#network_acls}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#public_network_access_enabled KeyVault#public_network_access_enabled}.

---

##### `purge_protection_enabled`<sup>Optional</sup> <a name="purge_protection_enabled" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.purgeProtectionEnabled"></a>

```python
purge_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#purge_protection_enabled KeyVault#purge_protection_enabled}.

---

##### `soft_delete_retention_days`<sup>Optional</sup> <a name="soft_delete_retention_days" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.softDeleteRetentionDays"></a>

```python
soft_delete_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#soft_delete_retention_days KeyVault#soft_delete_retention_days}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#tags KeyVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.timeouts"></a>

```python
timeouts: KeyVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#timeouts KeyVault#timeouts}

---

### KeyVaultContact <a name="KeyVaultContact" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVaultContact(
  email: str,
  name: str = None,
  phone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#email KeyVault#email}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#name KeyVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.phone">phone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#phone KeyVault#phone}. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#email KeyVault#email}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#name KeyVault#name}.

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.phone"></a>

```python
phone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#phone KeyVault#phone}.

---

### KeyVaultNetworkAcls <a name="KeyVaultNetworkAcls" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVaultNetworkAcls(
  bypass: str,
  default_action: str,
  ip_rules: typing.List[str] = None,
  virtual_network_subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.bypass">bypass</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#bypass KeyVault#bypass}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#default_action KeyVault#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.ipRules">ip_rules</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#ip_rules KeyVault#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.virtualNetworkSubnetIds">virtual_network_subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#virtual_network_subnet_ids KeyVault#virtual_network_subnet_ids}. |

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.bypass"></a>

```python
bypass: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#bypass KeyVault#bypass}.

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#default_action KeyVault#default_action}.

---

##### `ip_rules`<sup>Optional</sup> <a name="ip_rules" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.ipRules"></a>

```python
ip_rules: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#ip_rules KeyVault#ip_rules}.

---

##### `virtual_network_subnet_ids`<sup>Optional</sup> <a name="virtual_network_subnet_ids" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.virtualNetworkSubnetIds"></a>

```python
virtual_network_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#virtual_network_subnet_ids KeyVault#virtual_network_subnet_ids}.

---

### KeyVaultTimeouts <a name="KeyVaultTimeouts" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVaultTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#create KeyVault#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#delete KeyVault#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#read KeyVault#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#update KeyVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#create KeyVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#delete KeyVault#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#read KeyVault#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/key_vault#update KeyVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultAccessPolicyList <a name="KeyVaultAccessPolicyList" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVaultAccessPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KeyVaultAccessPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KeyVaultAccessPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>]]

---


### KeyVaultAccessPolicyOutputReference <a name="KeyVaultAccessPolicyOutputReference" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVaultAccessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetApplicationId">reset_application_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetCertificatePermissions">reset_certificate_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetKeyPermissions">reset_key_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetObjectId">reset_object_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetSecretPermissions">reset_secret_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetStoragePermissions">reset_storage_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_id` <a name="reset_application_id" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetApplicationId"></a>

```python
def reset_application_id() -> None
```

##### `reset_certificate_permissions` <a name="reset_certificate_permissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetCertificatePermissions"></a>

```python
def reset_certificate_permissions() -> None
```

##### `reset_key_permissions` <a name="reset_key_permissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetKeyPermissions"></a>

```python
def reset_key_permissions() -> None
```

##### `reset_object_id` <a name="reset_object_id" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetObjectId"></a>

```python
def reset_object_id() -> None
```

##### `reset_secret_permissions` <a name="reset_secret_permissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetSecretPermissions"></a>

```python
def reset_secret_permissions() -> None
```

##### `reset_storage_permissions` <a name="reset_storage_permissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetStoragePermissions"></a>

```python
def reset_storage_permissions() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissionsInput">certificate_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissionsInput">key_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissionsInput">secret_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissionsInput">storage_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissions">certificate_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissions">key_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissions">secret_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissions">storage_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `certificate_permissions_input`<sup>Optional</sup> <a name="certificate_permissions_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissionsInput"></a>

```python
certificate_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_permissions_input`<sup>Optional</sup> <a name="key_permissions_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissionsInput"></a>

```python
key_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `secret_permissions_input`<sup>Optional</sup> <a name="secret_permissions_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissionsInput"></a>

```python
secret_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_permissions_input`<sup>Optional</sup> <a name="storage_permissions_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissionsInput"></a>

```python
storage_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `certificate_permissions`<sup>Required</sup> <a name="certificate_permissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissions"></a>

```python
certificate_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_permissions`<sup>Required</sup> <a name="key_permissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissions"></a>

```python
key_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `secret_permissions`<sup>Required</sup> <a name="secret_permissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissions"></a>

```python
secret_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_permissions`<sup>Required</sup> <a name="storage_permissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissions"></a>

```python
storage_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeyVaultAccessPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy">KeyVaultAccessPolicy</a>]

---


### KeyVaultContactList <a name="KeyVaultContactList" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVaultContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KeyVaultContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KeyVaultContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>]]

---


### KeyVaultContactOutputReference <a name="KeyVaultContactOutputReference" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVaultContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resetPhone">reset_phone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_phone` <a name="reset_phone" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resetPhone"></a>

```python
def reset_phone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.phoneInput">phone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `phone_input`<sup>Optional</sup> <a name="phone_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.phoneInput"></a>

```python
phone_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeyVaultContact]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact">KeyVaultContact</a>]

---


### KeyVaultNetworkAclsOutputReference <a name="KeyVaultNetworkAclsOutputReference" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVaultNetworkAclsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resetIpRules">reset_ip_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resetVirtualNetworkSubnetIds">reset_virtual_network_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_rules` <a name="reset_ip_rules" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resetIpRules"></a>

```python
def reset_ip_rules() -> None
```

##### `reset_virtual_network_subnet_ids` <a name="reset_virtual_network_subnet_ids" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resetVirtualNetworkSubnetIds"></a>

```python
def reset_virtual_network_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.bypassInput">bypass_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultActionInput">default_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRulesInput">ip_rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIdsInput">virtual_network_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.bypass">bypass</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRules">ip_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIds">virtual_network_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bypass_input`<sup>Optional</sup> <a name="bypass_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.bypassInput"></a>

```python
bypass_input: str
```

- *Type:* str

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultActionInput"></a>

```python
default_action_input: str
```

- *Type:* str

---

##### `ip_rules_input`<sup>Optional</sup> <a name="ip_rules_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRulesInput"></a>

```python
ip_rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_network_subnet_ids_input`<sup>Optional</sup> <a name="virtual_network_subnet_ids_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIdsInput"></a>

```python
virtual_network_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.bypass"></a>

```python
bypass: str
```

- *Type:* str

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `ip_rules`<sup>Required</sup> <a name="ip_rules" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRules"></a>

```python
ip_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_network_subnet_ids`<sup>Required</sup> <a name="virtual_network_subnet_ids" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIds"></a>

```python
virtual_network_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.internalValue"></a>

```python
internal_value: KeyVaultNetworkAcls
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

---


### KeyVaultTimeoutsOutputReference <a name="KeyVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault

keyVault.KeyVaultTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeyVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a>]

---



