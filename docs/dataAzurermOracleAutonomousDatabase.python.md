# `dataAzurermOracleAutonomousDatabase` Submodule <a name="`dataAzurermOracleAutonomousDatabase` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAutonomousDatabase <a name="DataAzurermOracleAutonomousDatabase" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database azurerm_oracle_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database

dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermOracleAutonomousDatabaseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#name DataAzurermOracleAutonomousDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#resource_group_name DataAzurermOracleAutonomousDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#id DataAzurermOracleAutonomousDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#name DataAzurermOracleAutonomousDatabase#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#resource_group_name DataAzurermOracleAutonomousDatabase#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#id DataAzurermOracleAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#timeouts DataAzurermOracleAutonomousDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#read DataAzurermOracleAutonomousDatabase#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database

dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database

dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database

dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database

dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermOracleAutonomousDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermOracleAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">actual_used_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.allocatedStorageSizeInTbs">allocated_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.allowedIps">allowed_ips</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autoScalingEnabled">auto_scaling_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autoScalingForStorageEnabled">auto_scaling_for_storage_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.availableUpgradeVersions">available_upgrade_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dataStorageSizeInGbs">data_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.failedDataRecoveryInSeconds">failed_data_recovery_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.inMemoryAreaInGbs">in_memory_area_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">local_adg_auto_failover_max_data_loss_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.localDataGuardEnabled">local_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs">memory_per_oracle_compute_unit_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.mtlsConnectionRequired">mtls_connection_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nationalCharacterSet">national_character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nextLongTermBackupTimeStamp">next_long_term_backup_time_stamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.peerDbId">peer_db_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.peerDbIds">peer_db_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.preview">preview</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.previewVersionWithServiceTermsAccepted">preview_version_with_service_terms_accepted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpoint">private_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpointLabel">private_endpoint_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.provisionableCpus">provisionable_cpus</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.remoteDataGuardEnabled">remote_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.serviceConsoleUrl">service_console_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.sqlWebDeveloperUrl">sql_web_developer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.supportedRegionsToCloneTo">supported_regions_to_clone_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeDataGuardRoleChanged">time_data_guard_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase">time_deletion_of_free_autonomous_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeLocalDataGuardEnabledOn">time_local_data_guard_enabled_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeMaintenanceBegin">time_maintenance_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeMaintenanceEnd">time_maintenance_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastFailover">time_of_last_failover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastRefresh">time_of_last_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastRefreshPoint">time_of_last_refresh_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastSwitchover">time_of_last_switchover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase">time_reclamation_of_free_autonomous_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.usedDataStorageSizeInGbs">used_data_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.usedDataStorageSizeInTbs">used_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `actual_used_data_storage_size_in_tbs`<sup>Required</sup> <a name="actual_used_data_storage_size_in_tbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```python
actual_used_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocated_storage_size_in_tbs`<sup>Required</sup> <a name="allocated_storage_size_in_tbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```python
allocated_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_ips`<sup>Required</sup> <a name="allowed_ips" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.allowedIps"></a>

```python
allowed_ips: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `auto_scaling_enabled`<sup>Required</sup> <a name="auto_scaling_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autoScalingEnabled"></a>

```python
auto_scaling_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_scaling_for_storage_enabled`<sup>Required</sup> <a name="auto_scaling_for_storage_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autoScalingForStorageEnabled"></a>

```python
auto_scaling_for_storage_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `available_upgrade_versions`<sup>Required</sup> <a name="available_upgrade_versions" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.availableUpgradeVersions"></a>

```python
available_upgrade_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_retention_period_in_days`<sup>Required</sup> <a name="backup_retention_period_in_days" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```python
backup_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_gbs`<sup>Required</sup> <a name="data_storage_size_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dataStorageSizeInGbs"></a>

```python
data_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs`<sup>Required</sup> <a name="db_node_storage_size_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `failed_data_recovery_in_seconds`<sup>Required</sup> <a name="failed_data_recovery_in_seconds" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.failedDataRecoveryInSeconds"></a>

```python
failed_data_recovery_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_memory_area_in_gbs`<sup>Required</sup> <a name="in_memory_area_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.inMemoryAreaInGbs"></a>

```python
in_memory_area_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `local_adg_auto_failover_max_data_loss_limit`<sup>Required</sup> <a name="local_adg_auto_failover_max_data_loss_limit" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```python
local_adg_auto_failover_max_data_loss_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_data_guard_enabled`<sup>Required</sup> <a name="local_data_guard_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.localDataGuardEnabled"></a>

```python
local_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `memory_per_oracle_compute_unit_in_gbs`<sup>Required</sup> <a name="memory_per_oracle_compute_unit_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs"></a>

```python
memory_per_oracle_compute_unit_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mtls_connection_required`<sup>Required</sup> <a name="mtls_connection_required" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.mtlsConnectionRequired"></a>

```python
mtls_connection_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `national_character_set`<sup>Required</sup> <a name="national_character_set" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nationalCharacterSet"></a>

```python
national_character_set: str
```

- *Type:* str

---

##### `next_long_term_backup_time_stamp`<sup>Required</sup> <a name="next_long_term_backup_time_stamp" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nextLongTermBackupTimeStamp"></a>

