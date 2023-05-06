# `azurerm_stream_analytics_function_javascript_uda`

Refer to the Terraform Registory for docs: [`azurerm_stream_analytics_function_javascript_uda`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda).

# `streamAnalyticsFunctionJavascriptUda` Submodule <a name="`streamAnalyticsFunctionJavascriptUda` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsFunctionJavascriptUda <a name="StreamAnalyticsFunctionJavascriptUda" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda azurerm_stream_analytics_function_javascript_uda}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_function_javascript_uda

streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  input: typing.Union[IResolvable, typing.List[StreamAnalyticsFunctionJavascriptUdaInput]],
  name: str,
  output: StreamAnalyticsFunctionJavascriptUdaOutput,
  script: str,
  stream_analytics_job_id: str,
  id: str = None,
  timeouts: StreamAnalyticsFunctionJavascriptUdaTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.input">input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>]]</code> | input block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#name StreamAnalyticsFunctionJavascriptUda#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.output">output</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.script">script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#script StreamAnalyticsFunctionJavascriptUda#script}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.streamAnalyticsJobId">stream_analytics_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#stream_analytics_job_id StreamAnalyticsFunctionJavascriptUda#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#id StreamAnalyticsFunctionJavascriptUda#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.input"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>]]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#input StreamAnalyticsFunctionJavascriptUda#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#name StreamAnalyticsFunctionJavascriptUda#name}.

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.output"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#output StreamAnalyticsFunctionJavascriptUda#output}

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.script"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#script StreamAnalyticsFunctionJavascriptUda#script}.

---

##### `stream_analytics_job_id`<sup>Required</sup> <a name="stream_analytics_job_id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.streamAnalyticsJobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#stream_analytics_job_id StreamAnalyticsFunctionJavascriptUda#stream_analytics_job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#id StreamAnalyticsFunctionJavascriptUda#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#timeouts StreamAnalyticsFunctionJavascriptUda#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putInput">put_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putOutput">put_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_input` <a name="put_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putInput"></a>

