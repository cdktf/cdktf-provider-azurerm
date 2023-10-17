# `azurerm_virtual_desktop_scaling_plan`

Refer to the Terraform Registory for docs: [`azurerm_virtual_desktop_scaling_plan`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan).

# `virtualDesktopScalingPlan` Submodule <a name="`virtualDesktopScalingPlan` Submodule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopScalingPlan <a name="VirtualDesktopScalingPlan" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan azurerm_virtual_desktop_scaling_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan.VirtualDesktopScalingPlan;

VirtualDesktopScalingPlan.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .schedule(IResolvable)
    .schedule(java.util.List<VirtualDesktopScalingPlanSchedule>)
    .timeZone(java.lang.String)
//  .description(java.lang.String)
//  .exclusionTag(java.lang.String)
//  .friendlyName(java.lang.String)
//  .hostPool(IResolvable)
//  .hostPool(java.util.List<VirtualDesktopScalingPlanHostPool>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualDesktopScalingPlanTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#location VirtualDesktopScalingPlan#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#resource_group_name VirtualDesktopScalingPlan#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.schedule">schedule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule">VirtualDesktopScalingPlanSchedule</a>></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#time_zone VirtualDesktopScalingPlan#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#description VirtualDesktopScalingPlan#description}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.exclusionTag">exclusionTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#exclusion_tag VirtualDesktopScalingPlan#exclusion_tag}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#friendly_name VirtualDesktopScalingPlan#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.hostPool">hostPool</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool">VirtualDesktopScalingPlanHostPool</a>></code> | host_pool block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#id VirtualDesktopScalingPlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#tags VirtualDesktopScalingPlan#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#location VirtualDesktopScalingPlan#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#resource_group_name VirtualDesktopScalingPlan#resource_group_name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.schedule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule">VirtualDesktopScalingPlanSchedule</a>>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#schedule VirtualDesktopScalingPlan#schedule}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#time_zone VirtualDesktopScalingPlan#time_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#description VirtualDesktopScalingPlan#description}.

---

##### `exclusionTag`<sup>Optional</sup> <a name="exclusionTag" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.exclusionTag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#exclusion_tag VirtualDesktopScalingPlan#exclusion_tag}.

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.friendlyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#friendly_name VirtualDesktopScalingPlan#friendly_name}.

---

##### `hostPool`<sup>Optional</sup> <a name="hostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.hostPool"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool">VirtualDesktopScalingPlanHostPool</a>>

host_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#host_pool VirtualDesktopScalingPlan#host_pool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#id VirtualDesktopScalingPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#tags VirtualDesktopScalingPlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#timeouts VirtualDesktopScalingPlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putHostPool">putHostPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetExclusionTag">resetExclusionTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetHostPool">resetHostPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putHostPool` <a name="putHostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putHostPool"></a>

