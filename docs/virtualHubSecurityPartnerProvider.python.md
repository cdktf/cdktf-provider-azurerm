# `virtualHubSecurityPartnerProvider` Submodule <a name="`virtualHubSecurityPartnerProvider` Submodule" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualHubSecurityPartnerProvider <a name="VirtualHubSecurityPartnerProvider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider azurerm_virtual_hub_security_partner_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_security_partner_provider

virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider(
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
  resource_group_name: str,
  security_provider_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualHubSecurityPartnerProviderTimeouts = None,
  virtual_hub_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#location VirtualHubSecurityPartnerProvider#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#name VirtualHubSecurityPartnerProvider#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#resource_group_name VirtualHubSecurityPartnerProvider#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.securityProviderName">security_provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#security_provider_name VirtualHubSecurityPartnerProvider#security_provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#id VirtualHubSecurityPartnerProvider#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#tags VirtualHubSecurityPartnerProvider#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#virtual_hub_id VirtualHubSecurityPartnerProvider#virtual_hub_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#location VirtualHubSecurityPartnerProvider#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#name VirtualHubSecurityPartnerProvider#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#resource_group_name VirtualHubSecurityPartnerProvider#resource_group_name}.

---

##### `security_provider_name`<sup>Required</sup> <a name="security_provider_name" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.securityProviderName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#security_provider_name VirtualHubSecurityPartnerProvider#security_provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#id VirtualHubSecurityPartnerProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#tags VirtualHubSecurityPartnerProvider#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#timeouts VirtualHubSecurityPartnerProvider#timeouts}

---

##### `virtual_hub_id`<sup>Optional</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.virtualHubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#virtual_hub_id VirtualHubSecurityPartnerProvider#virtual_hub_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetVirtualHubId">reset_virtual_hub_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#create VirtualHubSecurityPartnerProvider#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#delete VirtualHubSecurityPartnerProvider#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#read VirtualHubSecurityPartnerProvider#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#update VirtualHubSecurityPartnerProvider#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_virtual_hub_id` <a name="reset_virtual_hub_id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetVirtualHubId"></a>

```python
def reset_virtual_hub_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualHubSecurityPartnerProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_security_partner_provider

virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_security_partner_provider

virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_security_partner_provider

virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_security_partner_provider

virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualHubSecurityPartnerProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualHubSecurityPartnerProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualHubSecurityPartnerProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualHubSecurityPartnerProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference">VirtualHubSecurityPartnerProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.securityProviderNameInput">security_provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.virtualHubIdInput">virtual_hub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.securityProviderName">security_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.timeouts"></a>

```python
timeouts: VirtualHubSecurityPartnerProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference">VirtualHubSecurityPartnerProviderTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `security_provider_name_input`<sup>Optional</sup> <a name="security_provider_name_input" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.securityProviderNameInput"></a>

```python
security_provider_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualHubSecurityPartnerProviderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a>]

---

##### `virtual_hub_id_input`<sup>Optional</sup> <a name="virtual_hub_id_input" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.virtualHubIdInput"></a>

```python
virtual_hub_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `security_provider_name`<sup>Required</sup> <a name="security_provider_name" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.securityProviderName"></a>

```python
security_provider_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.virtualHubId"></a>

```python
virtual_hub_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualHubSecurityPartnerProviderConfig <a name="VirtualHubSecurityPartnerProviderConfig" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_security_partner_provider

virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  security_provider_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualHubSecurityPartnerProviderTimeouts = None,
  virtual_hub_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#location VirtualHubSecurityPartnerProvider#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#name VirtualHubSecurityPartnerProvider#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#resource_group_name VirtualHubSecurityPartnerProvider#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.securityProviderName">security_provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#security_provider_name VirtualHubSecurityPartnerProvider#security_provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#id VirtualHubSecurityPartnerProvider#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#tags VirtualHubSecurityPartnerProvider#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#virtual_hub_id VirtualHubSecurityPartnerProvider#virtual_hub_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#location VirtualHubSecurityPartnerProvider#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#name VirtualHubSecurityPartnerProvider#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#resource_group_name VirtualHubSecurityPartnerProvider#resource_group_name}.

---

##### `security_provider_name`<sup>Required</sup> <a name="security_provider_name" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.securityProviderName"></a>

```python
security_provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#security_provider_name VirtualHubSecurityPartnerProvider#security_provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#id VirtualHubSecurityPartnerProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#tags VirtualHubSecurityPartnerProvider#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.timeouts"></a>

```python
timeouts: VirtualHubSecurityPartnerProviderTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#timeouts VirtualHubSecurityPartnerProvider#timeouts}

---

##### `virtual_hub_id`<sup>Optional</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.virtualHubId"></a>

```python
virtual_hub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#virtual_hub_id VirtualHubSecurityPartnerProvider#virtual_hub_id}.

---

### VirtualHubSecurityPartnerProviderTimeouts <a name="VirtualHubSecurityPartnerProviderTimeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_security_partner_provider

virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#create VirtualHubSecurityPartnerProvider#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#delete VirtualHubSecurityPartnerProvider#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#read VirtualHubSecurityPartnerProvider#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#update VirtualHubSecurityPartnerProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#create VirtualHubSecurityPartnerProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#delete VirtualHubSecurityPartnerProvider#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#read VirtualHubSecurityPartnerProvider#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_hub_security_partner_provider#update VirtualHubSecurityPartnerProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualHubSecurityPartnerProviderTimeoutsOutputReference <a name="VirtualHubSecurityPartnerProviderTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_hub_security_partner_provider

virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualHubSecurityPartnerProviderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a>]

---



