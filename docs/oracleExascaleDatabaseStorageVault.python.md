# `oracleExascaleDatabaseStorageVault` Submodule <a name="`oracleExascaleDatabaseStorageVault` Submodule" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleExascaleDatabaseStorageVault <a name="OracleExascaleDatabaseStorageVault" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault azurerm_oracle_exascale_database_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_exascale_database_storage_vault

oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_flash_cache_percentage: typing.Union[int, float],
  display_name: str,
  high_capacity_database_storage: OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage,
  location: str,
  name: str,
  resource_group_name: str,
  zones: typing.List[str],
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: OracleExascaleDatabaseStorageVaultTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.additionalFlashCachePercentage">additional_flash_cache_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#additional_flash_cache_percentage OracleExascaleDatabaseStorageVault#additional_flash_cache_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#display_name OracleExascaleDatabaseStorageVault#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.highCapacityDatabaseStorage">high_capacity_database_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | high_capacity_database_storage block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#location OracleExascaleDatabaseStorageVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#name OracleExascaleDatabaseStorageVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#resource_group_name OracleExascaleDatabaseStorageVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#zones OracleExascaleDatabaseStorageVault#zones}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#description OracleExascaleDatabaseStorageVault#description}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#id OracleExascaleDatabaseStorageVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#tags OracleExascaleDatabaseStorageVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#time_zone OracleExascaleDatabaseStorageVault#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `additional_flash_cache_percentage`<sup>Required</sup> <a name="additional_flash_cache_percentage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.additionalFlashCachePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#additional_flash_cache_percentage OracleExascaleDatabaseStorageVault#additional_flash_cache_percentage}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#display_name OracleExascaleDatabaseStorageVault#display_name}.

---

##### `high_capacity_database_storage`<sup>Required</sup> <a name="high_capacity_database_storage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.highCapacityDatabaseStorage"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

high_capacity_database_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#high_capacity_database_storage OracleExascaleDatabaseStorageVault#high_capacity_database_storage}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#location OracleExascaleDatabaseStorageVault#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#name OracleExascaleDatabaseStorageVault#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#resource_group_name OracleExascaleDatabaseStorageVault#resource_group_name}.

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.zones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#zones OracleExascaleDatabaseStorageVault#zones}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#description OracleExascaleDatabaseStorageVault#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#id OracleExascaleDatabaseStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#tags OracleExascaleDatabaseStorageVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#timeouts OracleExascaleDatabaseStorageVault#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#time_zone OracleExascaleDatabaseStorageVault#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage">put_high_capacity_database_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_high_capacity_database_storage` <a name="put_high_capacity_database_storage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage"></a>

```python
def put_high_capacity_database_storage(
  total_size_in_gb: typing.Union[int, float]
) -> None
```

###### `total_size_in_gb`<sup>Required</sup> <a name="total_size_in_gb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage.parameter.totalSizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#total_size_in_gb OracleExascaleDatabaseStorageVault#total_size_in_gb}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#create OracleExascaleDatabaseStorageVault#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#delete OracleExascaleDatabaseStorageVault#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#read OracleExascaleDatabaseStorageVault#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#update OracleExascaleDatabaseStorageVault#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OracleExascaleDatabaseStorageVault resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_exascale_database_storage_vault

oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_exascale_database_storage_vault

oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_exascale_database_storage_vault

oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_exascale_database_storage_vault

oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OracleExascaleDatabaseStorageVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OracleExascaleDatabaseStorageVault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OracleExascaleDatabaseStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OracleExascaleDatabaseStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorage">high_capacity_database_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference">OracleExascaleDatabaseStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentageInput">additional_flash_cache_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorageInput">high_capacity_database_storage_input</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentage">additional_flash_cache_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `high_capacity_database_storage`<sup>Required</sup> <a name="high_capacity_database_storage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorage"></a>

```python
high_capacity_database_storage: OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeouts"></a>

```python
timeouts: OracleExascaleDatabaseStorageVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference">OracleExascaleDatabaseStorageVaultTimeoutsOutputReference</a>

---

##### `additional_flash_cache_percentage_input`<sup>Optional</sup> <a name="additional_flash_cache_percentage_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentageInput"></a>