```java
public void putHostPool(IResolvable OR java.util.List<VirtualDesktopScalingPlanHostPool> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putHostPool.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool">VirtualDesktopScalingPlanHostPool</a>>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putSchedule"></a>

```java
public void putSchedule(IResolvable OR java.util.List<VirtualDesktopScalingPlanSchedule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putSchedule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule">VirtualDesktopScalingPlanSchedule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putTimeouts"></a>

```java
public void putTimeouts(VirtualDesktopScalingPlanTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExclusionTag` <a name="resetExclusionTag" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetExclusionTag"></a>

```java
public void resetExclusionTag()
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetFriendlyName"></a>

```java
public void resetFriendlyName()
```

##### `resetHostPool` <a name="resetHostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetHostPool"></a>

```java
public void resetHostPool()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualDesktopScalingPlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan.VirtualDesktopScalingPlan;

VirtualDesktopScalingPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan.VirtualDesktopScalingPlan;

VirtualDesktopScalingPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan.VirtualDesktopScalingPlan;

VirtualDesktopScalingPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan.VirtualDesktopScalingPlan;

VirtualDesktopScalingPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualDesktopScalingPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VirtualDesktopScalingPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualDesktopScalingPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualDesktopScalingPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDesktopScalingPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.hostPool">hostPool</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList">VirtualDesktopScalingPlanHostPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList">VirtualDesktopScalingPlanScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference">VirtualDesktopScalingPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.exclusionTagInput">exclusionTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyNameInput">friendlyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.hostPoolInput">hostPoolInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool">VirtualDesktopScalingPlanHostPool</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.scheduleInput">scheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule">VirtualDesktopScalingPlanSchedule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.exclusionTag">exclusionTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostPool`<sup>Required</sup> <a name="hostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.hostPool"></a>

```java
public VirtualDesktopScalingPlanHostPoolList getHostPool();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList">VirtualDesktopScalingPlanHostPoolList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.schedule"></a>

```java
public VirtualDesktopScalingPlanScheduleList getSchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList">VirtualDesktopScalingPlanScheduleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeouts"></a>

```java
public VirtualDesktopScalingPlanTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference">VirtualDesktopScalingPlanTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `exclusionTagInput`<sup>Optional</sup> <a name="exclusionTagInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.exclusionTagInput"></a>

```java
public java.lang.String getExclusionTagInput();
```

- *Type:* java.lang.String

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyNameInput"></a>

```java
public java.lang.String getFriendlyNameInput();
```

- *Type:* java.lang.String

---

##### `hostPoolInput`<sup>Optional</sup> <a name="hostPoolInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.hostPoolInput"></a>

```java
public java.lang.Object getHostPoolInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool">VirtualDesktopScalingPlanHostPool</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.scheduleInput"></a>

```java
public java.lang.Object getScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule">VirtualDesktopScalingPlanSchedule</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `exclusionTag`<sup>Required</sup> <a name="exclusionTag" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.exclusionTag"></a>

```java
public java.lang.String getExclusionTag();
```

- *Type:* java.lang.String

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopScalingPlanConfig <a name="VirtualDesktopScalingPlanConfig" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan.VirtualDesktopScalingPlanConfig;

VirtualDesktopScalingPlanConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .schedule(IResolvable)
    .schedule(java.util.List<VirtualDesktopScalingPlanSchedule>)
    .timeZone(java.lang.String)
//  .description(java.lang.String)
//  .exclusionTag(java.lang.String)
//  .friendlyName(java.lang.String)
//  .hostPool(IResolvable)
//  .hostPool(java.util.List<VirtualDesktopScalingPlanHostPool>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualDesktopScalingPlanTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#location VirtualDesktopScalingPlan#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#resource_group_name VirtualDesktopScalingPlan#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.schedule">schedule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule">VirtualDesktopScalingPlanSchedule</a>></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#time_zone VirtualDesktopScalingPlan#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#description VirtualDesktopScalingPlan#description}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.exclusionTag">exclusionTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#exclusion_tag VirtualDesktopScalingPlan#exclusion_tag}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#friendly_name VirtualDesktopScalingPlan#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.hostPool">hostPool</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool">VirtualDesktopScalingPlanHostPool</a>></code> | host_pool block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#id VirtualDesktopScalingPlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#tags VirtualDesktopScalingPlan#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#location VirtualDesktopScalingPlan#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#resource_group_name VirtualDesktopScalingPlan#resource_group_name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.schedule"></a>

```java
public java.lang.Object getSchedule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule">VirtualDesktopScalingPlanSchedule</a>>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#schedule VirtualDesktopScalingPlan#schedule}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#time_zone VirtualDesktopScalingPlan#time_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#description VirtualDesktopScalingPlan#description}.

---

##### `exclusionTag`<sup>Optional</sup> <a name="exclusionTag" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.exclusionTag"></a>

```java
public java.lang.String getExclusionTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#exclusion_tag VirtualDesktopScalingPlan#exclusion_tag}.

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#friendly_name VirtualDesktopScalingPlan#friendly_name}.

---

##### `hostPool`<sup>Optional</sup> <a name="hostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.hostPool"></a>

```java
public java.lang.Object getHostPool();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool">VirtualDesktopScalingPlanHostPool</a>>

host_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#host_pool VirtualDesktopScalingPlan#host_pool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#id VirtualDesktopScalingPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#tags VirtualDesktopScalingPlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.timeouts"></a>

```java
public VirtualDesktopScalingPlanTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#timeouts VirtualDesktopScalingPlan#timeouts}

---

### VirtualDesktopScalingPlanHostPool <a name="VirtualDesktopScalingPlanHostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan.VirtualDesktopScalingPlanHostPool;

VirtualDesktopScalingPlanHostPool.builder()
    .hostpoolId(java.lang.String)
    .scalingPlanEnabled(java.lang.Boolean)
    .scalingPlanEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.property.hostpoolId">hostpoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#hostpool_id VirtualDesktopScalingPlan#hostpool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.property.scalingPlanEnabled">scalingPlanEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#scaling_plan_enabled VirtualDesktopScalingPlan#scaling_plan_enabled}. |

---

##### `hostpoolId`<sup>Required</sup> <a name="hostpoolId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.property.hostpoolId"></a>

```java
public java.lang.String getHostpoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#hostpool_id VirtualDesktopScalingPlan#hostpool_id}.

---

##### `scalingPlanEnabled`<sup>Required</sup> <a name="scalingPlanEnabled" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.property.scalingPlanEnabled"></a>

```java
public java.lang.Object getScalingPlanEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#scaling_plan_enabled VirtualDesktopScalingPlan#scaling_plan_enabled}.

---

### VirtualDesktopScalingPlanSchedule <a name="VirtualDesktopScalingPlanSchedule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan.VirtualDesktopScalingPlanSchedule;

VirtualDesktopScalingPlanSchedule.builder()
    .daysOfWeek(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .offPeakLoadBalancingAlgorithm(java.lang.String)
    .offPeakStartTime(java.lang.String)
    .peakLoadBalancingAlgorithm(java.lang.String)
    .peakStartTime(java.lang.String)
    .rampDownCapacityThresholdPercent(java.lang.Number)
    .rampDownForceLogoffUsers(java.lang.Boolean)
    .rampDownForceLogoffUsers(IResolvable)
    .rampDownLoadBalancingAlgorithm(java.lang.String)
    .rampDownMinimumHostsPercent(java.lang.Number)
    .rampDownNotificationMessage(java.lang.String)
    .rampDownStartTime(java.lang.String)
    .rampDownStopHostsWhen(java.lang.String)
    .rampDownWaitTimeMinutes(java.lang.Number)
    .rampUpLoadBalancingAlgorithm(java.lang.String)
    .rampUpStartTime(java.lang.String)
//  .rampUpCapacityThresholdPercent(java.lang.Number)
//  .rampUpMinimumHostsPercent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#days_of_week VirtualDesktopScalingPlan#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.offPeakLoadBalancingAlgorithm">offPeakLoadBalancingAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#off_peak_load_balancing_algorithm VirtualDesktopScalingPlan#off_peak_load_balancing_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.offPeakStartTime">offPeakStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#off_peak_start_time VirtualDesktopScalingPlan#off_peak_start_time}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.peakLoadBalancingAlgorithm">peakLoadBalancingAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#peak_load_balancing_algorithm VirtualDesktopScalingPlan#peak_load_balancing_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.peakStartTime">peakStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#peak_start_time VirtualDesktopScalingPlan#peak_start_time}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownCapacityThresholdPercent">rampDownCapacityThresholdPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_down_capacity_threshold_percent}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownForceLogoffUsers">rampDownForceLogoffUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_force_logoff_users VirtualDesktopScalingPlan#ramp_down_force_logoff_users}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownLoadBalancingAlgorithm">rampDownLoadBalancingAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_down_load_balancing_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownMinimumHostsPercent">rampDownMinimumHostsPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_down_minimum_hosts_percent}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownNotificationMessage">rampDownNotificationMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_notification_message VirtualDesktopScalingPlan#ramp_down_notification_message}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownStartTime">rampDownStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_start_time VirtualDesktopScalingPlan#ramp_down_start_time}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownStopHostsWhen">rampDownStopHostsWhen</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_stop_hosts_when VirtualDesktopScalingPlan#ramp_down_stop_hosts_when}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownWaitTimeMinutes">rampDownWaitTimeMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_wait_time_minutes VirtualDesktopScalingPlan#ramp_down_wait_time_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpLoadBalancingAlgorithm">rampUpLoadBalancingAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_up_load_balancing_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpStartTime">rampUpStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_start_time VirtualDesktopScalingPlan#ramp_up_start_time}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpCapacityThresholdPercent">rampUpCapacityThresholdPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_up_capacity_threshold_percent}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpMinimumHostsPercent">rampUpMinimumHostsPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_up_minimum_hosts_percent}. |

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#days_of_week VirtualDesktopScalingPlan#days_of_week}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}.

---

##### `offPeakLoadBalancingAlgorithm`<sup>Required</sup> <a name="offPeakLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.offPeakLoadBalancingAlgorithm"></a>

```java
public java.lang.String getOffPeakLoadBalancingAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#off_peak_load_balancing_algorithm VirtualDesktopScalingPlan#off_peak_load_balancing_algorithm}.

---

##### `offPeakStartTime`<sup>Required</sup> <a name="offPeakStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.offPeakStartTime"></a>

```java
public java.lang.String getOffPeakStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#off_peak_start_time VirtualDesktopScalingPlan#off_peak_start_time}.

---

##### `peakLoadBalancingAlgorithm`<sup>Required</sup> <a name="peakLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.peakLoadBalancingAlgorithm"></a>

```java
public java.lang.String getPeakLoadBalancingAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#peak_load_balancing_algorithm VirtualDesktopScalingPlan#peak_load_balancing_algorithm}.

---

##### `peakStartTime`<sup>Required</sup> <a name="peakStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.peakStartTime"></a>

```java
public java.lang.String getPeakStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#peak_start_time VirtualDesktopScalingPlan#peak_start_time}.

---

##### `rampDownCapacityThresholdPercent`<sup>Required</sup> <a name="rampDownCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownCapacityThresholdPercent"></a>

```java
public java.lang.Number getRampDownCapacityThresholdPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_down_capacity_threshold_percent}.

