# `eventgridDomain` Submodule <a name="`eventgridDomain` Submodule" id="@cdktf/provider-azurerm.eventgridDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridDomain <a name="EventgridDomain" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain azurerm_eventgrid_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomain(
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
  auto_create_topic_with_first_subscription: typing.Union[bool, IResolvable] = None,
  auto_delete_topic_with_last_subscription: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: EventgridDomainIdentity = None,
  inbound_ip_rule: typing.Union[IResolvable, typing.List[EventgridDomainInboundIpRule]] = None,
  input_mapping_default_values: EventgridDomainInputMappingDefaultValues = None,
  input_mapping_fields: EventgridDomainInputMappingFields = None,
  input_schema: str = None,
  local_auth_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: EventgridDomainTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#location EventgridDomain#location}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#name EventgridDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#resource_group_name EventgridDomain#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.autoCreateTopicWithFirstSubscription">auto_create_topic_with_first_subscription</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#auto_create_topic_with_first_subscription EventgridDomain#auto_create_topic_with_first_subscription}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.autoDeleteTopicWithLastSubscription">auto_delete_topic_with_last_subscription</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#auto_delete_topic_with_last_subscription EventgridDomain#auto_delete_topic_with_last_subscription}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#id EventgridDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.inboundIpRule">inbound_ip_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#inbound_ip_rule EventgridDomain#inbound_ip_rule}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.inputMappingDefaultValues">input_mapping_default_values</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a></code> | input_mapping_default_values block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.inputMappingFields">input_mapping_fields</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a></code> | input_mapping_fields block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.inputSchema">input_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#input_schema EventgridDomain#input_schema}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#local_auth_enabled EventgridDomain#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#public_network_access_enabled EventgridDomain#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#tags EventgridDomain#tags}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#location EventgridDomain#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#name EventgridDomain#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#resource_group_name EventgridDomain#resource_group_name}.

---

##### `auto_create_topic_with_first_subscription`<sup>Optional</sup> <a name="auto_create_topic_with_first_subscription" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.autoCreateTopicWithFirstSubscription"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#auto_create_topic_with_first_subscription EventgridDomain#auto_create_topic_with_first_subscription}.

---

##### `auto_delete_topic_with_last_subscription`<sup>Optional</sup> <a name="auto_delete_topic_with_last_subscription" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.autoDeleteTopicWithLastSubscription"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#auto_delete_topic_with_last_subscription EventgridDomain#auto_delete_topic_with_last_subscription}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#id EventgridDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#identity EventgridDomain#identity}

---

##### `inbound_ip_rule`<sup>Optional</sup> <a name="inbound_ip_rule" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.inboundIpRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#inbound_ip_rule EventgridDomain#inbound_ip_rule}.

---

##### `input_mapping_default_values`<sup>Optional</sup> <a name="input_mapping_default_values" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.inputMappingDefaultValues"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a>

input_mapping_default_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#input_mapping_default_values EventgridDomain#input_mapping_default_values}

---

##### `input_mapping_fields`<sup>Optional</sup> <a name="input_mapping_fields" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.inputMappingFields"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a>

input_mapping_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#input_mapping_fields EventgridDomain#input_mapping_fields}

---

##### `input_schema`<sup>Optional</sup> <a name="input_schema" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.inputSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#input_schema EventgridDomain#input_schema}.

---

##### `local_auth_enabled`<sup>Optional</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.localAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#local_auth_enabled EventgridDomain#local_auth_enabled}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#public_network_access_enabled EventgridDomain#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#tags EventgridDomain#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#timeouts EventgridDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInboundIpRule">put_inbound_ip_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingDefaultValues">put_input_mapping_default_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingFields">put_input_mapping_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetAutoCreateTopicWithFirstSubscription">reset_auto_create_topic_with_first_subscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetAutoDeleteTopicWithLastSubscription">reset_auto_delete_topic_with_last_subscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetInboundIpRule">reset_inbound_ip_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetInputMappingDefaultValues">reset_input_mapping_default_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetInputMappingFields">reset_input_mapping_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetInputSchema">reset_input_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetLocalAuthEnabled">reset_local_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#type EventgridDomain#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#identity_ids EventgridDomain#identity_ids}.

---

##### `put_inbound_ip_rule` <a name="put_inbound_ip_rule" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInboundIpRule"></a>

