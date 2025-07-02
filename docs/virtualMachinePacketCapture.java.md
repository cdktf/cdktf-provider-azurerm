# `virtualMachinePacketCapture` Submodule <a name="`virtualMachinePacketCapture` Submodule" id="@cdktf/provider-azurerm.virtualMachinePacketCapture"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachinePacketCapture <a name="VirtualMachinePacketCapture" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture azurerm_virtual_machine_packet_capture}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_packet_capture.VirtualMachinePacketCapture;

VirtualMachinePacketCapture.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .networkWatcherId(java.lang.String)
    .storageLocation(VirtualMachinePacketCaptureStorageLocation)
    .virtualMachineId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<VirtualMachinePacketCaptureFilter>)
//  .id(java.lang.String)
//  .maximumBytesPerPacket(java.lang.Number)
//  .maximumBytesPerSession(java.lang.Number)
//  .maximumCaptureDurationInSeconds(java.lang.Number)
//  .timeouts(VirtualMachinePacketCaptureTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#name VirtualMachinePacketCapture#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.networkWatcherId">networkWatcherId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#network_watcher_id VirtualMachinePacketCapture#network_watcher_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.storageLocation">storageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#virtual_machine_id VirtualMachinePacketCapture#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#id VirtualMachinePacketCapture#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.maximumBytesPerPacket">maximumBytesPerPacket</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_packet VirtualMachinePacketCapture#maximum_bytes_per_packet}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.maximumBytesPerSession">maximumBytesPerSession</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_session VirtualMachinePacketCapture#maximum_bytes_per_session}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.maximumCaptureDurationInSeconds">maximumCaptureDurationInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#maximum_capture_duration_in_seconds VirtualMachinePacketCapture#maximum_capture_duration_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#name VirtualMachinePacketCapture#name}.

---

##### `networkWatcherId`<sup>Required</sup> <a name="networkWatcherId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.networkWatcherId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#network_watcher_id VirtualMachinePacketCapture#network_watcher_id}.

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.storageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#storage_location VirtualMachinePacketCapture#storage_location}

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.virtualMachineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#virtual_machine_id VirtualMachinePacketCapture#virtual_machine_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#filter VirtualMachinePacketCapture#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#id VirtualMachinePacketCapture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumBytesPerPacket`<sup>Optional</sup> <a name="maximumBytesPerPacket" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.maximumBytesPerPacket"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_packet VirtualMachinePacketCapture#maximum_bytes_per_packet}.

---

##### `maximumBytesPerSession`<sup>Optional</sup> <a name="maximumBytesPerSession" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.maximumBytesPerSession"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_session VirtualMachinePacketCapture#maximum_bytes_per_session}.

---

##### `maximumCaptureDurationInSeconds`<sup>Optional</sup> <a name="maximumCaptureDurationInSeconds" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.maximumCaptureDurationInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#maximum_capture_duration_in_seconds VirtualMachinePacketCapture#maximum_capture_duration_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#timeouts VirtualMachinePacketCapture#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putStorageLocation">putStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerPacket">resetMaximumBytesPerPacket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerSession">resetMaximumBytesPerSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumCaptureDurationInSeconds">resetMaximumCaptureDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<VirtualMachinePacketCaptureFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>>

---

##### `putStorageLocation` <a name="putStorageLocation" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putStorageLocation"></a>

