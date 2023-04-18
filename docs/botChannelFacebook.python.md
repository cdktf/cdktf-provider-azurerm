# `azurerm_bot_channel_facebook`

Refer to the Terraform Registory for docs: [`azurerm_bot_channel_facebook`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook).

# `botChannelFacebook` Submodule <a name="`botChannelFacebook` Submodule" id="@cdktf/provider-azurerm.botChannelFacebook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotChannelFacebook <a name="BotChannelFacebook" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook azurerm_bot_channel_facebook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_facebook

botChannelFacebook.BotChannelFacebook(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bot_name: str,
  facebook_application_id: str,
  facebook_application_secret: str,
  location: str,
  page: typing.Union[IResolvable, typing.List[BotChannelFacebookPage]],
  resource_group_name: str,
  id: str = None,
  timeouts: BotChannelFacebookTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.botName">bot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#bot_name BotChannelFacebook#bot_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.facebookApplicationId">facebook_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#facebook_application_id BotChannelFacebook#facebook_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.facebookApplicationSecret">facebook_application_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#facebook_application_secret BotChannelFacebook#facebook_application_secret}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#location BotChannelFacebook#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.page">page</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage">BotChannelFacebookPage</a>]]</code> | page block. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#resource_group_name BotChannelFacebook#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#id BotChannelFacebook#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts">BotChannelFacebookTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.botName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#bot_name BotChannelFacebook#bot_name}.

---

##### `facebook_application_id`<sup>Required</sup> <a name="facebook_application_id" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.facebookApplicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#facebook_application_id BotChannelFacebook#facebook_application_id}.

---

##### `facebook_application_secret`<sup>Required</sup> <a name="facebook_application_secret" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.facebookApplicationSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#facebook_application_secret BotChannelFacebook#facebook_application_secret}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#location BotChannelFacebook#location}.

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.page"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage">BotChannelFacebookPage</a>]]

page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#page BotChannelFacebook#page}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#resource_group_name BotChannelFacebook#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#id BotChannelFacebook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts">BotChannelFacebookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#timeouts BotChannelFacebook#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.putPage">put_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_page` <a name="put_page" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.putPage"></a>

```python
def put_page(
  value: typing.Union[IResolvable, typing.List[BotChannelFacebookPage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.putPage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage">BotChannelFacebookPage</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#create BotChannelFacebook#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#delete BotChannelFacebook#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#read BotChannelFacebook#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#update BotChannelFacebook#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_facebook

botChannelFacebook.BotChannelFacebook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_facebook

botChannelFacebook.BotChannelFacebook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_facebook

botChannelFacebook.BotChannelFacebook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.page">page</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList">BotChannelFacebookPageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference">BotChannelFacebookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.botNameInput">bot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.facebookApplicationIdInput">facebook_application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.facebookApplicationSecretInput">facebook_application_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.pageInput">page_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage">BotChannelFacebookPage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts">BotChannelFacebookTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.botName">bot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.facebookApplicationId">facebook_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.facebookApplicationSecret">facebook_application_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.page"></a>

```python
page: BotChannelFacebookPageList
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList">BotChannelFacebookPageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.timeouts"></a>

```python
timeouts: BotChannelFacebookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference">BotChannelFacebookTimeoutsOutputReference</a>

---

##### `bot_name_input`<sup>Optional</sup> <a name="bot_name_input" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.botNameInput"></a>

```python
bot_name_input: str
```

- *Type:* str

---

##### `facebook_application_id_input`<sup>Optional</sup> <a name="facebook_application_id_input" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.facebookApplicationIdInput"></a>

```python
facebook_application_id_input: str
```

- *Type:* str

---

##### `facebook_application_secret_input`<sup>Optional</sup> <a name="facebook_application_secret_input" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.facebookApplicationSecretInput"></a>

```python
facebook_application_secret_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `page_input`<sup>Optional</sup> <a name="page_input" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.pageInput"></a>