---

##### `rampDownForceLogoffUsers`<sup>Required</sup> <a name="rampDownForceLogoffUsers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownForceLogoffUsers"></a>

```java
public java.lang.Object getRampDownForceLogoffUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_force_logoff_users VirtualDesktopScalingPlan#ramp_down_force_logoff_users}.

---

##### `rampDownLoadBalancingAlgorithm`<sup>Required</sup> <a name="rampDownLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownLoadBalancingAlgorithm"></a>

```java
public java.lang.String getRampDownLoadBalancingAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_down_load_balancing_algorithm}.

---

##### `rampDownMinimumHostsPercent`<sup>Required</sup> <a name="rampDownMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownMinimumHostsPercent"></a>

```java
public java.lang.Number getRampDownMinimumHostsPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_down_minimum_hosts_percent}.

---

##### `rampDownNotificationMessage`<sup>Required</sup> <a name="rampDownNotificationMessage" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownNotificationMessage"></a>

```java
public java.lang.String getRampDownNotificationMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_notification_message VirtualDesktopScalingPlan#ramp_down_notification_message}.

---

##### `rampDownStartTime`<sup>Required</sup> <a name="rampDownStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownStartTime"></a>

```java
public java.lang.String getRampDownStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_start_time VirtualDesktopScalingPlan#ramp_down_start_time}.

---

##### `rampDownStopHostsWhen`<sup>Required</sup> <a name="rampDownStopHostsWhen" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownStopHostsWhen"></a>

```java
public java.lang.String getRampDownStopHostsWhen();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_stop_hosts_when VirtualDesktopScalingPlan#ramp_down_stop_hosts_when}.

