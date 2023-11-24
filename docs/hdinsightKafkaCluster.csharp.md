# `azurerm_hdinsight_kafka_cluster`

Refer to the Terraform Registory for docs: [`azurerm_hdinsight_kafka_cluster`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster).

# `hdinsightKafkaCluster` Submodule <a name="`hdinsightKafkaCluster` Submodule" id="@cdktf/provider-azurerm.hdinsightKafkaCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HdinsightKafkaCluster <a name="HdinsightKafkaCluster" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster azurerm_hdinsight_kafka_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaCluster(Construct Scope, string Id, HdinsightKafkaClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig">HdinsightKafkaClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig">HdinsightKafkaClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComponentVersion">PutComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComputeIsolation">PutComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putDiskEncryption">PutDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putExtension">PutExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putGateway">PutGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMetastores">PutMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMonitor">PutMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRestProxy">PutRestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile">PutSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccount">PutStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2">PutStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetComputeIsolation">ResetComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetDiskEncryption">ResetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetEncryptionInTransitEnabled">ResetEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMetastores">ResetMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMonitor">ResetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetRestProxy">ResetRestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetSecurityProfile">ResetSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccount">ResetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccountGen2">ResetStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTlsMinVersion">ResetTlsMinVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutComponentVersion` <a name="PutComponentVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComponentVersion"></a>

