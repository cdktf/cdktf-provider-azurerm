# `dataProtectionBackupInstanceMysqlFlexibleServer` Submodule <a name="`dataProtectionBackupInstanceMysqlFlexibleServer` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstanceMysqlFlexibleServer <a name="DataProtectionBackupInstanceMysqlFlexibleServer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server azurerm_data_protection_backup_instance_mysql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_mysql_flexible_server

dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_policy_id: str,
  location: str,
  name: str,
  server_id: str,
  vault_id: str,
  id: str = None,
  timeouts: DataProtectionBackupInstanceMysqlFlexibleServerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#backup_policy_id DataProtectionBackupInstanceMysqlFlexibleServer#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#location DataProtectionBackupInstanceMysqlFlexibleServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#name DataProtectionBackupInstanceMysqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#server_id DataProtectionBackupInstanceMysqlFlexibleServer#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#vault_id DataProtectionBackupInstanceMysqlFlexibleServer#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#id DataProtectionBackupInstanceMysqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts">DataProtectionBackupInstanceMysqlFlexibleServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backup_policy_id`<sup>Required</sup> <a name="backup_policy_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.backupPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#backup_policy_id DataProtectionBackupInstanceMysqlFlexibleServer#backup_policy_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#location DataProtectionBackupInstanceMysqlFlexibleServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#name DataProtectionBackupInstanceMysqlFlexibleServer#name}.

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.serverId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#server_id DataProtectionBackupInstanceMysqlFlexibleServer#server_id}.

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#vault_id DataProtectionBackupInstanceMysqlFlexibleServer#vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#id DataProtectionBackupInstanceMysqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts">DataProtectionBackupInstanceMysqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#timeouts DataProtectionBackupInstanceMysqlFlexibleServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#create DataProtectionBackupInstanceMysqlFlexibleServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#delete DataProtectionBackupInstanceMysqlFlexibleServer#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#read DataProtectionBackupInstanceMysqlFlexibleServer#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#update DataProtectionBackupInstanceMysqlFlexibleServer#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataProtectionBackupInstanceMysqlFlexibleServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_mysql_flexible_server

dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_mysql_flexible_server

dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_mysql_flexible_server

dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_mysql_flexible_server

dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataProtectionBackupInstanceMysqlFlexibleServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataProtectionBackupInstanceMysqlFlexibleServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataProtectionBackupInstanceMysqlFlexibleServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupInstanceMysqlFlexibleServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.backupPolicyIdInput">backup_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts">DataProtectionBackupInstanceMysqlFlexibleServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.timeouts"></a>

```python
timeouts: DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference</a>

---

##### `backup_policy_id_input`<sup>Optional</sup> <a name="backup_policy_id_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.backupPolicyIdInput"></a>

```python
backup_policy_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataProtectionBackupInstanceMysqlFlexibleServerTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts">DataProtectionBackupInstanceMysqlFlexibleServerTimeouts</a>

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `backup_policy_id`<sup>Required</sup> <a name="backup_policy_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstanceMysqlFlexibleServerConfig <a name="DataProtectionBackupInstanceMysqlFlexibleServerConfig" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_mysql_flexible_server

dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_policy_id: str,
  location: str,
  name: str,
  server_id: str,
  vault_id: str,
  id: str = None,
  timeouts: DataProtectionBackupInstanceMysqlFlexibleServerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#backup_policy_id DataProtectionBackupInstanceMysqlFlexibleServer#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#location DataProtectionBackupInstanceMysqlFlexibleServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#name DataProtectionBackupInstanceMysqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#server_id DataProtectionBackupInstanceMysqlFlexibleServer#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#vault_id DataProtectionBackupInstanceMysqlFlexibleServer#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#id DataProtectionBackupInstanceMysqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts">DataProtectionBackupInstanceMysqlFlexibleServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backup_policy_id`<sup>Required</sup> <a name="backup_policy_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#backup_policy_id DataProtectionBackupInstanceMysqlFlexibleServer#backup_policy_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#location DataProtectionBackupInstanceMysqlFlexibleServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#name DataProtectionBackupInstanceMysqlFlexibleServer#name}.

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#server_id DataProtectionBackupInstanceMysqlFlexibleServer#server_id}.

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#vault_id DataProtectionBackupInstanceMysqlFlexibleServer#vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#id DataProtectionBackupInstanceMysqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerConfig.property.timeouts"></a>

```python
timeouts: DataProtectionBackupInstanceMysqlFlexibleServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts">DataProtectionBackupInstanceMysqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#timeouts DataProtectionBackupInstanceMysqlFlexibleServer#timeouts}

---

### DataProtectionBackupInstanceMysqlFlexibleServerTimeouts <a name="DataProtectionBackupInstanceMysqlFlexibleServerTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_mysql_flexible_server

dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#create DataProtectionBackupInstanceMysqlFlexibleServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#delete DataProtectionBackupInstanceMysqlFlexibleServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#read DataProtectionBackupInstanceMysqlFlexibleServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#update DataProtectionBackupInstanceMysqlFlexibleServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#create DataProtectionBackupInstanceMysqlFlexibleServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#delete DataProtectionBackupInstanceMysqlFlexibleServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#read DataProtectionBackupInstanceMysqlFlexibleServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_instance_mysql_flexible_server#update DataProtectionBackupInstanceMysqlFlexibleServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference <a name="DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_instance_mysql_flexible_server

dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts">DataProtectionBackupInstanceMysqlFlexibleServerTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataProtectionBackupInstanceMysqlFlexibleServerTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceMysqlFlexibleServer.DataProtectionBackupInstanceMysqlFlexibleServerTimeouts">DataProtectionBackupInstanceMysqlFlexibleServerTimeouts</a>

---



