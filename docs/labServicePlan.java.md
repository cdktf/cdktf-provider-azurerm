# `labServicePlan` Submodule <a name="`labServicePlan` Submodule" id="@cdktf/provider-azurerm.labServicePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LabServicePlan <a name="LabServicePlan" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan azurerm_lab_service_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_plan.LabServicePlan;

LabServicePlan.Builder.create(Construct scope, java.lang.String id)
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
    .allowedRegions(java.util.List<java.lang.String>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .defaultAutoShutdown(LabServicePlanDefaultAutoShutdown)
//  .defaultConnection(LabServicePlanDefaultConnection)
//  .defaultNetworkSubnetId(java.lang.String)
//  .id(java.lang.String)
//  .sharedGalleryId(java.lang.String)
//  .support(LabServicePlanSupport)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LabServicePlanTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.allowedRegions">allowedRegions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#location LabServicePlan#location}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#name LabServicePlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.defaultAutoShutdown">defaultAutoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | default_auto_shutdown block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.defaultConnection">defaultConnection</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | default_connection block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.defaultNetworkSubnetId">defaultNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#id LabServicePlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.sharedGalleryId">sharedGalleryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.support">support</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | support block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#tags LabServicePlan#tags}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedRegions`<sup>Required</sup> <a name="allowedRegions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.allowedRegions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#location LabServicePlan#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#name LabServicePlan#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}.

---

##### `defaultAutoShutdown`<sup>Optional</sup> <a name="defaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.defaultAutoShutdown"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

default_auto_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#default_auto_shutdown LabServicePlan#default_auto_shutdown}

---

##### `defaultConnection`<sup>Optional</sup> <a name="defaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.defaultConnection"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

default_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#default_connection LabServicePlan#default_connection}

---

##### `defaultNetworkSubnetId`<sup>Optional</sup> <a name="defaultNetworkSubnetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.defaultNetworkSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#id LabServicePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sharedGalleryId`<sup>Optional</sup> <a name="sharedGalleryId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.sharedGalleryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}.

---

##### `support`<sup>Optional</sup> <a name="support" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.support"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

support block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#support LabServicePlan#support}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#tags LabServicePlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#timeouts LabServicePlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown">putDefaultAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection">putDefaultConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport">putSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultAutoShutdown">resetDefaultAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultConnection">resetDefaultConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultNetworkSubnetId">resetDefaultNetworkSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSharedGalleryId">resetSharedGalleryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSupport">resetSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultAutoShutdown` <a name="putDefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown"></a>

```java
public void putDefaultAutoShutdown(LabServicePlanDefaultAutoShutdown value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

---

##### `putDefaultConnection` <a name="putDefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection"></a>

```java
public void putDefaultConnection(LabServicePlanDefaultConnection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

---

##### `putSupport` <a name="putSupport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport"></a>

```java
public void putSupport(LabServicePlanSupport value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts"></a>

```java
public void putTimeouts(LabServicePlanTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

---

##### `resetDefaultAutoShutdown` <a name="resetDefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultAutoShutdown"></a>

```java
public void resetDefaultAutoShutdown()
```

##### `resetDefaultConnection` <a name="resetDefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultConnection"></a>

```java
public void resetDefaultConnection()
```

##### `resetDefaultNetworkSubnetId` <a name="resetDefaultNetworkSubnetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultNetworkSubnetId"></a>

```java
public void resetDefaultNetworkSubnetId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetId"></a>

```java
public void resetId()
```

##### `resetSharedGalleryId` <a name="resetSharedGalleryId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSharedGalleryId"></a>

```java
public void resetSharedGalleryId()
```

##### `resetSupport` <a name="resetSupport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSupport"></a>

```java
public void resetSupport()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LabServicePlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_plan.LabServicePlan;

LabServicePlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_plan.LabServicePlan;

LabServicePlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_plan.LabServicePlan;

LabServicePlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_plan.LabServicePlan;

LabServicePlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LabServicePlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LabServicePlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LabServicePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LabServicePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LabServicePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdown">defaultAutoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference">LabServicePlanDefaultAutoShutdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnection">defaultConnection</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference">LabServicePlanDefaultConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.support">support</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference">LabServicePlanSupportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference">LabServicePlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegionsInput">allowedRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdownInput">defaultAutoShutdownInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnectionInput">defaultConnectionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetIdInput">defaultNetworkSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryIdInput">sharedGalleryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.supportInput">supportInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegions">allowedRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetId">defaultNetworkSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryId">sharedGalleryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultAutoShutdown`<sup>Required</sup> <a name="defaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdown"></a>

```java
public LabServicePlanDefaultAutoShutdownOutputReference getDefaultAutoShutdown();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference">LabServicePlanDefaultAutoShutdownOutputReference</a>

---

##### `defaultConnection`<sup>Required</sup> <a name="defaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnection"></a>

```java
public LabServicePlanDefaultConnectionOutputReference getDefaultConnection();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference">LabServicePlanDefaultConnectionOutputReference</a>

---

##### `support`<sup>Required</sup> <a name="support" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.support"></a>

```java
public LabServicePlanSupportOutputReference getSupport();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference">LabServicePlanSupportOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeouts"></a>

```java
public LabServicePlanTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference">LabServicePlanTimeoutsOutputReference</a>

---

##### `allowedRegionsInput`<sup>Optional</sup> <a name="allowedRegionsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultAutoShutdownInput`<sup>Optional</sup> <a name="defaultAutoShutdownInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdownInput"></a>

```java
public LabServicePlanDefaultAutoShutdown getDefaultAutoShutdownInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

---

##### `defaultConnectionInput`<sup>Optional</sup> <a name="defaultConnectionInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnectionInput"></a>

```java
public LabServicePlanDefaultConnection getDefaultConnectionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

---

##### `defaultNetworkSubnetIdInput`<sup>Optional</sup> <a name="defaultNetworkSubnetIdInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetIdInput"></a>

```java
public java.lang.String getDefaultNetworkSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sharedGalleryIdInput`<sup>Optional</sup> <a name="sharedGalleryIdInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryIdInput"></a>

```java
public java.lang.String getSharedGalleryIdInput();
```

- *Type:* java.lang.String

---

##### `supportInput`<sup>Optional</sup> <a name="supportInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.supportInput"></a>

```java
public LabServicePlanSupport getSupportInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

---

##### `allowedRegions`<sup>Required</sup> <a name="allowedRegions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegions"></a>

```java
public java.util.List<java.lang.String> getAllowedRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultNetworkSubnetId`<sup>Required</sup> <a name="defaultNetworkSubnetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetId"></a>

```java
public java.lang.String getDefaultNetworkSubnetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sharedGalleryId`<sup>Required</sup> <a name="sharedGalleryId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryId"></a>

```java
public java.lang.String getSharedGalleryId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LabServicePlanConfig <a name="LabServicePlanConfig" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_plan.LabServicePlanConfig;

LabServicePlanConfig.builder()
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
    .allowedRegions(java.util.List<java.lang.String>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .defaultAutoShutdown(LabServicePlanDefaultAutoShutdown)
//  .defaultConnection(LabServicePlanDefaultConnection)
//  .defaultNetworkSubnetId(java.lang.String)
//  .id(java.lang.String)
//  .sharedGalleryId(java.lang.String)
//  .support(LabServicePlanSupport)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LabServicePlanTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.allowedRegions">allowedRegions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#location LabServicePlan#location}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#name LabServicePlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultAutoShutdown">defaultAutoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | default_auto_shutdown block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultConnection">defaultConnection</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | default_connection block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultNetworkSubnetId">defaultNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#id LabServicePlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.sharedGalleryId">sharedGalleryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.support">support</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | support block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#tags LabServicePlan#tags}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedRegions`<sup>Required</sup> <a name="allowedRegions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.allowedRegions"></a>

```java
public java.util.List<java.lang.String> getAllowedRegions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#location LabServicePlan#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#name LabServicePlan#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}.

---

##### `defaultAutoShutdown`<sup>Optional</sup> <a name="defaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultAutoShutdown"></a>

```java
public LabServicePlanDefaultAutoShutdown getDefaultAutoShutdown();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

default_auto_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#default_auto_shutdown LabServicePlan#default_auto_shutdown}

---

##### `defaultConnection`<sup>Optional</sup> <a name="defaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultConnection"></a>

```java
public LabServicePlanDefaultConnection getDefaultConnection();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

default_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#default_connection LabServicePlan#default_connection}

---

##### `defaultNetworkSubnetId`<sup>Optional</sup> <a name="defaultNetworkSubnetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultNetworkSubnetId"></a>

```java
public java.lang.String getDefaultNetworkSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#id LabServicePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sharedGalleryId`<sup>Optional</sup> <a name="sharedGalleryId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.sharedGalleryId"></a>

```java
public java.lang.String getSharedGalleryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}.

---

##### `support`<sup>Optional</sup> <a name="support" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.support"></a>

```java
public LabServicePlanSupport getSupport();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

support block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#support LabServicePlan#support}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#tags LabServicePlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.timeouts"></a>

```java
public LabServicePlanTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#timeouts LabServicePlan#timeouts}

---

### LabServicePlanDefaultAutoShutdown <a name="LabServicePlanDefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_plan.LabServicePlanDefaultAutoShutdown;

LabServicePlanDefaultAutoShutdown.builder()
//  .disconnectDelay(java.lang.String)
//  .idleDelay(java.lang.String)
//  .noConnectDelay(java.lang.String)
//  .shutdownOnIdle(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.disconnectDelay">disconnectDelay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#disconnect_delay LabServicePlan#disconnect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.idleDelay">idleDelay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#idle_delay LabServicePlan#idle_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.noConnectDelay">noConnectDelay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#no_connect_delay LabServicePlan#no_connect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.shutdownOnIdle">shutdownOnIdle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#shutdown_on_idle LabServicePlan#shutdown_on_idle}. |

---

##### `disconnectDelay`<sup>Optional</sup> <a name="disconnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.disconnectDelay"></a>

```java
public java.lang.String getDisconnectDelay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#disconnect_delay LabServicePlan#disconnect_delay}.

---

##### `idleDelay`<sup>Optional</sup> <a name="idleDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.idleDelay"></a>

```java
public java.lang.String getIdleDelay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#idle_delay LabServicePlan#idle_delay}.

---

##### `noConnectDelay`<sup>Optional</sup> <a name="noConnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.noConnectDelay"></a>

```java
public java.lang.String getNoConnectDelay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#no_connect_delay LabServicePlan#no_connect_delay}.

---

##### `shutdownOnIdle`<sup>Optional</sup> <a name="shutdownOnIdle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.shutdownOnIdle"></a>

```java
public java.lang.String getShutdownOnIdle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#shutdown_on_idle LabServicePlan#shutdown_on_idle}.

---

### LabServicePlanDefaultConnection <a name="LabServicePlanDefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_plan.LabServicePlanDefaultConnection;

LabServicePlanDefaultConnection.builder()
//  .clientRdpAccess(java.lang.String)
//  .clientSshAccess(java.lang.String)
//  .webRdpAccess(java.lang.String)
//  .webSshAccess(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientRdpAccess">clientRdpAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#client_rdp_access LabServicePlan#client_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientSshAccess">clientSshAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#client_ssh_access LabServicePlan#client_ssh_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webRdpAccess">webRdpAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#web_rdp_access LabServicePlan#web_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webSshAccess">webSshAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#web_ssh_access LabServicePlan#web_ssh_access}. |

---

##### `clientRdpAccess`<sup>Optional</sup> <a name="clientRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientRdpAccess"></a>

```java
public java.lang.String getClientRdpAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#client_rdp_access LabServicePlan#client_rdp_access}.

---

##### `clientSshAccess`<sup>Optional</sup> <a name="clientSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientSshAccess"></a>

```java
public java.lang.String getClientSshAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#client_ssh_access LabServicePlan#client_ssh_access}.

---

##### `webRdpAccess`<sup>Optional</sup> <a name="webRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webRdpAccess"></a>

```java
public java.lang.String getWebRdpAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#web_rdp_access LabServicePlan#web_rdp_access}.

---

##### `webSshAccess`<sup>Optional</sup> <a name="webSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webSshAccess"></a>

```java
public java.lang.String getWebSshAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#web_ssh_access LabServicePlan#web_ssh_access}.

---

### LabServicePlanSupport <a name="LabServicePlanSupport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_plan.LabServicePlanSupport;

LabServicePlanSupport.builder()
//  .email(java.lang.String)
//  .instructions(java.lang.String)
//  .phone(java.lang.String)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#email LabServicePlan#email}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.instructions">instructions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#instructions LabServicePlan#instructions}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.phone">phone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#phone LabServicePlan#phone}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#url LabServicePlan#url}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#email LabServicePlan#email}.

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.instructions"></a>

```java
public java.lang.String getInstructions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#instructions LabServicePlan#instructions}.

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.phone"></a>

```java
public java.lang.String getPhone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#phone LabServicePlan#phone}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#url LabServicePlan#url}.

---

### LabServicePlanTimeouts <a name="LabServicePlanTimeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_plan.LabServicePlanTimeouts;

LabServicePlanTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#create LabServicePlan#create}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#delete LabServicePlan#delete}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#read LabServicePlan#read}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#update LabServicePlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#create LabServicePlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#delete LabServicePlan#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#read LabServicePlan#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/lab_service_plan#update LabServicePlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LabServicePlanDefaultAutoShutdownOutputReference <a name="LabServicePlanDefaultAutoShutdownOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_plan.LabServicePlanDefaultAutoShutdownOutputReference;

new LabServicePlanDefaultAutoShutdownOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetDisconnectDelay">resetDisconnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetIdleDelay">resetIdleDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetNoConnectDelay">resetNoConnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetShutdownOnIdle">resetShutdownOnIdle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisconnectDelay` <a name="resetDisconnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetDisconnectDelay"></a>

```java
public void resetDisconnectDelay()
```

##### `resetIdleDelay` <a name="resetIdleDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetIdleDelay"></a>

```java
public void resetIdleDelay()
```

##### `resetNoConnectDelay` <a name="resetNoConnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetNoConnectDelay"></a>

```java
public void resetNoConnectDelay()
```

##### `resetShutdownOnIdle` <a name="resetShutdownOnIdle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetShutdownOnIdle"></a>

```java
public void resetShutdownOnIdle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelayInput">disconnectDelayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelayInput">idleDelayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelayInput">noConnectDelayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdleInput">shutdownOnIdleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelay">disconnectDelay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelay">idleDelay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelay">noConnectDelay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdle">shutdownOnIdle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disconnectDelayInput`<sup>Optional</sup> <a name="disconnectDelayInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelayInput"></a>

```java
public java.lang.String getDisconnectDelayInput();
```

- *Type:* java.lang.String

---

##### `idleDelayInput`<sup>Optional</sup> <a name="idleDelayInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelayInput"></a>

```java
public java.lang.String getIdleDelayInput();
```

- *Type:* java.lang.String

---

##### `noConnectDelayInput`<sup>Optional</sup> <a name="noConnectDelayInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelayInput"></a>

```java
public java.lang.String getNoConnectDelayInput();
```

- *Type:* java.lang.String

---

##### `shutdownOnIdleInput`<sup>Optional</sup> <a name="shutdownOnIdleInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdleInput"></a>

```java
public java.lang.String getShutdownOnIdleInput();
```

- *Type:* java.lang.String

---

##### `disconnectDelay`<sup>Required</sup> <a name="disconnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelay"></a>

```java
public java.lang.String getDisconnectDelay();
```

- *Type:* java.lang.String

---

##### `idleDelay`<sup>Required</sup> <a name="idleDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelay"></a>

```java
public java.lang.String getIdleDelay();
```

- *Type:* java.lang.String

---

##### `noConnectDelay`<sup>Required</sup> <a name="noConnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelay"></a>

```java
public java.lang.String getNoConnectDelay();
```

- *Type:* java.lang.String

---

##### `shutdownOnIdle`<sup>Required</sup> <a name="shutdownOnIdle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdle"></a>

```java
public java.lang.String getShutdownOnIdle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.internalValue"></a>

```java
public LabServicePlanDefaultAutoShutdown getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

---


### LabServicePlanDefaultConnectionOutputReference <a name="LabServicePlanDefaultConnectionOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_plan.LabServicePlanDefaultConnectionOutputReference;

new LabServicePlanDefaultConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientRdpAccess">resetClientRdpAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientSshAccess">resetClientSshAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebRdpAccess">resetWebRdpAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebSshAccess">resetWebSshAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientRdpAccess` <a name="resetClientRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientRdpAccess"></a>

```java
public void resetClientRdpAccess()
```

##### `resetClientSshAccess` <a name="resetClientSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientSshAccess"></a>

```java
public void resetClientSshAccess()
```

##### `resetWebRdpAccess` <a name="resetWebRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebRdpAccess"></a>

```java
public void resetWebRdpAccess()
```

##### `resetWebSshAccess` <a name="resetWebSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebSshAccess"></a>

```java
public void resetWebSshAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccessInput">clientRdpAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccessInput">clientSshAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccessInput">webRdpAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccessInput">webSshAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccess">clientRdpAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccess">clientSshAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccess">webRdpAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccess">webSshAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientRdpAccessInput`<sup>Optional</sup> <a name="clientRdpAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccessInput"></a>

```java
public java.lang.String getClientRdpAccessInput();
```

- *Type:* java.lang.String

---

##### `clientSshAccessInput`<sup>Optional</sup> <a name="clientSshAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccessInput"></a>

```java
public java.lang.String getClientSshAccessInput();
```

- *Type:* java.lang.String

---

##### `webRdpAccessInput`<sup>Optional</sup> <a name="webRdpAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccessInput"></a>

```java
public java.lang.String getWebRdpAccessInput();
```

- *Type:* java.lang.String

---

##### `webSshAccessInput`<sup>Optional</sup> <a name="webSshAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccessInput"></a>

```java
public java.lang.String getWebSshAccessInput();
```

- *Type:* java.lang.String

---

##### `clientRdpAccess`<sup>Required</sup> <a name="clientRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccess"></a>

```java
public java.lang.String getClientRdpAccess();
```

- *Type:* java.lang.String

---

##### `clientSshAccess`<sup>Required</sup> <a name="clientSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccess"></a>

```java
public java.lang.String getClientSshAccess();
```

- *Type:* java.lang.String

---

##### `webRdpAccess`<sup>Required</sup> <a name="webRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccess"></a>

```java
public java.lang.String getWebRdpAccess();
```

- *Type:* java.lang.String

---

##### `webSshAccess`<sup>Required</sup> <a name="webSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccess"></a>

```java
public java.lang.String getWebSshAccess();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.internalValue"></a>

```java
public LabServicePlanDefaultConnection getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

---


### LabServicePlanSupportOutputReference <a name="LabServicePlanSupportOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_plan.LabServicePlanSupportOutputReference;

new LabServicePlanSupportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetInstructions">resetInstructions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetPhone">resetPhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetInstructions` <a name="resetInstructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetInstructions"></a>

```java
public void resetInstructions()
```

##### `resetPhone` <a name="resetPhone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetPhone"></a>

```java
public void resetPhone()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructionsInput">instructionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phoneInput">phoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructions">instructions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phone">phone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `instructionsInput`<sup>Optional</sup> <a name="instructionsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructionsInput"></a>

```java
public java.lang.String getInstructionsInput();
```

- *Type:* java.lang.String

---

##### `phoneInput`<sup>Optional</sup> <a name="phoneInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phoneInput"></a>

```java
public java.lang.String getPhoneInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructions"></a>

```java
public java.lang.String getInstructions();
```

- *Type:* java.lang.String

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phone"></a>

```java
public java.lang.String getPhone();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.internalValue"></a>

```java
public LabServicePlanSupport getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

---


### LabServicePlanTimeoutsOutputReference <a name="LabServicePlanTimeoutsOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_plan.LabServicePlanTimeoutsOutputReference;

new LabServicePlanTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

---