```python
additional_flash_cache_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `high_capacity_database_storage_input`<sup>Optional</sup> <a name="high_capacity_database_storage_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorageInput"></a>

```python
high_capacity_database_storage_input: OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OracleExascaleDatabaseStorageVaultTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_flash_cache_percentage`<sup>Required</sup> <a name="additional_flash_cache_percentage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentage"></a>

```python
additional_flash_cache_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OracleExascaleDatabaseStorageVaultConfig <a name="OracleExascaleDatabaseStorageVaultConfig" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_exascale_database_storage_vault

oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_flash_cache_percentage: typing.Union[int, float],
  display_name: str,
  high_capacity_database_storage: OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage,
  location: str,
  name: str,
  resource_group_name: str,
  zones: typing.List[str],
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: OracleExascaleDatabaseStorageVaultTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.additionalFlashCachePercentage">additional_flash_cache_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#additional_flash_cache_percentage OracleExascaleDatabaseStorageVault#additional_flash_cache_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#display_name OracleExascaleDatabaseStorageVault#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.highCapacityDatabaseStorage">high_capacity_database_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | high_capacity_database_storage block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#location OracleExascaleDatabaseStorageVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#name OracleExascaleDatabaseStorageVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#resource_group_name OracleExascaleDatabaseStorageVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#zones OracleExascaleDatabaseStorageVault#zones}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#description OracleExascaleDatabaseStorageVault#description}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#id OracleExascaleDatabaseStorageVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#tags OracleExascaleDatabaseStorageVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#time_zone OracleExascaleDatabaseStorageVault#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `additional_flash_cache_percentage`<sup>Required</sup> <a name="additional_flash_cache_percentage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.additionalFlashCachePercentage"></a>

```python
additional_flash_cache_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#additional_flash_cache_percentage OracleExascaleDatabaseStorageVault#additional_flash_cache_percentage}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#display_name OracleExascaleDatabaseStorageVault#display_name}.

---

##### `high_capacity_database_storage`<sup>Required</sup> <a name="high_capacity_database_storage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.highCapacityDatabaseStorage"></a>

```python
high_capacity_database_storage: OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

high_capacity_database_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#high_capacity_database_storage OracleExascaleDatabaseStorageVault#high_capacity_database_storage}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#location OracleExascaleDatabaseStorageVault#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#name OracleExascaleDatabaseStorageVault#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#resource_group_name OracleExascaleDatabaseStorageVault#resource_group_name}.

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#zones OracleExascaleDatabaseStorageVault#zones}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#description OracleExascaleDatabaseStorageVault#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#id OracleExascaleDatabaseStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#tags OracleExascaleDatabaseStorageVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeouts"></a>

```python
timeouts: OracleExascaleDatabaseStorageVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#timeouts OracleExascaleDatabaseStorageVault#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#time_zone OracleExascaleDatabaseStorageVault#time_zone}.

---

### OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage <a name="OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_exascale_database_storage_vault

oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage(
  total_size_in_gb: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGb">total_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#total_size_in_gb OracleExascaleDatabaseStorageVault#total_size_in_gb}. |

---

##### `total_size_in_gb`<sup>Required</sup> <a name="total_size_in_gb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGb"></a>

```python
total_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#total_size_in_gb OracleExascaleDatabaseStorageVault#total_size_in_gb}.

---

### OracleExascaleDatabaseStorageVaultTimeouts <a name="OracleExascaleDatabaseStorageVaultTimeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_exascale_database_storage_vault

oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#create OracleExascaleDatabaseStorageVault#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#delete OracleExascaleDatabaseStorageVault#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#read OracleExascaleDatabaseStorageVault#read}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#update OracleExascaleDatabaseStorageVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#create OracleExascaleDatabaseStorageVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#delete OracleExascaleDatabaseStorageVault#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#read OracleExascaleDatabaseStorageVault#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#update OracleExascaleDatabaseStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference <a name="OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_exascale_database_storage_vault

oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGb">available_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbInput">total_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGb">total_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_size_in_gb`<sup>Required</sup> <a name="available_size_in_gb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGb"></a>

```python
available_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_size_in_gb_input`<sup>Optional</sup> <a name="total_size_in_gb_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbInput"></a>

```python
total_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_size_in_gb`<sup>Required</sup> <a name="total_size_in_gb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGb"></a>

```python
total_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```python
internal_value: OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---


### OracleExascaleDatabaseStorageVaultTimeoutsOutputReference <a name="OracleExascaleDatabaseStorageVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_exascale_database_storage_vault

oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OracleExascaleDatabaseStorageVaultTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

---



