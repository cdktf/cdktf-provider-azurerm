# `networkPacketCapture` Submodule <a name="`networkPacketCapture` Submodule" id="@cdktf/provider-azurerm.networkPacketCapture"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkPacketCapture <a name="NetworkPacketCapture" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture azurerm_network_packet_capture}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_packet_capture.NetworkPacketCapture;

NetworkPacketCapture.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .networkWatcherName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageLocation(NetworkPacketCaptureStorageLocation)
    .targetResourceId(java.lang.String)
//  .filter(IResolvable|java.util.List<NetworkPacketCaptureFilter>)
//  .id(java.lang.String)
//  .maximumBytesPerPacket(java.lang.Number)
//  .maximumBytesPerSession(java.lang.Number)
//  .maximumCaptureDuration(java.lang.Number)
//  .timeouts(NetworkPacketCaptureTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#name NetworkPacketCapture#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.networkWatcherName">networkWatcherName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#network_watcher_name NetworkPacketCapture#network_watcher_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#resource_group_name NetworkPacketCapture#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.storageLocation">storageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#target_resource_id NetworkPacketCapture#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#id NetworkPacketCapture#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.maximumBytesPerPacket">maximumBytesPerPacket</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#maximum_bytes_per_packet NetworkPacketCapture#maximum_bytes_per_packet}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.maximumBytesPerSession">maximumBytesPerSession</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#maximum_bytes_per_session NetworkPacketCapture#maximum_bytes_per_session}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.maximumCaptureDuration">maximumCaptureDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#maximum_capture_duration NetworkPacketCapture#maximum_capture_duration}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#name NetworkPacketCapture#name}.

---

##### `networkWatcherName`<sup>Required</sup> <a name="networkWatcherName" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.networkWatcherName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#network_watcher_name NetworkPacketCapture#network_watcher_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#resource_group_name NetworkPacketCapture#resource_group_name}.

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.storageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#storage_location NetworkPacketCapture#storage_location}

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.targetResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#target_resource_id NetworkPacketCapture#target_resource_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#filter NetworkPacketCapture#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#id NetworkPacketCapture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumBytesPerPacket`<sup>Optional</sup> <a name="maximumBytesPerPacket" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.maximumBytesPerPacket"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#maximum_bytes_per_packet NetworkPacketCapture#maximum_bytes_per_packet}.

---

##### `maximumBytesPerSession`<sup>Optional</sup> <a name="maximumBytesPerSession" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.maximumBytesPerSession"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#maximum_bytes_per_session NetworkPacketCapture#maximum_bytes_per_session}.

---

##### `maximumCaptureDuration`<sup>Optional</sup> <a name="maximumCaptureDuration" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.maximumCaptureDuration"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#maximum_capture_duration NetworkPacketCapture#maximum_capture_duration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#timeouts NetworkPacketCapture#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putStorageLocation">putStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumBytesPerPacket">resetMaximumBytesPerPacket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumBytesPerSession">resetMaximumBytesPerSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumCaptureDuration">resetMaximumCaptureDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<NetworkPacketCaptureFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>>

---

##### `putStorageLocation` <a name="putStorageLocation" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putStorageLocation"></a>