---

##### `rampDownWaitTimeMinutes`<sup>Required</sup> <a name="rampDownWaitTimeMinutes" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownWaitTimeMinutes"></a>

```java
public java.lang.Number getRampDownWaitTimeMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_wait_time_minutes VirtualDesktopScalingPlan#ramp_down_wait_time_minutes}.

---

##### `rampUpLoadBalancingAlgorithm`<sup>Required</sup> <a name="rampUpLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpLoadBalancingAlgorithm"></a>

```java
public java.lang.String getRampUpLoadBalancingAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_up_load_balancing_algorithm}.

---

##### `rampUpStartTime`<sup>Required</sup> <a name="rampUpStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpStartTime"></a>

```java
public java.lang.String getRampUpStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_start_time VirtualDesktopScalingPlan#ramp_up_start_time}.

---

##### `rampUpCapacityThresholdPercent`<sup>Optional</sup> <a name="rampUpCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpCapacityThresholdPercent"></a>

```java
public java.lang.Number getRampUpCapacityThresholdPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_up_capacity_threshold_percent}.

---

##### `rampUpMinimumHostsPercent`<sup>Optional</sup> <a name="rampUpMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpMinimumHostsPercent"></a>

```java
public java.lang.Number getRampUpMinimumHostsPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_up_minimum_hosts_percent}.

---

### VirtualDesktopScalingPlanTimeouts <a name="VirtualDesktopScalingPlanTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan.VirtualDesktopScalingPlanTimeouts;

VirtualDesktopScalingPlanTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#create VirtualDesktopScalingPlan#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#delete VirtualDesktopScalingPlan#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#read VirtualDesktopScalingPlan#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#update VirtualDesktopScalingPlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#create VirtualDesktopScalingPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#delete VirtualDesktopScalingPlan#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#read VirtualDesktopScalingPlan#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/virtual_desktop_scaling_plan#update VirtualDesktopScalingPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopScalingPlanHostPoolList <a name="VirtualDesktopScalingPlanHostPoolList" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan.VirtualDesktopScalingPlanHostPoolList;

new VirtualDesktopScalingPlanHostPoolList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.get"></a>

```java
public VirtualDesktopScalingPlanHostPoolOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool">VirtualDesktopScalingPlanHostPool</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool">VirtualDesktopScalingPlanHostPool</a>>

