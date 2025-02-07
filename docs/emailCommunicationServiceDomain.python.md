# `emailCommunicationServiceDomain` Submodule <a name="`emailCommunicationServiceDomain` Submodule" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailCommunicationServiceDomain <a name="EmailCommunicationServiceDomain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain azurerm_email_communication_service_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_management: str,
  email_service_id: str,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: EmailCommunicationServiceDomainTimeouts = None,
  user_engagement_tracking_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.domainManagement">domain_management</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#domain_management EmailCommunicationServiceDomain#domain_management}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.emailServiceId">email_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#email_service_id EmailCommunicationServiceDomain#email_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#name EmailCommunicationServiceDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#id EmailCommunicationServiceDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#tags EmailCommunicationServiceDomain#tags}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.userEngagementTrackingEnabled">user_engagement_tracking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#user_engagement_tracking_enabled EmailCommunicationServiceDomain#user_engagement_tracking_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_management`<sup>Required</sup> <a name="domain_management" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.domainManagement"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#domain_management EmailCommunicationServiceDomain#domain_management}.

---

##### `email_service_id`<sup>Required</sup> <a name="email_service_id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.emailServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#email_service_id EmailCommunicationServiceDomain#email_service_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#name EmailCommunicationServiceDomain#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#id EmailCommunicationServiceDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#tags EmailCommunicationServiceDomain#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#timeouts EmailCommunicationServiceDomain#timeouts}

---

##### `user_engagement_tracking_enabled`<sup>Optional</sup> <a name="user_engagement_tracking_enabled" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.Initializer.parameter.userEngagementTrackingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#user_engagement_tracking_enabled EmailCommunicationServiceDomain#user_engagement_tracking_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetUserEngagementTrackingEnabled">reset_user_engagement_tracking_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#create EmailCommunicationServiceDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#delete EmailCommunicationServiceDomain#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#read EmailCommunicationServiceDomain#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#update EmailCommunicationServiceDomain#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_engagement_tracking_enabled` <a name="reset_user_engagement_tracking_enabled" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.resetUserEngagementTrackingEnabled"></a>

```python
def reset_user_engagement_tracking_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EmailCommunicationServiceDomain resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EmailCommunicationServiceDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EmailCommunicationServiceDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EmailCommunicationServiceDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EmailCommunicationServiceDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.fromSenderDomain">from_sender_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.mailFromSenderDomain">mail_from_sender_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference">EmailCommunicationServiceDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.verificationRecords">verification_records</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList">EmailCommunicationServiceDomainVerificationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.domainManagementInput">domain_management_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.emailServiceIdInput">email_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.userEngagementTrackingEnabledInput">user_engagement_tracking_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.domainManagement">domain_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.emailServiceId">email_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.userEngagementTrackingEnabled">user_engagement_tracking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `from_sender_domain`<sup>Required</sup> <a name="from_sender_domain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.fromSenderDomain"></a>

```python
from_sender_domain: str
```

- *Type:* str

---

##### `mail_from_sender_domain`<sup>Required</sup> <a name="mail_from_sender_domain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.mailFromSenderDomain"></a>

```python
mail_from_sender_domain: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.timeouts"></a>

```python
timeouts: EmailCommunicationServiceDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference">EmailCommunicationServiceDomainTimeoutsOutputReference</a>

---

##### `verification_records`<sup>Required</sup> <a name="verification_records" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.verificationRecords"></a>

```python
verification_records: EmailCommunicationServiceDomainVerificationRecordsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList">EmailCommunicationServiceDomainVerificationRecordsList</a>

---

##### `domain_management_input`<sup>Optional</sup> <a name="domain_management_input" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.domainManagementInput"></a>

```python
domain_management_input: str
```

- *Type:* str

---

##### `email_service_id_input`<sup>Optional</sup> <a name="email_service_id_input" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.emailServiceIdInput"></a>

