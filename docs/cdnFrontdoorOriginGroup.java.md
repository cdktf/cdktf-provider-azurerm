# `cdnFrontdoorOriginGroup` Submodule <a name="`cdnFrontdoorOriginGroup` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorOriginGroup <a name="CdnFrontdoorOriginGroup" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group azurerm_cdn_frontdoor_origin_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin_group.CdnFrontdoorOriginGroup;

CdnFrontdoorOriginGroup.Builder.create(Construct scope, java.lang.String id)
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
    .cdnFrontdoorProfileId(java.lang.String)
    .loadBalancing(CdnFrontdoorOriginGroupLoadBalancing)
    .name(java.lang.String)
//  .healthProbe(CdnFrontdoorOriginGroupHealthProbe)
//  .id(java.lang.String)
//  .restoreTrafficTimeToHealedOrNewEndpointInMinutes(java.lang.Number)
//  .sessionAffinityEnabled(java.lang.Boolean)
//  .sessionAffinityEnabled(IResolvable)
//  .timeouts(CdnFrontdoorOriginGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#cdn_frontdoor_profile_id CdnFrontdoorOriginGroup#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.loadBalancing">loadBalancing</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#name CdnFrontdoorOriginGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.healthProbe">healthProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a></code> | health_probe block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#id CdnFrontdoorOriginGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.restoreTrafficTimeToHealedOrNewEndpointInMinutes">restoreTrafficTimeToHealedOrNewEndpointInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#restore_traffic_time_to_healed_or_new_endpoint_in_minutes CdnFrontdoorOriginGroup#restore_traffic_time_to_healed_or_new_endpoint_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.sessionAffinityEnabled">sessionAffinityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#session_affinity_enabled CdnFrontdoorOriginGroup#session_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.cdnFrontdoorProfileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#cdn_frontdoor_profile_id CdnFrontdoorOriginGroup#cdn_frontdoor_profile_id}.

---

##### `loadBalancing`<sup>Required</sup> <a name="loadBalancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.loadBalancing"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#load_balancing CdnFrontdoorOriginGroup#load_balancing}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#name CdnFrontdoorOriginGroup#name}.

---

##### `healthProbe`<sup>Optional</sup> <a name="healthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.healthProbe"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#health_probe CdnFrontdoorOriginGroup#health_probe}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#id CdnFrontdoorOriginGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restoreTrafficTimeToHealedOrNewEndpointInMinutes`<sup>Optional</sup> <a name="restoreTrafficTimeToHealedOrNewEndpointInMinutes" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.restoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#restore_traffic_time_to_healed_or_new_endpoint_in_minutes CdnFrontdoorOriginGroup#restore_traffic_time_to_healed_or_new_endpoint_in_minutes}.

---

##### `sessionAffinityEnabled`<sup>Optional</sup> <a name="sessionAffinityEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.sessionAffinityEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#session_affinity_enabled CdnFrontdoorOriginGroup#session_affinity_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#timeouts CdnFrontdoorOriginGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe">putHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putLoadBalancing">putLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetHealthProbe">resetHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes">resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetSessionAffinityEnabled">resetSessionAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHealthProbe` <a name="putHealthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe"></a>

