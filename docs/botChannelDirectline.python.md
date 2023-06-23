# `azurerm_bot_channel_directline`

Refer to the Terraform Registory for docs: [`azurerm_bot_channel_directline`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline).

# `botChannelDirectline` Submodule <a name="`botChannelDirectline` Submodule" id="@cdktf/provider-azurerm.botChannelDirectline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotChannelDirectline <a name="BotChannelDirectline" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline azurerm_bot_channel_directline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_directline

botChannelDirectline.BotChannelDirectline(
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
  location: str,
  resource_group_name: str,
  site: typing.Union[IResolvable, typing.List[BotChannelDirectlineSite]],
  id: str = None,
  timeouts: BotChannelDirectlineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.botName">bot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#bot_name BotChannelDirectline#bot_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#location BotChannelDirectline#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#resource_group_name BotChannelDirectline#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.site">site</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>]]</code> | site block. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#id BotChannelDirectline#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.botName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#bot_name BotChannelDirectline#bot_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#location BotChannelDirectline#location}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#resource_group_name BotChannelDirectline#resource_group_name}.

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.site"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>]]

site block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#site BotChannelDirectline#site}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#id BotChannelDirectline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#timeouts BotChannelDirectline#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putSite">put_site</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_site` <a name="put_site" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putSite"></a>

```python
def put_site(
  value: typing.Union[IResolvable, typing.List[BotChannelDirectlineSite]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putSite.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#create BotChannelDirectline#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#delete BotChannelDirectline#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#read BotChannelDirectline#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#update BotChannelDirectline#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_directline

botChannelDirectline.BotChannelDirectline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_directline

botChannelDirectline.BotChannelDirectline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_directline

botChannelDirectline.BotChannelDirectline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.site">site</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList">BotChannelDirectlineSiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference">BotChannelDirectlineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.botNameInput">bot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.siteInput">site_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.botName">bot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.site"></a>

```python
site: BotChannelDirectlineSiteList
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList">BotChannelDirectlineSiteList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.timeouts"></a>

```python
timeouts: BotChannelDirectlineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference">BotChannelDirectlineTimeoutsOutputReference</a>

---

##### `bot_name_input`<sup>Optional</sup> <a name="bot_name_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.botNameInput"></a>

```python
bot_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `site_input`<sup>Optional</sup> <a name="site_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.siteInput"></a>

```python
site_input: typing.Union[IResolvable, typing.List[BotChannelDirectlineSite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BotChannelDirectlineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a>]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.botName"></a>

```python
bot_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BotChannelDirectlineConfig <a name="BotChannelDirectlineConfig" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_directline

botChannelDirectline.BotChannelDirectlineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bot_name: str,
  location: str,
  resource_group_name: str,
  site: typing.Union[IResolvable, typing.List[BotChannelDirectlineSite]],
  id: str = None,
  timeouts: BotChannelDirectlineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.botName">bot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#bot_name BotChannelDirectline#bot_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#location BotChannelDirectline#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#resource_group_name BotChannelDirectline#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.site">site</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>]]</code> | site block. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#id BotChannelDirectline#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bot_name`<sup>Required</sup> <a name="bot_name" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.botName"></a>

```python
bot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#bot_name BotChannelDirectline#bot_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#location BotChannelDirectline#location}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#resource_group_name BotChannelDirectline#resource_group_name}.

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.site"></a>

```python
site: typing.Union[IResolvable, typing.List[BotChannelDirectlineSite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>]]

site block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#site BotChannelDirectline#site}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#id BotChannelDirectline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.timeouts"></a>

```python
timeouts: BotChannelDirectlineTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#timeouts BotChannelDirectline#timeouts}

---

### BotChannelDirectlineSite <a name="BotChannelDirectlineSite" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_directline

botChannelDirectline.BotChannelDirectlineSite(
  name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  enhanced_authentication_enabled: typing.Union[bool, IResolvable] = None,
  trusted_origins: typing.List[str] = None,
  v1_allowed: typing.Union[bool, IResolvable] = None,
  v3_allowed: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#name BotChannelDirectline#name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#enabled BotChannelDirectline#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.enhancedAuthenticationEnabled">enhanced_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#enhanced_authentication_enabled BotChannelDirectline#enhanced_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.trustedOrigins">trusted_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#trusted_origins BotChannelDirectline#trusted_origins}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.v1Allowed">v1_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#v1_allowed BotChannelDirectline#v1_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.v3Allowed">v3_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#v3_allowed BotChannelDirectline#v3_allowed}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#name BotChannelDirectline#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#enabled BotChannelDirectline#enabled}.

---

##### `enhanced_authentication_enabled`<sup>Optional</sup> <a name="enhanced_authentication_enabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.enhancedAuthenticationEnabled"></a>

```python
enhanced_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#enhanced_authentication_enabled BotChannelDirectline#enhanced_authentication_enabled}.