---


### VirtualDesktopScalingPlanHostPoolOutputReference <a name="VirtualDesktopScalingPlanHostPoolOutputReference" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan.VirtualDesktopScalingPlanHostPoolOutputReference;

new VirtualDesktopScalingPlanHostPoolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.hostpoolIdInput">hostpoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.scalingPlanEnabledInput">scalingPlanEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.hostpoolId">hostpoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.scalingPlanEnabled">scalingPlanEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool">VirtualDesktopScalingPlanHostPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostpoolIdInput`<sup>Optional</sup> <a name="hostpoolIdInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.hostpoolIdInput"></a>

```java
public java.lang.String getHostpoolIdInput();
```

- *Type:* java.lang.String

---

##### `scalingPlanEnabledInput`<sup>Optional</sup> <a name="scalingPlanEnabledInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.scalingPlanEnabledInput"></a>

```java
public java.lang.Object getScalingPlanEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostpoolId`<sup>Required</sup> <a name="hostpoolId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.hostpoolId"></a>

```java
public java.lang.String getHostpoolId();
```

- *Type:* java.lang.String

---

##### `scalingPlanEnabled`<sup>Required</sup> <a name="scalingPlanEnabled" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.scalingPlanEnabled"></a>

```java
public java.lang.Object getScalingPlanEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool">VirtualDesktopScalingPlanHostPool</a>

---


### VirtualDesktopScalingPlanScheduleList <a name="VirtualDesktopScalingPlanScheduleList" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan.VirtualDesktopScalingPlanScheduleList;

new VirtualDesktopScalingPlanScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.get"></a>

```java
public VirtualDesktopScalingPlanScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule">VirtualDesktopScalingPlanSchedule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule">VirtualDesktopScalingPlanSchedule</a>>

---


### VirtualDesktopScalingPlanScheduleOutputReference <a name="VirtualDesktopScalingPlanScheduleOutputReference" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan.VirtualDesktopScalingPlanScheduleOutputReference;

new VirtualDesktopScalingPlanScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resetRampUpCapacityThresholdPercent">resetRampUpCapacityThresholdPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resetRampUpMinimumHostsPercent">resetRampUpMinimumHostsPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRampUpCapacityThresholdPercent` <a name="resetRampUpCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resetRampUpCapacityThresholdPercent"></a>

```java
public void resetRampUpCapacityThresholdPercent()
```

##### `resetRampUpMinimumHostsPercent` <a name="resetRampUpMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resetRampUpMinimumHostsPercent"></a>

```java
public void resetRampUpMinimumHostsPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakLoadBalancingAlgorithmInput">offPeakLoadBalancingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakStartTimeInput">offPeakStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakLoadBalancingAlgorithmInput">peakLoadBalancingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakStartTimeInput">peakStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownCapacityThresholdPercentInput">rampDownCapacityThresholdPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownForceLogoffUsersInput">rampDownForceLogoffUsersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownLoadBalancingAlgorithmInput">rampDownLoadBalancingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownMinimumHostsPercentInput">rampDownMinimumHostsPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownNotificationMessageInput">rampDownNotificationMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStartTimeInput">rampDownStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStopHostsWhenInput">rampDownStopHostsWhenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownWaitTimeMinutesInput">rampDownWaitTimeMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpCapacityThresholdPercentInput">rampUpCapacityThresholdPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpLoadBalancingAlgorithmInput">rampUpLoadBalancingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpMinimumHostsPercentInput">rampUpMinimumHostsPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpStartTimeInput">rampUpStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakLoadBalancingAlgorithm">offPeakLoadBalancingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakStartTime">offPeakStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakLoadBalancingAlgorithm">peakLoadBalancingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakStartTime">peakStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownCapacityThresholdPercent">rampDownCapacityThresholdPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownForceLogoffUsers">rampDownForceLogoffUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownLoadBalancingAlgorithm">rampDownLoadBalancingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownMinimumHostsPercent">rampDownMinimumHostsPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownNotificationMessage">rampDownNotificationMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStartTime">rampDownStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStopHostsWhen">rampDownStopHostsWhen</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownWaitTimeMinutes">rampDownWaitTimeMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpCapacityThresholdPercent">rampUpCapacityThresholdPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpLoadBalancingAlgorithm">rampUpLoadBalancingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpMinimumHostsPercent">rampUpMinimumHostsPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpStartTime">rampUpStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule">VirtualDesktopScalingPlanSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `offPeakLoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="offPeakLoadBalancingAlgorithmInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakLoadBalancingAlgorithmInput"></a>

