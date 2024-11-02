# `dataAzurermOracleDbNodes` Submodule <a name="`dataAzurermOracleDbNodes` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleDbNodes <a name="DataAzurermOracleDbNodes" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes azurerm_oracle_db_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_db_nodes

dataAzurermOracleDbNodes.DataAzurermOracleDbNodes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_vm_cluster_id: str,
  id: str = None,
  timeouts: DataAzurermOracleDbNodesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes#cloud_vm_cluster_id DataAzurermOracleDbNodes#cloud_vm_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes#id DataAzurermOracleDbNodes#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.cloudVmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes#cloud_vm_cluster_id DataAzurermOracleDbNodes#cloud_vm_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes#id DataAzurermOracleDbNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes#timeouts DataAzurermOracleDbNodes#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes#read DataAzurermOracleDbNodes#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermOracleDbNodes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_db_nodes

dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_db_nodes

dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_db_nodes

dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_db_nodes

dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermOracleDbNodes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermOracleDbNodes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermOracleDbNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleDbNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.dbNodes">db_nodes</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList">DataAzurermOracleDbNodesDbNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference">DataAzurermOracleDbNodesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cloudVmClusterIdInput">cloud_vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `db_nodes`<sup>Required</sup> <a name="db_nodes" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.dbNodes"></a>

```python
db_nodes: DataAzurermOracleDbNodesDbNodesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList">DataAzurermOracleDbNodesDbNodesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.timeouts"></a>

```python
timeouts: DataAzurermOracleDbNodesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference">DataAzurermOracleDbNodesTimeoutsOutputReference</a>

---

##### `cloud_vm_cluster_id_input`<sup>Optional</sup> <a name="cloud_vm_cluster_id_input" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cloudVmClusterIdInput"></a>

```python
cloud_vm_cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermOracleDbNodesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a>]

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cloudVmClusterId"></a>

```python
cloud_vm_cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleDbNodesConfig <a name="DataAzurermOracleDbNodesConfig" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_db_nodes

dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_vm_cluster_id: str,
  id: str = None,
  timeouts: DataAzurermOracleDbNodesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes#cloud_vm_cluster_id DataAzurermOracleDbNodes#cloud_vm_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes#id DataAzurermOracleDbNodes#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.cloudVmClusterId"></a>

```python
cloud_vm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes#cloud_vm_cluster_id DataAzurermOracleDbNodes#cloud_vm_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes#id DataAzurermOracleDbNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.timeouts"></a>

```python
timeouts: DataAzurermOracleDbNodesTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes#timeouts DataAzurermOracleDbNodes#timeouts}

---

### DataAzurermOracleDbNodesDbNodes <a name="DataAzurermOracleDbNodesDbNodes" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_db_nodes

dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodes()
```


### DataAzurermOracleDbNodesTimeouts <a name="DataAzurermOracleDbNodesTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_db_nodes

dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes#read DataAzurermOracleDbNodes#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/oracle_db_nodes#read DataAzurermOracleDbNodes#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleDbNodesDbNodesList <a name="DataAzurermOracleDbNodesDbNodesList" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_db_nodes

dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOracleDbNodesDbNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOracleDbNodesDbNodesOutputReference <a name="DataAzurermOracleDbNodesDbNodesOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_db_nodes

dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.additionalDetails">additional_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupIpId">backup_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupVnic2Id">backup_vnic2_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupVnicId">backup_vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbServerId">db_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.hostIpId">host_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.maintenanceType">maintenance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.softwareStorageSizeInGb">software_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeMaintenanceWindowEnd">time_maintenance_window_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeMaintenanceWindowStart">time_maintenance_window_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.vnic2Id">vnic2_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodes">DataAzurermOracleDbNodesDbNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_details`<sup>Required</sup> <a name="additional_details" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.additionalDetails"></a>

```python
additional_details: str
```

- *Type:* str

---

##### `backup_ip_id`<sup>Required</sup> <a name="backup_ip_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupIpId"></a>

```python
backup_ip_id: str
```

- *Type:* str

---

##### `backup_vnic2_id`<sup>Required</sup> <a name="backup_vnic2_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupVnic2Id"></a>

```python
backup_vnic2_id: str
```

- *Type:* str

---

##### `backup_vnic_id`<sup>Required</sup> <a name="backup_vnic_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupVnicId"></a>

```python
backup_vnic_id: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs`<sup>Required</sup> <a name="db_node_storage_size_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_id`<sup>Required</sup> <a name="db_server_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbServerId"></a>

```python
db_server_id: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `host_ip_id`<sup>Required</sup> <a name="host_ip_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.hostIpId"></a>

```python
host_ip_id: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `maintenance_type`<sup>Required</sup> <a name="maintenance_type" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.maintenanceType"></a>

```python
maintenance_type: str
```

- *Type:* str

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `software_storage_size_in_gb`<sup>Required</sup> <a name="software_storage_size_in_gb" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.softwareStorageSizeInGb"></a>

```python
software_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_maintenance_window_end`<sup>Required</sup> <a name="time_maintenance_window_end" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeMaintenanceWindowEnd"></a>

```python
time_maintenance_window_end: str
```

- *Type:* str

---

##### `time_maintenance_window_start`<sup>Required</sup> <a name="time_maintenance_window_start" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeMaintenanceWindowStart"></a>

```python
time_maintenance_window_start: str
```

- *Type:* str

---

##### `vnic2_id`<sup>Required</sup> <a name="vnic2_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.vnic2Id"></a>

```python
vnic2_id: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOracleDbNodesDbNodes
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodes">DataAzurermOracleDbNodesDbNodes</a>

---


### DataAzurermOracleDbNodesTimeoutsOutputReference <a name="DataAzurermOracleDbNodesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_db_nodes

dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermOracleDbNodesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a>]

---



