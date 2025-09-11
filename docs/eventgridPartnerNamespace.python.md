# `eventgridPartnerNamespace` Submodule <a name="`eventgridPartnerNamespace` Submodule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridPartnerNamespace <a name="EventgridPartnerNamespace" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace azurerm_eventgrid_partner_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_partner_namespace

eventgridPartnerNamespace.EventgridPartnerNamespace(
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
  partner_registration_id: str,
  resource_group_name: str,
  id: str = None,
  inbound_ip_rule: typing.Union[IResolvable, typing.List[EventgridPartnerNamespaceInboundIpRule]] = None,
  local_authentication_enabled: typing.Union[bool, IResolvable] = None,
  partner_topic_routing_mode: str = None,
  public_network_access: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: EventgridPartnerNamespaceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#location EventgridPartnerNamespace#location}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#name EventgridPartnerNamespace#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.partnerRegistrationId">partner_registration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#partner_registration_id EventgridPartnerNamespace#partner_registration_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#resource_group_name EventgridPartnerNamespace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#id EventgridPartnerNamespace#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.inboundIpRule">inbound_ip_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>]]</code> | inbound_ip_rule block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.localAuthenticationEnabled">local_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#local_authentication_enabled EventgridPartnerNamespace#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.partnerTopicRoutingMode">partner_topic_routing_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#partner_topic_routing_mode EventgridPartnerNamespace#partner_topic_routing_mode}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#public_network_access EventgridPartnerNamespace#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#tags EventgridPartnerNamespace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#location EventgridPartnerNamespace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#name EventgridPartnerNamespace#name}.

---

##### `partner_registration_id`<sup>Required</sup> <a name="partner_registration_id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.partnerRegistrationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#partner_registration_id EventgridPartnerNamespace#partner_registration_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#resource_group_name EventgridPartnerNamespace#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#id EventgridPartnerNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inbound_ip_rule`<sup>Optional</sup> <a name="inbound_ip_rule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.inboundIpRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>]]

inbound_ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#inbound_ip_rule EventgridPartnerNamespace#inbound_ip_rule}

---

##### `local_authentication_enabled`<sup>Optional</sup> <a name="local_authentication_enabled" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.localAuthenticationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#local_authentication_enabled EventgridPartnerNamespace#local_authentication_enabled}.

---

##### `partner_topic_routing_mode`<sup>Optional</sup> <a name="partner_topic_routing_mode" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.partnerTopicRoutingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#partner_topic_routing_mode EventgridPartnerNamespace#partner_topic_routing_mode}.

---

##### `public_network_access`<sup>Optional</sup> <a name="public_network_access" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.publicNetworkAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#public_network_access EventgridPartnerNamespace#public_network_access}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#tags EventgridPartnerNamespace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#timeouts EventgridPartnerNamespace#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putInboundIpRule">put_inbound_ip_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetInboundIpRule">reset_inbound_ip_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetLocalAuthenticationEnabled">reset_local_authentication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetPartnerTopicRoutingMode">reset_partner_topic_routing_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetPublicNetworkAccess">reset_public_network_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_inbound_ip_rule` <a name="put_inbound_ip_rule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putInboundIpRule"></a>

```python
def put_inbound_ip_rule(
  value: typing.Union[IResolvable, typing.List[EventgridPartnerNamespaceInboundIpRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putInboundIpRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#create EventgridPartnerNamespace#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#delete EventgridPartnerNamespace#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#read EventgridPartnerNamespace#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#update EventgridPartnerNamespace#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inbound_ip_rule` <a name="reset_inbound_ip_rule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetInboundIpRule"></a>

```python
def reset_inbound_ip_rule() -> None
```

##### `reset_local_authentication_enabled` <a name="reset_local_authentication_enabled" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetLocalAuthenticationEnabled"></a>

```python
def reset_local_authentication_enabled() -> None
```

##### `reset_partner_topic_routing_mode` <a name="reset_partner_topic_routing_mode" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetPartnerTopicRoutingMode"></a>

```python
def reset_partner_topic_routing_mode() -> None
```

##### `reset_public_network_access` <a name="reset_public_network_access" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetPublicNetworkAccess"></a>

```python
def reset_public_network_access() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EventgridPartnerNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_partner_namespace

eventgridPartnerNamespace.EventgridPartnerNamespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_partner_namespace

eventgridPartnerNamespace.EventgridPartnerNamespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_partner_namespace

eventgridPartnerNamespace.EventgridPartnerNamespace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_partner_namespace

eventgridPartnerNamespace.EventgridPartnerNamespace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EventgridPartnerNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventgridPartnerNamespace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventgridPartnerNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventgridPartnerNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.inboundIpRule">inbound_ip_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList">EventgridPartnerNamespaceInboundIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference">EventgridPartnerNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.inboundIpRuleInput">inbound_ip_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.localAuthenticationEnabledInput">local_authentication_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerRegistrationIdInput">partner_registration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerTopicRoutingModeInput">partner_topic_routing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.publicNetworkAccessInput">public_network_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.localAuthenticationEnabled">local_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerRegistrationId">partner_registration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerTopicRoutingMode">partner_topic_routing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `inbound_ip_rule`<sup>Required</sup> <a name="inbound_ip_rule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.inboundIpRule"></a>

```python
inbound_ip_rule: EventgridPartnerNamespaceInboundIpRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList">EventgridPartnerNamespaceInboundIpRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.timeouts"></a>

```python
timeouts: EventgridPartnerNamespaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference">EventgridPartnerNamespaceTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inbound_ip_rule_input`<sup>Optional</sup> <a name="inbound_ip_rule_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.inboundIpRuleInput"></a>

```python
inbound_ip_rule_input: typing.Union[IResolvable, typing.List[EventgridPartnerNamespaceInboundIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>]]

---

##### `local_authentication_enabled_input`<sup>Optional</sup> <a name="local_authentication_enabled_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.localAuthenticationEnabledInput"></a>

```python
local_authentication_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partner_registration_id_input`<sup>Optional</sup> <a name="partner_registration_id_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerRegistrationIdInput"></a>

```python
partner_registration_id_input: str
```

- *Type:* str

---

##### `partner_topic_routing_mode_input`<sup>Optional</sup> <a name="partner_topic_routing_mode_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerTopicRoutingModeInput"></a>

```python
partner_topic_routing_mode_input: str
```

- *Type:* str

---

##### `public_network_access_input`<sup>Optional</sup> <a name="public_network_access_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.publicNetworkAccessInput"></a>

```python
public_network_access_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EventgridPartnerNamespaceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_authentication_enabled`<sup>Required</sup> <a name="local_authentication_enabled" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.localAuthenticationEnabled"></a>

```python
local_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partner_registration_id`<sup>Required</sup> <a name="partner_registration_id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerRegistrationId"></a>

```python
partner_registration_id: str
```

- *Type:* str

---

##### `partner_topic_routing_mode`<sup>Required</sup> <a name="partner_topic_routing_mode" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.partnerTopicRoutingMode"></a>

```python
partner_topic_routing_mode: str
```

- *Type:* str

---

##### `public_network_access`<sup>Required</sup> <a name="public_network_access" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.publicNetworkAccess"></a>

```python
public_network_access: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridPartnerNamespaceConfig <a name="EventgridPartnerNamespaceConfig" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_partner_namespace

eventgridPartnerNamespace.EventgridPartnerNamespaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  partner_registration_id: str,
  resource_group_name: str,
  id: str = None,
  inbound_ip_rule: typing.Union[IResolvable, typing.List[EventgridPartnerNamespaceInboundIpRule]] = None,
  local_authentication_enabled: typing.Union[bool, IResolvable] = None,
  partner_topic_routing_mode: str = None,
  public_network_access: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: EventgridPartnerNamespaceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#location EventgridPartnerNamespace#location}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#name EventgridPartnerNamespace#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.partnerRegistrationId">partner_registration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#partner_registration_id EventgridPartnerNamespace#partner_registration_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#resource_group_name EventgridPartnerNamespace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#id EventgridPartnerNamespace#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.inboundIpRule">inbound_ip_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>]]</code> | inbound_ip_rule block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.localAuthenticationEnabled">local_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#local_authentication_enabled EventgridPartnerNamespace#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.partnerTopicRoutingMode">partner_topic_routing_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#partner_topic_routing_mode EventgridPartnerNamespace#partner_topic_routing_mode}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#public_network_access EventgridPartnerNamespace#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#tags EventgridPartnerNamespace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#location EventgridPartnerNamespace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#name EventgridPartnerNamespace#name}.

---

##### `partner_registration_id`<sup>Required</sup> <a name="partner_registration_id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.partnerRegistrationId"></a>

```python
partner_registration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#partner_registration_id EventgridPartnerNamespace#partner_registration_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#resource_group_name EventgridPartnerNamespace#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#id EventgridPartnerNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inbound_ip_rule`<sup>Optional</sup> <a name="inbound_ip_rule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.inboundIpRule"></a>

```python
inbound_ip_rule: typing.Union[IResolvable, typing.List[EventgridPartnerNamespaceInboundIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>]]

inbound_ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#inbound_ip_rule EventgridPartnerNamespace#inbound_ip_rule}

---

##### `local_authentication_enabled`<sup>Optional</sup> <a name="local_authentication_enabled" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.localAuthenticationEnabled"></a>

```python
local_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#local_authentication_enabled EventgridPartnerNamespace#local_authentication_enabled}.

---

##### `partner_topic_routing_mode`<sup>Optional</sup> <a name="partner_topic_routing_mode" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.partnerTopicRoutingMode"></a>

```python
partner_topic_routing_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#partner_topic_routing_mode EventgridPartnerNamespace#partner_topic_routing_mode}.

---

##### `public_network_access`<sup>Optional</sup> <a name="public_network_access" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.publicNetworkAccess"></a>

```python
public_network_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#public_network_access EventgridPartnerNamespace#public_network_access}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#tags EventgridPartnerNamespace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceConfig.property.timeouts"></a>

```python
timeouts: EventgridPartnerNamespaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#timeouts EventgridPartnerNamespace#timeouts}

---

### EventgridPartnerNamespaceInboundIpRule <a name="EventgridPartnerNamespaceInboundIpRule" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_partner_namespace

eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule(
  ip_mask: str,
  action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.property.ipMask">ip_mask</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#ip_mask EventgridPartnerNamespace#ip_mask}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#action EventgridPartnerNamespace#action}. |

---

##### `ip_mask`<sup>Required</sup> <a name="ip_mask" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.property.ipMask"></a>

```python
ip_mask: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#ip_mask EventgridPartnerNamespace#ip_mask}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#action EventgridPartnerNamespace#action}.

---

### EventgridPartnerNamespaceTimeouts <a name="EventgridPartnerNamespaceTimeouts" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_partner_namespace

eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#create EventgridPartnerNamespace#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#delete EventgridPartnerNamespace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#read EventgridPartnerNamespace#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#update EventgridPartnerNamespace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#create EventgridPartnerNamespace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#delete EventgridPartnerNamespace#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#read EventgridPartnerNamespace#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/eventgrid_partner_namespace#update EventgridPartnerNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridPartnerNamespaceInboundIpRuleList <a name="EventgridPartnerNamespaceInboundIpRuleList" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_partner_namespace

eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventgridPartnerNamespaceInboundIpRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EventgridPartnerNamespaceInboundIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>]]

---


### EventgridPartnerNamespaceInboundIpRuleOutputReference <a name="EventgridPartnerNamespaceInboundIpRuleOutputReference" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_partner_namespace

eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resetAction">reset_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.resetAction"></a>

```python
def reset_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.ipMaskInput">ip_mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.ipMask">ip_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `ip_mask_input`<sup>Optional</sup> <a name="ip_mask_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.ipMaskInput"></a>

```python
ip_mask_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_mask`<sup>Required</sup> <a name="ip_mask" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.ipMask"></a>

```python
ip_mask: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventgridPartnerNamespaceInboundIpRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceInboundIpRule">EventgridPartnerNamespaceInboundIpRule</a>]

---


### EventgridPartnerNamespaceTimeoutsOutputReference <a name="EventgridPartnerNamespaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_partner_namespace

eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventgridPartnerNamespaceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventgridPartnerNamespace.EventgridPartnerNamespaceTimeouts">EventgridPartnerNamespaceTimeouts</a>]

---



