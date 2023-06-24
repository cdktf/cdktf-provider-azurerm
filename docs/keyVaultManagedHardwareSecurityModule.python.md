# `azurerm_key_vault_managed_hardware_security_module`

Refer to the Terraform Registory for docs: [`azurerm_key_vault_managed_hardware_security_module`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module).

# `keyVaultManagedHardwareSecurityModule` Submodule <a name="`keyVaultManagedHardwareSecurityModule` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedHardwareSecurityModule <a name="KeyVaultManagedHardwareSecurityModule" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module azurerm_key_vault_managed_hardware_security_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module

keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_object_ids: typing.List[str],
  location: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  tenant_id: str,
  id: str = None,
  network_acls: KeyVaultManagedHardwareSecurityModuleNetworkAcls = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  purge_protection_enabled: typing.Union[bool, IResolvable] = None,
  soft_delete_retention_days: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: KeyVaultManagedHardwareSecurityModuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.adminObjectIds">admin_object_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#admin_object_ids KeyVaultManagedHardwareSecurityModule#admin_object_ids}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#location KeyVaultManagedHardwareSecurityModule#location}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#name KeyVaultManagedHardwareSecurityModule#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#resource_group_name KeyVaultManagedHardwareSecurityModule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#sku_name KeyVaultManagedHardwareSecurityModule#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#tenant_id KeyVaultManagedHardwareSecurityModule#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#id KeyVaultManagedHardwareSecurityModule#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.networkAcls">network_acls</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a></code> | network_acls block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#public_network_access_enabled KeyVaultManagedHardwareSecurityModule#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.purgeProtectionEnabled">purge_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#purge_protection_enabled KeyVaultManagedHardwareSecurityModule#purge_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.softDeleteRetentionDays">soft_delete_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#soft_delete_retention_days KeyVaultManagedHardwareSecurityModule#soft_delete_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#tags KeyVaultManagedHardwareSecurityModule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_object_ids`<sup>Required</sup> <a name="admin_object_ids" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.adminObjectIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#admin_object_ids KeyVaultManagedHardwareSecurityModule#admin_object_ids}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#location KeyVaultManagedHardwareSecurityModule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#name KeyVaultManagedHardwareSecurityModule#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#resource_group_name KeyVaultManagedHardwareSecurityModule#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#sku_name KeyVaultManagedHardwareSecurityModule#sku_name}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#tenant_id KeyVaultManagedHardwareSecurityModule#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#id KeyVaultManagedHardwareSecurityModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_acls`<sup>Optional</sup> <a name="network_acls" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.networkAcls"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a>

network_acls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#network_acls KeyVaultManagedHardwareSecurityModule#network_acls}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#public_network_access_enabled KeyVaultManagedHardwareSecurityModule#public_network_access_enabled}.

---

##### `purge_protection_enabled`<sup>Optional</sup> <a name="purge_protection_enabled" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.purgeProtectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#purge_protection_enabled KeyVaultManagedHardwareSecurityModule#purge_protection_enabled}.

---

##### `soft_delete_retention_days`<sup>Optional</sup> <a name="soft_delete_retention_days" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.softDeleteRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#soft_delete_retention_days KeyVaultManagedHardwareSecurityModule#soft_delete_retention_days}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#tags KeyVaultManagedHardwareSecurityModule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#timeouts KeyVaultManagedHardwareSecurityModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putNetworkAcls">put_network_acls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetNetworkAcls">reset_network_acls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetPurgeProtectionEnabled">reset_purge_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetSoftDeleteRetentionDays">reset_soft_delete_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_network_acls` <a name="put_network_acls" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putNetworkAcls"></a>

```python
def put_network_acls(
  bypass: str,
  default_action: str
) -> None
```

###### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putNetworkAcls.parameter.bypass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#bypass KeyVaultManagedHardwareSecurityModule#bypass}.

---

###### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putNetworkAcls.parameter.defaultAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#default_action KeyVaultManagedHardwareSecurityModule#default_action}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#create KeyVaultManagedHardwareSecurityModule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#delete KeyVaultManagedHardwareSecurityModule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#read KeyVaultManagedHardwareSecurityModule#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_acls` <a name="reset_network_acls" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetNetworkAcls"></a>

```python
def reset_network_acls() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_purge_protection_enabled` <a name="reset_purge_protection_enabled" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetPurgeProtectionEnabled"></a>

```python
def reset_purge_protection_enabled() -> None
```

##### `reset_soft_delete_retention_days` <a name="reset_soft_delete_retention_days" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetSoftDeleteRetentionDays"></a>

```python
def reset_soft_delete_retention_days() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module

keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module

keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module

keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.hsmUri">hsm_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.networkAcls">network_acls</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference">KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.adminObjectIdsInput">admin_object_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.networkAclsInput">network_acls_input</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.purgeProtectionEnabledInput">purge_protection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.softDeleteRetentionDaysInput">soft_delete_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.adminObjectIds">admin_object_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.purgeProtectionEnabled">purge_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.softDeleteRetentionDays">soft_delete_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hsm_uri`<sup>Required</sup> <a name="hsm_uri" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.hsmUri"></a>

```python
hsm_uri: str
```

- *Type:* str

---

##### `network_acls`<sup>Required</sup> <a name="network_acls" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.networkAcls"></a>

```python
network_acls: KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference">KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.timeouts"></a>

```python
timeouts: KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference</a>

---

##### `admin_object_ids_input`<sup>Optional</sup> <a name="admin_object_ids_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.adminObjectIdsInput"></a>

```python
admin_object_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_acls_input`<sup>Optional</sup> <a name="network_acls_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.networkAclsInput"></a>

```python
network_acls_input: KeyVaultManagedHardwareSecurityModuleNetworkAcls
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a>

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `purge_protection_enabled_input`<sup>Optional</sup> <a name="purge_protection_enabled_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.purgeProtectionEnabledInput"></a>

```python
purge_protection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `soft_delete_retention_days_input`<sup>Optional</sup> <a name="soft_delete_retention_days_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.softDeleteRetentionDaysInput"></a>

```python
soft_delete_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KeyVaultManagedHardwareSecurityModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a>]

---

##### `admin_object_ids`<sup>Required</sup> <a name="admin_object_ids" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.adminObjectIds"></a>

```python
admin_object_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `purge_protection_enabled`<sup>Required</sup> <a name="purge_protection_enabled" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.purgeProtectionEnabled"></a>

```python
purge_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `soft_delete_retention_days`<sup>Required</sup> <a name="soft_delete_retention_days" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.softDeleteRetentionDays"></a>

```python
soft_delete_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedHardwareSecurityModuleConfig <a name="KeyVaultManagedHardwareSecurityModuleConfig" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module

keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_object_ids: typing.List[str],
  location: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  tenant_id: str,
  id: str = None,
  network_acls: KeyVaultManagedHardwareSecurityModuleNetworkAcls = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  purge_protection_enabled: typing.Union[bool, IResolvable] = None,
  soft_delete_retention_days: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: KeyVaultManagedHardwareSecurityModuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.adminObjectIds">admin_object_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#admin_object_ids KeyVaultManagedHardwareSecurityModule#admin_object_ids}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#location KeyVaultManagedHardwareSecurityModule#location}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#name KeyVaultManagedHardwareSecurityModule#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#resource_group_name KeyVaultManagedHardwareSecurityModule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#sku_name KeyVaultManagedHardwareSecurityModule#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#tenant_id KeyVaultManagedHardwareSecurityModule#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#id KeyVaultManagedHardwareSecurityModule#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.networkAcls">network_acls</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a></code> | network_acls block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#public_network_access_enabled KeyVaultManagedHardwareSecurityModule#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.purgeProtectionEnabled">purge_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#purge_protection_enabled KeyVaultManagedHardwareSecurityModule#purge_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.softDeleteRetentionDays">soft_delete_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#soft_delete_retention_days KeyVaultManagedHardwareSecurityModule#soft_delete_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#tags KeyVaultManagedHardwareSecurityModule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_object_ids`<sup>Required</sup> <a name="admin_object_ids" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.adminObjectIds"></a>