```java
public void putStorageLocation(VirtualMachinePacketCaptureStorageLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putTimeouts"></a>

```java
public void putTimeouts(VirtualMachinePacketCaptureTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetId"></a>

```java
public void resetId()
```

##### `resetMaximumBytesPerPacket` <a name="resetMaximumBytesPerPacket" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerPacket"></a>

```java
public void resetMaximumBytesPerPacket()
```

##### `resetMaximumBytesPerSession` <a name="resetMaximumBytesPerSession" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerSession"></a>

```java
public void resetMaximumBytesPerSession()
```

##### `resetMaximumCaptureDurationInSeconds` <a name="resetMaximumCaptureDurationInSeconds" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumCaptureDurationInSeconds"></a>

```java
public void resetMaximumCaptureDurationInSeconds()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachinePacketCapture resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_packet_capture.VirtualMachinePacketCapture;

VirtualMachinePacketCapture.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_packet_capture.VirtualMachinePacketCapture;

VirtualMachinePacketCapture.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_packet_capture.VirtualMachinePacketCapture;

VirtualMachinePacketCapture.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_packet_capture.VirtualMachinePacketCapture;

VirtualMachinePacketCapture.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualMachinePacketCapture.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VirtualMachinePacketCapture resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualMachinePacketCapture to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualMachinePacketCapture that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachinePacketCapture to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList">VirtualMachinePacketCaptureFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference">VirtualMachinePacketCaptureStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference">VirtualMachinePacketCaptureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacketInput">maximumBytesPerPacketInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSessionInput">maximumBytesPerSessionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSecondsInput">maximumCaptureDurationInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherIdInput">networkWatcherIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocationInput">storageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacket">maximumBytesPerPacket</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSession">maximumBytesPerSession</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSeconds">maximumCaptureDurationInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherId">networkWatcherId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filter"></a>

```java
public VirtualMachinePacketCaptureFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList">VirtualMachinePacketCaptureFilterList</a>

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocation"></a>

```java
public VirtualMachinePacketCaptureStorageLocationOutputReference getStorageLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference">VirtualMachinePacketCaptureStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeouts"></a>

```java
public VirtualMachinePacketCaptureTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference">VirtualMachinePacketCaptureTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maximumBytesPerPacketInput`<sup>Optional</sup> <a name="maximumBytesPerPacketInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacketInput"></a>

```java
public java.lang.Number getMaximumBytesPerPacketInput();
```

- *Type:* java.lang.Number

---

##### `maximumBytesPerSessionInput`<sup>Optional</sup> <a name="maximumBytesPerSessionInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSessionInput"></a>

```java
public java.lang.Number getMaximumBytesPerSessionInput();
```

- *Type:* java.lang.Number

---

##### `maximumCaptureDurationInSecondsInput`<sup>Optional</sup> <a name="maximumCaptureDurationInSecondsInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSecondsInput"></a>

```java
public java.lang.Number getMaximumCaptureDurationInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkWatcherIdInput`<sup>Optional</sup> <a name="networkWatcherIdInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherIdInput"></a>

```java
public java.lang.String getNetworkWatcherIdInput();
```

- *Type:* java.lang.String

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocationInput"></a>

```java
public VirtualMachinePacketCaptureStorageLocation getStorageLocationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineIdInput"></a>

```java
public java.lang.String getVirtualMachineIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maximumBytesPerPacket`<sup>Required</sup> <a name="maximumBytesPerPacket" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacket"></a>

```java
public java.lang.Number getMaximumBytesPerPacket();
```

- *Type:* java.lang.Number

---

##### `maximumBytesPerSession`<sup>Required</sup> <a name="maximumBytesPerSession" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSession"></a>

```java
public java.lang.Number getMaximumBytesPerSession();
```

- *Type:* java.lang.Number

---

##### `maximumCaptureDurationInSeconds`<sup>Required</sup> <a name="maximumCaptureDurationInSeconds" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSeconds"></a>

```java
public java.lang.Number getMaximumCaptureDurationInSeconds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkWatcherId`<sup>Required</sup> <a name="networkWatcherId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherId"></a>

```java
public java.lang.String getNetworkWatcherId();
```

- *Type:* java.lang.String

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachinePacketCaptureConfig <a name="VirtualMachinePacketCaptureConfig" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_packet_capture.VirtualMachinePacketCaptureConfig;

VirtualMachinePacketCaptureConfig.builder()
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
    .name(java.lang.String)
    .networkWatcherId(java.lang.String)
    .storageLocation(VirtualMachinePacketCaptureStorageLocation)
    .virtualMachineId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<VirtualMachinePacketCaptureFilter>)
//  .id(java.lang.String)
//  .maximumBytesPerPacket(java.lang.Number)
//  .maximumBytesPerSession(java.lang.Number)
//  .maximumCaptureDurationInSeconds(java.lang.Number)
//  .timeouts(VirtualMachinePacketCaptureTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#name VirtualMachinePacketCapture#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.networkWatcherId">networkWatcherId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#network_watcher_id VirtualMachinePacketCapture#network_watcher_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#virtual_machine_id VirtualMachinePacketCapture#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#id VirtualMachinePacketCapture#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerPacket">maximumBytesPerPacket</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_packet VirtualMachinePacketCapture#maximum_bytes_per_packet}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerSession">maximumBytesPerSession</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_session VirtualMachinePacketCapture#maximum_bytes_per_session}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumCaptureDurationInSeconds">maximumCaptureDurationInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#maximum_capture_duration_in_seconds VirtualMachinePacketCapture#maximum_capture_duration_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#name VirtualMachinePacketCapture#name}.

---

##### `networkWatcherId`<sup>Required</sup> <a name="networkWatcherId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.networkWatcherId"></a>

```java
public java.lang.String getNetworkWatcherId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#network_watcher_id VirtualMachinePacketCapture#network_watcher_id}.

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.storageLocation"></a>

```java
public VirtualMachinePacketCaptureStorageLocation getStorageLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#storage_location VirtualMachinePacketCapture#storage_location}

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#virtual_machine_id VirtualMachinePacketCapture#virtual_machine_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#filter VirtualMachinePacketCapture#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#id VirtualMachinePacketCapture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumBytesPerPacket`<sup>Optional</sup> <a name="maximumBytesPerPacket" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerPacket"></a>

```java
public java.lang.Number getMaximumBytesPerPacket();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_packet VirtualMachinePacketCapture#maximum_bytes_per_packet}.

---

##### `maximumBytesPerSession`<sup>Optional</sup> <a name="maximumBytesPerSession" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerSession"></a>

```java
public java.lang.Number getMaximumBytesPerSession();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_session VirtualMachinePacketCapture#maximum_bytes_per_session}.

---

##### `maximumCaptureDurationInSeconds`<sup>Optional</sup> <a name="maximumCaptureDurationInSeconds" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumCaptureDurationInSeconds"></a>

```java
public java.lang.Number getMaximumCaptureDurationInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#maximum_capture_duration_in_seconds VirtualMachinePacketCapture#maximum_capture_duration_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.timeouts"></a>

```java
public VirtualMachinePacketCaptureTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#timeouts VirtualMachinePacketCapture#timeouts}

---

### VirtualMachinePacketCaptureFilter <a name="VirtualMachinePacketCaptureFilter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_packet_capture.VirtualMachinePacketCaptureFilter;

VirtualMachinePacketCaptureFilter.builder()
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
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#protocol VirtualMachinePacketCapture#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localIpAddress">localIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#local_ip_address VirtualMachinePacketCapture#local_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localPort">localPort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#local_port VirtualMachinePacketCapture#local_port}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remoteIpAddress">remoteIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#remote_ip_address VirtualMachinePacketCapture#remote_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remotePort">remotePort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#remote_port VirtualMachinePacketCapture#remote_port}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#protocol VirtualMachinePacketCapture#protocol}.

---

##### `localIpAddress`<sup>Optional</sup> <a name="localIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localIpAddress"></a>

```java
public java.lang.String getLocalIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#local_ip_address VirtualMachinePacketCapture#local_ip_address}.

---

##### `localPort`<sup>Optional</sup> <a name="localPort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localPort"></a>

```java
public java.lang.String getLocalPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#local_port VirtualMachinePacketCapture#local_port}.

---

##### `remoteIpAddress`<sup>Optional</sup> <a name="remoteIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remoteIpAddress"></a>

```java
public java.lang.String getRemoteIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#remote_ip_address VirtualMachinePacketCapture#remote_ip_address}.

---

##### `remotePort`<sup>Optional</sup> <a name="remotePort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remotePort"></a>

```java
public java.lang.String getRemotePort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#remote_port VirtualMachinePacketCapture#remote_port}.

---

### VirtualMachinePacketCaptureStorageLocation <a name="VirtualMachinePacketCaptureStorageLocation" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_packet_capture.VirtualMachinePacketCaptureStorageLocation;

VirtualMachinePacketCaptureStorageLocation.builder()
//  .filePath(java.lang.String)
//  .storageAccountId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.filePath">filePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#file_path VirtualMachinePacketCapture#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#storage_account_id VirtualMachinePacketCapture#storage_account_id}. |

---

##### `filePath`<sup>Optional</sup> <a name="filePath" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#file_path VirtualMachinePacketCapture#file_path}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#storage_account_id VirtualMachinePacketCapture#storage_account_id}.

---

### VirtualMachinePacketCaptureTimeouts <a name="VirtualMachinePacketCaptureTimeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_packet_capture.VirtualMachinePacketCaptureTimeouts;

VirtualMachinePacketCaptureTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#create VirtualMachinePacketCapture#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#delete VirtualMachinePacketCapture#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#read VirtualMachinePacketCapture#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#create VirtualMachinePacketCapture#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#delete VirtualMachinePacketCapture#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/virtual_machine_packet_capture#read VirtualMachinePacketCapture#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachinePacketCaptureFilterList <a name="VirtualMachinePacketCaptureFilterList" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_packet_capture.VirtualMachinePacketCaptureFilterList;

new VirtualMachinePacketCaptureFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.get"></a>

```java
public VirtualMachinePacketCaptureFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>>

---


### VirtualMachinePacketCaptureFilterOutputReference <a name="VirtualMachinePacketCaptureFilterOutputReference" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_packet_capture.VirtualMachinePacketCaptureFilterOutputReference;

new VirtualMachinePacketCaptureFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalIpAddress">resetLocalIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalPort">resetLocalPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemoteIpAddress">resetRemoteIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemotePort">resetRemotePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocalIpAddress` <a name="resetLocalIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalIpAddress"></a>

```java
public void resetLocalIpAddress()
```

##### `resetLocalPort` <a name="resetLocalPort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalPort"></a>

```java
public void resetLocalPort()
```

##### `resetRemoteIpAddress` <a name="resetRemoteIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemoteIpAddress"></a>

```java
public void resetRemoteIpAddress()
```

##### `resetRemotePort` <a name="resetRemotePort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemotePort"></a>

```java
public void resetRemotePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddressInput">localIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPortInput">localPortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddressInput">remoteIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePortInput">remotePortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddress">localIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPort">localPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddress">remoteIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePort">remotePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localIpAddressInput`<sup>Optional</sup> <a name="localIpAddressInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddressInput"></a>

```java
public java.lang.String getLocalIpAddressInput();
```

- *Type:* java.lang.String

---

##### `localPortInput`<sup>Optional</sup> <a name="localPortInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPortInput"></a>

```java
public java.lang.String getLocalPortInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `remoteIpAddressInput`<sup>Optional</sup> <a name="remoteIpAddressInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddressInput"></a>

```java
public java.lang.String getRemoteIpAddressInput();
```

- *Type:* java.lang.String

---

##### `remotePortInput`<sup>Optional</sup> <a name="remotePortInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePortInput"></a>

```java
public java.lang.String getRemotePortInput();
```

- *Type:* java.lang.String

---

##### `localIpAddress`<sup>Required</sup> <a name="localIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddress"></a>

```java
public java.lang.String getLocalIpAddress();
```

- *Type:* java.lang.String

---

##### `localPort`<sup>Required</sup> <a name="localPort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPort"></a>

```java
public java.lang.String getLocalPort();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `remoteIpAddress`<sup>Required</sup> <a name="remoteIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddress"></a>

```java
public java.lang.String getRemoteIpAddress();
```

- *Type:* java.lang.String

---

##### `remotePort`<sup>Required</sup> <a name="remotePort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePort"></a>

```java
public java.lang.String getRemotePort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>

---


### VirtualMachinePacketCaptureStorageLocationOutputReference <a name="VirtualMachinePacketCaptureStorageLocationOutputReference" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_packet_capture.VirtualMachinePacketCaptureStorageLocationOutputReference;

new VirtualMachinePacketCaptureStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetFilePath">resetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetStorageAccountId">resetStorageAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilePath` <a name="resetFilePath" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetFilePath"></a>

```java
public void resetFilePath()
```

##### `resetStorageAccountId` <a name="resetStorageAccountId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetStorageAccountId"></a>

```java
public void resetStorageAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storagePath">storagePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePathInput">filePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePath">filePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storagePath`<sup>Required</sup> <a name="storagePath" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storagePath"></a>

```java
public java.lang.String getStoragePath();
```

- *Type:* java.lang.String

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePathInput"></a>

```java
public java.lang.String getFilePathInput();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.internalValue"></a>

```java
public VirtualMachinePacketCaptureStorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

---


### VirtualMachinePacketCaptureTimeoutsOutputReference <a name="VirtualMachinePacketCaptureTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_packet_capture.VirtualMachinePacketCaptureTimeoutsOutputReference;

new VirtualMachinePacketCaptureTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>

---