---

##### `trusted_origins`<sup>Optional</sup> <a name="trusted_origins" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.trustedOrigins"></a>

```python
trusted_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#trusted_origins BotChannelDirectline#trusted_origins}.

---

##### `v1_allowed`<sup>Optional</sup> <a name="v1_allowed" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.v1Allowed"></a>

```python
v1_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#v1_allowed BotChannelDirectline#v1_allowed}.

---

##### `v3_allowed`<sup>Optional</sup> <a name="v3_allowed" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.v3Allowed"></a>

```python
v3_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#v3_allowed BotChannelDirectline#v3_allowed}.

---

### BotChannelDirectlineTimeouts <a name="BotChannelDirectlineTimeouts" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_directline

botChannelDirectline.BotChannelDirectlineTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#create BotChannelDirectline#create}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#delete BotChannelDirectline#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#read BotChannelDirectline#read}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#update BotChannelDirectline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#create BotChannelDirectline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#delete BotChannelDirectline#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#read BotChannelDirectline#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/bot_channel_directline#update BotChannelDirectline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotChannelDirectlineSiteList <a name="BotChannelDirectlineSiteList" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_directline

botChannelDirectline.BotChannelDirectlineSiteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BotChannelDirectlineSiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BotChannelDirectlineSite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>]]

---


### BotChannelDirectlineSiteOutputReference <a name="BotChannelDirectlineSiteOutputReference" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_directline

botChannelDirectline.BotChannelDirectlineSiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEnhancedAuthenticationEnabled">reset_enhanced_authentication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetTrustedOrigins">reset_trusted_origins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetV1Allowed">reset_v1_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetV3Allowed">reset_v3_allowed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_enhanced_authentication_enabled` <a name="reset_enhanced_authentication_enabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEnhancedAuthenticationEnabled"></a>

```python
def reset_enhanced_authentication_enabled() -> None
```

##### `reset_trusted_origins` <a name="reset_trusted_origins" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetTrustedOrigins"></a>

```python
def reset_trusted_origins() -> None
```

##### `reset_v1_allowed` <a name="reset_v1_allowed" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetV1Allowed"></a>

```python
def reset_v1_allowed() -> None
```

##### `reset_v3_allowed` <a name="reset_v3_allowed" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetV3Allowed"></a>

```python
def reset_v3_allowed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.key2">key2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enhancedAuthenticationEnabledInput">enhanced_authentication_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.trustedOriginsInput">trusted_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v1AllowedInput">v1_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v3AllowedInput">v3_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enhancedAuthenticationEnabled">enhanced_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.trustedOrigins">trusted_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v1Allowed">v1_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v3Allowed">v3_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `key2`<sup>Required</sup> <a name="key2" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.key2"></a>

```python
key2: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enhanced_authentication_enabled_input`<sup>Optional</sup> <a name="enhanced_authentication_enabled_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enhancedAuthenticationEnabledInput"></a>

```python
enhanced_authentication_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `trusted_origins_input`<sup>Optional</sup> <a name="trusted_origins_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.trustedOriginsInput"></a>

```python
trusted_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `v1_allowed_input`<sup>Optional</sup> <a name="v1_allowed_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v1AllowedInput"></a>

```python
v1_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `v3_allowed_input`<sup>Optional</sup> <a name="v3_allowed_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v3AllowedInput"></a>

```python
v3_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enhanced_authentication_enabled`<sup>Required</sup> <a name="enhanced_authentication_enabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enhancedAuthenticationEnabled"></a>

```python
enhanced_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `trusted_origins`<sup>Required</sup> <a name="trusted_origins" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.trustedOrigins"></a>

```python
trusted_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `v1_allowed`<sup>Required</sup> <a name="v1_allowed" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v1Allowed"></a>

```python
v1_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `v3_allowed`<sup>Required</sup> <a name="v3_allowed" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v3Allowed"></a>

```python
v3_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BotChannelDirectlineSite]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>]

---


### BotChannelDirectlineTimeoutsOutputReference <a name="BotChannelDirectlineTimeoutsOutputReference" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import bot_channel_directline

botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BotChannelDirectlineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a>]

---



