# `oracleAutonomousDatabaseBackup` Submodule <a name="`oracleAutonomousDatabaseBackup` Submodule" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleAutonomousDatabaseBackup <a name="OracleAutonomousDatabaseBackup" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup azurerm_oracle_autonomous_database_backup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_backup

oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_database_id: str,
  name: str,
  retention_period_in_days: typing.Union[int, float],
  id: str = None,
  timeouts: OracleAutonomousDatabaseBackupTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#autonomous_database_id OracleAutonomousDatabaseBackup#autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#name OracleAutonomousDatabaseBackup#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#retention_period_in_days OracleAutonomousDatabaseBackup#retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#id OracleAutonomousDatabaseBackup#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#type OracleAutonomousDatabaseBackup#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.autonomousDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#autonomous_database_id OracleAutonomousDatabaseBackup#autonomous_database_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#name OracleAutonomousDatabaseBackup#name}.

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.retentionPeriodInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#retention_period_in_days OracleAutonomousDatabaseBackup#retention_period_in_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#id OracleAutonomousDatabaseBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#timeouts OracleAutonomousDatabaseBackup#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#type OracleAutonomousDatabaseBackup#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#create OracleAutonomousDatabaseBackup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#delete OracleAutonomousDatabaseBackup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#read OracleAutonomousDatabaseBackup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#update OracleAutonomousDatabaseBackup#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OracleAutonomousDatabaseBackup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_backup

oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_backup

oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_backup

oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_backup

oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OracleAutonomousDatabaseBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OracleAutonomousDatabaseBackup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OracleAutonomousDatabaseBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OracleAutonomousDatabaseBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference">OracleAutonomousDatabaseBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.autonomousDatabaseIdInput">autonomous_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.retentionPeriodInDaysInput">retention_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.timeouts"></a>

```python
timeouts: OracleAutonomousDatabaseBackupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference">OracleAutonomousDatabaseBackupTimeoutsOutputReference</a>

---

##### `autonomous_database_id_input`<sup>Optional</sup> <a name="autonomous_database_id_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.autonomousDatabaseIdInput"></a>

```python
autonomous_database_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retention_period_in_days_input`<sup>Optional</sup> <a name="retention_period_in_days_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.retentionPeriodInDaysInput"></a>

```python
retention_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OracleAutonomousDatabaseBackupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OracleAutonomousDatabaseBackupConfig <a name="OracleAutonomousDatabaseBackupConfig" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_backup

oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_database_id: str,
  name: str,
  retention_period_in_days: typing.Union[int, float],
  id: str = None,
  timeouts: OracleAutonomousDatabaseBackupTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#autonomous_database_id OracleAutonomousDatabaseBackup#autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#name OracleAutonomousDatabaseBackup#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#retention_period_in_days OracleAutonomousDatabaseBackup#retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#id OracleAutonomousDatabaseBackup#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#type OracleAutonomousDatabaseBackup#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#autonomous_database_id OracleAutonomousDatabaseBackup#autonomous_database_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#name OracleAutonomousDatabaseBackup#name}.

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#retention_period_in_days OracleAutonomousDatabaseBackup#retention_period_in_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#id OracleAutonomousDatabaseBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.timeouts"></a>

```python
timeouts: OracleAutonomousDatabaseBackupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#timeouts OracleAutonomousDatabaseBackup#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#type OracleAutonomousDatabaseBackup#type}.

---

### OracleAutonomousDatabaseBackupTimeouts <a name="OracleAutonomousDatabaseBackupTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_backup

oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#create OracleAutonomousDatabaseBackup#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#delete OracleAutonomousDatabaseBackup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#read OracleAutonomousDatabaseBackup#read}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#update OracleAutonomousDatabaseBackup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#create OracleAutonomousDatabaseBackup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#delete OracleAutonomousDatabaseBackup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#read OracleAutonomousDatabaseBackup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/oracle_autonomous_database_backup#update OracleAutonomousDatabaseBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleAutonomousDatabaseBackupTimeoutsOutputReference <a name="OracleAutonomousDatabaseBackupTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_backup

oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OracleAutonomousDatabaseBackupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a>]

---