```python
email_service_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EmailCommunicationServiceDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a>]

---

##### `user_engagement_tracking_enabled_input`<sup>Optional</sup> <a name="user_engagement_tracking_enabled_input" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.userEngagementTrackingEnabledInput"></a>

```python
user_engagement_tracking_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_management`<sup>Required</sup> <a name="domain_management" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.domainManagement"></a>

```python
domain_management: str
```

- *Type:* str

---

##### `email_service_id`<sup>Required</sup> <a name="email_service_id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.emailServiceId"></a>

```python
email_service_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_engagement_tracking_enabled`<sup>Required</sup> <a name="user_engagement_tracking_enabled" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.userEngagementTrackingEnabled"></a>

```python
user_engagement_tracking_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmailCommunicationServiceDomainConfig <a name="EmailCommunicationServiceDomainConfig" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_management: str,
  email_service_id: str,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: EmailCommunicationServiceDomainTimeouts = None,
  user_engagement_tracking_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.domainManagement">domain_management</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#domain_management EmailCommunicationServiceDomain#domain_management}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.emailServiceId">email_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#email_service_id EmailCommunicationServiceDomain#email_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#name EmailCommunicationServiceDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#id EmailCommunicationServiceDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#tags EmailCommunicationServiceDomain#tags}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.userEngagementTrackingEnabled">user_engagement_tracking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#user_engagement_tracking_enabled EmailCommunicationServiceDomain#user_engagement_tracking_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_management`<sup>Required</sup> <a name="domain_management" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.domainManagement"></a>

```python
domain_management: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#domain_management EmailCommunicationServiceDomain#domain_management}.

---

##### `email_service_id`<sup>Required</sup> <a name="email_service_id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.emailServiceId"></a>

```python
email_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#email_service_id EmailCommunicationServiceDomain#email_service_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#name EmailCommunicationServiceDomain#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#id EmailCommunicationServiceDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#tags EmailCommunicationServiceDomain#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.timeouts"></a>

```python
timeouts: EmailCommunicationServiceDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#timeouts EmailCommunicationServiceDomain#timeouts}

---

##### `user_engagement_tracking_enabled`<sup>Optional</sup> <a name="user_engagement_tracking_enabled" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainConfig.property.userEngagementTrackingEnabled"></a>

```python
user_engagement_tracking_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#user_engagement_tracking_enabled EmailCommunicationServiceDomain#user_engagement_tracking_enabled}.

---

### EmailCommunicationServiceDomainTimeouts <a name="EmailCommunicationServiceDomainTimeouts" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#create EmailCommunicationServiceDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#delete EmailCommunicationServiceDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#read EmailCommunicationServiceDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#update EmailCommunicationServiceDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#create EmailCommunicationServiceDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#delete EmailCommunicationServiceDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#read EmailCommunicationServiceDomain#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/email_communication_service_domain#update EmailCommunicationServiceDomain#update}.

---

### EmailCommunicationServiceDomainVerificationRecords <a name="EmailCommunicationServiceDomainVerificationRecords" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecords()
```


### EmailCommunicationServiceDomainVerificationRecordsDkim <a name="EmailCommunicationServiceDomainVerificationRecordsDkim" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim()
```


### EmailCommunicationServiceDomainVerificationRecordsDkim2 <a name="EmailCommunicationServiceDomainVerificationRecordsDkim2" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2()
```


### EmailCommunicationServiceDomainVerificationRecordsDmarc <a name="EmailCommunicationServiceDomainVerificationRecordsDmarc" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarc.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarc()
```


### EmailCommunicationServiceDomainVerificationRecordsDomain <a name="EmailCommunicationServiceDomainVerificationRecordsDomain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomain()
```


### EmailCommunicationServiceDomainVerificationRecordsSpf <a name="EmailCommunicationServiceDomainVerificationRecordsSpf" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpf.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpf()
```


## Classes <a name="Classes" id="Classes"></a>

### EmailCommunicationServiceDomainTimeoutsOutputReference <a name="EmailCommunicationServiceDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EmailCommunicationServiceDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainTimeouts">EmailCommunicationServiceDomainTimeouts</a>]

---


### EmailCommunicationServiceDomainVerificationRecordsDkim2List <a name="EmailCommunicationServiceDomainVerificationRecordsDkim2List" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2">EmailCommunicationServiceDomainVerificationRecordsDkim2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2OutputReference.property.internalValue"></a>

