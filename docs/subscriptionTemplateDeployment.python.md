# `subscriptionTemplateDeployment` Submodule <a name="`subscriptionTemplateDeployment` Submodule" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionTemplateDeployment <a name="SubscriptionTemplateDeployment" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment azurerm_subscription_template_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_template_deployment

subscriptionTemplateDeployment.SubscriptionTemplateDeployment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  debug_level: str = None,
  id: str = None,
  parameters_content: str = None,
  tags: typing.Mapping[str] = None,
  template_content: str = None,
  template_spec_version_id: str = None,
  timeouts: SubscriptionTemplateDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#location SubscriptionTemplateDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#name SubscriptionTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.debugLevel">debug_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#debug_level SubscriptionTemplateDeployment#debug_level}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#id SubscriptionTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.parametersContent">parameters_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#parameters_content SubscriptionTemplateDeployment#parameters_content}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#tags SubscriptionTemplateDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.templateContent">template_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#template_content SubscriptionTemplateDeployment#template_content}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.templateSpecVersionId">template_spec_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#template_spec_version_id SubscriptionTemplateDeployment#template_spec_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts">SubscriptionTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#location SubscriptionTemplateDeployment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#name SubscriptionTemplateDeployment#name}.

---

##### `debug_level`<sup>Optional</sup> <a name="debug_level" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.debugLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#debug_level SubscriptionTemplateDeployment#debug_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#id SubscriptionTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters_content`<sup>Optional</sup> <a name="parameters_content" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.parametersContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#parameters_content SubscriptionTemplateDeployment#parameters_content}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#tags SubscriptionTemplateDeployment#tags}.

---

##### `template_content`<sup>Optional</sup> <a name="template_content" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.templateContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#template_content SubscriptionTemplateDeployment#template_content}.

---

##### `template_spec_version_id`<sup>Optional</sup> <a name="template_spec_version_id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.templateSpecVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#template_spec_version_id SubscriptionTemplateDeployment#template_spec_version_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts">SubscriptionTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#timeouts SubscriptionTemplateDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetDebugLevel">reset_debug_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetParametersContent">reset_parameters_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTemplateContent">reset_template_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTemplateSpecVersionId">reset_template_spec_version_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#create SubscriptionTemplateDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#delete SubscriptionTemplateDeployment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#read SubscriptionTemplateDeployment#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#update SubscriptionTemplateDeployment#update}.

---

##### `reset_debug_level` <a name="reset_debug_level" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetDebugLevel"></a>

```python
def reset_debug_level() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters_content` <a name="reset_parameters_content" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetParametersContent"></a>

```python
def reset_parameters_content() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_content` <a name="reset_template_content" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTemplateContent"></a>

```python
def reset_template_content() -> None
```

##### `reset_template_spec_version_id` <a name="reset_template_spec_version_id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTemplateSpecVersionId"></a>

```python
def reset_template_spec_version_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SubscriptionTemplateDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_template_deployment

subscriptionTemplateDeployment.SubscriptionTemplateDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_template_deployment

subscriptionTemplateDeployment.SubscriptionTemplateDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_template_deployment

subscriptionTemplateDeployment.SubscriptionTemplateDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_template_deployment

subscriptionTemplateDeployment.SubscriptionTemplateDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SubscriptionTemplateDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SubscriptionTemplateDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SubscriptionTemplateDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SubscriptionTemplateDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.outputContent">output_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference">SubscriptionTemplateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.debugLevelInput">debug_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.parametersContentInput">parameters_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateContentInput">template_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateSpecVersionIdInput">template_spec_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts">SubscriptionTemplateDeploymentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.debugLevel">debug_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.parametersContent">parameters_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateContent">template_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateSpecVersionId">template_spec_version_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `output_content`<sup>Required</sup> <a name="output_content" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.outputContent"></a>

```python
output_content: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.timeouts"></a>