```java
public java.lang.String getOffPeakLoadBalancingAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `offPeakStartTimeInput`<sup>Optional</sup> <a name="offPeakStartTimeInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakStartTimeInput"></a>

```java
public java.lang.String getOffPeakStartTimeInput();
```

- *Type:* java.lang.String

---

##### `peakLoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="peakLoadBalancingAlgorithmInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakLoadBalancingAlgorithmInput"></a>

```java
public java.lang.String getPeakLoadBalancingAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `peakStartTimeInput`<sup>Optional</sup> <a name="peakStartTimeInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakStartTimeInput"></a>

```java
public java.lang.String getPeakStartTimeInput();
```

- *Type:* java.lang.String

---

##### `rampDownCapacityThresholdPercentInput`<sup>Optional</sup> <a name="rampDownCapacityThresholdPercentInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownCapacityThresholdPercentInput"></a>

```java
public java.lang.Number getRampDownCapacityThresholdPercentInput();
```

- *Type:* java.lang.Number

---

##### `rampDownForceLogoffUsersInput`<sup>Optional</sup> <a name="rampDownForceLogoffUsersInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownForceLogoffUsersInput"></a>

```java
public java.lang.Object getRampDownForceLogoffUsersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rampDownLoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="rampDownLoadBalancingAlgorithmInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownLoadBalancingAlgorithmInput"></a>

```java
public java.lang.String getRampDownLoadBalancingAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `rampDownMinimumHostsPercentInput`<sup>Optional</sup> <a name="rampDownMinimumHostsPercentInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownMinimumHostsPercentInput"></a>

```java
public java.lang.Number getRampDownMinimumHostsPercentInput();
```

- *Type:* java.lang.Number

---

##### `rampDownNotificationMessageInput`<sup>Optional</sup> <a name="rampDownNotificationMessageInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownNotificationMessageInput"></a>

```java
public java.lang.String getRampDownNotificationMessageInput();
```

- *Type:* java.lang.String

---

##### `rampDownStartTimeInput`<sup>Optional</sup> <a name="rampDownStartTimeInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStartTimeInput"></a>

```java
public java.lang.String getRampDownStartTimeInput();
```

- *Type:* java.lang.String

---

##### `rampDownStopHostsWhenInput`<sup>Optional</sup> <a name="rampDownStopHostsWhenInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStopHostsWhenInput"></a>

```java
public java.lang.String getRampDownStopHostsWhenInput();
```

- *Type:* java.lang.String

---

##### `rampDownWaitTimeMinutesInput`<sup>Optional</sup> <a name="rampDownWaitTimeMinutesInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownWaitTimeMinutesInput"></a>

```java
public java.lang.Number getRampDownWaitTimeMinutesInput();
```

- *Type:* java.lang.Number

---

##### `rampUpCapacityThresholdPercentInput`<sup>Optional</sup> <a name="rampUpCapacityThresholdPercentInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpCapacityThresholdPercentInput"></a>

```java
public java.lang.Number getRampUpCapacityThresholdPercentInput();
```

- *Type:* java.lang.Number

---

##### `rampUpLoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="rampUpLoadBalancingAlgorithmInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpLoadBalancingAlgorithmInput"></a>