```java
public void putHealthProbe(CdnFrontdoorOriginGroupHealthProbe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

---

##### `putLoadBalancing` <a name="putLoadBalancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putLoadBalancing"></a>

```java
public void putLoadBalancing(CdnFrontdoorOriginGroupLoadBalancing value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putLoadBalancing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts"></a>

```java
public void putTimeouts(CdnFrontdoorOriginGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>

---

##### `resetHealthProbe` <a name="resetHealthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetHealthProbe"></a>

```java
public void resetHealthProbe()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetId"></a>

```java
public void resetId()
```

##### `resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes` <a name="resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

```java
public void resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes()
```

##### `resetSessionAffinityEnabled` <a name="resetSessionAffinityEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetSessionAffinityEnabled"></a>

```java
public void resetSessionAffinityEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CdnFrontdoorOriginGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin_group.CdnFrontdoorOriginGroup;

CdnFrontdoorOriginGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin_group.CdnFrontdoorOriginGroup;

CdnFrontdoorOriginGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin_group.CdnFrontdoorOriginGroup;

CdnFrontdoorOriginGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin_group.CdnFrontdoorOriginGroup;

CdnFrontdoorOriginGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CdnFrontdoorOriginGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CdnFrontdoorOriginGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CdnFrontdoorOriginGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CdnFrontdoorOriginGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorOriginGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbe">healthProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference">CdnFrontdoorOriginGroupHealthProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancing">loadBalancing</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference">CdnFrontdoorOriginGroupLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference">CdnFrontdoorOriginGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileIdInput">cdnFrontdoorProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbeInput">healthProbeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancingInput">loadBalancingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutesInput">restoreTrafficTimeToHealedOrNewEndpointInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabledInput">sessionAffinityEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes">restoreTrafficTimeToHealedOrNewEndpointInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabled">sessionAffinityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `healthProbe`<sup>Required</sup> <a name="healthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbe"></a>

```java
public CdnFrontdoorOriginGroupHealthProbeOutputReference getHealthProbe();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference">CdnFrontdoorOriginGroupHealthProbeOutputReference</a>

---

##### `loadBalancing`<sup>Required</sup> <a name="loadBalancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancing"></a>

```java
public CdnFrontdoorOriginGroupLoadBalancingOutputReference getLoadBalancing();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference">CdnFrontdoorOriginGroupLoadBalancingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeouts"></a>

```java
public CdnFrontdoorOriginGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference">CdnFrontdoorOriginGroupTimeoutsOutputReference</a>

---

##### `cdnFrontdoorProfileIdInput`<sup>Optional</sup> <a name="cdnFrontdoorProfileIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileIdInput"></a>

```java
public java.lang.String getCdnFrontdoorProfileIdInput();
```

- *Type:* java.lang.String

---

##### `healthProbeInput`<sup>Optional</sup> <a name="healthProbeInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbeInput"></a>

```java
public CdnFrontdoorOriginGroupHealthProbe getHealthProbeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancingInput`<sup>Optional</sup> <a name="loadBalancingInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancingInput"></a>

```java
public CdnFrontdoorOriginGroupLoadBalancing getLoadBalancingInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `restoreTrafficTimeToHealedOrNewEndpointInMinutesInput`<sup>Optional</sup> <a name="restoreTrafficTimeToHealedOrNewEndpointInMinutesInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutesInput"></a>

```java
public java.lang.Number getRestoreTrafficTimeToHealedOrNewEndpointInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `sessionAffinityEnabledInput`<sup>Optional</sup> <a name="sessionAffinityEnabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabledInput"></a>

```java
public java.lang.Object getSessionAffinityEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileId"></a>

```java
public java.lang.String getCdnFrontdoorProfileId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `restoreTrafficTimeToHealedOrNewEndpointInMinutes`<sup>Required</sup> <a name="restoreTrafficTimeToHealedOrNewEndpointInMinutes" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

```java
public java.lang.Number getRestoreTrafficTimeToHealedOrNewEndpointInMinutes();
```

- *Type:* java.lang.Number

---

##### `sessionAffinityEnabled`<sup>Required</sup> <a name="sessionAffinityEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabled"></a>

```java
public java.lang.Object getSessionAffinityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorOriginGroupConfig <a name="CdnFrontdoorOriginGroupConfig" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin_group.CdnFrontdoorOriginGroupConfig;

CdnFrontdoorOriginGroupConfig.builder()
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
    .cdnFrontdoorProfileId(java.lang.String)
    .loadBalancing(CdnFrontdoorOriginGroupLoadBalancing)
    .name(java.lang.String)
//  .healthProbe(CdnFrontdoorOriginGroupHealthProbe)
//  .id(java.lang.String)
//  .restoreTrafficTimeToHealedOrNewEndpointInMinutes(java.lang.Number)
//  .sessionAffinityEnabled(java.lang.Boolean)
//  .sessionAffinityEnabled(IResolvable)
//  .timeouts(CdnFrontdoorOriginGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#cdn_frontdoor_profile_id CdnFrontdoorOriginGroup#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.loadBalancing">loadBalancing</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#name CdnFrontdoorOriginGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.healthProbe">healthProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a></code> | health_probe block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#id CdnFrontdoorOriginGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes">restoreTrafficTimeToHealedOrNewEndpointInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#restore_traffic_time_to_healed_or_new_endpoint_in_minutes CdnFrontdoorOriginGroup#restore_traffic_time_to_healed_or_new_endpoint_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.sessionAffinityEnabled">sessionAffinityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#session_affinity_enabled CdnFrontdoorOriginGroup#session_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.cdnFrontdoorProfileId"></a>

```java
public java.lang.String getCdnFrontdoorProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#cdn_frontdoor_profile_id CdnFrontdoorOriginGroup#cdn_frontdoor_profile_id}.

---

##### `loadBalancing`<sup>Required</sup> <a name="loadBalancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.loadBalancing"></a>

```java
public CdnFrontdoorOriginGroupLoadBalancing getLoadBalancing();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#load_balancing CdnFrontdoorOriginGroup#load_balancing}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#name CdnFrontdoorOriginGroup#name}.

---

##### `healthProbe`<sup>Optional</sup> <a name="healthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.healthProbe"></a>

```java
public CdnFrontdoorOriginGroupHealthProbe getHealthProbe();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#health_probe CdnFrontdoorOriginGroup#health_probe}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#id CdnFrontdoorOriginGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restoreTrafficTimeToHealedOrNewEndpointInMinutes`<sup>Optional</sup> <a name="restoreTrafficTimeToHealedOrNewEndpointInMinutes" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

```java
public java.lang.Number getRestoreTrafficTimeToHealedOrNewEndpointInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#restore_traffic_time_to_healed_or_new_endpoint_in_minutes CdnFrontdoorOriginGroup#restore_traffic_time_to_healed_or_new_endpoint_in_minutes}.

---

##### `sessionAffinityEnabled`<sup>Optional</sup> <a name="sessionAffinityEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.sessionAffinityEnabled"></a>

```java
public java.lang.Object getSessionAffinityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#session_affinity_enabled CdnFrontdoorOriginGroup#session_affinity_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.timeouts"></a>

```java
public CdnFrontdoorOriginGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#timeouts CdnFrontdoorOriginGroup#timeouts}

---

### CdnFrontdoorOriginGroupHealthProbe <a name="CdnFrontdoorOriginGroupHealthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin_group.CdnFrontdoorOriginGroupHealthProbe;

CdnFrontdoorOriginGroupHealthProbe.builder()
    .intervalInSeconds(java.lang.Number)
    .protocol(java.lang.String)
//  .path(java.lang.String)
//  .requestType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.intervalInSeconds">intervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#interval_in_seconds CdnFrontdoorOriginGroup#interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#protocol CdnFrontdoorOriginGroup#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#path CdnFrontdoorOriginGroup#path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.requestType">requestType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#request_type CdnFrontdoorOriginGroup#request_type}. |

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.intervalInSeconds"></a>

```java
public java.lang.Number getIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#interval_in_seconds CdnFrontdoorOriginGroup#interval_in_seconds}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#protocol CdnFrontdoorOriginGroup#protocol}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#path CdnFrontdoorOriginGroup#path}.

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.requestType"></a>

```java
public java.lang.String getRequestType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#request_type CdnFrontdoorOriginGroup#request_type}.

---

### CdnFrontdoorOriginGroupLoadBalancing <a name="CdnFrontdoorOriginGroupLoadBalancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin_group.CdnFrontdoorOriginGroupLoadBalancing;

CdnFrontdoorOriginGroupLoadBalancing.builder()
//  .additionalLatencyInMilliseconds(java.lang.Number)
//  .sampleSize(java.lang.Number)
//  .successfulSamplesRequired(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.additionalLatencyInMilliseconds">additionalLatencyInMilliseconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#additional_latency_in_milliseconds CdnFrontdoorOriginGroup#additional_latency_in_milliseconds}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.sampleSize">sampleSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#sample_size CdnFrontdoorOriginGroup#sample_size}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.successfulSamplesRequired">successfulSamplesRequired</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#successful_samples_required CdnFrontdoorOriginGroup#successful_samples_required}. |

---

##### `additionalLatencyInMilliseconds`<sup>Optional</sup> <a name="additionalLatencyInMilliseconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.additionalLatencyInMilliseconds"></a>

```java
public java.lang.Number getAdditionalLatencyInMilliseconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#additional_latency_in_milliseconds CdnFrontdoorOriginGroup#additional_latency_in_milliseconds}.

---

##### `sampleSize`<sup>Optional</sup> <a name="sampleSize" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.sampleSize"></a>

```java
public java.lang.Number getSampleSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#sample_size CdnFrontdoorOriginGroup#sample_size}.

---

##### `successfulSamplesRequired`<sup>Optional</sup> <a name="successfulSamplesRequired" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.successfulSamplesRequired"></a>

```java
public java.lang.Number getSuccessfulSamplesRequired();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#successful_samples_required CdnFrontdoorOriginGroup#successful_samples_required}.

---

### CdnFrontdoorOriginGroupTimeouts <a name="CdnFrontdoorOriginGroupTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin_group.CdnFrontdoorOriginGroupTimeouts;

CdnFrontdoorOriginGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#create CdnFrontdoorOriginGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#delete CdnFrontdoorOriginGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#read CdnFrontdoorOriginGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#update CdnFrontdoorOriginGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#create CdnFrontdoorOriginGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#delete CdnFrontdoorOriginGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#read CdnFrontdoorOriginGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/cdn_frontdoor_origin_group#update CdnFrontdoorOriginGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorOriginGroupHealthProbeOutputReference <a name="CdnFrontdoorOriginGroupHealthProbeOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin_group.CdnFrontdoorOriginGroupHealthProbeOutputReference;

new CdnFrontdoorOriginGroupHealthProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetRequestType">resetRequestType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetRequestType` <a name="resetRequestType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetRequestType"></a>

```java
public void resetRequestType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSecondsInput">intervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestTypeInput">requestTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestType">requestType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalInSecondsInput`<sup>Optional</sup> <a name="intervalInSecondsInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSecondsInput"></a>

```java
public java.lang.Number getIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `requestTypeInput`<sup>Optional</sup> <a name="requestTypeInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestTypeInput"></a>

```java
public java.lang.String getRequestTypeInput();
```

- *Type:* java.lang.String

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSeconds"></a>

```java
public java.lang.Number getIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestType"></a>

```java
public java.lang.String getRequestType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorOriginGroupHealthProbe getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

---


### CdnFrontdoorOriginGroupLoadBalancingOutputReference <a name="CdnFrontdoorOriginGroupLoadBalancingOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin_group.CdnFrontdoorOriginGroupLoadBalancingOutputReference;

new CdnFrontdoorOriginGroupLoadBalancingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetAdditionalLatencyInMilliseconds">resetAdditionalLatencyInMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSampleSize">resetSampleSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSuccessfulSamplesRequired">resetSuccessfulSamplesRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalLatencyInMilliseconds` <a name="resetAdditionalLatencyInMilliseconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetAdditionalLatencyInMilliseconds"></a>

```java
public void resetAdditionalLatencyInMilliseconds()
```

##### `resetSampleSize` <a name="resetSampleSize" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSampleSize"></a>

```java
public void resetSampleSize()
```

##### `resetSuccessfulSamplesRequired` <a name="resetSuccessfulSamplesRequired" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSuccessfulSamplesRequired"></a>

```java
public void resetSuccessfulSamplesRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMillisecondsInput">additionalLatencyInMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSizeInput">sampleSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequiredInput">successfulSamplesRequiredInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMilliseconds">additionalLatencyInMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSize">sampleSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequired">successfulSamplesRequired</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalLatencyInMillisecondsInput`<sup>Optional</sup> <a name="additionalLatencyInMillisecondsInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMillisecondsInput"></a>

```java
public java.lang.Number getAdditionalLatencyInMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `sampleSizeInput`<sup>Optional</sup> <a name="sampleSizeInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSizeInput"></a>

```java
public java.lang.Number getSampleSizeInput();
```

- *Type:* java.lang.Number

---

##### `successfulSamplesRequiredInput`<sup>Optional</sup> <a name="successfulSamplesRequiredInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequiredInput"></a>

```java
public java.lang.Number getSuccessfulSamplesRequiredInput();
```

- *Type:* java.lang.Number

---

##### `additionalLatencyInMilliseconds`<sup>Required</sup> <a name="additionalLatencyInMilliseconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMilliseconds"></a>

```java
public java.lang.Number getAdditionalLatencyInMilliseconds();
```

- *Type:* java.lang.Number

---

##### `sampleSize`<sup>Required</sup> <a name="sampleSize" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSize"></a>

```java
public java.lang.Number getSampleSize();
```

- *Type:* java.lang.Number

---

##### `successfulSamplesRequired`<sup>Required</sup> <a name="successfulSamplesRequired" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequired"></a>

```java
public java.lang.Number getSuccessfulSamplesRequired();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorOriginGroupLoadBalancing getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

---


### CdnFrontdoorOriginGroupTimeoutsOutputReference <a name="CdnFrontdoorOriginGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin_group.CdnFrontdoorOriginGroupTimeoutsOutputReference;

new CdnFrontdoorOriginGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>

---