```python
timeouts: SubscriptionTemplateDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference">SubscriptionTemplateDeploymentTimeoutsOutputReference</a>

---

##### `debug_level_input`<sup>Optional</sup> <a name="debug_level_input" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.debugLevelInput"></a>

```python
debug_level_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_content_input`<sup>Optional</sup> <a name="parameters_content_input" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.parametersContentInput"></a>

```python
parameters_content_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_content_input`<sup>Optional</sup> <a name="template_content_input" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateContentInput"></a>

```python
template_content_input: str
```

- *Type:* str

---

##### `template_spec_version_id_input`<sup>Optional</sup> <a name="template_spec_version_id_input" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateSpecVersionIdInput"></a>

```python
template_spec_version_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SubscriptionTemplateDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts">SubscriptionTemplateDeploymentTimeouts</a>]

---

##### `debug_level`<sup>Required</sup> <a name="debug_level" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.debugLevel"></a>

```python
debug_level: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters_content`<sup>Required</sup> <a name="parameters_content" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.parametersContent"></a>

```python
parameters_content: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_content`<sup>Required</sup> <a name="template_content" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateContent"></a>

```python
template_content: str
```

- *Type:* str

---

##### `template_spec_version_id`<sup>Required</sup> <a name="template_spec_version_id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateSpecVersionId"></a>

```python
template_spec_version_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionTemplateDeploymentConfig <a name="SubscriptionTemplateDeploymentConfig" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_template_deployment

subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  debug_level: str = None,
  id: str = None,
  parameters_content: str = None,
  tags: typing.Mapping[str] = None,
  template_content: str = None,
  template_spec_version_id: str = None,
  timeouts: SubscriptionTemplateDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#location SubscriptionTemplateDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#name SubscriptionTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.debugLevel">debug_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#debug_level SubscriptionTemplateDeployment#debug_level}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#id SubscriptionTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.parametersContent">parameters_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#parameters_content SubscriptionTemplateDeployment#parameters_content}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#tags SubscriptionTemplateDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.templateContent">template_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#template_content SubscriptionTemplateDeployment#template_content}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.templateSpecVersionId">template_spec_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#template_spec_version_id SubscriptionTemplateDeployment#template_spec_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts">SubscriptionTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#location SubscriptionTemplateDeployment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#name SubscriptionTemplateDeployment#name}.

---

##### `debug_level`<sup>Optional</sup> <a name="debug_level" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.debugLevel"></a>

```python
debug_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#debug_level SubscriptionTemplateDeployment#debug_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#id SubscriptionTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters_content`<sup>Optional</sup> <a name="parameters_content" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.parametersContent"></a>

```python
parameters_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#parameters_content SubscriptionTemplateDeployment#parameters_content}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#tags SubscriptionTemplateDeployment#tags}.

---

##### `template_content`<sup>Optional</sup> <a name="template_content" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.templateContent"></a>

```python
template_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#template_content SubscriptionTemplateDeployment#template_content}.

---

##### `template_spec_version_id`<sup>Optional</sup> <a name="template_spec_version_id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.templateSpecVersionId"></a>

```python
template_spec_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#template_spec_version_id SubscriptionTemplateDeployment#template_spec_version_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.timeouts"></a>

```python
timeouts: SubscriptionTemplateDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts">SubscriptionTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#timeouts SubscriptionTemplateDeployment#timeouts}

---

### SubscriptionTemplateDeploymentTimeouts <a name="SubscriptionTemplateDeploymentTimeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_template_deployment

subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#create SubscriptionTemplateDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#delete SubscriptionTemplateDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#read SubscriptionTemplateDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#update SubscriptionTemplateDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#create SubscriptionTemplateDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#delete SubscriptionTemplateDeployment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#read SubscriptionTemplateDeployment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/subscription_template_deployment#update SubscriptionTemplateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionTemplateDeploymentTimeoutsOutputReference <a name="SubscriptionTemplateDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_template_deployment

subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts">SubscriptionTemplateDeploymentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SubscriptionTemplateDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts">SubscriptionTemplateDeploymentTimeouts</a>]

---