```java
public java.lang.String getRampUpLoadBalancingAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `rampUpMinimumHostsPercentInput`<sup>Optional</sup> <a name="rampUpMinimumHostsPercentInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpMinimumHostsPercentInput"></a>

```java
public java.lang.Number getRampUpMinimumHostsPercentInput();
```

- *Type:* java.lang.Number

---

##### `rampUpStartTimeInput`<sup>Optional</sup> <a name="rampUpStartTimeInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpStartTimeInput"></a>

```java
public java.lang.String getRampUpStartTimeInput();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `offPeakLoadBalancingAlgorithm`<sup>Required</sup> <a name="offPeakLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakLoadBalancingAlgorithm"></a>

```java
public java.lang.String getOffPeakLoadBalancingAlgorithm();
```

- *Type:* java.lang.String

---

##### `offPeakStartTime`<sup>Required</sup> <a name="offPeakStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakStartTime"></a>

```java
public java.lang.String getOffPeakStartTime();
```

- *Type:* java.lang.String

---

##### `peakLoadBalancingAlgorithm`<sup>Required</sup> <a name="peakLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakLoadBalancingAlgorithm"></a>

```java
public java.lang.String getPeakLoadBalancingAlgorithm();
```

- *Type:* java.lang.String

---

##### `peakStartTime`<sup>Required</sup> <a name="peakStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakStartTime"></a>

```java
public java.lang.String getPeakStartTime();
```

- *Type:* java.lang.String

---

##### `rampDownCapacityThresholdPercent`<sup>Required</sup> <a name="rampDownCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownCapacityThresholdPercent"></a>

```java
public java.lang.Number getRampDownCapacityThresholdPercent();
```

- *Type:* java.lang.Number

---

##### `rampDownForceLogoffUsers`<sup>Required</sup> <a name="rampDownForceLogoffUsers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownForceLogoffUsers"></a>

```java
public java.lang.Object getRampDownForceLogoffUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rampDownLoadBalancingAlgorithm`<sup>Required</sup> <a name="rampDownLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownLoadBalancingAlgorithm"></a>

```java
public java.lang.String getRampDownLoadBalancingAlgorithm();
```

- *Type:* java.lang.String

---

##### `rampDownMinimumHostsPercent`<sup>Required</sup> <a name="rampDownMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownMinimumHostsPercent"></a>

```java
public java.lang.Number getRampDownMinimumHostsPercent();
```

- *Type:* java.lang.Number

---

##### `rampDownNotificationMessage`<sup>Required</sup> <a name="rampDownNotificationMessage" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownNotificationMessage"></a>

```java
public java.lang.String getRampDownNotificationMessage();
```

- *Type:* java.lang.String

---

##### `rampDownStartTime`<sup>Required</sup> <a name="rampDownStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStartTime"></a>

```java
public java.lang.String getRampDownStartTime();
```

- *Type:* java.lang.String

---

##### `rampDownStopHostsWhen`<sup>Required</sup> <a name="rampDownStopHostsWhen" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStopHostsWhen"></a>

```java
public java.lang.String getRampDownStopHostsWhen();
```

- *Type:* java.lang.String

---

##### `rampDownWaitTimeMinutes`<sup>Required</sup> <a name="rampDownWaitTimeMinutes" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownWaitTimeMinutes"></a>

```java
public java.lang.Number getRampDownWaitTimeMinutes();
```

- *Type:* java.lang.Number

---

##### `rampUpCapacityThresholdPercent`<sup>Required</sup> <a name="rampUpCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpCapacityThresholdPercent"></a>

```java
public java.lang.Number getRampUpCapacityThresholdPercent();
```

- *Type:* java.lang.Number

---

##### `rampUpLoadBalancingAlgorithm`<sup>Required</sup> <a name="rampUpLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpLoadBalancingAlgorithm"></a>

```java
public java.lang.String getRampUpLoadBalancingAlgorithm();
```

- *Type:* java.lang.String

---

##### `rampUpMinimumHostsPercent`<sup>Required</sup> <a name="rampUpMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpMinimumHostsPercent"></a>

```java
public java.lang.Number getRampUpMinimumHostsPercent();
```

- *Type:* java.lang.Number

---

##### `rampUpStartTime`<sup>Required</sup> <a name="rampUpStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpStartTime"></a>

```java
public java.lang.String getRampUpStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule">VirtualDesktopScalingPlanSchedule</a>

---


### VirtualDesktopScalingPlanTimeoutsOutputReference <a name="VirtualDesktopScalingPlanTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan.VirtualDesktopScalingPlanTimeoutsOutputReference;

new VirtualDesktopScalingPlanTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a>

---