```python
def put_input(
  value: typing.Union[IResolvable, typing.List[StreamAnalyticsFunctionJavascriptUdaInput]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putInput.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>]]

---

##### `put_output` <a name="put_output" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putOutput"></a>

```python
def put_output(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putOutput.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#type StreamAnalyticsFunctionJavascriptUda#type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#create StreamAnalyticsFunctionJavascriptUda#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#delete StreamAnalyticsFunctionJavascriptUda#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#read StreamAnalyticsFunctionJavascriptUda#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#update StreamAnalyticsFunctionJavascriptUda#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_function_javascript_uda

streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_function_javascript_uda

streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_function_javascript_uda

streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.input">input</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList">StreamAnalyticsFunctionJavascriptUdaInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.output">output</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference">StreamAnalyticsFunctionJavascriptUdaOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference">StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.inputInput">input_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.outputInput">output_input</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.scriptInput">script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.streamAnalyticsJobIdInput">stream_analytics_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.script">script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.streamAnalyticsJobId">stream_analytics_job_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.input"></a>

```python
input: StreamAnalyticsFunctionJavascriptUdaInputList
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList">StreamAnalyticsFunctionJavascriptUdaInputList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.output"></a>

```python
output: StreamAnalyticsFunctionJavascriptUdaOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference">StreamAnalyticsFunctionJavascriptUdaOutputOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.timeouts"></a>

```python
timeouts: StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference">StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.inputInput"></a>

```python
input_input: typing.Union[IResolvable, typing.List[StreamAnalyticsFunctionJavascriptUdaInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.outputInput"></a>

```python
output_input: StreamAnalyticsFunctionJavascriptUdaOutput
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a>

---

##### `script_input`<sup>Optional</sup> <a name="script_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.scriptInput"></a>

```python
script_input: str
```

- *Type:* str

---

##### `stream_analytics_job_id_input`<sup>Optional</sup> <a name="stream_analytics_job_id_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.streamAnalyticsJobIdInput"></a>

```python
stream_analytics_job_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[StreamAnalyticsFunctionJavascriptUdaTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.script"></a>

```python
script: str
```

- *Type:* str

---

##### `stream_analytics_job_id`<sup>Required</sup> <a name="stream_analytics_job_id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.streamAnalyticsJobId"></a>

```python
stream_analytics_job_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsFunctionJavascriptUdaConfig <a name="StreamAnalyticsFunctionJavascriptUdaConfig" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_function_javascript_uda

streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  input: typing.Union[IResolvable, typing.List[StreamAnalyticsFunctionJavascriptUdaInput]],
  name: str,
  output: StreamAnalyticsFunctionJavascriptUdaOutput,
  script: str,
  stream_analytics_job_id: str,
  id: str = None,
  timeouts: StreamAnalyticsFunctionJavascriptUdaTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.input">input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>]]</code> | input block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#name StreamAnalyticsFunctionJavascriptUda#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.output">output</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.script">script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#script StreamAnalyticsFunctionJavascriptUda#script}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.streamAnalyticsJobId">stream_analytics_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#stream_analytics_job_id StreamAnalyticsFunctionJavascriptUda#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#id StreamAnalyticsFunctionJavascriptUda#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.input"></a>

```python
input: typing.Union[IResolvable, typing.List[StreamAnalyticsFunctionJavascriptUdaInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>]]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#input StreamAnalyticsFunctionJavascriptUda#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#name StreamAnalyticsFunctionJavascriptUda#name}.

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.output"></a>

```python
output: StreamAnalyticsFunctionJavascriptUdaOutput
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#output StreamAnalyticsFunctionJavascriptUda#output}

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.script"></a>

```python
script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#script StreamAnalyticsFunctionJavascriptUda#script}.

---

##### `stream_analytics_job_id`<sup>Required</sup> <a name="stream_analytics_job_id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.streamAnalyticsJobId"></a>

```python
stream_analytics_job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#stream_analytics_job_id StreamAnalyticsFunctionJavascriptUda#stream_analytics_job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#id StreamAnalyticsFunctionJavascriptUda#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.timeouts"></a>

```python
timeouts: StreamAnalyticsFunctionJavascriptUdaTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#timeouts StreamAnalyticsFunctionJavascriptUda#timeouts}

---

### StreamAnalyticsFunctionJavascriptUdaInput <a name="StreamAnalyticsFunctionJavascriptUdaInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_function_javascript_uda

streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput(
  type: str,
  configuration_parameter: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#type StreamAnalyticsFunctionJavascriptUda#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.property.configurationParameter">configuration_parameter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#configuration_parameter StreamAnalyticsFunctionJavascriptUda#configuration_parameter}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#type StreamAnalyticsFunctionJavascriptUda#type}.

---

##### `configuration_parameter`<sup>Optional</sup> <a name="configuration_parameter" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.property.configurationParameter"></a>

```python
configuration_parameter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#configuration_parameter StreamAnalyticsFunctionJavascriptUda#configuration_parameter}.

---

### StreamAnalyticsFunctionJavascriptUdaOutput <a name="StreamAnalyticsFunctionJavascriptUdaOutput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_function_javascript_uda

streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#type StreamAnalyticsFunctionJavascriptUda#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#type StreamAnalyticsFunctionJavascriptUda#type}.

---

### StreamAnalyticsFunctionJavascriptUdaTimeouts <a name="StreamAnalyticsFunctionJavascriptUdaTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_function_javascript_uda

streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#create StreamAnalyticsFunctionJavascriptUda#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#delete StreamAnalyticsFunctionJavascriptUda#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#read StreamAnalyticsFunctionJavascriptUda#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#update StreamAnalyticsFunctionJavascriptUda#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#create StreamAnalyticsFunctionJavascriptUda#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#delete StreamAnalyticsFunctionJavascriptUda#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#read StreamAnalyticsFunctionJavascriptUda#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/stream_analytics_function_javascript_uda#update StreamAnalyticsFunctionJavascriptUda#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsFunctionJavascriptUdaInputList <a name="StreamAnalyticsFunctionJavascriptUdaInputList" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_function_javascript_uda

streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StreamAnalyticsFunctionJavascriptUdaInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StreamAnalyticsFunctionJavascriptUdaInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>]]

---


### StreamAnalyticsFunctionJavascriptUdaInputOutputReference <a name="StreamAnalyticsFunctionJavascriptUdaInputOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_function_javascript_uda

streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resetConfigurationParameter">reset_configuration_parameter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configuration_parameter` <a name="reset_configuration_parameter" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resetConfigurationParameter"></a>

```python
def reset_configuration_parameter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.configurationParameterInput">configuration_parameter_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.configurationParameter">configuration_parameter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_parameter_input`<sup>Optional</sup> <a name="configuration_parameter_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.configurationParameterInput"></a>

```python
configuration_parameter_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `configuration_parameter`<sup>Required</sup> <a name="configuration_parameter" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.configurationParameter"></a>

```python
configuration_parameter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StreamAnalyticsFunctionJavascriptUdaInput, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>, cdktf.IResolvable]

---


### StreamAnalyticsFunctionJavascriptUdaOutputOutputReference <a name="StreamAnalyticsFunctionJavascriptUdaOutputOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_function_javascript_uda

streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.internalValue"></a>

```python
internal_value: StreamAnalyticsFunctionJavascriptUdaOutput
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a>

---


### StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference <a name="StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_function_javascript_uda

streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StreamAnalyticsFunctionJavascriptUdaTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>, cdktf.IResolvable]

---