```csharp
private void PutComponentVersion(HdinsightKafkaClusterComponentVersion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComponentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

---

##### `PutComputeIsolation` <a name="PutComputeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComputeIsolation"></a>

```csharp
private void PutComputeIsolation(HdinsightKafkaClusterComputeIsolation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putComputeIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

---

##### `PutDiskEncryption` <a name="PutDiskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putDiskEncryption"></a>

```csharp
private void PutDiskEncryption(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putDiskEncryption.parameter.value"></a>

- *Type:* object

---

##### `PutExtension` <a name="PutExtension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putExtension"></a>

```csharp
private void PutExtension(HdinsightKafkaClusterExtension Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putExtension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

---

##### `PutGateway` <a name="PutGateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putGateway"></a>

```csharp
private void PutGateway(HdinsightKafkaClusterGateway Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

---

##### `PutMetastores` <a name="PutMetastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMetastores"></a>

```csharp
private void PutMetastores(HdinsightKafkaClusterMetastores Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMetastores.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

---

##### `PutMonitor` <a name="PutMonitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMonitor"></a>

```csharp
private void PutMonitor(HdinsightKafkaClusterMonitor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putNetwork"></a>

```csharp
private void PutNetwork(HdinsightKafkaClusterNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

---

##### `PutRestProxy` <a name="PutRestProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRestProxy"></a>

```csharp
private void PutRestProxy(HdinsightKafkaClusterRestProxy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRestProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

---

##### `PutRoles` <a name="PutRoles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles"></a>

```csharp
private void PutRoles(HdinsightKafkaClusterRoles Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putRoles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

---

##### `PutSecurityProfile` <a name="PutSecurityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile"></a>

```csharp
private void PutSecurityProfile(HdinsightKafkaClusterSecurityProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putSecurityProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

---

##### `PutStorageAccount` <a name="PutStorageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccount"></a>

```csharp
private void PutStorageAccount(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccount.parameter.value"></a>

- *Type:* object

---

##### `PutStorageAccountGen2` <a name="PutStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2"></a>

```csharp
private void PutStorageAccountGen2(HdinsightKafkaClusterStorageAccountGen2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putStorageAccountGen2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(HdinsightKafkaClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>

---

##### `ResetComputeIsolation` <a name="ResetComputeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetComputeIsolation"></a>

```csharp
private void ResetComputeIsolation()
```

##### `ResetDiskEncryption` <a name="ResetDiskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetDiskEncryption"></a>

```csharp
private void ResetDiskEncryption()
```

##### `ResetEncryptionInTransitEnabled` <a name="ResetEncryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetEncryptionInTransitEnabled"></a>

```csharp
private void ResetEncryptionInTransitEnabled()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetExtension"></a>

```csharp
private void ResetExtension()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetastores` <a name="ResetMetastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMetastores"></a>

```csharp
private void ResetMetastores()
```

##### `ResetMonitor` <a name="ResetMonitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetMonitor"></a>

```csharp
private void ResetMonitor()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetRestProxy` <a name="ResetRestProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetRestProxy"></a>

```csharp
private void ResetRestProxy()
```

##### `ResetSecurityProfile` <a name="ResetSecurityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetSecurityProfile"></a>

```csharp
private void ResetSecurityProfile()
```

##### `ResetStorageAccount` <a name="ResetStorageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccount"></a>

```csharp
private void ResetStorageAccount()
```

##### `ResetStorageAccountGen2` <a name="ResetStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetStorageAccountGen2"></a>

```csharp
private void ResetStorageAccountGen2()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsMinVersion` <a name="ResetTlsMinVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.resetTlsMinVersion"></a>

```csharp
private void ResetTlsMinVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HdinsightKafkaCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HdinsightKafkaCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HdinsightKafkaCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HdinsightKafkaCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HdinsightKafkaCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HdinsightKafkaCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HdinsightKafkaCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HdinsightKafkaCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HdinsightKafkaCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersion">ComponentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference">HdinsightKafkaClusterComponentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolation">ComputeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference">HdinsightKafkaClusterComputeIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryption">DiskEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList">HdinsightKafkaClusterDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference">HdinsightKafkaClusterExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference">HdinsightKafkaClusterGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.httpsEndpoint">HttpsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.kafkaRestProxyEndpoint">KafkaRestProxyEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastores">Metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference">HdinsightKafkaClusterMetastoresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference">HdinsightKafkaClusterMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference">HdinsightKafkaClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxy">RestProxy</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference">HdinsightKafkaClusterRestProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference">HdinsightKafkaClusterRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfile">SecurityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference">HdinsightKafkaClusterSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.sshEndpoint">SshEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList">HdinsightKafkaClusterStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2">StorageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference">HdinsightKafkaClusterStorageAccountGen2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference">HdinsightKafkaClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersionInput">ComponentVersionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolationInput">ComputeIsolationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryptionInput">DiskEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabledInput">EncryptionInTransitEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extensionInput">ExtensionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gatewayInput">GatewayInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastoresInput">MetastoresInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitorInput">MonitorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxyInput">RestProxyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.rolesInput">RolesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfileInput">SecurityProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2Input">StorageAccountGen2Input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountInput">StorageAccountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersionInput">TlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabled">EncryptionInTransitEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersion"></a>

```csharp
public HdinsightKafkaClusterComponentVersionOutputReference ComponentVersion { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference">HdinsightKafkaClusterComponentVersionOutputReference</a>

---

##### `ComputeIsolation`<sup>Required</sup> <a name="ComputeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolation"></a>

```csharp
public HdinsightKafkaClusterComputeIsolationOutputReference ComputeIsolation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference">HdinsightKafkaClusterComputeIsolationOutputReference</a>

---

##### `DiskEncryption`<sup>Required</sup> <a name="DiskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryption"></a>

```csharp
public HdinsightKafkaClusterDiskEncryptionList DiskEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList">HdinsightKafkaClusterDiskEncryptionList</a>

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extension"></a>

```csharp
public HdinsightKafkaClusterExtensionOutputReference Extension { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference">HdinsightKafkaClusterExtensionOutputReference</a>

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gateway"></a>

```csharp
public HdinsightKafkaClusterGatewayOutputReference Gateway { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference">HdinsightKafkaClusterGatewayOutputReference</a>

---

##### `HttpsEndpoint`<sup>Required</sup> <a name="HttpsEndpoint" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.httpsEndpoint"></a>

```csharp
public string HttpsEndpoint { get; }
```

- *Type:* string

---

##### `KafkaRestProxyEndpoint`<sup>Required</sup> <a name="KafkaRestProxyEndpoint" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.kafkaRestProxyEndpoint"></a>

```csharp
public string KafkaRestProxyEndpoint { get; }
```

- *Type:* string

---

##### `Metastores`<sup>Required</sup> <a name="Metastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastores"></a>

```csharp
public HdinsightKafkaClusterMetastoresOutputReference Metastores { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference">HdinsightKafkaClusterMetastoresOutputReference</a>

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitor"></a>

```csharp
public HdinsightKafkaClusterMonitorOutputReference Monitor { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference">HdinsightKafkaClusterMonitorOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.network"></a>

```csharp
public HdinsightKafkaClusterNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference">HdinsightKafkaClusterNetworkOutputReference</a>

---

##### `RestProxy`<sup>Required</sup> <a name="RestProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxy"></a>

```csharp
public HdinsightKafkaClusterRestProxyOutputReference RestProxy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference">HdinsightKafkaClusterRestProxyOutputReference</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.roles"></a>

```csharp
public HdinsightKafkaClusterRolesOutputReference Roles { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference">HdinsightKafkaClusterRolesOutputReference</a>

---

##### `SecurityProfile`<sup>Required</sup> <a name="SecurityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfile"></a>

```csharp
public HdinsightKafkaClusterSecurityProfileOutputReference SecurityProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference">HdinsightKafkaClusterSecurityProfileOutputReference</a>

---

##### `SshEndpoint`<sup>Required</sup> <a name="SshEndpoint" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.sshEndpoint"></a>

```csharp
public string SshEndpoint { get; }
```

- *Type:* string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccount"></a>

```csharp
public HdinsightKafkaClusterStorageAccountList StorageAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList">HdinsightKafkaClusterStorageAccountList</a>

---

##### `StorageAccountGen2`<sup>Required</sup> <a name="StorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2"></a>

```csharp
public HdinsightKafkaClusterStorageAccountGen2OutputReference StorageAccountGen2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference">HdinsightKafkaClusterStorageAccountGen2OutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeouts"></a>

```csharp
public HdinsightKafkaClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference">HdinsightKafkaClusterTimeoutsOutputReference</a>

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersionInput"></a>

```csharp
public string ClusterVersionInput { get; }
```

- *Type:* string

---

##### `ComponentVersionInput`<sup>Optional</sup> <a name="ComponentVersionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.componentVersionInput"></a>

```csharp
public HdinsightKafkaClusterComponentVersion ComponentVersionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

---

##### `ComputeIsolationInput`<sup>Optional</sup> <a name="ComputeIsolationInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.computeIsolationInput"></a>

```csharp
public HdinsightKafkaClusterComputeIsolation ComputeIsolationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

---

##### `DiskEncryptionInput`<sup>Optional</sup> <a name="DiskEncryptionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.diskEncryptionInput"></a>

```csharp
public object DiskEncryptionInput { get; }
```

- *Type:* object

---

##### `EncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="EncryptionInTransitEnabledInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabledInput"></a>

```csharp
public object EncryptionInTransitEnabledInput { get; }
```

- *Type:* object

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.extensionInput"></a>

```csharp
public HdinsightKafkaClusterExtension ExtensionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.gatewayInput"></a>

```csharp
public HdinsightKafkaClusterGateway GatewayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MetastoresInput`<sup>Optional</sup> <a name="MetastoresInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.metastoresInput"></a>

```csharp
public HdinsightKafkaClusterMetastores MetastoresInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

---

##### `MonitorInput`<sup>Optional</sup> <a name="MonitorInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.monitorInput"></a>

```csharp
public HdinsightKafkaClusterMonitor MonitorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.networkInput"></a>

```csharp
public HdinsightKafkaClusterNetwork NetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RestProxyInput`<sup>Optional</sup> <a name="RestProxyInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.restProxyInput"></a>

```csharp
public HdinsightKafkaClusterRestProxy RestProxyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.rolesInput"></a>

```csharp
public HdinsightKafkaClusterRoles RolesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

---

##### `SecurityProfileInput`<sup>Optional</sup> <a name="SecurityProfileInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.securityProfileInput"></a>

```csharp
public HdinsightKafkaClusterSecurityProfile SecurityProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

---

##### `StorageAccountGen2Input`<sup>Optional</sup> <a name="StorageAccountGen2Input" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountGen2Input"></a>

```csharp
public HdinsightKafkaClusterStorageAccountGen2 StorageAccountGen2Input { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.storageAccountInput"></a>

```csharp
public object StorageAccountInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TlsMinVersionInput`<sup>Optional</sup> <a name="TlsMinVersionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersionInput"></a>

```csharp
public string TlsMinVersionInput { get; }
```

- *Type:* string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; }
```

- *Type:* string

---

##### `EncryptionInTransitEnabled`<sup>Required</sup> <a name="EncryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.encryptionInTransitEnabled"></a>

```csharp
public object EncryptionInTransitEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HdinsightKafkaClusterComponentVersion <a name="HdinsightKafkaClusterComponentVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterComponentVersion {
    string Kafka
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion.property.kafka">Kafka</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#kafka HdinsightKafkaCluster#kafka}. |

---

##### `Kafka`<sup>Required</sup> <a name="Kafka" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion.property.kafka"></a>

```csharp
public string Kafka { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#kafka HdinsightKafkaCluster#kafka}.

---

### HdinsightKafkaClusterComputeIsolation <a name="HdinsightKafkaClusterComputeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterComputeIsolation {
    object ComputeIsolationEnabled = null,
    string HostSku = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.computeIsolationEnabled">ComputeIsolationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#compute_isolation_enabled HdinsightKafkaCluster#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.hostSku">HostSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#host_sku HdinsightKafkaCluster#host_sku}. |

---

##### `ComputeIsolationEnabled`<sup>Optional</sup> <a name="ComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.computeIsolationEnabled"></a>

```csharp
public object ComputeIsolationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#compute_isolation_enabled HdinsightKafkaCluster#compute_isolation_enabled}.

---

##### `HostSku`<sup>Optional</sup> <a name="HostSku" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation.property.hostSku"></a>

```csharp
public string HostSku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#host_sku HdinsightKafkaCluster#host_sku}.

---

### HdinsightKafkaClusterConfig <a name="HdinsightKafkaClusterConfig" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterVersion,
    HdinsightKafkaClusterComponentVersion ComponentVersion,
    HdinsightKafkaClusterGateway Gateway,
    string Location,
    string Name,
    string ResourceGroupName,
    HdinsightKafkaClusterRoles Roles,
    string Tier,
    HdinsightKafkaClusterComputeIsolation ComputeIsolation = null,
    object DiskEncryption = null,
    object EncryptionInTransitEnabled = null,
    HdinsightKafkaClusterExtension Extension = null,
    string Id = null,
    HdinsightKafkaClusterMetastores Metastores = null,
    HdinsightKafkaClusterMonitor Monitor = null,
    HdinsightKafkaClusterNetwork Network = null,
    HdinsightKafkaClusterRestProxy RestProxy = null,
    HdinsightKafkaClusterSecurityProfile SecurityProfile = null,
    object StorageAccount = null,
    HdinsightKafkaClusterStorageAccountGen2 StorageAccountGen2 = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    HdinsightKafkaClusterTimeouts Timeouts = null,
    string TlsMinVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#cluster_version HdinsightKafkaCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.componentVersion">ComponentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#location HdinsightKafkaCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#resource_group_name HdinsightKafkaCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tier">Tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#tier HdinsightKafkaCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.computeIsolation">ComputeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.diskEncryption">DiskEncryption</a></code> | <code>object</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.encryptionInTransitEnabled">EncryptionInTransitEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#id HdinsightKafkaCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.metastores">Metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.restProxy">RestProxy</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a></code> | rest_proxy block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.securityProfile">SecurityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccount">StorageAccount</a></code> | <code>object</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccountGen2">StorageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#tags HdinsightKafkaCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#tls_min_version HdinsightKafkaCluster#tls_min_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#cluster_version HdinsightKafkaCluster#cluster_version}.

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.componentVersion"></a>

```csharp
public HdinsightKafkaClusterComponentVersion ComponentVersion { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#component_version HdinsightKafkaCluster#component_version}

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.gateway"></a>

```csharp
public HdinsightKafkaClusterGateway Gateway { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#gateway HdinsightKafkaCluster#gateway}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#location HdinsightKafkaCluster#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#resource_group_name HdinsightKafkaCluster#resource_group_name}.

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.roles"></a>

```csharp
public HdinsightKafkaClusterRoles Roles { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#roles HdinsightKafkaCluster#roles}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#tier HdinsightKafkaCluster#tier}.

---

##### `ComputeIsolation`<sup>Optional</sup> <a name="ComputeIsolation" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.computeIsolation"></a>

```csharp
public HdinsightKafkaClusterComputeIsolation ComputeIsolation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#compute_isolation HdinsightKafkaCluster#compute_isolation}

---

##### `DiskEncryption`<sup>Optional</sup> <a name="DiskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.diskEncryption"></a>

```csharp
public object DiskEncryption { get; set; }
```

- *Type:* object

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#disk_encryption HdinsightKafkaCluster#disk_encryption}

---

##### `EncryptionInTransitEnabled`<sup>Optional</sup> <a name="EncryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.encryptionInTransitEnabled"></a>

```csharp
public object EncryptionInTransitEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}.

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.extension"></a>

```csharp
public HdinsightKafkaClusterExtension Extension { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#extension HdinsightKafkaCluster#extension}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#id HdinsightKafkaCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metastores`<sup>Optional</sup> <a name="Metastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.metastores"></a>

```csharp
public HdinsightKafkaClusterMetastores Metastores { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#metastores HdinsightKafkaCluster#metastores}

---

##### `Monitor`<sup>Optional</sup> <a name="Monitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.monitor"></a>

```csharp
public HdinsightKafkaClusterMonitor Monitor { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#monitor HdinsightKafkaCluster#monitor}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.network"></a>

```csharp
public HdinsightKafkaClusterNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#network HdinsightKafkaCluster#network}

---

##### `RestProxy`<sup>Optional</sup> <a name="RestProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.restProxy"></a>

```csharp
public HdinsightKafkaClusterRestProxy RestProxy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

rest_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#rest_proxy HdinsightKafkaCluster#rest_proxy}

---

##### `SecurityProfile`<sup>Optional</sup> <a name="SecurityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.securityProfile"></a>

```csharp
public HdinsightKafkaClusterSecurityProfile SecurityProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#security_profile HdinsightKafkaCluster#security_profile}

---

##### `StorageAccount`<sup>Optional</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccount"></a>

```csharp
public object StorageAccount { get; set; }
```

- *Type:* object

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#storage_account HdinsightKafkaCluster#storage_account}

---

##### `StorageAccountGen2`<sup>Optional</sup> <a name="StorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.storageAccountGen2"></a>

```csharp
public HdinsightKafkaClusterStorageAccountGen2 StorageAccountGen2 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#storage_account_gen2 HdinsightKafkaCluster#storage_account_gen2}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#tags HdinsightKafkaCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.timeouts"></a>

```csharp
public HdinsightKafkaClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts">HdinsightKafkaClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#timeouts HdinsightKafkaCluster#timeouts}

---

##### `TlsMinVersion`<sup>Optional</sup> <a name="TlsMinVersion" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterConfig.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#tls_min_version HdinsightKafkaCluster#tls_min_version}.

---

### HdinsightKafkaClusterDiskEncryption <a name="HdinsightKafkaClusterDiskEncryption" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterDiskEncryption {
    string EncryptionAlgorithm = null,
    object EncryptionAtHostEnabled = null,
    string KeyVaultKeyId = null,
    string KeyVaultManagedIdentityId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#encryption_algorithm HdinsightKafkaCluster#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#encryption_at_host_enabled HdinsightKafkaCluster#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#key_vault_key_id HdinsightKafkaCluster#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultManagedIdentityId">KeyVaultManagedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#key_vault_managed_identity_id HdinsightKafkaCluster#key_vault_managed_identity_id}. |

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#encryption_algorithm HdinsightKafkaCluster#encryption_algorithm}.

---

##### `EncryptionAtHostEnabled`<sup>Optional</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.encryptionAtHostEnabled"></a>

```csharp
public object EncryptionAtHostEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#encryption_at_host_enabled HdinsightKafkaCluster#encryption_at_host_enabled}.

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#key_vault_key_id HdinsightKafkaCluster#key_vault_key_id}.

---

##### `KeyVaultManagedIdentityId`<sup>Optional</sup> <a name="KeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryption.property.keyVaultManagedIdentityId"></a>

```csharp
public string KeyVaultManagedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#key_vault_managed_identity_id HdinsightKafkaCluster#key_vault_managed_identity_id}.

---

### HdinsightKafkaClusterExtension <a name="HdinsightKafkaClusterExtension" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterExtension {
    string LogAnalyticsWorkspaceId,
    string PrimaryKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}. |

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}.

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}.

---

### HdinsightKafkaClusterGateway <a name="HdinsightKafkaClusterGateway" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterGateway {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMetastores <a name="HdinsightKafkaClusterMetastores" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterMetastores {
    HdinsightKafkaClusterMetastoresAmbari Ambari = null,
    HdinsightKafkaClusterMetastoresHive Hive = null,
    HdinsightKafkaClusterMetastoresOozie Oozie = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.ambari">Ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a></code> | ambari block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.hive">Hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a></code> | hive block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.oozie">Oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a></code> | oozie block. |

---

##### `Ambari`<sup>Optional</sup> <a name="Ambari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.ambari"></a>

```csharp
public HdinsightKafkaClusterMetastoresAmbari Ambari { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#ambari HdinsightKafkaCluster#ambari}

---

##### `Hive`<sup>Optional</sup> <a name="Hive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.hive"></a>

```csharp
public HdinsightKafkaClusterMetastoresHive Hive { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#hive HdinsightKafkaCluster#hive}

---

##### `Oozie`<sup>Optional</sup> <a name="Oozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores.property.oozie"></a>

```csharp
public HdinsightKafkaClusterMetastoresOozie Oozie { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#oozie HdinsightKafkaCluster#oozie}

---

### HdinsightKafkaClusterMetastoresAmbari <a name="HdinsightKafkaClusterMetastoresAmbari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterMetastoresAmbari {
    string DatabaseName,
    string Password,
    string Server,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.server">Server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMetastoresHive <a name="HdinsightKafkaClusterMetastoresHive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterMetastoresHive {
    string DatabaseName,
    string Password,
    string Server,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.server">Server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMetastoresOozie <a name="HdinsightKafkaClusterMetastoresOozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterMetastoresOozie {
    string DatabaseName,
    string Password,
    string Server,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.server">Server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

### HdinsightKafkaClusterMonitor <a name="HdinsightKafkaClusterMonitor" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterMonitor {
    string LogAnalyticsWorkspaceId,
    string PrimaryKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}. |

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}.

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}.

---

### HdinsightKafkaClusterNetwork <a name="HdinsightKafkaClusterNetwork" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterNetwork {
    string ConnectionDirection = null,
    object PrivateLinkEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.connectionDirection">ConnectionDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#connection_direction HdinsightKafkaCluster#connection_direction}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.privateLinkEnabled">PrivateLinkEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#private_link_enabled HdinsightKafkaCluster#private_link_enabled}. |

---

##### `ConnectionDirection`<sup>Optional</sup> <a name="ConnectionDirection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.connectionDirection"></a>

```csharp
public string ConnectionDirection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#connection_direction HdinsightKafkaCluster#connection_direction}.

---

##### `PrivateLinkEnabled`<sup>Optional</sup> <a name="PrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork.property.privateLinkEnabled"></a>

```csharp
public object PrivateLinkEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#private_link_enabled HdinsightKafkaCluster#private_link_enabled}.

---

### HdinsightKafkaClusterRestProxy <a name="HdinsightKafkaClusterRestProxy" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRestProxy {
    string SecurityGroupId,
    string SecurityGroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#security_group_id HdinsightKafkaCluster#security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupName">SecurityGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#security_group_name HdinsightKafkaCluster#security_group_name}. |

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#security_group_id HdinsightKafkaCluster#security_group_id}.

---

##### `SecurityGroupName`<sup>Required</sup> <a name="SecurityGroupName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy.property.securityGroupName"></a>

```csharp
public string SecurityGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#security_group_name HdinsightKafkaCluster#security_group_name}.

---

### HdinsightKafkaClusterRoles <a name="HdinsightKafkaClusterRoles" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRoles {
    HdinsightKafkaClusterRolesHeadNode HeadNode,
    HdinsightKafkaClusterRolesWorkerNode WorkerNode,
    HdinsightKafkaClusterRolesZookeeperNode ZookeeperNode,
    HdinsightKafkaClusterRolesKafkaManagementNode KafkaManagementNode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.headNode">HeadNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a></code> | head_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.workerNode">WorkerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a></code> | worker_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.zookeeperNode">ZookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a></code> | zookeeper_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.kafkaManagementNode">KafkaManagementNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a></code> | kafka_management_node block. |

---

##### `HeadNode`<sup>Required</sup> <a name="HeadNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.headNode"></a>

```csharp
public HdinsightKafkaClusterRolesHeadNode HeadNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#head_node HdinsightKafkaCluster#head_node}

---

##### `WorkerNode`<sup>Required</sup> <a name="WorkerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.workerNode"></a>

```csharp
public HdinsightKafkaClusterRolesWorkerNode WorkerNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#worker_node HdinsightKafkaCluster#worker_node}

---

##### `ZookeeperNode`<sup>Required</sup> <a name="ZookeeperNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.zookeeperNode"></a>

```csharp
public HdinsightKafkaClusterRolesZookeeperNode ZookeeperNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#zookeeper_node HdinsightKafkaCluster#zookeeper_node}

---

##### `KafkaManagementNode`<sup>Optional</sup> <a name="KafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles.property.kafkaManagementNode"></a>

```csharp
public HdinsightKafkaClusterRolesKafkaManagementNode KafkaManagementNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

kafka_management_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#kafka_management_node HdinsightKafkaCluster#kafka_management_node}

---

### HdinsightKafkaClusterRolesHeadNode <a name="HdinsightKafkaClusterRolesHeadNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesHeadNode {
    string Username,
    string VmSize,
    string Password = null,
    object ScriptActions = null,
    string[] SshKeys = null,
    string SubnetId = null,
    string VirtualNetworkId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.scriptActions">ScriptActions</a></code> | <code>object</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `ScriptActions`<sup>Optional</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.scriptActions"></a>

```csharp
public object ScriptActions { get; set; }
```

- *Type:* object

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesHeadNodeScriptActions <a name="HdinsightKafkaClusterRolesHeadNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesHeadNodeScriptActions {
    string Name,
    string Uri,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActions.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterRolesKafkaManagementNode <a name="HdinsightKafkaClusterRolesKafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesKafkaManagementNode {
    string Username,
    string VmSize,
    string Password = null,
    object ScriptActions = null,
    string[] SshKeys = null,
    string SubnetId = null,
    string VirtualNetworkId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.scriptActions">ScriptActions</a></code> | <code>object</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `ScriptActions`<sup>Optional</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.scriptActions"></a>

```csharp
public object ScriptActions { get; set; }
```

- *Type:* object

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions <a name="HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions {
    string Name,
    string Uri,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterRolesWorkerNode <a name="HdinsightKafkaClusterRolesWorkerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesWorkerNode {
    double NumberOfDisksPerNode,
    double TargetInstanceCount,
    string Username,
    string VmSize,
    string Password = null,
    object ScriptActions = null,
    string[] SshKeys = null,
    string SubnetId = null,
    string VirtualNetworkId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.numberOfDisksPerNode">NumberOfDisksPerNode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#number_of_disks_per_node HdinsightKafkaCluster#number_of_disks_per_node}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#target_instance_count HdinsightKafkaCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.scriptActions">ScriptActions</a></code> | <code>object</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `NumberOfDisksPerNode`<sup>Required</sup> <a name="NumberOfDisksPerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.numberOfDisksPerNode"></a>

```csharp
public double NumberOfDisksPerNode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#number_of_disks_per_node HdinsightKafkaCluster#number_of_disks_per_node}.

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.targetInstanceCount"></a>

```csharp
public double TargetInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#target_instance_count HdinsightKafkaCluster#target_instance_count}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `ScriptActions`<sup>Optional</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.scriptActions"></a>

```csharp
public object ScriptActions { get; set; }
```

- *Type:* object

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesWorkerNodeScriptActions <a name="HdinsightKafkaClusterRolesWorkerNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesWorkerNodeScriptActions {
    string Name,
    string Uri,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActions.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterRolesZookeeperNode <a name="HdinsightKafkaClusterRolesZookeeperNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesZookeeperNode {
    string Username,
    string VmSize,
    string Password = null,
    object ScriptActions = null,
    string[] SshKeys = null,
    string SubnetId = null,
    string VirtualNetworkId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.scriptActions">ScriptActions</a></code> | <code>object</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}.

---

##### `ScriptActions`<sup>Optional</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.scriptActions"></a>

```csharp
public object ScriptActions { get; set; }
```

- *Type:* object

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}.

---

### HdinsightKafkaClusterRolesZookeeperNodeScriptActions <a name="HdinsightKafkaClusterRolesZookeeperNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesZookeeperNodeScriptActions {
    string Name,
    string Uri,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActions.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}.

---

### HdinsightKafkaClusterSecurityProfile <a name="HdinsightKafkaClusterSecurityProfile" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterSecurityProfile {
    string AaddsResourceId,
    string DomainName,
    string DomainUsername,
    string DomainUserPassword,
    string[] LdapsUrls,
    string MsiResourceId,
    string[] ClusterUsersGroupDns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.aaddsResourceId">AaddsResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#aadds_resource_id HdinsightKafkaCluster#aadds_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#domain_name HdinsightKafkaCluster#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUsername">DomainUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#domain_username HdinsightKafkaCluster#domain_username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUserPassword">DomainUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#domain_user_password HdinsightKafkaCluster#domain_user_password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.ldapsUrls">LdapsUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#ldaps_urls HdinsightKafkaCluster#ldaps_urls}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.msiResourceId">MsiResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#msi_resource_id HdinsightKafkaCluster#msi_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.clusterUsersGroupDns">ClusterUsersGroupDns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#cluster_users_group_dns HdinsightKafkaCluster#cluster_users_group_dns}. |

---

##### `AaddsResourceId`<sup>Required</sup> <a name="AaddsResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.aaddsResourceId"></a>

```csharp
public string AaddsResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#aadds_resource_id HdinsightKafkaCluster#aadds_resource_id}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#domain_name HdinsightKafkaCluster#domain_name}.

---

##### `DomainUsername`<sup>Required</sup> <a name="DomainUsername" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUsername"></a>

```csharp
public string DomainUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#domain_username HdinsightKafkaCluster#domain_username}.

---

##### `DomainUserPassword`<sup>Required</sup> <a name="DomainUserPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.domainUserPassword"></a>

```csharp
public string DomainUserPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#domain_user_password HdinsightKafkaCluster#domain_user_password}.

---

##### `LdapsUrls`<sup>Required</sup> <a name="LdapsUrls" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.ldapsUrls"></a>

```csharp
public string[] LdapsUrls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#ldaps_urls HdinsightKafkaCluster#ldaps_urls}.

---

##### `MsiResourceId`<sup>Required</sup> <a name="MsiResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.msiResourceId"></a>

```csharp
public string MsiResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#msi_resource_id HdinsightKafkaCluster#msi_resource_id}.

---

##### `ClusterUsersGroupDns`<sup>Optional</sup> <a name="ClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile.property.clusterUsersGroupDns"></a>

```csharp
public string[] ClusterUsersGroupDns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#cluster_users_group_dns HdinsightKafkaCluster#cluster_users_group_dns}.

---

### HdinsightKafkaClusterStorageAccount <a name="HdinsightKafkaClusterStorageAccount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterStorageAccount {
    object IsDefault,
    string StorageAccountKey,
    string StorageContainerId,
    string StorageResourceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.isDefault">IsDefault</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#storage_account_key HdinsightKafkaCluster#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageContainerId">StorageContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#storage_container_id HdinsightKafkaCluster#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageResourceId">StorageResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}. |

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.isDefault"></a>

```csharp
public object IsDefault { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}.

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#storage_account_key HdinsightKafkaCluster#storage_account_key}.

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageContainerId"></a>

```csharp
public string StorageContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#storage_container_id HdinsightKafkaCluster#storage_container_id}.

---

##### `StorageResourceId`<sup>Optional</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccount.property.storageResourceId"></a>

```csharp
public string StorageResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}.

---

### HdinsightKafkaClusterStorageAccountGen2 <a name="HdinsightKafkaClusterStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterStorageAccountGen2 {
    string FilesystemId,
    object IsDefault,
    string ManagedIdentityResourceId,
    string StorageResourceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.filesystemId">FilesystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#filesystem_id HdinsightKafkaCluster#filesystem_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.isDefault">IsDefault</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.managedIdentityResourceId">ManagedIdentityResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#managed_identity_resource_id HdinsightKafkaCluster#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.storageResourceId">StorageResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}. |

---

##### `FilesystemId`<sup>Required</sup> <a name="FilesystemId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.filesystemId"></a>

```csharp
public string FilesystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#filesystem_id HdinsightKafkaCluster#filesystem_id}.

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.isDefault"></a>

```csharp
public object IsDefault { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}.

---

##### `ManagedIdentityResourceId`<sup>Required</sup> <a name="ManagedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.managedIdentityResourceId"></a>

```csharp
public string ManagedIdentityResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#managed_identity_resource_id HdinsightKafkaCluster#managed_identity_resource_id}.

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2.property.storageResourceId"></a>

```csharp
public string StorageResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}.

---

### HdinsightKafkaClusterTimeouts <a name="HdinsightKafkaClusterTimeouts" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#create HdinsightKafkaCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#delete HdinsightKafkaCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#read HdinsightKafkaCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#update HdinsightKafkaCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#create HdinsightKafkaCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#delete HdinsightKafkaCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#read HdinsightKafkaCluster#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/hdinsight_kafka_cluster#update HdinsightKafkaCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HdinsightKafkaClusterComponentVersionOutputReference <a name="HdinsightKafkaClusterComponentVersionOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterComponentVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafkaInput">KafkaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafka">Kafka</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KafkaInput`<sup>Optional</sup> <a name="KafkaInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafkaInput"></a>

```csharp
public string KafkaInput { get; }
```

- *Type:* string

---

##### `Kafka`<sup>Required</sup> <a name="Kafka" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.kafka"></a>

```csharp
public string Kafka { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersionOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterComponentVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComponentVersion">HdinsightKafkaClusterComponentVersion</a>

---


### HdinsightKafkaClusterComputeIsolationOutputReference <a name="HdinsightKafkaClusterComputeIsolationOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterComputeIsolationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetComputeIsolationEnabled">ResetComputeIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetHostSku">ResetHostSku</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeIsolationEnabled` <a name="ResetComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetComputeIsolationEnabled"></a>

```csharp
private void ResetComputeIsolationEnabled()
```

##### `ResetHostSku` <a name="ResetHostSku" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.resetHostSku"></a>

```csharp
private void ResetHostSku()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput">ComputeIsolationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSkuInput">HostSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabled">ComputeIsolationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSku">HostSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeIsolationEnabledInput`<sup>Optional</sup> <a name="ComputeIsolationEnabledInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput"></a>

```csharp
public object ComputeIsolationEnabledInput { get; }
```

- *Type:* object

---

##### `HostSkuInput`<sup>Optional</sup> <a name="HostSkuInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSkuInput"></a>

```csharp
public string HostSkuInput { get; }
```

- *Type:* string

---

##### `ComputeIsolationEnabled`<sup>Required</sup> <a name="ComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.computeIsolationEnabled"></a>

```csharp
public object ComputeIsolationEnabled { get; }
```

- *Type:* object

---

##### `HostSku`<sup>Required</sup> <a name="HostSku" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.hostSku"></a>

```csharp
public string HostSku { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolationOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterComputeIsolation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterComputeIsolation">HdinsightKafkaClusterComputeIsolation</a>

---


### HdinsightKafkaClusterDiskEncryptionList <a name="HdinsightKafkaClusterDiskEncryptionList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterDiskEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.get"></a>

```csharp
private HdinsightKafkaClusterDiskEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightKafkaClusterDiskEncryptionOutputReference <a name="HdinsightKafkaClusterDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterDiskEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled">ResetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId">ResetKeyVaultManagedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```csharp
private void ResetEncryptionAlgorithm()
```

##### `ResetEncryptionAtHostEnabled` <a name="ResetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled"></a>

```csharp
private void ResetEncryptionAtHostEnabled()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultKeyId"></a>

```csharp
private void ResetKeyVaultKeyId()
```

##### `ResetKeyVaultManagedIdentityId` <a name="ResetKeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId"></a>

```csharp
private void ResetKeyVaultManagedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput">EncryptionAtHostEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput">KeyVaultManagedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId">KeyVaultManagedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```csharp
public string EncryptionAlgorithmInput { get; }
```

- *Type:* string

---

##### `EncryptionAtHostEnabledInput`<sup>Optional</sup> <a name="EncryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput"></a>

```csharp
public object EncryptionAtHostEnabledInput { get; }
```

- *Type:* object

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultManagedIdentityIdInput`<sup>Optional</sup> <a name="KeyVaultManagedIdentityIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput"></a>

```csharp
public string KeyVaultManagedIdentityIdInput { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `EncryptionAtHostEnabled`<sup>Required</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled"></a>

```csharp
public object EncryptionAtHostEnabled { get; }
```

- *Type:* object

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `KeyVaultManagedIdentityId`<sup>Required</sup> <a name="KeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId"></a>

```csharp
public string KeyVaultManagedIdentityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterDiskEncryptionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightKafkaClusterExtensionOutputReference <a name="HdinsightKafkaClusterExtensionOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterExtensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKeyInput"></a>

```csharp
public string PrimaryKeyInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtensionOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterExtension InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterExtension">HdinsightKafkaClusterExtension</a>

---


### HdinsightKafkaClusterGatewayOutputReference <a name="HdinsightKafkaClusterGatewayOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGatewayOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterGateway">HdinsightKafkaClusterGateway</a>

---


### HdinsightKafkaClusterMetastoresAmbariOutputReference <a name="HdinsightKafkaClusterMetastoresAmbariOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterMetastoresAmbariOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterMetastoresAmbari InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

---


### HdinsightKafkaClusterMetastoresHiveOutputReference <a name="HdinsightKafkaClusterMetastoresHiveOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterMetastoresHiveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterMetastoresHive InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

---


### HdinsightKafkaClusterMetastoresOozieOutputReference <a name="HdinsightKafkaClusterMetastoresOozieOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterMetastoresOozieOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterMetastoresOozie InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

---


### HdinsightKafkaClusterMetastoresOutputReference <a name="HdinsightKafkaClusterMetastoresOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterMetastoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari">PutAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive">PutHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie">PutOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetAmbari">ResetAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetHive">ResetHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetOozie">ResetOozie</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmbari` <a name="PutAmbari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari"></a>

```csharp
private void PutAmbari(HdinsightKafkaClusterMetastoresAmbari Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putAmbari.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

---

##### `PutHive` <a name="PutHive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive"></a>

```csharp
private void PutHive(HdinsightKafkaClusterMetastoresHive Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putHive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

---

##### `PutOozie` <a name="PutOozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie"></a>

```csharp
private void PutOozie(HdinsightKafkaClusterMetastoresOozie Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.putOozie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

---

##### `ResetAmbari` <a name="ResetAmbari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetAmbari"></a>

```csharp
private void ResetAmbari()
```

##### `ResetHive` <a name="ResetHive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetHive"></a>

```csharp
private void ResetHive()
```

##### `ResetOozie` <a name="ResetOozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.resetOozie"></a>

```csharp
private void ResetOozie()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambari">Ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference">HdinsightKafkaClusterMetastoresAmbariOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hive">Hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference">HdinsightKafkaClusterMetastoresHiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozie">Oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference">HdinsightKafkaClusterMetastoresOozieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambariInput">AmbariInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hiveInput">HiveInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozieInput">OozieInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ambari`<sup>Required</sup> <a name="Ambari" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambari"></a>

```csharp
public HdinsightKafkaClusterMetastoresAmbariOutputReference Ambari { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbariOutputReference">HdinsightKafkaClusterMetastoresAmbariOutputReference</a>

---

##### `Hive`<sup>Required</sup> <a name="Hive" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hive"></a>

```csharp
public HdinsightKafkaClusterMetastoresHiveOutputReference Hive { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHiveOutputReference">HdinsightKafkaClusterMetastoresHiveOutputReference</a>

---

##### `Oozie`<sup>Required</sup> <a name="Oozie" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozie"></a>

```csharp
public HdinsightKafkaClusterMetastoresOozieOutputReference Oozie { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozieOutputReference">HdinsightKafkaClusterMetastoresOozieOutputReference</a>

---

##### `AmbariInput`<sup>Optional</sup> <a name="AmbariInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.ambariInput"></a>

```csharp
public HdinsightKafkaClusterMetastoresAmbari AmbariInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresAmbari">HdinsightKafkaClusterMetastoresAmbari</a>

---

##### `HiveInput`<sup>Optional</sup> <a name="HiveInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.hiveInput"></a>

```csharp
public HdinsightKafkaClusterMetastoresHive HiveInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresHive">HdinsightKafkaClusterMetastoresHive</a>

---

##### `OozieInput`<sup>Optional</sup> <a name="OozieInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.oozieInput"></a>

```csharp
public HdinsightKafkaClusterMetastoresOozie OozieInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOozie">HdinsightKafkaClusterMetastoresOozie</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastoresOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterMetastores InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMetastores">HdinsightKafkaClusterMetastores</a>

---


### HdinsightKafkaClusterMonitorOutputReference <a name="HdinsightKafkaClusterMonitorOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterMonitorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKeyInput"></a>

```csharp
public string PrimaryKeyInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitorOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterMonitor InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterMonitor">HdinsightKafkaClusterMonitor</a>

---


### HdinsightKafkaClusterNetworkOutputReference <a name="HdinsightKafkaClusterNetworkOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetConnectionDirection">ResetConnectionDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetPrivateLinkEnabled">ResetPrivateLinkEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionDirection` <a name="ResetConnectionDirection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetConnectionDirection"></a>

```csharp
private void ResetConnectionDirection()
```

##### `ResetPrivateLinkEnabled` <a name="ResetPrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.resetPrivateLinkEnabled"></a>

```csharp
private void ResetPrivateLinkEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirectionInput">ConnectionDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabledInput">PrivateLinkEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirection">ConnectionDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabled">PrivateLinkEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionDirectionInput`<sup>Optional</sup> <a name="ConnectionDirectionInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirectionInput"></a>

```csharp
public string ConnectionDirectionInput { get; }
```

- *Type:* string

---

##### `PrivateLinkEnabledInput`<sup>Optional</sup> <a name="PrivateLinkEnabledInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabledInput"></a>

```csharp
public object PrivateLinkEnabledInput { get; }
```

- *Type:* object

---

##### `ConnectionDirection`<sup>Required</sup> <a name="ConnectionDirection" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.connectionDirection"></a>

```csharp
public string ConnectionDirection { get; }
```

- *Type:* string

---

##### `PrivateLinkEnabled`<sup>Required</sup> <a name="PrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.privateLinkEnabled"></a>

```csharp
public object PrivateLinkEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetworkOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterNetwork">HdinsightKafkaClusterNetwork</a>

---


### HdinsightKafkaClusterRestProxyOutputReference <a name="HdinsightKafkaClusterRestProxyOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRestProxyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupNameInput">SecurityGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupName">SecurityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupNameInput`<sup>Optional</sup> <a name="SecurityGroupNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupNameInput"></a>

```csharp
public string SecurityGroupNameInput { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `SecurityGroupName`<sup>Required</sup> <a name="SecurityGroupName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.securityGroupName"></a>

```csharp
public string SecurityGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxyOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterRestProxy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRestProxy">HdinsightKafkaClusterRestProxy</a>

---


### HdinsightKafkaClusterRolesHeadNodeOutputReference <a name="HdinsightKafkaClusterRolesHeadNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesHeadNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.putScriptActions">PutScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetScriptActions">ResetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptActions` <a name="PutScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.putScriptActions"></a>

```csharp
private void PutScriptActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* object

---

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetScriptActions` <a name="ResetScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetScriptActions"></a>

```csharp
private void ResetScriptActions()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSshKeys"></a>

```csharp
private void ResetSshKeys()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActions">ScriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList">HdinsightKafkaClusterRolesHeadNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActionsInput">ScriptActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptActions`<sup>Required</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActions"></a>

```csharp
public HdinsightKafkaClusterRolesHeadNodeScriptActionsList ScriptActions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList">HdinsightKafkaClusterRolesHeadNodeScriptActionsList</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ScriptActionsInput`<sup>Optional</sup> <a name="ScriptActionsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.scriptActionsInput"></a>

```csharp
public object ScriptActionsInput { get; }
```

- *Type:* object

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeysInput"></a>

```csharp
public string[] SshKeysInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterRolesHeadNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

---


### HdinsightKafkaClusterRolesHeadNodeScriptActionsList <a name="HdinsightKafkaClusterRolesHeadNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesHeadNodeScriptActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.get"></a>

```csharp
private HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference <a name="HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.putScriptActions">PutScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetScriptActions">ResetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptActions` <a name="PutScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.putScriptActions"></a>

```csharp
private void PutScriptActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* object

---

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetScriptActions` <a name="ResetScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetScriptActions"></a>

```csharp
private void ResetScriptActions()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSshKeys"></a>

```csharp
private void ResetSshKeys()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActions">ScriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActionsInput">ScriptActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptActions`<sup>Required</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActions"></a>

```csharp
public HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList ScriptActions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList">HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ScriptActionsInput`<sup>Optional</sup> <a name="ScriptActionsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.scriptActionsInput"></a>

```csharp
public object ScriptActionsInput { get; }
```

- *Type:* object

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeysInput"></a>

```csharp
public string[] SshKeysInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterRolesKafkaManagementNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

---


### HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList <a name="HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.get"></a>

```csharp
private HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightKafkaClusterRolesOutputReference <a name="HdinsightKafkaClusterRolesOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode">PutHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode">PutKafkaManagementNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode">PutWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode">PutZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resetKafkaManagementNode">ResetKafkaManagementNode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeadNode` <a name="PutHeadNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode"></a>

```csharp
private void PutHeadNode(HdinsightKafkaClusterRolesHeadNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putHeadNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

---

##### `PutKafkaManagementNode` <a name="PutKafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode"></a>

```csharp
private void PutKafkaManagementNode(HdinsightKafkaClusterRolesKafkaManagementNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putKafkaManagementNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

---

##### `PutWorkerNode` <a name="PutWorkerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode"></a>

```csharp
private void PutWorkerNode(HdinsightKafkaClusterRolesWorkerNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putWorkerNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

---

##### `PutZookeeperNode` <a name="PutZookeeperNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode"></a>

```csharp
private void PutZookeeperNode(HdinsightKafkaClusterRolesZookeeperNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.putZookeeperNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

---

##### `ResetKafkaManagementNode` <a name="ResetKafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.resetKafkaManagementNode"></a>

```csharp
private void ResetKafkaManagementNode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNode">HeadNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference">HdinsightKafkaClusterRolesHeadNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNode">KafkaManagementNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference">HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNode">WorkerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference">HdinsightKafkaClusterRolesWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNode">ZookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference">HdinsightKafkaClusterRolesZookeeperNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNodeInput">HeadNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNodeInput">KafkaManagementNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNodeInput">WorkerNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNodeInput">ZookeeperNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeadNode`<sup>Required</sup> <a name="HeadNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNode"></a>

```csharp
public HdinsightKafkaClusterRolesHeadNodeOutputReference HeadNode { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNodeOutputReference">HdinsightKafkaClusterRolesHeadNodeOutputReference</a>

---

##### `KafkaManagementNode`<sup>Required</sup> <a name="KafkaManagementNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNode"></a>

```csharp
public HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference KafkaManagementNode { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference">HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference</a>

---

##### `WorkerNode`<sup>Required</sup> <a name="WorkerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNode"></a>

```csharp
public HdinsightKafkaClusterRolesWorkerNodeOutputReference WorkerNode { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference">HdinsightKafkaClusterRolesWorkerNodeOutputReference</a>

---

##### `ZookeeperNode`<sup>Required</sup> <a name="ZookeeperNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNode"></a>

```csharp
public HdinsightKafkaClusterRolesZookeeperNodeOutputReference ZookeeperNode { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference">HdinsightKafkaClusterRolesZookeeperNodeOutputReference</a>

---

##### `HeadNodeInput`<sup>Optional</sup> <a name="HeadNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.headNodeInput"></a>

```csharp
public HdinsightKafkaClusterRolesHeadNode HeadNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesHeadNode">HdinsightKafkaClusterRolesHeadNode</a>

---

##### `KafkaManagementNodeInput`<sup>Optional</sup> <a name="KafkaManagementNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.kafkaManagementNodeInput"></a>

```csharp
public HdinsightKafkaClusterRolesKafkaManagementNode KafkaManagementNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesKafkaManagementNode">HdinsightKafkaClusterRolesKafkaManagementNode</a>

---

##### `WorkerNodeInput`<sup>Optional</sup> <a name="WorkerNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.workerNodeInput"></a>

```csharp
public HdinsightKafkaClusterRolesWorkerNode WorkerNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

---

##### `ZookeeperNodeInput`<sup>Optional</sup> <a name="ZookeeperNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.zookeeperNodeInput"></a>

```csharp
public HdinsightKafkaClusterRolesZookeeperNode ZookeeperNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterRoles InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRoles">HdinsightKafkaClusterRoles</a>

---


### HdinsightKafkaClusterRolesWorkerNodeOutputReference <a name="HdinsightKafkaClusterRolesWorkerNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesWorkerNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.putScriptActions">PutScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetScriptActions">ResetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptActions` <a name="PutScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.putScriptActions"></a>

```csharp
private void PutScriptActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* object

---

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetScriptActions` <a name="ResetScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetScriptActions"></a>

```csharp
private void ResetScriptActions()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSshKeys"></a>

```csharp
private void ResetSshKeys()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActions">ScriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList">HdinsightKafkaClusterRolesWorkerNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNodeInput">NumberOfDisksPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActionsInput">ScriptActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput">TargetInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNode">NumberOfDisksPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptActions`<sup>Required</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActions"></a>

```csharp
public HdinsightKafkaClusterRolesWorkerNodeScriptActionsList ScriptActions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList">HdinsightKafkaClusterRolesWorkerNodeScriptActionsList</a>

---

##### `NumberOfDisksPerNodeInput`<sup>Optional</sup> <a name="NumberOfDisksPerNodeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNodeInput"></a>

```csharp
public double NumberOfDisksPerNodeInput { get; }
```

- *Type:* double

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ScriptActionsInput`<sup>Optional</sup> <a name="ScriptActionsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.scriptActionsInput"></a>

```csharp
public object ScriptActionsInput { get; }
```

- *Type:* object

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeysInput"></a>

```csharp
public string[] SshKeysInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TargetInstanceCountInput`<sup>Optional</sup> <a name="TargetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput"></a>

```csharp
public double TargetInstanceCountInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `NumberOfDisksPerNode`<sup>Required</sup> <a name="NumberOfDisksPerNode" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.numberOfDisksPerNode"></a>

```csharp
public double NumberOfDisksPerNode { get; }
```

- *Type:* double

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.targetInstanceCount"></a>

```csharp
public double TargetInstanceCount { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterRolesWorkerNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNode">HdinsightKafkaClusterRolesWorkerNode</a>

---


### HdinsightKafkaClusterRolesWorkerNodeScriptActionsList <a name="HdinsightKafkaClusterRolesWorkerNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesWorkerNodeScriptActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.get"></a>

```csharp
private HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightKafkaClusterRolesZookeeperNodeOutputReference <a name="HdinsightKafkaClusterRolesZookeeperNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesZookeeperNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.putScriptActions">PutScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetScriptActions">ResetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptActions` <a name="PutScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.putScriptActions"></a>

```csharp
private void PutScriptActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* object

---

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetScriptActions` <a name="ResetScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetScriptActions"></a>

```csharp
private void ResetScriptActions()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSshKeys"></a>

```csharp
private void ResetSshKeys()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActions">ScriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList">HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput">ScriptActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptActions`<sup>Required</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActions"></a>

```csharp
public HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList ScriptActions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList">HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ScriptActionsInput`<sup>Optional</sup> <a name="ScriptActionsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput"></a>

```csharp
public object ScriptActionsInput { get; }
```

- *Type:* object

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeysInput"></a>

```csharp
public string[] SshKeysInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterRolesZookeeperNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNode">HdinsightKafkaClusterRolesZookeeperNode</a>

---


### HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList <a name="HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.get"></a>

```csharp
private HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference <a name="HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightKafkaClusterSecurityProfileOutputReference <a name="HdinsightKafkaClusterSecurityProfileOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterSecurityProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resetClusterUsersGroupDns">ResetClusterUsersGroupDns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterUsersGroupDns` <a name="ResetClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.resetClusterUsersGroupDns"></a>

```csharp
private void ResetClusterUsersGroupDns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceIdInput">AaddsResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput">ClusterUsersGroupDnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsernameInput">DomainUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPasswordInput">DomainUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrlsInput">LdapsUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceIdInput">MsiResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceId">AaddsResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDns">ClusterUsersGroupDns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsername">DomainUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPassword">DomainUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrls">LdapsUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceId">MsiResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AaddsResourceIdInput`<sup>Optional</sup> <a name="AaddsResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceIdInput"></a>

```csharp
public string AaddsResourceIdInput { get; }
```

- *Type:* string

---

##### `ClusterUsersGroupDnsInput`<sup>Optional</sup> <a name="ClusterUsersGroupDnsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput"></a>

```csharp
public string[] ClusterUsersGroupDnsInput { get; }
```

- *Type:* string[]

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `DomainUsernameInput`<sup>Optional</sup> <a name="DomainUsernameInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsernameInput"></a>

```csharp
public string DomainUsernameInput { get; }
```

- *Type:* string

---

##### `DomainUserPasswordInput`<sup>Optional</sup> <a name="DomainUserPasswordInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPasswordInput"></a>

```csharp
public string DomainUserPasswordInput { get; }
```

- *Type:* string

---

##### `LdapsUrlsInput`<sup>Optional</sup> <a name="LdapsUrlsInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrlsInput"></a>

```csharp
public string[] LdapsUrlsInput { get; }
```

- *Type:* string[]

---

##### `MsiResourceIdInput`<sup>Optional</sup> <a name="MsiResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceIdInput"></a>

```csharp
public string MsiResourceIdInput { get; }
```

- *Type:* string

---

##### `AaddsResourceId`<sup>Required</sup> <a name="AaddsResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.aaddsResourceId"></a>

```csharp
public string AaddsResourceId { get; }
```

- *Type:* string

---

##### `ClusterUsersGroupDns`<sup>Required</sup> <a name="ClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.clusterUsersGroupDns"></a>

```csharp
public string[] ClusterUsersGroupDns { get; }
```

- *Type:* string[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `DomainUsername`<sup>Required</sup> <a name="DomainUsername" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUsername"></a>

```csharp
public string DomainUsername { get; }
```

- *Type:* string

---

##### `DomainUserPassword`<sup>Required</sup> <a name="DomainUserPassword" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.domainUserPassword"></a>

```csharp
public string DomainUserPassword { get; }
```

- *Type:* string

---

##### `LdapsUrls`<sup>Required</sup> <a name="LdapsUrls" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.ldapsUrls"></a>

```csharp
public string[] LdapsUrls { get; }
```

- *Type:* string[]

---

##### `MsiResourceId`<sup>Required</sup> <a name="MsiResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.msiResourceId"></a>

```csharp
public string MsiResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfileOutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterSecurityProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterSecurityProfile">HdinsightKafkaClusterSecurityProfile</a>

---


### HdinsightKafkaClusterStorageAccountGen2OutputReference <a name="HdinsightKafkaClusterStorageAccountGen2OutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterStorageAccountGen2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemIdInput">FilesystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefaultInput">IsDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput">ManagedIdentityResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceIdInput">StorageResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemId">FilesystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefault">IsDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId">ManagedIdentityResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceId">StorageResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilesystemIdInput`<sup>Optional</sup> <a name="FilesystemIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemIdInput"></a>

```csharp
public string FilesystemIdInput { get; }
```

- *Type:* string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefaultInput"></a>

```csharp
public object IsDefaultInput { get; }
```

- *Type:* object

---

##### `ManagedIdentityResourceIdInput`<sup>Optional</sup> <a name="ManagedIdentityResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput"></a>

```csharp
public string ManagedIdentityResourceIdInput { get; }
```

- *Type:* string

---

##### `StorageResourceIdInput`<sup>Optional</sup> <a name="StorageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceIdInput"></a>

```csharp
public string StorageResourceIdInput { get; }
```

- *Type:* string

---

##### `FilesystemId`<sup>Required</sup> <a name="FilesystemId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.filesystemId"></a>

```csharp
public string FilesystemId { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.isDefault"></a>

```csharp
public object IsDefault { get; }
```

- *Type:* object

---

##### `ManagedIdentityResourceId`<sup>Required</sup> <a name="ManagedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId"></a>

```csharp
public string ManagedIdentityResourceId { get; }
```

- *Type:* string

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.storageResourceId"></a>

```csharp
public string StorageResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2OutputReference.property.internalValue"></a>

```csharp
public HdinsightKafkaClusterStorageAccountGen2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountGen2">HdinsightKafkaClusterStorageAccountGen2</a>

---


### HdinsightKafkaClusterStorageAccountList <a name="HdinsightKafkaClusterStorageAccountList" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterStorageAccountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.get"></a>

```csharp
private HdinsightKafkaClusterStorageAccountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightKafkaClusterStorageAccountOutputReference <a name="HdinsightKafkaClusterStorageAccountOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterStorageAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resetStorageResourceId">ResetStorageResourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageResourceId` <a name="ResetStorageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.resetStorageResourceId"></a>

```csharp
private void ResetStorageResourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefaultInput">IsDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKeyInput">StorageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerIdInput">StorageContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceIdInput">StorageResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefault">IsDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerId">StorageContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceId">StorageResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefaultInput"></a>

```csharp
public object IsDefaultInput { get; }
```

- *Type:* object

---

##### `StorageAccountKeyInput`<sup>Optional</sup> <a name="StorageAccountKeyInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKeyInput"></a>

```csharp
public string StorageAccountKeyInput { get; }
```

- *Type:* string

---

##### `StorageContainerIdInput`<sup>Optional</sup> <a name="StorageContainerIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerIdInput"></a>

```csharp
public string StorageContainerIdInput { get; }
```

- *Type:* string

---

##### `StorageResourceIdInput`<sup>Optional</sup> <a name="StorageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceIdInput"></a>

```csharp
public string StorageResourceIdInput { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.isDefault"></a>

```csharp
public object IsDefault { get; }
```

- *Type:* object

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; }
```

- *Type:* string

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageContainerId"></a>

```csharp
public string StorageContainerId { get; }
```

- *Type:* string

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.storageResourceId"></a>

```csharp
public string StorageResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterStorageAccountOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightKafkaClusterTimeoutsOutputReference <a name="HdinsightKafkaClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightKafkaClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightKafkaCluster.HdinsightKafkaClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



