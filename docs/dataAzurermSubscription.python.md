# `dataAzurermSubscription` Submodule <a name="`dataAzurermSubscription` Submodule" id="@cdktf/provider-azurerm.dataAzurermSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSubscription <a name="DataAzurermSubscription" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription azurerm_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_subscription

dataAzurermSubscription.DataAzurermSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  subscription_id: str = None,
  timeouts: DataAzurermSubscriptionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription#id DataAzurermSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription#subscription_id DataAzurermSubscription#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeouts">DataAzurermSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription#id DataAzurermSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription#subscription_id DataAzurermSubscription#subscription_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeouts">DataAzurermSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription#timeouts DataAzurermSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription#read DataAzurermSubscription#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_subscription

dataAzurermSubscription.DataAzurermSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_subscription

dataAzurermSubscription.DataAzurermSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_subscription

dataAzurermSubscription.DataAzurermSubscription.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_subscription

dataAzurermSubscription.DataAzurermSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.locationPlacementId">location_placement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.quotaId">quota_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.spendingLimit">spending_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference">DataAzurermSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeouts">DataAzurermSubscriptionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `location_placement_id`<sup>Required</sup> <a name="location_placement_id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.locationPlacementId"></a>

```python
location_placement_id: str
```

- *Type:* str

---

##### `quota_id`<sup>Required</sup> <a name="quota_id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.quotaId"></a>

```python
quota_id: str
```

- *Type:* str

---

##### `spending_limit`<sup>Required</sup> <a name="spending_limit" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.spendingLimit"></a>

```python
spending_limit: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.timeouts"></a>

```python
timeouts: DataAzurermSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference">DataAzurermSubscriptionTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeouts">DataAzurermSubscriptionTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSubscriptionConfig <a name="DataAzurermSubscriptionConfig" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_subscription

dataAzurermSubscription.DataAzurermSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  subscription_id: str = None,
  timeouts: DataAzurermSubscriptionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription#id DataAzurermSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription#subscription_id DataAzurermSubscription#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeouts">DataAzurermSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription#id DataAzurermSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription#subscription_id DataAzurermSubscription#subscription_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionConfig.property.timeouts"></a>

```python
timeouts: DataAzurermSubscriptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeouts">DataAzurermSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription#timeouts DataAzurermSubscription#timeouts}

---

### DataAzurermSubscriptionTimeouts <a name="DataAzurermSubscriptionTimeouts" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_subscription

dataAzurermSubscription.DataAzurermSubscriptionTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription#read DataAzurermSubscription#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/subscription#read DataAzurermSubscription#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSubscriptionTimeoutsOutputReference <a name="DataAzurermSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_subscription

dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeouts">DataAzurermSubscriptionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSubscription.DataAzurermSubscriptionTimeouts">DataAzurermSubscriptionTimeouts</a>]

---