```java
public void putStorageLocation(NetworkPacketCaptureStorageLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putTimeouts"></a>

```java
public void putTimeouts(NetworkPacketCaptureTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetId"></a>

```java
public void resetId()
```

##### `resetMaximumBytesPerPacket` <a name="resetMaximumBytesPerPacket" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumBytesPerPacket"></a>

```java
public void resetMaximumBytesPerPacket()
```

##### `resetMaximumBytesPerSession` <a name="resetMaximumBytesPerSession" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumBytesPerSession"></a>

```java
public void resetMaximumBytesPerSession()
```

##### `resetMaximumCaptureDuration` <a name="resetMaximumCaptureDuration" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumCaptureDuration"></a>

```java
public void resetMaximumCaptureDuration()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkPacketCapture resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_packet_capture.NetworkPacketCapture;

NetworkPacketCapture.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_packet_capture.NetworkPacketCapture;

NetworkPacketCapture.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_packet_capture.NetworkPacketCapture;

NetworkPacketCapture.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_packet_capture.NetworkPacketCapture;

NetworkPacketCapture.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkPacketCapture.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkPacketCapture resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkPacketCapture to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkPacketCapture that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkPacketCapture to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList">NetworkPacketCaptureFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference">NetworkPacketCaptureStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference">NetworkPacketCaptureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerPacketInput">maximumBytesPerPacketInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerSessionInput">maximumBytesPerSessionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumCaptureDurationInput">maximumCaptureDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.networkWatcherNameInput">networkWatcherNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.storageLocationInput">storageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerPacket">maximumBytesPerPacket</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerSession">maximumBytesPerSession</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumCaptureDuration">maximumCaptureDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.networkWatcherName">networkWatcherName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.filter"></a>

```java
public NetworkPacketCaptureFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList">NetworkPacketCaptureFilterList</a>

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.storageLocation"></a>

```java
public NetworkPacketCaptureStorageLocationOutputReference getStorageLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference">NetworkPacketCaptureStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.timeouts"></a>

```java
public NetworkPacketCaptureTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference">NetworkPacketCaptureTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.filterInput"></a>

```java
public IResolvable|java.util.List<NetworkPacketCaptureFilter> getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maximumBytesPerPacketInput`<sup>Optional</sup> <a name="maximumBytesPerPacketInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerPacketInput"></a>

```java
public java.lang.Number getMaximumBytesPerPacketInput();
```

- *Type:* java.lang.Number

---

##### `maximumBytesPerSessionInput`<sup>Optional</sup> <a name="maximumBytesPerSessionInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerSessionInput"></a>

```java
public java.lang.Number getMaximumBytesPerSessionInput();
```

- *Type:* java.lang.Number

---

##### `maximumCaptureDurationInput`<sup>Optional</sup> <a name="maximumCaptureDurationInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumCaptureDurationInput"></a>

```java
public java.lang.Number getMaximumCaptureDurationInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkWatcherNameInput`<sup>Optional</sup> <a name="networkWatcherNameInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.networkWatcherNameInput"></a>

```java
public java.lang.String getNetworkWatcherNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.storageLocationInput"></a>

```java
public NetworkPacketCaptureStorageLocation getStorageLocationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a>

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.targetResourceIdInput"></a>

```java
public java.lang.String getTargetResourceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.timeoutsInput"></a>

```java
public IResolvable|NetworkPacketCaptureTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maximumBytesPerPacket`<sup>Required</sup> <a name="maximumBytesPerPacket" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerPacket"></a>

```java
public java.lang.Number getMaximumBytesPerPacket();
```

- *Type:* java.lang.Number

---

##### `maximumBytesPerSession`<sup>Required</sup> <a name="maximumBytesPerSession" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerSession"></a>

```java
public java.lang.Number getMaximumBytesPerSession();
```

- *Type:* java.lang.Number

---

##### `maximumCaptureDuration`<sup>Required</sup> <a name="maximumCaptureDuration" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumCaptureDuration"></a>

```java
public java.lang.Number getMaximumCaptureDuration();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkWatcherName`<sup>Required</sup> <a name="networkWatcherName" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.networkWatcherName"></a>

```java
public java.lang.String getNetworkWatcherName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkPacketCaptureConfig <a name="NetworkPacketCaptureConfig" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_packet_capture.NetworkPacketCaptureConfig;

NetworkPacketCaptureConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .networkWatcherName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageLocation(NetworkPacketCaptureStorageLocation)
    .targetResourceId(java.lang.String)
//  .filter(IResolvable|java.util.List<NetworkPacketCaptureFilter>)
//  .id(java.lang.String)
//  .maximumBytesPerPacket(java.lang.Number)
//  .maximumBytesPerSession(java.lang.Number)
//  .maximumCaptureDuration(java.lang.Number)
//  .timeouts(NetworkPacketCaptureTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#name NetworkPacketCapture#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.networkWatcherName">networkWatcherName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#network_watcher_name NetworkPacketCapture#network_watcher_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#resource_group_name NetworkPacketCapture#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#target_resource_id NetworkPacketCapture#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#id NetworkPacketCapture#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumBytesPerPacket">maximumBytesPerPacket</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#maximum_bytes_per_packet NetworkPacketCapture#maximum_bytes_per_packet}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumBytesPerSession">maximumBytesPerSession</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#maximum_bytes_per_session NetworkPacketCapture#maximum_bytes_per_session}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumCaptureDuration">maximumCaptureDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#maximum_capture_duration NetworkPacketCapture#maximum_capture_duration}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#name NetworkPacketCapture#name}.

---

##### `networkWatcherName`<sup>Required</sup> <a name="networkWatcherName" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.networkWatcherName"></a>

```java
public java.lang.String getNetworkWatcherName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#network_watcher_name NetworkPacketCapture#network_watcher_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#resource_group_name NetworkPacketCapture#resource_group_name}.

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.storageLocation"></a>

```java
public NetworkPacketCaptureStorageLocation getStorageLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#storage_location NetworkPacketCapture#storage_location}

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#target_resource_id NetworkPacketCapture#target_resource_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.filter"></a>

```java
public IResolvable|java.util.List<NetworkPacketCaptureFilter> getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#filter NetworkPacketCapture#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#id NetworkPacketCapture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumBytesPerPacket`<sup>Optional</sup> <a name="maximumBytesPerPacket" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumBytesPerPacket"></a>

```java
public java.lang.Number getMaximumBytesPerPacket();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#maximum_bytes_per_packet NetworkPacketCapture#maximum_bytes_per_packet}.

---

##### `maximumBytesPerSession`<sup>Optional</sup> <a name="maximumBytesPerSession" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumBytesPerSession"></a>

```java
public java.lang.Number getMaximumBytesPerSession();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#maximum_bytes_per_session NetworkPacketCapture#maximum_bytes_per_session}.

---

##### `maximumCaptureDuration`<sup>Optional</sup> <a name="maximumCaptureDuration" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumCaptureDuration"></a>

```java
public java.lang.Number getMaximumCaptureDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#maximum_capture_duration NetworkPacketCapture#maximum_capture_duration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.timeouts"></a>

```java
public NetworkPacketCaptureTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#timeouts NetworkPacketCapture#timeouts}

---

### NetworkPacketCaptureFilter <a name="NetworkPacketCaptureFilter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_packet_capture.NetworkPacketCaptureFilter;

NetworkPacketCaptureFilter.builder()
    .protocol(java.lang.String)
//  .localIpAddress(java.lang.String)
//  .localPort(java.lang.String)
//  .remoteIpAddress(java.lang.String)
//  .remotePort(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#protocol NetworkPacketCapture#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.localIpAddress">localIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#local_ip_address NetworkPacketCapture#local_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.localPort">localPort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#local_port NetworkPacketCapture#local_port}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.remoteIpAddress">remoteIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#remote_ip_address NetworkPacketCapture#remote_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.remotePort">remotePort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#remote_port NetworkPacketCapture#remote_port}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#protocol NetworkPacketCapture#protocol}.

---

##### `localIpAddress`<sup>Optional</sup> <a name="localIpAddress" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.localIpAddress"></a>

```java
public java.lang.String getLocalIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#local_ip_address NetworkPacketCapture#local_ip_address}.

---

##### `localPort`<sup>Optional</sup> <a name="localPort" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.localPort"></a>

```java
public java.lang.String getLocalPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#local_port NetworkPacketCapture#local_port}.

---

##### `remoteIpAddress`<sup>Optional</sup> <a name="remoteIpAddress" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.remoteIpAddress"></a>

```java
public java.lang.String getRemoteIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#remote_ip_address NetworkPacketCapture#remote_ip_address}.

---

##### `remotePort`<sup>Optional</sup> <a name="remotePort" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.remotePort"></a>

```java
public java.lang.String getRemotePort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#remote_port NetworkPacketCapture#remote_port}.

---

### NetworkPacketCaptureStorageLocation <a name="NetworkPacketCaptureStorageLocation" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_packet_capture.NetworkPacketCaptureStorageLocation;

NetworkPacketCaptureStorageLocation.builder()
//  .filePath(java.lang.String)
//  .storageAccountId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.property.filePath">filePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#file_path NetworkPacketCapture#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#storage_account_id NetworkPacketCapture#storage_account_id}. |

---

##### `filePath`<sup>Optional</sup> <a name="filePath" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#file_path NetworkPacketCapture#file_path}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#storage_account_id NetworkPacketCapture#storage_account_id}.

---

### NetworkPacketCaptureTimeouts <a name="NetworkPacketCaptureTimeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_packet_capture.NetworkPacketCaptureTimeouts;

NetworkPacketCaptureTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#create NetworkPacketCapture#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#delete NetworkPacketCapture#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#read NetworkPacketCapture#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#create NetworkPacketCapture#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#delete NetworkPacketCapture#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_packet_capture#read NetworkPacketCapture#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkPacketCaptureFilterList <a name="NetworkPacketCaptureFilterList" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_packet_capture.NetworkPacketCaptureFilterList;

new NetworkPacketCaptureFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.get"></a>

```java
public NetworkPacketCaptureFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkPacketCaptureFilter> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>>

---


### NetworkPacketCaptureFilterOutputReference <a name="NetworkPacketCaptureFilterOutputReference" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_packet_capture.NetworkPacketCaptureFilterOutputReference;

new NetworkPacketCaptureFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetLocalIpAddress">resetLocalIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetLocalPort">resetLocalPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetRemoteIpAddress">resetRemoteIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetRemotePort">resetRemotePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocalIpAddress` <a name="resetLocalIpAddress" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetLocalIpAddress"></a>

```java
public void resetLocalIpAddress()
```

##### `resetLocalPort` <a name="resetLocalPort" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetLocalPort"></a>

```java
public void resetLocalPort()
```

##### `resetRemoteIpAddress` <a name="resetRemoteIpAddress" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetRemoteIpAddress"></a>

```java
public void resetRemoteIpAddress()
```

##### `resetRemotePort` <a name="resetRemotePort" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetRemotePort"></a>

```java
public void resetRemotePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localIpAddressInput">localIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localPortInput">localPortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remoteIpAddressInput">remoteIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remotePortInput">remotePortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localIpAddress">localIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localPort">localPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remoteIpAddress">remoteIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remotePort">remotePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localIpAddressInput`<sup>Optional</sup> <a name="localIpAddressInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localIpAddressInput"></a>

```java
public java.lang.String getLocalIpAddressInput();
```

- *Type:* java.lang.String

---

##### `localPortInput`<sup>Optional</sup> <a name="localPortInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localPortInput"></a>

```java
public java.lang.String getLocalPortInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `remoteIpAddressInput`<sup>Optional</sup> <a name="remoteIpAddressInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remoteIpAddressInput"></a>

```java
public java.lang.String getRemoteIpAddressInput();
```

- *Type:* java.lang.String

---

##### `remotePortInput`<sup>Optional</sup> <a name="remotePortInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remotePortInput"></a>

```java
public java.lang.String getRemotePortInput();
```

- *Type:* java.lang.String

---

##### `localIpAddress`<sup>Required</sup> <a name="localIpAddress" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localIpAddress"></a>

```java
public java.lang.String getLocalIpAddress();
```

- *Type:* java.lang.String

---

##### `localPort`<sup>Required</sup> <a name="localPort" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localPort"></a>

```java
public java.lang.String getLocalPort();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `remoteIpAddress`<sup>Required</sup> <a name="remoteIpAddress" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remoteIpAddress"></a>

```java
public java.lang.String getRemoteIpAddress();
```

- *Type:* java.lang.String

---

##### `remotePort`<sup>Required</sup> <a name="remotePort" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remotePort"></a>

```java
public java.lang.String getRemotePort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkPacketCaptureFilter getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter">NetworkPacketCaptureFilter</a>

---


### NetworkPacketCaptureStorageLocationOutputReference <a name="NetworkPacketCaptureStorageLocationOutputReference" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_packet_capture.NetworkPacketCaptureStorageLocationOutputReference;

new NetworkPacketCaptureStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resetFilePath">resetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resetStorageAccountId">resetStorageAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilePath` <a name="resetFilePath" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resetFilePath"></a>

```java
public void resetFilePath()
```

##### `resetStorageAccountId` <a name="resetStorageAccountId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resetStorageAccountId"></a>

```java
public void resetStorageAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storagePath">storagePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.filePathInput">filePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.filePath">filePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storagePath`<sup>Required</sup> <a name="storagePath" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storagePath"></a>

```java
public java.lang.String getStoragePath();
```

- *Type:* java.lang.String

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.filePathInput"></a>

```java
public java.lang.String getFilePathInput();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.internalValue"></a>

```java
public NetworkPacketCaptureStorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a>

---


### NetworkPacketCaptureTimeoutsOutputReference <a name="NetworkPacketCaptureTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_packet_capture.NetworkPacketCaptureTimeoutsOutputReference;

new NetworkPacketCaptureTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkPacketCaptureTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a>

---