```python
internal_value: EmailCommunicationServiceDomainVerificationRecordsDkim2
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2">EmailCommunicationServiceDomainVerificationRecordsDkim2</a>

---


### EmailCommunicationServiceDomainVerificationRecordsDkimList <a name="EmailCommunicationServiceDomainVerificationRecordsDkimList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim">EmailCommunicationServiceDomainVerificationRecordsDkim</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimOutputReference.property.internalValue"></a>

```python
internal_value: EmailCommunicationServiceDomainVerificationRecordsDkim
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim">EmailCommunicationServiceDomainVerificationRecordsDkim</a>

---


### EmailCommunicationServiceDomainVerificationRecordsDmarcList <a name="EmailCommunicationServiceDomainVerificationRecordsDmarcList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarc">EmailCommunicationServiceDomainVerificationRecordsDmarc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcOutputReference.property.internalValue"></a>

```python
internal_value: EmailCommunicationServiceDomainVerificationRecordsDmarc
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarc">EmailCommunicationServiceDomainVerificationRecordsDmarc</a>

---


### EmailCommunicationServiceDomainVerificationRecordsDomainList <a name="EmailCommunicationServiceDomainVerificationRecordsDomainList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomain">EmailCommunicationServiceDomainVerificationRecordsDomain</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainOutputReference.property.internalValue"></a>

```python
internal_value: EmailCommunicationServiceDomainVerificationRecordsDomain
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomain">EmailCommunicationServiceDomainVerificationRecordsDomain</a>

---


### EmailCommunicationServiceDomainVerificationRecordsList <a name="EmailCommunicationServiceDomainVerificationRecordsList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmailCommunicationServiceDomainVerificationRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EmailCommunicationServiceDomainVerificationRecordsOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dkim">dkim</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList">EmailCommunicationServiceDomainVerificationRecordsDkimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dkim2">dkim2</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List">EmailCommunicationServiceDomainVerificationRecordsDkim2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dmarc">dmarc</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList">EmailCommunicationServiceDomainVerificationRecordsDmarcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.domain">domain</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList">EmailCommunicationServiceDomainVerificationRecordsDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.spf">spf</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList">EmailCommunicationServiceDomainVerificationRecordsSpfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecords">EmailCommunicationServiceDomainVerificationRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dkim`<sup>Required</sup> <a name="dkim" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dkim"></a>

```python
dkim: EmailCommunicationServiceDomainVerificationRecordsDkimList
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkimList">EmailCommunicationServiceDomainVerificationRecordsDkimList</a>

---

##### `dkim2`<sup>Required</sup> <a name="dkim2" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dkim2"></a>

```python
dkim2: EmailCommunicationServiceDomainVerificationRecordsDkim2List
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDkim2List">EmailCommunicationServiceDomainVerificationRecordsDkim2List</a>

---

##### `dmarc`<sup>Required</sup> <a name="dmarc" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.dmarc"></a>

```python
dmarc: EmailCommunicationServiceDomainVerificationRecordsDmarcList
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDmarcList">EmailCommunicationServiceDomainVerificationRecordsDmarcList</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.domain"></a>

```python
domain: EmailCommunicationServiceDomainVerificationRecordsDomainList
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsDomainList">EmailCommunicationServiceDomainVerificationRecordsDomainList</a>

---

##### `spf`<sup>Required</sup> <a name="spf" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.spf"></a>

```python
spf: EmailCommunicationServiceDomainVerificationRecordsSpfList
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList">EmailCommunicationServiceDomainVerificationRecordsSpfList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsOutputReference.property.internalValue"></a>

```python
internal_value: EmailCommunicationServiceDomainVerificationRecords
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecords">EmailCommunicationServiceDomainVerificationRecords</a>

---


### EmailCommunicationServiceDomainVerificationRecordsSpfList <a name="EmailCommunicationServiceDomainVerificationRecordsSpfList" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference <a name="EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import email_communication_service_domain

emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpf">EmailCommunicationServiceDomainVerificationRecordsSpf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpfOutputReference.property.internalValue"></a>

```python
internal_value: EmailCommunicationServiceDomainVerificationRecordsSpf
```

- *Type:* <a href="#@cdktf/provider-azurerm.emailCommunicationServiceDomain.EmailCommunicationServiceDomainVerificationRecordsSpf">EmailCommunicationServiceDomainVerificationRecordsSpf</a>

---