```python
next_long_term_backup_time_stamp: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `peer_db_id`<sup>Required</sup> <a name="peer_db_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.peerDbId"></a>

```python
peer_db_id: str
```

- *Type:* str

---

##### `peer_db_ids`<sup>Required</sup> <a name="peer_db_ids" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.peerDbIds"></a>

```python
peer_db_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.preview"></a>

```python
preview: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `preview_version_with_service_terms_accepted`<sup>Required</sup> <a name="preview_version_with_service_terms_accepted" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.previewVersionWithServiceTermsAccepted"></a>

```python
preview_version_with_service_terms_accepted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `private_endpoint`<sup>Required</sup> <a name="private_endpoint" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpoint"></a>

```python
private_endpoint: str
```

- *Type:* str

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `private_endpoint_label`<sup>Required</sup> <a name="private_endpoint_label" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpointLabel"></a>

```python
private_endpoint_label: str
```

- *Type:* str

---

##### `provisionable_cpus`<sup>Required</sup> <a name="provisionable_cpus" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.provisionableCpus"></a>

```python
provisionable_cpus: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `remote_data_guard_enabled`<sup>Required</sup> <a name="remote_data_guard_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.remoteDataGuardEnabled"></a>

```python
remote_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `service_console_url`<sup>Required</sup> <a name="service_console_url" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.serviceConsoleUrl"></a>

```python
service_console_url: str
```

- *Type:* str

---

##### `sql_web_developer_url`<sup>Required</sup> <a name="sql_web_developer_url" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.sqlWebDeveloperUrl"></a>

```python
sql_web_developer_url: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `supported_regions_to_clone_to`<sup>Required</sup> <a name="supported_regions_to_clone_to" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.supportedRegionsToCloneTo"></a>

```python
supported_regions_to_clone_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_data_guard_role_changed`<sup>Required</sup> <a name="time_data_guard_role_changed" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeDataGuardRoleChanged"></a>

```python
time_data_guard_role_changed: str
```

- *Type:* str

---

##### `time_deletion_of_free_autonomous_database`<sup>Required</sup> <a name="time_deletion_of_free_autonomous_database" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase"></a>

```python
time_deletion_of_free_autonomous_database: str
```

- *Type:* str

---

##### `time_local_data_guard_enabled_on`<sup>Required</sup> <a name="time_local_data_guard_enabled_on" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeLocalDataGuardEnabledOn"></a>

```python
time_local_data_guard_enabled_on: str
```

- *Type:* str

---

##### `time_maintenance_begin`<sup>Required</sup> <a name="time_maintenance_begin" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeMaintenanceBegin"></a>

```python
time_maintenance_begin: str
```

- *Type:* str

---

##### `time_maintenance_end`<sup>Required</sup> <a name="time_maintenance_end" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeMaintenanceEnd"></a>

```python
time_maintenance_end: str
```

- *Type:* str

---

##### `time_of_last_failover`<sup>Required</sup> <a name="time_of_last_failover" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastFailover"></a>

```python
time_of_last_failover: str
```

- *Type:* str

---

##### `time_of_last_refresh`<sup>Required</sup> <a name="time_of_last_refresh" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastRefresh"></a>

```python
time_of_last_refresh: str
```

- *Type:* str

---

##### `time_of_last_refresh_point`<sup>Required</sup> <a name="time_of_last_refresh_point" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastRefreshPoint"></a>

```python
time_of_last_refresh_point: str
```

- *Type:* str

---

##### `time_of_last_switchover`<sup>Required</sup> <a name="time_of_last_switchover" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastSwitchover"></a>

```python
time_of_last_switchover: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeouts"></a>

```python
timeouts: DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `time_reclamation_of_free_autonomous_database`<sup>Required</sup> <a name="time_reclamation_of_free_autonomous_database" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase"></a>

```python
time_reclamation_of_free_autonomous_database: str
```

- *Type:* str

---

##### `used_data_storage_size_in_gbs`<sup>Required</sup> <a name="used_data_storage_size_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.usedDataStorageSizeInGbs"></a>

```python
used_data_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_data_storage_size_in_tbs`<sup>Required</sup> <a name="used_data_storage_size_in_tbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.usedDataStorageSizeInTbs"></a>

```python
used_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermOracleAutonomousDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAutonomousDatabaseConfig <a name="DataAzurermOracleAutonomousDatabaseConfig" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database

dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermOracleAutonomousDatabaseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#name DataAzurermOracleAutonomousDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#resource_group_name DataAzurermOracleAutonomousDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#id DataAzurermOracleAutonomousDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#name DataAzurermOracleAutonomousDatabase#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#resource_group_name DataAzurermOracleAutonomousDatabase#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#id DataAzurermOracleAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.timeouts"></a>

```python
timeouts: DataAzurermOracleAutonomousDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#timeouts DataAzurermOracleAutonomousDatabase#timeouts}

---

### DataAzurermOracleAutonomousDatabaseTimeouts <a name="DataAzurermOracleAutonomousDatabaseTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database

dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#read DataAzurermOracleAutonomousDatabase#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/oracle_autonomous_database#read DataAzurermOracleAutonomousDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference <a name="DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database

dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermOracleAutonomousDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseTimeouts</a>]

---



