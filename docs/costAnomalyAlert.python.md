# `costAnomalyAlert` Submodule <a name="`costAnomalyAlert` Submodule" id="@cdktf/provider-azurerm.costAnomalyAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostAnomalyAlert <a name="CostAnomalyAlert" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert azurerm_cost_anomaly_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cost_anomaly_alert

costAnomalyAlert.CostAnomalyAlert(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  email_addresses: typing.List[str],
  email_subject: str,
  name: str,
  id: str = None,
  message: str = None,
  timeouts: CostAnomalyAlertTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#display_name CostAnomalyAlert#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#email_addresses CostAnomalyAlert#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.emailSubject">email_subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#email_subject CostAnomalyAlert#email_subject}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#name CostAnomalyAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#id CostAnomalyAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#message CostAnomalyAlert#message}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts">CostAnomalyAlertTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#display_name CostAnomalyAlert#display_name}.

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.emailAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#email_addresses CostAnomalyAlert#email_addresses}.

---

##### `email_subject`<sup>Required</sup> <a name="email_subject" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.emailSubject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#email_subject CostAnomalyAlert#email_subject}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#name CostAnomalyAlert#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#id CostAnomalyAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.message"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#message CostAnomalyAlert#message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts">CostAnomalyAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#timeouts CostAnomalyAlert#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#create CostAnomalyAlert#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#delete CostAnomalyAlert#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#read CostAnomalyAlert#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#update CostAnomalyAlert#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_message` <a name="reset_message" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cost_anomaly_alert

costAnomalyAlert.CostAnomalyAlert.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cost_anomaly_alert

costAnomalyAlert.CostAnomalyAlert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cost_anomaly_alert

costAnomalyAlert.CostAnomalyAlert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference">CostAnomalyAlertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.emailSubjectInput">email_subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts">CostAnomalyAlertTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.emailSubject">email_subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.timeouts"></a>

```python
timeouts: CostAnomalyAlertTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference">CostAnomalyAlertTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_subject_input`<sup>Optional</sup> <a name="email_subject_input" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.emailSubjectInput"></a>

```python
email_subject_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[CostAnomalyAlertTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts">CostAnomalyAlertTimeouts</a>, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_subject`<sup>Required</sup> <a name="email_subject" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.emailSubject"></a>

```python
email_subject: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CostAnomalyAlertConfig <a name="CostAnomalyAlertConfig" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cost_anomaly_alert

costAnomalyAlert.CostAnomalyAlertConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  email_addresses: typing.List[str],
  email_subject: str,
  name: str,
  id: str = None,
  message: str = None,
  timeouts: CostAnomalyAlertTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#display_name CostAnomalyAlert#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#email_addresses CostAnomalyAlert#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.emailSubject">email_subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#email_subject CostAnomalyAlert#email_subject}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#name CostAnomalyAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#id CostAnomalyAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#message CostAnomalyAlert#message}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts">CostAnomalyAlertTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#display_name CostAnomalyAlert#display_name}.

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#email_addresses CostAnomalyAlert#email_addresses}.

---

##### `email_subject`<sup>Required</sup> <a name="email_subject" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.emailSubject"></a>

```python
email_subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#email_subject CostAnomalyAlert#email_subject}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#name CostAnomalyAlert#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#id CostAnomalyAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#message CostAnomalyAlert#message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertConfig.property.timeouts"></a>

```python
timeouts: CostAnomalyAlertTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts">CostAnomalyAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#timeouts CostAnomalyAlert#timeouts}

---

### CostAnomalyAlertTimeouts <a name="CostAnomalyAlertTimeouts" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cost_anomaly_alert

costAnomalyAlert.CostAnomalyAlertTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#create CostAnomalyAlert#create}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#delete CostAnomalyAlert#delete}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#read CostAnomalyAlert#read}. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#update CostAnomalyAlert#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#create CostAnomalyAlert#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#delete CostAnomalyAlert#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#read CostAnomalyAlert#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_anomaly_alert#update CostAnomalyAlert#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CostAnomalyAlertTimeoutsOutputReference <a name="CostAnomalyAlertTimeoutsOutputReference" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cost_anomaly_alert

costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts">CostAnomalyAlertTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CostAnomalyAlertTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.costAnomalyAlert.CostAnomalyAlertTimeouts">CostAnomalyAlertTimeouts</a>, cdktf.IResolvable]

---