```python
def put_inbound_ip_rule(
  value: typing.Union[IResolvable, typing.List[EventgridDomainInboundIpRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInboundIpRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>]]

---

##### `put_input_mapping_default_values` <a name="put_input_mapping_default_values" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingDefaultValues"></a>

```python
def put_input_mapping_default_values(
  data_version: str = None,
  event_type: str = None,
  subject: str = None
) -> None
```

###### `data_version`<sup>Optional</sup> <a name="data_version" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingDefaultValues.parameter.dataVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#data_version EventgridDomain#data_version}.

---

###### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingDefaultValues.parameter.eventType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#event_type EventgridDomain#event_type}.

---

###### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingDefaultValues.parameter.subject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#subject EventgridDomain#subject}.

---

##### `put_input_mapping_fields` <a name="put_input_mapping_fields" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingFields"></a>

```python
def put_input_mapping_fields(
  data_version: str = None,
  event_time: str = None,
  event_type: str = None,
  id: str = None,
  subject: str = None,
  topic: str = None
) -> None
```

###### `data_version`<sup>Optional</sup> <a name="data_version" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingFields.parameter.dataVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#data_version EventgridDomain#data_version}.

---

###### `event_time`<sup>Optional</sup> <a name="event_time" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingFields.parameter.eventTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#event_time EventgridDomain#event_time}.

---

###### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingFields.parameter.eventType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#event_type EventgridDomain#event_type}.

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingFields.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#id EventgridDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingFields.parameter.subject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#subject EventgridDomain#subject}.

---

###### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingFields.parameter.topic"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#topic EventgridDomain#topic}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#create EventgridDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#delete EventgridDomain#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#read EventgridDomain#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#update EventgridDomain#update}.

---

##### `reset_auto_create_topic_with_first_subscription` <a name="reset_auto_create_topic_with_first_subscription" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetAutoCreateTopicWithFirstSubscription"></a>

```python
def reset_auto_create_topic_with_first_subscription() -> None
```

##### `reset_auto_delete_topic_with_last_subscription` <a name="reset_auto_delete_topic_with_last_subscription" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetAutoDeleteTopicWithLastSubscription"></a>

```python
def reset_auto_delete_topic_with_last_subscription() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_inbound_ip_rule` <a name="reset_inbound_ip_rule" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetInboundIpRule"></a>

```python
def reset_inbound_ip_rule() -> None
```

##### `reset_input_mapping_default_values` <a name="reset_input_mapping_default_values" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetInputMappingDefaultValues"></a>

```python
def reset_input_mapping_default_values() -> None
```

##### `reset_input_mapping_fields` <a name="reset_input_mapping_fields" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetInputMappingFields"></a>

```python
def reset_input_mapping_fields() -> None
```

##### `reset_input_schema` <a name="reset_input_schema" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetInputSchema"></a>

```python
def reset_input_schema() -> None
```

##### `reset_local_auth_enabled` <a name="reset_local_auth_enabled" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetLocalAuthEnabled"></a>

```python
def reset_local_auth_enabled() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EventgridDomain resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EventgridDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventgridDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventgridDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventgridDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference">EventgridDomainIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inboundIpRule">inbound_ip_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList">EventgridDomainInboundIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingDefaultValues">input_mapping_default_values</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference">EventgridDomainInputMappingDefaultValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingFields">input_mapping_fields</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference">EventgridDomainInputMappingFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.primaryAccessKey">primary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.secondaryAccessKey">secondary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference">EventgridDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.autoCreateTopicWithFirstSubscriptionInput">auto_create_topic_with_first_subscription_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.autoDeleteTopicWithLastSubscriptionInput">auto_delete_topic_with_last_subscription_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inboundIpRuleInput">inbound_ip_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingDefaultValuesInput">input_mapping_default_values_input</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingFieldsInput">input_mapping_fields_input</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inputSchemaInput">input_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.localAuthEnabledInput">local_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.autoCreateTopicWithFirstSubscription">auto_create_topic_with_first_subscription</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.autoDeleteTopicWithLastSubscription">auto_delete_topic_with_last_subscription</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inputSchema">input_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.identity"></a>

```python
identity: EventgridDomainIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference">EventgridDomainIdentityOutputReference</a>

---

##### `inbound_ip_rule`<sup>Required</sup> <a name="inbound_ip_rule" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inboundIpRule"></a>

```python
inbound_ip_rule: EventgridDomainInboundIpRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList">EventgridDomainInboundIpRuleList</a>

---

##### `input_mapping_default_values`<sup>Required</sup> <a name="input_mapping_default_values" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingDefaultValues"></a>