```python
admin_object_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#admin_object_ids KeyVaultManagedHardwareSecurityModule#admin_object_ids}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#location KeyVaultManagedHardwareSecurityModule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#name KeyVaultManagedHardwareSecurityModule#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#resource_group_name KeyVaultManagedHardwareSecurityModule#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#sku_name KeyVaultManagedHardwareSecurityModule#sku_name}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#tenant_id KeyVaultManagedHardwareSecurityModule#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#id KeyVaultManagedHardwareSecurityModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_acls`<sup>Optional</sup> <a name="network_acls" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.networkAcls"></a>

```python
network_acls: KeyVaultManagedHardwareSecurityModuleNetworkAcls
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a>

network_acls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#network_acls KeyVaultManagedHardwareSecurityModule#network_acls}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#public_network_access_enabled KeyVaultManagedHardwareSecurityModule#public_network_access_enabled}.

---

##### `purge_protection_enabled`<sup>Optional</sup> <a name="purge_protection_enabled" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.purgeProtectionEnabled"></a>

```python
purge_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#purge_protection_enabled KeyVaultManagedHardwareSecurityModule#purge_protection_enabled}.

---

##### `soft_delete_retention_days`<sup>Optional</sup> <a name="soft_delete_retention_days" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.softDeleteRetentionDays"></a>

```python
soft_delete_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#soft_delete_retention_days KeyVaultManagedHardwareSecurityModule#soft_delete_retention_days}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#tags KeyVaultManagedHardwareSecurityModule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleConfig.property.timeouts"></a>

```python
timeouts: KeyVaultManagedHardwareSecurityModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#timeouts KeyVaultManagedHardwareSecurityModule#timeouts}

---

### KeyVaultManagedHardwareSecurityModuleNetworkAcls <a name="KeyVaultManagedHardwareSecurityModuleNetworkAcls" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module

keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls(
  bypass: str,
  default_action: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls.property.bypass">bypass</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#bypass KeyVaultManagedHardwareSecurityModule#bypass}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls.property.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#default_action KeyVaultManagedHardwareSecurityModule#default_action}. |

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls.property.bypass"></a>

```python
bypass: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#bypass KeyVaultManagedHardwareSecurityModule#bypass}.

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#default_action KeyVaultManagedHardwareSecurityModule#default_action}.

---

### KeyVaultManagedHardwareSecurityModuleTimeouts <a name="KeyVaultManagedHardwareSecurityModuleTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module

keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#create KeyVaultManagedHardwareSecurityModule#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#delete KeyVaultManagedHardwareSecurityModule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#read KeyVaultManagedHardwareSecurityModule#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#create KeyVaultManagedHardwareSecurityModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#delete KeyVaultManagedHardwareSecurityModule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/key_vault_managed_hardware_security_module#read KeyVaultManagedHardwareSecurityModule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module

keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.bypassInput">bypass_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.defaultActionInput">default_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.bypass">bypass</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bypass_input`<sup>Optional</sup> <a name="bypass_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.bypassInput"></a>

```python
bypass_input: str
```

- *Type:* str

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.defaultActionInput"></a>

```python
default_action_input: str
```

- *Type:* str

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.bypass"></a>

```python
bypass: str
```

- *Type:* str

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference.property.internalValue"></a>

```python
internal_value: KeyVaultManagedHardwareSecurityModuleNetworkAcls
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleNetworkAcls">KeyVaultManagedHardwareSecurityModuleNetworkAcls</a>

---


### KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module

keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeyVaultManagedHardwareSecurityModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModule.KeyVaultManagedHardwareSecurityModuleTimeouts">KeyVaultManagedHardwareSecurityModuleTimeouts</a>]

---



