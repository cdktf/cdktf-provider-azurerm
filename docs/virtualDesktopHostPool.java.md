# `virtualDesktopHostPool` Submodule <a name="`virtualDesktopHostPool` Submodule" id="@cdktf/provider-azurerm.virtualDesktopHostPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopHostPool <a name="VirtualDesktopHostPool" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool azurerm_virtual_desktop_host_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_host_pool.VirtualDesktopHostPool;

VirtualDesktopHostPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .loadBalancerType(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .type(java.lang.String)
//  .customRdpProperties(java.lang.String)
//  .description(java.lang.String)
//  .friendlyName(java.lang.String)
//  .id(java.lang.String)
//  .maximumSessionsAllowed(java.lang.Number)
//  .personalDesktopAssignmentType(java.lang.String)
//  .preferredAppGroupType(java.lang.String)
//  .publicNetworkAccess(java.lang.String)
//  .scheduledAgentUpdates(VirtualDesktopHostPoolScheduledAgentUpdates)
//  .startVmOnConnect(java.lang.Boolean)
//  .startVmOnConnect(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualDesktopHostPoolTimeouts)
//  .validateEnvironment(java.lang.Boolean)
//  .validateEnvironment(IResolvable)
//  .vmTemplate(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.loadBalancerType">loadBalancerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#load_balancer_type VirtualDesktopHostPool#load_balancer_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#location VirtualDesktopHostPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#name VirtualDesktopHostPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#resource_group_name VirtualDesktopHostPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#type VirtualDesktopHostPool#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.customRdpProperties">customRdpProperties</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#custom_rdp_properties VirtualDesktopHostPool#custom_rdp_properties}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#description VirtualDesktopHostPool#description}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#friendly_name VirtualDesktopHostPool#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#id VirtualDesktopHostPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.maximumSessionsAllowed">maximumSessionsAllowed</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#maximum_sessions_allowed VirtualDesktopHostPool#maximum_sessions_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.personalDesktopAssignmentType">personalDesktopAssignmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#personal_desktop_assignment_type VirtualDesktopHostPool#personal_desktop_assignment_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.preferredAppGroupType">preferredAppGroupType</a></code> | <code>java.lang.String</code> | Preferred App Group type to display. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.publicNetworkAccess">publicNetworkAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#public_network_access VirtualDesktopHostPool#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.scheduledAgentUpdates">scheduledAgentUpdates</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a></code> | scheduled_agent_updates block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.startVmOnConnect">startVmOnConnect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#start_vm_on_connect VirtualDesktopHostPool#start_vm_on_connect}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#tags VirtualDesktopHostPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.validateEnvironment">validateEnvironment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#validate_environment VirtualDesktopHostPool#validate_environment}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.vmTemplate">vmTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#vm_template VirtualDesktopHostPool#vm_template}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadBalancerType`<sup>Required</sup> <a name="loadBalancerType" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.loadBalancerType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#load_balancer_type VirtualDesktopHostPool#load_balancer_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#location VirtualDesktopHostPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#name VirtualDesktopHostPool#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#resource_group_name VirtualDesktopHostPool#resource_group_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#type VirtualDesktopHostPool#type}.

---

##### `customRdpProperties`<sup>Optional</sup> <a name="customRdpProperties" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.customRdpProperties"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#custom_rdp_properties VirtualDesktopHostPool#custom_rdp_properties}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#description VirtualDesktopHostPool#description}.

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.friendlyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#friendly_name VirtualDesktopHostPool#friendly_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#id VirtualDesktopHostPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumSessionsAllowed`<sup>Optional</sup> <a name="maximumSessionsAllowed" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.maximumSessionsAllowed"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#maximum_sessions_allowed VirtualDesktopHostPool#maximum_sessions_allowed}.

---

##### `personalDesktopAssignmentType`<sup>Optional</sup> <a name="personalDesktopAssignmentType" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.personalDesktopAssignmentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#personal_desktop_assignment_type VirtualDesktopHostPool#personal_desktop_assignment_type}.

---

##### `preferredAppGroupType`<sup>Optional</sup> <a name="preferredAppGroupType" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.preferredAppGroupType"></a>

- *Type:* java.lang.String

Preferred App Group type to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#preferred_app_group_type VirtualDesktopHostPool#preferred_app_group_type}

---

##### `publicNetworkAccess`<sup>Optional</sup> <a name="publicNetworkAccess" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.publicNetworkAccess"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#public_network_access VirtualDesktopHostPool#public_network_access}.

---

##### `scheduledAgentUpdates`<sup>Optional</sup> <a name="scheduledAgentUpdates" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.scheduledAgentUpdates"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a>

scheduled_agent_updates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#scheduled_agent_updates VirtualDesktopHostPool#scheduled_agent_updates}

---

##### `startVmOnConnect`<sup>Optional</sup> <a name="startVmOnConnect" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.startVmOnConnect"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#start_vm_on_connect VirtualDesktopHostPool#start_vm_on_connect}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#tags VirtualDesktopHostPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#timeouts VirtualDesktopHostPool#timeouts}

---

##### `validateEnvironment`<sup>Optional</sup> <a name="validateEnvironment" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.validateEnvironment"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#validate_environment VirtualDesktopHostPool#validate_environment}.

---

##### `vmTemplate`<sup>Optional</sup> <a name="vmTemplate" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.vmTemplate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#vm_template VirtualDesktopHostPool#vm_template}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putScheduledAgentUpdates">putScheduledAgentUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetCustomRdpProperties">resetCustomRdpProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetMaximumSessionsAllowed">resetMaximumSessionsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetPersonalDesktopAssignmentType">resetPersonalDesktopAssignmentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetPreferredAppGroupType">resetPreferredAppGroupType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetPublicNetworkAccess">resetPublicNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetScheduledAgentUpdates">resetScheduledAgentUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetStartVmOnConnect">resetStartVmOnConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetValidateEnvironment">resetValidateEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetVmTemplate">resetVmTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScheduledAgentUpdates` <a name="putScheduledAgentUpdates" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putScheduledAgentUpdates"></a>

```java
public void putScheduledAgentUpdates(VirtualDesktopHostPoolScheduledAgentUpdates value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putScheduledAgentUpdates.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putTimeouts"></a>

```java
public void putTimeouts(VirtualDesktopHostPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a>

---

##### `resetCustomRdpProperties` <a name="resetCustomRdpProperties" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetCustomRdpProperties"></a>

```java
public void resetCustomRdpProperties()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetFriendlyName"></a>

```java
public void resetFriendlyName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetId"></a>

```java
public void resetId()
```

##### `resetMaximumSessionsAllowed` <a name="resetMaximumSessionsAllowed" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetMaximumSessionsAllowed"></a>

```java
public void resetMaximumSessionsAllowed()
```

##### `resetPersonalDesktopAssignmentType` <a name="resetPersonalDesktopAssignmentType" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetPersonalDesktopAssignmentType"></a>

```java
public void resetPersonalDesktopAssignmentType()
```

##### `resetPreferredAppGroupType` <a name="resetPreferredAppGroupType" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetPreferredAppGroupType"></a>

```java
public void resetPreferredAppGroupType()
```

##### `resetPublicNetworkAccess` <a name="resetPublicNetworkAccess" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetPublicNetworkAccess"></a>

```java
public void resetPublicNetworkAccess()
```

##### `resetScheduledAgentUpdates` <a name="resetScheduledAgentUpdates" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetScheduledAgentUpdates"></a>

```java
public void resetScheduledAgentUpdates()
```

##### `resetStartVmOnConnect` <a name="resetStartVmOnConnect" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetStartVmOnConnect"></a>

```java
public void resetStartVmOnConnect()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValidateEnvironment` <a name="resetValidateEnvironment" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetValidateEnvironment"></a>

```java
public void resetValidateEnvironment()
```

##### `resetVmTemplate` <a name="resetVmTemplate" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetVmTemplate"></a>

```java
public void resetVmTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualDesktopHostPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_host_pool.VirtualDesktopHostPool;

VirtualDesktopHostPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_host_pool.VirtualDesktopHostPool;

VirtualDesktopHostPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_host_pool.VirtualDesktopHostPool;

VirtualDesktopHostPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_host_pool.VirtualDesktopHostPool;

VirtualDesktopHostPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualDesktopHostPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VirtualDesktopHostPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualDesktopHostPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualDesktopHostPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDesktopHostPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.scheduledAgentUpdates">scheduledAgentUpdates</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference">VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference">VirtualDesktopHostPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.customRdpPropertiesInput">customRdpPropertiesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.friendlyNameInput">friendlyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.loadBalancerTypeInput">loadBalancerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.maximumSessionsAllowedInput">maximumSessionsAllowedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.personalDesktopAssignmentTypeInput">personalDesktopAssignmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.preferredAppGroupTypeInput">preferredAppGroupTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.publicNetworkAccessInput">publicNetworkAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.scheduledAgentUpdatesInput">scheduledAgentUpdatesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.startVmOnConnectInput">startVmOnConnectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.validateEnvironmentInput">validateEnvironmentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.vmTemplateInput">vmTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.customRdpProperties">customRdpProperties</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.loadBalancerType">loadBalancerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.maximumSessionsAllowed">maximumSessionsAllowed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.personalDesktopAssignmentType">personalDesktopAssignmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.preferredAppGroupType">preferredAppGroupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.startVmOnConnect">startVmOnConnect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.validateEnvironment">validateEnvironment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.vmTemplate">vmTemplate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scheduledAgentUpdates`<sup>Required</sup> <a name="scheduledAgentUpdates" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.scheduledAgentUpdates"></a>

```java
public VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference getScheduledAgentUpdates();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference">VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.timeouts"></a>

```java
public VirtualDesktopHostPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference">VirtualDesktopHostPoolTimeoutsOutputReference</a>

---

##### `customRdpPropertiesInput`<sup>Optional</sup> <a name="customRdpPropertiesInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.customRdpPropertiesInput"></a>

```java
public java.lang.String getCustomRdpPropertiesInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.friendlyNameInput"></a>

```java
public java.lang.String getFriendlyNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerTypeInput`<sup>Optional</sup> <a name="loadBalancerTypeInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.loadBalancerTypeInput"></a>

```java
public java.lang.String getLoadBalancerTypeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maximumSessionsAllowedInput`<sup>Optional</sup> <a name="maximumSessionsAllowedInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.maximumSessionsAllowedInput"></a>

```java
public java.lang.Number getMaximumSessionsAllowedInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `personalDesktopAssignmentTypeInput`<sup>Optional</sup> <a name="personalDesktopAssignmentTypeInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.personalDesktopAssignmentTypeInput"></a>

```java
public java.lang.String getPersonalDesktopAssignmentTypeInput();
```

- *Type:* java.lang.String

---

##### `preferredAppGroupTypeInput`<sup>Optional</sup> <a name="preferredAppGroupTypeInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.preferredAppGroupTypeInput"></a>

```java
public java.lang.String getPreferredAppGroupTypeInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessInput`<sup>Optional</sup> <a name="publicNetworkAccessInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.publicNetworkAccessInput"></a>

```java
public java.lang.String getPublicNetworkAccessInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `scheduledAgentUpdatesInput`<sup>Optional</sup> <a name="scheduledAgentUpdatesInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.scheduledAgentUpdatesInput"></a>

```java
public VirtualDesktopHostPoolScheduledAgentUpdates getScheduledAgentUpdatesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a>

---

##### `startVmOnConnectInput`<sup>Optional</sup> <a name="startVmOnConnectInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.startVmOnConnectInput"></a>

```java
public java.lang.Object getStartVmOnConnectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `validateEnvironmentInput`<sup>Optional</sup> <a name="validateEnvironmentInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.validateEnvironmentInput"></a>

```java
public java.lang.Object getValidateEnvironmentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vmTemplateInput`<sup>Optional</sup> <a name="vmTemplateInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.vmTemplateInput"></a>

```java
public java.lang.String getVmTemplateInput();
```

- *Type:* java.lang.String

---

##### `customRdpProperties`<sup>Required</sup> <a name="customRdpProperties" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.customRdpProperties"></a>

```java
public java.lang.String getCustomRdpProperties();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerType`<sup>Required</sup> <a name="loadBalancerType" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.loadBalancerType"></a>

```java
public java.lang.String getLoadBalancerType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maximumSessionsAllowed`<sup>Required</sup> <a name="maximumSessionsAllowed" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.maximumSessionsAllowed"></a>

```java
public java.lang.Number getMaximumSessionsAllowed();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `personalDesktopAssignmentType`<sup>Required</sup> <a name="personalDesktopAssignmentType" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.personalDesktopAssignmentType"></a>

```java
public java.lang.String getPersonalDesktopAssignmentType();
```

- *Type:* java.lang.String

---

##### `preferredAppGroupType`<sup>Required</sup> <a name="preferredAppGroupType" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.preferredAppGroupType"></a>

```java
public java.lang.String getPreferredAppGroupType();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccess`<sup>Required</sup> <a name="publicNetworkAccess" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.publicNetworkAccess"></a>

```java
public java.lang.String getPublicNetworkAccess();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `startVmOnConnect`<sup>Required</sup> <a name="startVmOnConnect" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.startVmOnConnect"></a>

```java
public java.lang.Object getStartVmOnConnect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `validateEnvironment`<sup>Required</sup> <a name="validateEnvironment" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.validateEnvironment"></a>

```java
public java.lang.Object getValidateEnvironment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vmTemplate`<sup>Required</sup> <a name="vmTemplate" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.vmTemplate"></a>

```java
public java.lang.String getVmTemplate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopHostPoolConfig <a name="VirtualDesktopHostPoolConfig" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_host_pool.VirtualDesktopHostPoolConfig;

VirtualDesktopHostPoolConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .loadBalancerType(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .type(java.lang.String)
//  .customRdpProperties(java.lang.String)
//  .description(java.lang.String)
//  .friendlyName(java.lang.String)
//  .id(java.lang.String)
//  .maximumSessionsAllowed(java.lang.Number)
//  .personalDesktopAssignmentType(java.lang.String)
//  .preferredAppGroupType(java.lang.String)
//  .publicNetworkAccess(java.lang.String)
//  .scheduledAgentUpdates(VirtualDesktopHostPoolScheduledAgentUpdates)
//  .startVmOnConnect(java.lang.Boolean)
//  .startVmOnConnect(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualDesktopHostPoolTimeouts)
//  .validateEnvironment(java.lang.Boolean)
//  .validateEnvironment(IResolvable)
//  .vmTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.loadBalancerType">loadBalancerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#load_balancer_type VirtualDesktopHostPool#load_balancer_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#location VirtualDesktopHostPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#name VirtualDesktopHostPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#resource_group_name VirtualDesktopHostPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#type VirtualDesktopHostPool#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.customRdpProperties">customRdpProperties</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#custom_rdp_properties VirtualDesktopHostPool#custom_rdp_properties}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#description VirtualDesktopHostPool#description}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#friendly_name VirtualDesktopHostPool#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#id VirtualDesktopHostPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.maximumSessionsAllowed">maximumSessionsAllowed</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#maximum_sessions_allowed VirtualDesktopHostPool#maximum_sessions_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.personalDesktopAssignmentType">personalDesktopAssignmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#personal_desktop_assignment_type VirtualDesktopHostPool#personal_desktop_assignment_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.preferredAppGroupType">preferredAppGroupType</a></code> | <code>java.lang.String</code> | Preferred App Group type to display. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#public_network_access VirtualDesktopHostPool#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.scheduledAgentUpdates">scheduledAgentUpdates</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a></code> | scheduled_agent_updates block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.startVmOnConnect">startVmOnConnect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#start_vm_on_connect VirtualDesktopHostPool#start_vm_on_connect}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#tags VirtualDesktopHostPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.validateEnvironment">validateEnvironment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#validate_environment VirtualDesktopHostPool#validate_environment}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.vmTemplate">vmTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#vm_template VirtualDesktopHostPool#vm_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadBalancerType`<sup>Required</sup> <a name="loadBalancerType" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.loadBalancerType"></a>

```java
public java.lang.String getLoadBalancerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#load_balancer_type VirtualDesktopHostPool#load_balancer_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#location VirtualDesktopHostPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#name VirtualDesktopHostPool#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#resource_group_name VirtualDesktopHostPool#resource_group_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#type VirtualDesktopHostPool#type}.

---

##### `customRdpProperties`<sup>Optional</sup> <a name="customRdpProperties" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.customRdpProperties"></a>

```java
public java.lang.String getCustomRdpProperties();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#custom_rdp_properties VirtualDesktopHostPool#custom_rdp_properties}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#description VirtualDesktopHostPool#description}.

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#friendly_name VirtualDesktopHostPool#friendly_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#id VirtualDesktopHostPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumSessionsAllowed`<sup>Optional</sup> <a name="maximumSessionsAllowed" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.maximumSessionsAllowed"></a>

```java
public java.lang.Number getMaximumSessionsAllowed();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#maximum_sessions_allowed VirtualDesktopHostPool#maximum_sessions_allowed}.

---

##### `personalDesktopAssignmentType`<sup>Optional</sup> <a name="personalDesktopAssignmentType" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.personalDesktopAssignmentType"></a>

```java
public java.lang.String getPersonalDesktopAssignmentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#personal_desktop_assignment_type VirtualDesktopHostPool#personal_desktop_assignment_type}.

---

##### `preferredAppGroupType`<sup>Optional</sup> <a name="preferredAppGroupType" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.preferredAppGroupType"></a>

```java
public java.lang.String getPreferredAppGroupType();
```

- *Type:* java.lang.String

Preferred App Group type to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#preferred_app_group_type VirtualDesktopHostPool#preferred_app_group_type}

---

##### `publicNetworkAccess`<sup>Optional</sup> <a name="publicNetworkAccess" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.publicNetworkAccess"></a>

```java
public java.lang.String getPublicNetworkAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#public_network_access VirtualDesktopHostPool#public_network_access}.

---

##### `scheduledAgentUpdates`<sup>Optional</sup> <a name="scheduledAgentUpdates" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.scheduledAgentUpdates"></a>

```java
public VirtualDesktopHostPoolScheduledAgentUpdates getScheduledAgentUpdates();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a>

scheduled_agent_updates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#scheduled_agent_updates VirtualDesktopHostPool#scheduled_agent_updates}

---

##### `startVmOnConnect`<sup>Optional</sup> <a name="startVmOnConnect" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.startVmOnConnect"></a>

```java
public java.lang.Object getStartVmOnConnect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#start_vm_on_connect VirtualDesktopHostPool#start_vm_on_connect}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#tags VirtualDesktopHostPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.timeouts"></a>

```java
public VirtualDesktopHostPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#timeouts VirtualDesktopHostPool#timeouts}

---

##### `validateEnvironment`<sup>Optional</sup> <a name="validateEnvironment" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.validateEnvironment"></a>

```java
public java.lang.Object getValidateEnvironment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#validate_environment VirtualDesktopHostPool#validate_environment}.

---

##### `vmTemplate`<sup>Optional</sup> <a name="vmTemplate" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.vmTemplate"></a>

```java
public java.lang.String getVmTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#vm_template VirtualDesktopHostPool#vm_template}.

---

### VirtualDesktopHostPoolScheduledAgentUpdates <a name="VirtualDesktopHostPoolScheduledAgentUpdates" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_host_pool.VirtualDesktopHostPoolScheduledAgentUpdates;

VirtualDesktopHostPoolScheduledAgentUpdates.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .schedule(IResolvable)
//  .schedule(java.util.List<VirtualDesktopHostPoolScheduledAgentUpdatesSchedule>)
//  .timezone(java.lang.String)
//  .useSessionHostTimezone(java.lang.Boolean)
//  .useSessionHostTimezone(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#enabled VirtualDesktopHostPool#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.schedule">schedule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#timezone VirtualDesktopHostPool#timezone}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.useSessionHostTimezone">useSessionHostTimezone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#use_session_host_timezone VirtualDesktopHostPool#use_session_host_timezone}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#enabled VirtualDesktopHostPool#enabled}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.schedule"></a>

```java
public java.lang.Object getSchedule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#schedule VirtualDesktopHostPool#schedule}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#timezone VirtualDesktopHostPool#timezone}.

---

##### `useSessionHostTimezone`<sup>Optional</sup> <a name="useSessionHostTimezone" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.useSessionHostTimezone"></a>

```java
public java.lang.Object getUseSessionHostTimezone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#use_session_host_timezone VirtualDesktopHostPool#use_session_host_timezone}.

---

### VirtualDesktopHostPoolScheduledAgentUpdatesSchedule <a name="VirtualDesktopHostPoolScheduledAgentUpdatesSchedule" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_host_pool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule;

VirtualDesktopHostPoolScheduledAgentUpdatesSchedule.builder()
    .dayOfWeek(java.lang.String)
    .hourOfDay(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#day_of_week VirtualDesktopHostPool#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#hour_of_day VirtualDesktopHostPool#hour_of_day}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#day_of_week VirtualDesktopHostPool#day_of_week}.

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#hour_of_day VirtualDesktopHostPool#hour_of_day}.

---

### VirtualDesktopHostPoolTimeouts <a name="VirtualDesktopHostPoolTimeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_host_pool.VirtualDesktopHostPoolTimeouts;

VirtualDesktopHostPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#create VirtualDesktopHostPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#delete VirtualDesktopHostPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#read VirtualDesktopHostPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#update VirtualDesktopHostPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#create VirtualDesktopHostPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#delete VirtualDesktopHostPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#read VirtualDesktopHostPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_desktop_host_pool#update VirtualDesktopHostPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference <a name="VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_host_pool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference;

new VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetUseSessionHostTimezone">resetUseSessionHostTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.putSchedule"></a>

```java
public void putSchedule(IResolvable OR java.util.List<VirtualDesktopHostPoolScheduledAgentUpdatesSchedule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.putSchedule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetUseSessionHostTimezone` <a name="resetUseSessionHostTimezone" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetUseSessionHostTimezone"></a>

```java
public void resetUseSessionHostTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList">VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.useSessionHostTimezoneInput">useSessionHostTimezoneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.useSessionHostTimezone">useSessionHostTimezone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.schedule"></a>

```java
public VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList getSchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList">VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.scheduleInput"></a>

```java
public java.lang.Object getScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `useSessionHostTimezoneInput`<sup>Optional</sup> <a name="useSessionHostTimezoneInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.useSessionHostTimezoneInput"></a>

```java
public java.lang.Object getUseSessionHostTimezoneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `useSessionHostTimezone`<sup>Required</sup> <a name="useSessionHostTimezone" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.useSessionHostTimezone"></a>

```java
public java.lang.Object getUseSessionHostTimezone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.internalValue"></a>

```java
public VirtualDesktopHostPoolScheduledAgentUpdates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a>

---


### VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList <a name="VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_host_pool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList;

new VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get"></a>

```java
public VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>>

---


### VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference <a name="VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_host_pool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference;

new VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.hourOfDayInput">hourOfDayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.hourOfDayInput"></a>

```java
public java.lang.Number getHourOfDayInput();
```

- *Type:* java.lang.Number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>

---


### VirtualDesktopHostPoolTimeoutsOutputReference <a name="VirtualDesktopHostPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_host_pool.VirtualDesktopHostPoolTimeoutsOutputReference;

new VirtualDesktopHostPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a>

---