```python
input_mapping_default_values: EventgridDomainInputMappingDefaultValuesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference">EventgridDomainInputMappingDefaultValuesOutputReference</a>

---

##### `input_mapping_fields`<sup>Required</sup> <a name="input_mapping_fields" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingFields"></a>

```python
input_mapping_fields: EventgridDomainInputMappingFieldsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference">EventgridDomainInputMappingFieldsOutputReference</a>

---

##### `primary_access_key`<sup>Required</sup> <a name="primary_access_key" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.primaryAccessKey"></a>

```python
primary_access_key: str
```

- *Type:* str

---

##### `secondary_access_key`<sup>Required</sup> <a name="secondary_access_key" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.secondaryAccessKey"></a>

```python
secondary_access_key: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.timeouts"></a>

```python
timeouts: EventgridDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference">EventgridDomainTimeoutsOutputReference</a>

---

##### `auto_create_topic_with_first_subscription_input`<sup>Optional</sup> <a name="auto_create_topic_with_first_subscription_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.autoCreateTopicWithFirstSubscriptionInput"></a>

```python
auto_create_topic_with_first_subscription_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_delete_topic_with_last_subscription_input`<sup>Optional</sup> <a name="auto_delete_topic_with_last_subscription_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.autoDeleteTopicWithLastSubscriptionInput"></a>

```python
auto_delete_topic_with_last_subscription_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.identityInput"></a>

```python
identity_input: EventgridDomainIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inbound_ip_rule_input`<sup>Optional</sup> <a name="inbound_ip_rule_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inboundIpRuleInput"></a>

```python
inbound_ip_rule_input: typing.Union[IResolvable, typing.List[EventgridDomainInboundIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>]]

---

##### `input_mapping_default_values_input`<sup>Optional</sup> <a name="input_mapping_default_values_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingDefaultValuesInput"></a>

```python
input_mapping_default_values_input: EventgridDomainInputMappingDefaultValues
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a>

---

##### `input_mapping_fields_input`<sup>Optional</sup> <a name="input_mapping_fields_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingFieldsInput"></a>

```python
input_mapping_fields_input: EventgridDomainInputMappingFields
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a>

---

##### `input_schema_input`<sup>Optional</sup> <a name="input_schema_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inputSchemaInput"></a>

```python
input_schema_input: str
```

- *Type:* str

---

##### `local_auth_enabled_input`<sup>Optional</sup> <a name="local_auth_enabled_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.localAuthEnabledInput"></a>

