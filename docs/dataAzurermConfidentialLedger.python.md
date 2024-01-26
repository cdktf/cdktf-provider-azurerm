# `dataAzurermConfidentialLedger` Submodule <a name="`dataAzurermConfidentialLedger` Submodule" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermConfidentialLedger <a name="DataAzurermConfidentialLedger" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger azurerm_confidential_ledger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_confidential_ledger

dataAzurermConfidentialLedger.DataAzurermConfidentialLedger(
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
  timeouts: DataAzurermConfidentialLedgerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#name DataAzurermConfidentialLedger#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#resource_group_name DataAzurermConfidentialLedger#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#id DataAzurermConfidentialLedger#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#name DataAzurermConfidentialLedger#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#resource_group_name DataAzurermConfidentialLedger#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#id DataAzurermConfidentialLedger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#timeouts DataAzurermConfidentialLedger#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#read DataAzurermConfidentialLedger#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermConfidentialLedger resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_confidential_ledger

dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_confidential_ledger

dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_confidential_ledger

dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_confidential_ledger

dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermConfidentialLedger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermConfidentialLedger to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermConfidentialLedger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermConfidentialLedger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.azureadBasedServicePrincipal">azuread_based_service_principal</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList">DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.certificateBasedSecurityPrincipal">certificate_based_security_principal</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList">DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.identityServiceEndpoint">identity_service_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.ledgerEndpoint">ledger_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.ledgerType">ledger_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference">DataAzurermConfidentialLedgerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `azuread_based_service_principal`<sup>Required</sup> <a name="azuread_based_service_principal" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.azureadBasedServicePrincipal"></a>

```python
azuread_based_service_principal: DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList">DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList</a>

---

##### `certificate_based_security_principal`<sup>Required</sup> <a name="certificate_based_security_principal" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.certificateBasedSecurityPrincipal"></a>

```python
certificate_based_security_principal: DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList">DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList</a>

---

##### `identity_service_endpoint`<sup>Required</sup> <a name="identity_service_endpoint" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.identityServiceEndpoint"></a>

```python
identity_service_endpoint: str
```

- *Type:* str

---

##### `ledger_endpoint`<sup>Required</sup> <a name="ledger_endpoint" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.ledgerEndpoint"></a>

```python
ledger_endpoint: str
```

- *Type:* str

---

##### `ledger_type`<sup>Required</sup> <a name="ledger_type" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.ledgerType"></a>

```python
ledger_type: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.timeouts"></a>

```python
timeouts: DataAzurermConfidentialLedgerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference">DataAzurermConfidentialLedgerTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermConfidentialLedgerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermConfidentialLedgerAzureadBasedServicePrincipal <a name="DataAzurermConfidentialLedgerAzureadBasedServicePrincipal" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_confidential_ledger

dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal()
```


### DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal <a name="DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_confidential_ledger

dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal()
```


### DataAzurermConfidentialLedgerConfig <a name="DataAzurermConfidentialLedgerConfig" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_confidential_ledger

dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig(
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
  timeouts: DataAzurermConfidentialLedgerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#name DataAzurermConfidentialLedger#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#resource_group_name DataAzurermConfidentialLedger#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#id DataAzurermConfidentialLedger#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#name DataAzurermConfidentialLedger#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#resource_group_name DataAzurermConfidentialLedger#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#id DataAzurermConfidentialLedger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.timeouts"></a>

```python
timeouts: DataAzurermConfidentialLedgerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#timeouts DataAzurermConfidentialLedger#timeouts}

---

### DataAzurermConfidentialLedgerTimeouts <a name="DataAzurermConfidentialLedgerTimeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_confidential_ledger

dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#read DataAzurermConfidentialLedger#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/confidential_ledger#read DataAzurermConfidentialLedger#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList <a name="DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_confidential_ledger

dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference <a name="DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_confidential_ledger

dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.ledgerRoleName">ledger_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal">DataAzurermConfidentialLedgerAzureadBasedServicePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ledger_role_name`<sup>Required</sup> <a name="ledger_role_name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.ledgerRoleName"></a>

```python
ledger_role_name: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermConfidentialLedgerAzureadBasedServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal">DataAzurermConfidentialLedgerAzureadBasedServicePrincipal</a>

---


### DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList <a name="DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_confidential_ledger

dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference <a name="DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_confidential_ledger

dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.ledgerRoleName">ledger_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.pemPublicKey">pem_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal">DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ledger_role_name`<sup>Required</sup> <a name="ledger_role_name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.ledgerRoleName"></a>

```python
ledger_role_name: str
```

- *Type:* str

---

##### `pem_public_key`<sup>Required</sup> <a name="pem_public_key" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.pemPublicKey"></a>

```python
pem_public_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal">DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal</a>

---


### DataAzurermConfidentialLedgerTimeoutsOutputReference <a name="DataAzurermConfidentialLedgerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_confidential_ledger

dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermConfidentialLedgerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a>]

---