```python
page_input: typing.Union[IResolvable, typing.List[BotChannelFacebookPage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage">BotChannelFacebookPage</a>]]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[BotChannelFacebookTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts">BotChannelFacebookTimeouts</a>, cdktf.IResolvable]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.botName"></a>

```python
bot_name: str
```

- *Type:* str

---

##### `facebook_application_id`<sup>Required</sup> <a name="facebook_application_id" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.facebookApplicationId"></a>

```python
facebook_application_id: str
```

- *Type:* str

---

##### `facebook_application_secret`<sup>Required</sup> <a name="facebook_application_secret" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.facebookApplicationSecret"></a>

```python
facebook_application_secret: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BotChannelFacebookConfig <a name="BotChannelFacebookConfig" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_facebook

botChannelFacebook.BotChannelFacebookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bot_name: str,
  facebook_application_id: str,
  facebook_application_secret: str,
  location: str,
  page: typing.Union[IResolvable, typing.List[BotChannelFacebookPage]],
  resource_group_name: str,
  id: str = None,
  timeouts: BotChannelFacebookTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.botName">bot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#bot_name BotChannelFacebook#bot_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.facebookApplicationId">facebook_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#facebook_application_id BotChannelFacebook#facebook_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.facebookApplicationSecret">facebook_application_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#facebook_application_secret BotChannelFacebook#facebook_application_secret}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#location BotChannelFacebook#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.page">page</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage">BotChannelFacebookPage</a>]]</code> | page block. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#resource_group_name BotChannelFacebook#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#id BotChannelFacebook#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts">BotChannelFacebookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.botName"></a>

```python
bot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#bot_name BotChannelFacebook#bot_name}.

---

##### `facebook_application_id`<sup>Required</sup> <a name="facebook_application_id" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.facebookApplicationId"></a>

```python
facebook_application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#facebook_application_id BotChannelFacebook#facebook_application_id}.

---

##### `facebook_application_secret`<sup>Required</sup> <a name="facebook_application_secret" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.facebookApplicationSecret"></a>

```python
facebook_application_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#facebook_application_secret BotChannelFacebook#facebook_application_secret}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#location BotChannelFacebook#location}.

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.page"></a>

```python
page: typing.Union[IResolvable, typing.List[BotChannelFacebookPage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage">BotChannelFacebookPage</a>]]

page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#page BotChannelFacebook#page}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#resource_group_name BotChannelFacebook#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#id BotChannelFacebook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookConfig.property.timeouts"></a>

```python
timeouts: BotChannelFacebookTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts">BotChannelFacebookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#timeouts BotChannelFacebook#timeouts}

---

### BotChannelFacebookPage <a name="BotChannelFacebookPage" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_facebook

botChannelFacebook.BotChannelFacebookPage(
  access_token: str,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage.property.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#access_token BotChannelFacebook#access_token}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#id BotChannelFacebook#id}. |

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#access_token BotChannelFacebook#access_token}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#id BotChannelFacebook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### BotChannelFacebookTimeouts <a name="BotChannelFacebookTimeouts" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_facebook

botChannelFacebook.BotChannelFacebookTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#create BotChannelFacebook#create}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#delete BotChannelFacebook#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#read BotChannelFacebook#read}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#update BotChannelFacebook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#create BotChannelFacebook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#delete BotChannelFacebook#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#read BotChannelFacebook#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/bot_channel_facebook#update BotChannelFacebook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotChannelFacebookPageList <a name="BotChannelFacebookPageList" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_facebook

botChannelFacebook.BotChannelFacebookPageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BotChannelFacebookPageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage">BotChannelFacebookPage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BotChannelFacebookPage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage">BotChannelFacebookPage</a>]]

---


### BotChannelFacebookPageOutputReference <a name="BotChannelFacebookPageOutputReference" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_facebook

botChannelFacebook.BotChannelFacebookPageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage">BotChannelFacebookPage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[BotChannelFacebookPage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookPage">BotChannelFacebookPage</a>, cdktf.IResolvable]

---


### BotChannelFacebookTimeoutsOutputReference <a name="BotChannelFacebookTimeoutsOutputReference" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_facebook

botChannelFacebook.BotChannelFacebookTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts">BotChannelFacebookTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[BotChannelFacebookTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.botChannelFacebook.BotChannelFacebookTimeouts">BotChannelFacebookTimeouts</a>, cdktf.IResolvable]

---