```python
local_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EventgridDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a>]

---

##### `auto_create_topic_with_first_subscription`<sup>Required</sup> <a name="auto_create_topic_with_first_subscription" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.autoCreateTopicWithFirstSubscription"></a>

```python
auto_create_topic_with_first_subscription: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_delete_topic_with_last_subscription`<sup>Required</sup> <a name="auto_delete_topic_with_last_subscription" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.autoDeleteTopicWithLastSubscription"></a>

```python
auto_delete_topic_with_last_subscription: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_schema`<sup>Required</sup> <a name="input_schema" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.inputSchema"></a>

```python
input_schema: str
```

- *Type:* str

---

##### `local_auth_enabled`<sup>Required</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.localAuthEnabled"></a>

```python
local_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridDomainConfig <a name="EventgridDomainConfig" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomainConfig(
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
  auto_create_topic_with_first_subscription: typing.Union[bool, IResolvable] = None,
  auto_delete_topic_with_last_subscription: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: EventgridDomainIdentity = None,
  inbound_ip_rule: typing.Union[IResolvable, typing.List[EventgridDomainInboundIpRule]] = None,
  input_mapping_default_values: EventgridDomainInputMappingDefaultValues = None,
  input_mapping_fields: EventgridDomainInputMappingFields = None,
  input_schema: str = None,
  local_auth_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: EventgridDomainTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#location EventgridDomain#location}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#name EventgridDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#resource_group_name EventgridDomain#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.autoCreateTopicWithFirstSubscription">auto_create_topic_with_first_subscription</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#auto_create_topic_with_first_subscription EventgridDomain#auto_create_topic_with_first_subscription}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.autoDeleteTopicWithLastSubscription">auto_delete_topic_with_last_subscription</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#auto_delete_topic_with_last_subscription EventgridDomain#auto_delete_topic_with_last_subscription}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#id EventgridDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inboundIpRule">inbound_ip_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#inbound_ip_rule EventgridDomain#inbound_ip_rule}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inputMappingDefaultValues">input_mapping_default_values</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a></code> | input_mapping_default_values block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inputMappingFields">input_mapping_fields</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a></code> | input_mapping_fields block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inputSchema">input_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#input_schema EventgridDomain#input_schema}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#local_auth_enabled EventgridDomain#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#public_network_access_enabled EventgridDomain#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#tags EventgridDomain#tags}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#location EventgridDomain#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#name EventgridDomain#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#resource_group_name EventgridDomain#resource_group_name}.

---

##### `auto_create_topic_with_first_subscription`<sup>Optional</sup> <a name="auto_create_topic_with_first_subscription" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.autoCreateTopicWithFirstSubscription"></a>

```python
auto_create_topic_with_first_subscription: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#auto_create_topic_with_first_subscription EventgridDomain#auto_create_topic_with_first_subscription}.

---

##### `auto_delete_topic_with_last_subscription`<sup>Optional</sup> <a name="auto_delete_topic_with_last_subscription" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.autoDeleteTopicWithLastSubscription"></a>

```python
auto_delete_topic_with_last_subscription: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#auto_delete_topic_with_last_subscription EventgridDomain#auto_delete_topic_with_last_subscription}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#id EventgridDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.identity"></a>

```python
identity: EventgridDomainIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#identity EventgridDomain#identity}

---

##### `inbound_ip_rule`<sup>Optional</sup> <a name="inbound_ip_rule" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inboundIpRule"></a>

```python
inbound_ip_rule: typing.Union[IResolvable, typing.List[EventgridDomainInboundIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#inbound_ip_rule EventgridDomain#inbound_ip_rule}.

---

##### `input_mapping_default_values`<sup>Optional</sup> <a name="input_mapping_default_values" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inputMappingDefaultValues"></a>

```python
input_mapping_default_values: EventgridDomainInputMappingDefaultValues
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a>

input_mapping_default_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#input_mapping_default_values EventgridDomain#input_mapping_default_values}

---

##### `input_mapping_fields`<sup>Optional</sup> <a name="input_mapping_fields" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inputMappingFields"></a>

```python
input_mapping_fields: EventgridDomainInputMappingFields
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a>

input_mapping_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#input_mapping_fields EventgridDomain#input_mapping_fields}

---

##### `input_schema`<sup>Optional</sup> <a name="input_schema" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inputSchema"></a>

```python
input_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#input_schema EventgridDomain#input_schema}.

---

##### `local_auth_enabled`<sup>Optional</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.localAuthEnabled"></a>

```python
local_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#local_auth_enabled EventgridDomain#local_auth_enabled}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#public_network_access_enabled EventgridDomain#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#tags EventgridDomain#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.timeouts"></a>

```python
timeouts: EventgridDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#timeouts EventgridDomain#timeouts}

---

### EventgridDomainIdentity <a name="EventgridDomainIdentity" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomainIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#type EventgridDomain#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#identity_ids EventgridDomain#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#type EventgridDomain#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#identity_ids EventgridDomain#identity_ids}.

---

### EventgridDomainInboundIpRule <a name="EventgridDomainInboundIpRule" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomainInboundIpRule(
  action: str = None,
  ip_mask: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#action EventgridDomain#action}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule.property.ipMask">ip_mask</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#ip_mask EventgridDomain#ip_mask}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#action EventgridDomain#action}.

---

##### `ip_mask`<sup>Optional</sup> <a name="ip_mask" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule.property.ipMask"></a>

```python
ip_mask: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#ip_mask EventgridDomain#ip_mask}.

---

### EventgridDomainInputMappingDefaultValues <a name="EventgridDomainInputMappingDefaultValues" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomainInputMappingDefaultValues(
  data_version: str = None,
  event_type: str = None,
  subject: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues.property.dataVersion">data_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#data_version EventgridDomain#data_version}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues.property.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#event_type EventgridDomain#event_type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues.property.subject">subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#subject EventgridDomain#subject}. |

---

##### `data_version`<sup>Optional</sup> <a name="data_version" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues.property.dataVersion"></a>

```python
data_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#data_version EventgridDomain#data_version}.

---

##### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#event_type EventgridDomain#event_type}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues.property.subject"></a>

```python
subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#subject EventgridDomain#subject}.

---

### EventgridDomainInputMappingFields <a name="EventgridDomainInputMappingFields" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomainInputMappingFields(
  data_version: str = None,
  event_time: str = None,
  event_type: str = None,
  id: str = None,
  subject: str = None,
  topic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.dataVersion">data_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#data_version EventgridDomain#data_version}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.eventTime">event_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#event_time EventgridDomain#event_time}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#event_type EventgridDomain#event_type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#id EventgridDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.subject">subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#subject EventgridDomain#subject}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.topic">topic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#topic EventgridDomain#topic}. |

---

##### `data_version`<sup>Optional</sup> <a name="data_version" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.dataVersion"></a>

```python
data_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#data_version EventgridDomain#data_version}.

---

##### `event_time`<sup>Optional</sup> <a name="event_time" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.eventTime"></a>

```python
event_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#event_time EventgridDomain#event_time}.

---

##### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#event_type EventgridDomain#event_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#id EventgridDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.subject"></a>

```python
subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#subject EventgridDomain#subject}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.topic"></a>

```python
topic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#topic EventgridDomain#topic}.

---

### EventgridDomainTimeouts <a name="EventgridDomainTimeouts" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomainTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#create EventgridDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#delete EventgridDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#read EventgridDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#update EventgridDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#create EventgridDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#delete EventgridDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#read EventgridDomain#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/eventgrid_domain#update EventgridDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridDomainIdentityOutputReference <a name="EventgridDomainIdentityOutputReference" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomainIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.internalValue"></a>

```python
internal_value: EventgridDomainIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a>

---


### EventgridDomainInboundIpRuleList <a name="EventgridDomainInboundIpRuleList" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomainInboundIpRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventgridDomainInboundIpRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EventgridDomainInboundIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>]]

---


### EventgridDomainInboundIpRuleOutputReference <a name="EventgridDomainInboundIpRuleOutputReference" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomainInboundIpRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.resetIpMask">reset_ip_mask</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_ip_mask` <a name="reset_ip_mask" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.resetIpMask"></a>

```python
def reset_ip_mask() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.ipMaskInput">ip_mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.ipMask">ip_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `ip_mask_input`<sup>Optional</sup> <a name="ip_mask_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.ipMaskInput"></a>

```python
ip_mask_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_mask`<sup>Required</sup> <a name="ip_mask" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.ipMask"></a>

```python
ip_mask: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventgridDomainInboundIpRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>]

---


### EventgridDomainInputMappingDefaultValuesOutputReference <a name="EventgridDomainInputMappingDefaultValuesOutputReference" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resetDataVersion">reset_data_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resetEventType">reset_event_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resetSubject">reset_subject</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_version` <a name="reset_data_version" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resetDataVersion"></a>

```python
def reset_data_version() -> None
```

##### `reset_event_type` <a name="reset_event_type" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resetEventType"></a>

```python
def reset_event_type() -> None
```

##### `reset_subject` <a name="reset_subject" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resetSubject"></a>

```python
def reset_subject() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.dataVersionInput">data_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.dataVersion">data_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_version_input`<sup>Optional</sup> <a name="data_version_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.dataVersionInput"></a>

```python
data_version_input: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `data_version`<sup>Required</sup> <a name="data_version" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.dataVersion"></a>

```python
data_version: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.internalValue"></a>

```python
internal_value: EventgridDomainInputMappingDefaultValues
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a>

---


### EventgridDomainInputMappingFieldsOutputReference <a name="EventgridDomainInputMappingFieldsOutputReference" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomainInputMappingFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetDataVersion">reset_data_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetEventTime">reset_event_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetEventType">reset_event_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetSubject">reset_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetTopic">reset_topic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_version` <a name="reset_data_version" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetDataVersion"></a>

```python
def reset_data_version() -> None
```

##### `reset_event_time` <a name="reset_event_time" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetEventTime"></a>

```python
def reset_event_time() -> None
```

##### `reset_event_type` <a name="reset_event_type" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetEventType"></a>

```python
def reset_event_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_subject` <a name="reset_subject" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetSubject"></a>

```python
def reset_subject() -> None
```

##### `reset_topic` <a name="reset_topic" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetTopic"></a>

```python
def reset_topic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.dataVersionInput">data_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventTimeInput">event_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.dataVersion">data_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventTime">event_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_version_input`<sup>Optional</sup> <a name="data_version_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.dataVersionInput"></a>

```python
data_version_input: str
```

- *Type:* str

---

##### `event_time_input`<sup>Optional</sup> <a name="event_time_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventTimeInput"></a>

```python
event_time_input: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `data_version`<sup>Required</sup> <a name="data_version" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.dataVersion"></a>

```python
data_version: str
```

- *Type:* str

---

##### `event_time`<sup>Required</sup> <a name="event_time" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventTime"></a>

```python
event_time: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.internalValue"></a>

```python
internal_value: EventgridDomainInputMappingFields
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a>

---


### EventgridDomainTimeoutsOutputReference <a name="EventgridDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventgrid_domain

eventgridDomain.EventgridDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventgridDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a>]

---



