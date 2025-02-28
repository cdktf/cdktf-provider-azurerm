# `applicationInsightsSmartDetectionRule` Submodule <a name="`applicationInsightsSmartDetectionRule` Submodule" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsSmartDetectionRule <a name="ApplicationInsightsSmartDetectionRule" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule azurerm_application_insights_smart_detection_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_smart_detection_rule

applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_insights_id: str,
  name: str,
  additional_email_recipients: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  send_emails_to_subscription_owners: typing.Union[bool, IResolvable] = None,
  timeouts: ApplicationInsightsSmartDetectionRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.applicationInsightsId">application_insights_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#application_insights_id ApplicationInsightsSmartDetectionRule#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#name ApplicationInsightsSmartDetectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.additionalEmailRecipients">additional_email_recipients</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#additional_email_recipients ApplicationInsightsSmartDetectionRule#additional_email_recipients}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#enabled ApplicationInsightsSmartDetectionRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#id ApplicationInsightsSmartDetectionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.sendEmailsToSubscriptionOwners">send_emails_to_subscription_owners</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#send_emails_to_subscription_owners ApplicationInsightsSmartDetectionRule#send_emails_to_subscription_owners}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_insights_id`<sup>Required</sup> <a name="application_insights_id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.applicationInsightsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#application_insights_id ApplicationInsightsSmartDetectionRule#application_insights_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#name ApplicationInsightsSmartDetectionRule#name}.

---

##### `additional_email_recipients`<sup>Optional</sup> <a name="additional_email_recipients" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.additionalEmailRecipients"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#additional_email_recipients ApplicationInsightsSmartDetectionRule#additional_email_recipients}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#enabled ApplicationInsightsSmartDetectionRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#id ApplicationInsightsSmartDetectionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `send_emails_to_subscription_owners`<sup>Optional</sup> <a name="send_emails_to_subscription_owners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.sendEmailsToSubscriptionOwners"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#send_emails_to_subscription_owners ApplicationInsightsSmartDetectionRule#send_emails_to_subscription_owners}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#timeouts ApplicationInsightsSmartDetectionRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetAdditionalEmailRecipients">reset_additional_email_recipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetSendEmailsToSubscriptionOwners">reset_send_emails_to_subscription_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#create ApplicationInsightsSmartDetectionRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#delete ApplicationInsightsSmartDetectionRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#read ApplicationInsightsSmartDetectionRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#update ApplicationInsightsSmartDetectionRule#update}.

---

##### `reset_additional_email_recipients` <a name="reset_additional_email_recipients" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetAdditionalEmailRecipients"></a>

```python
def reset_additional_email_recipients() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_send_emails_to_subscription_owners` <a name="reset_send_emails_to_subscription_owners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetSendEmailsToSubscriptionOwners"></a>

```python
def reset_send_emails_to_subscription_owners() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApplicationInsightsSmartDetectionRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_smart_detection_rule

applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_smart_detection_rule

applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_smart_detection_rule

applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_smart_detection_rule

applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApplicationInsightsSmartDetectionRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationInsightsSmartDetectionRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationInsightsSmartDetectionRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationInsightsSmartDetectionRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference">ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipientsInput">additional_email_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsIdInput">application_insights_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwnersInput">send_emails_to_subscription_owners_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipients">additional_email_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsId">application_insights_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwners">send_emails_to_subscription_owners</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeouts"></a>

```python
timeouts: ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference">ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference</a>

---

##### `additional_email_recipients_input`<sup>Optional</sup> <a name="additional_email_recipients_input" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipientsInput"></a>

```python
additional_email_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `application_insights_id_input`<sup>Optional</sup> <a name="application_insights_id_input" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsIdInput"></a>

```python
application_insights_id_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `send_emails_to_subscription_owners_input`<sup>Optional</sup> <a name="send_emails_to_subscription_owners_input" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwnersInput"></a>

```python
send_emails_to_subscription_owners_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApplicationInsightsSmartDetectionRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a>]

---

##### `additional_email_recipients`<sup>Required</sup> <a name="additional_email_recipients" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipients"></a>

```python
additional_email_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `application_insights_id`<sup>Required</sup> <a name="application_insights_id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsId"></a>

```python
application_insights_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `send_emails_to_subscription_owners`<sup>Required</sup> <a name="send_emails_to_subscription_owners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwners"></a>

```python
send_emails_to_subscription_owners: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsSmartDetectionRuleConfig <a name="ApplicationInsightsSmartDetectionRuleConfig" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_smart_detection_rule

applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_insights_id: str,
  name: str,
  additional_email_recipients: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  send_emails_to_subscription_owners: typing.Union[bool, IResolvable] = None,
  timeouts: ApplicationInsightsSmartDetectionRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.applicationInsightsId">application_insights_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#application_insights_id ApplicationInsightsSmartDetectionRule#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#name ApplicationInsightsSmartDetectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.additionalEmailRecipients">additional_email_recipients</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#additional_email_recipients ApplicationInsightsSmartDetectionRule#additional_email_recipients}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#enabled ApplicationInsightsSmartDetectionRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#id ApplicationInsightsSmartDetectionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.sendEmailsToSubscriptionOwners">send_emails_to_subscription_owners</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#send_emails_to_subscription_owners ApplicationInsightsSmartDetectionRule#send_emails_to_subscription_owners}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_insights_id`<sup>Required</sup> <a name="application_insights_id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.applicationInsightsId"></a>

```python
application_insights_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#application_insights_id ApplicationInsightsSmartDetectionRule#application_insights_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#name ApplicationInsightsSmartDetectionRule#name}.

---

##### `additional_email_recipients`<sup>Optional</sup> <a name="additional_email_recipients" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.additionalEmailRecipients"></a>

```python
additional_email_recipients: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#additional_email_recipients ApplicationInsightsSmartDetectionRule#additional_email_recipients}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#enabled ApplicationInsightsSmartDetectionRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#id ApplicationInsightsSmartDetectionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `send_emails_to_subscription_owners`<sup>Optional</sup> <a name="send_emails_to_subscription_owners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.sendEmailsToSubscriptionOwners"></a>

```python
send_emails_to_subscription_owners: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#send_emails_to_subscription_owners ApplicationInsightsSmartDetectionRule#send_emails_to_subscription_owners}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.timeouts"></a>

```python
timeouts: ApplicationInsightsSmartDetectionRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#timeouts ApplicationInsightsSmartDetectionRule#timeouts}

---

### ApplicationInsightsSmartDetectionRuleTimeouts <a name="ApplicationInsightsSmartDetectionRuleTimeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_smart_detection_rule

applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#create ApplicationInsightsSmartDetectionRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#delete ApplicationInsightsSmartDetectionRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#read ApplicationInsightsSmartDetectionRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#update ApplicationInsightsSmartDetectionRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#create ApplicationInsightsSmartDetectionRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#delete ApplicationInsightsSmartDetectionRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#read ApplicationInsightsSmartDetectionRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/application_insights_smart_detection_rule#update ApplicationInsightsSmartDetectionRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference <a name="ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_smart_detection_rule

applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationInsightsSmartDetectionRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a>]

---



