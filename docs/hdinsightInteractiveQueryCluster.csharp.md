# `hdinsightInteractiveQueryCluster` Submodule <a name="`hdinsightInteractiveQueryCluster` Submodule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HdinsightInteractiveQueryCluster <a name="HdinsightInteractiveQueryCluster" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster azurerm_hdinsight_interactive_query_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryCluster(Construct Scope, string Id, HdinsightInteractiveQueryClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig">HdinsightInteractiveQueryClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig">HdinsightInteractiveQueryClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComponentVersion">PutComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComputeIsolation">PutComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putDiskEncryption">PutDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putExtension">PutExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putGateway">PutGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMetastores">PutMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMonitor">PutMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putPrivateLinkConfiguration">PutPrivateLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putSecurityProfile">PutSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccount">PutStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccountGen2">PutStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetComputeIsolation">ResetComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetDiskEncryption">ResetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetEncryptionInTransitEnabled">ResetEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetMetastores">ResetMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetMonitor">ResetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetPrivateLinkConfiguration">ResetPrivateLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetSecurityProfile">ResetSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetStorageAccount">ResetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetStorageAccountGen2">ResetStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTlsMinVersion">ResetTlsMinVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComponentVersion` <a name="PutComponentVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComponentVersion"></a>

```csharp
private void PutComponentVersion(HdinsightInteractiveQueryClusterComponentVersion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComponentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a>

---

##### `PutComputeIsolation` <a name="PutComputeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComputeIsolation"></a>

```csharp
private void PutComputeIsolation(HdinsightInteractiveQueryClusterComputeIsolation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putComputeIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a>

---

##### `PutDiskEncryption` <a name="PutDiskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putDiskEncryption"></a>

```csharp
private void PutDiskEncryption(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putDiskEncryption.parameter.value"></a>

- *Type:* object

---

##### `PutExtension` <a name="PutExtension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putExtension"></a>

```csharp
private void PutExtension(HdinsightInteractiveQueryClusterExtension Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putExtension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a>

---

##### `PutGateway` <a name="PutGateway" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putGateway"></a>

```csharp
private void PutGateway(HdinsightInteractiveQueryClusterGateway Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a>

---

##### `PutMetastores` <a name="PutMetastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMetastores"></a>

```csharp
private void PutMetastores(HdinsightInteractiveQueryClusterMetastores Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMetastores.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a>

---

##### `PutMonitor` <a name="PutMonitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMonitor"></a>

```csharp
private void PutMonitor(HdinsightInteractiveQueryClusterMonitor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putNetwork"></a>

```csharp
private void PutNetwork(HdinsightInteractiveQueryClusterNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a>

---

##### `PutPrivateLinkConfiguration` <a name="PutPrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putPrivateLinkConfiguration"></a>

```csharp
private void PutPrivateLinkConfiguration(HdinsightInteractiveQueryClusterPrivateLinkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putPrivateLinkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a>

---

##### `PutRoles` <a name="PutRoles" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putRoles"></a>

```csharp
private void PutRoles(HdinsightInteractiveQueryClusterRoles Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putRoles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a>

---

##### `PutSecurityProfile` <a name="PutSecurityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putSecurityProfile"></a>

```csharp
private void PutSecurityProfile(HdinsightInteractiveQueryClusterSecurityProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putSecurityProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a>

---

##### `PutStorageAccount` <a name="PutStorageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccount"></a>

```csharp
private void PutStorageAccount(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccount.parameter.value"></a>

- *Type:* object

---

##### `PutStorageAccountGen2` <a name="PutStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccountGen2"></a>

```csharp
private void PutStorageAccountGen2(HdinsightInteractiveQueryClusterStorageAccountGen2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putStorageAccountGen2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(HdinsightInteractiveQueryClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a>

---

##### `ResetComputeIsolation` <a name="ResetComputeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetComputeIsolation"></a>

```csharp
private void ResetComputeIsolation()
```

##### `ResetDiskEncryption` <a name="ResetDiskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetDiskEncryption"></a>

```csharp
private void ResetDiskEncryption()
```

##### `ResetEncryptionInTransitEnabled` <a name="ResetEncryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetEncryptionInTransitEnabled"></a>

```csharp
private void ResetEncryptionInTransitEnabled()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetExtension"></a>

```csharp
private void ResetExtension()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetastores` <a name="ResetMetastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetMetastores"></a>

```csharp
private void ResetMetastores()
```

##### `ResetMonitor` <a name="ResetMonitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetMonitor"></a>

```csharp
private void ResetMonitor()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetPrivateLinkConfiguration` <a name="ResetPrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetPrivateLinkConfiguration"></a>

```csharp
private void ResetPrivateLinkConfiguration()
```

##### `ResetSecurityProfile` <a name="ResetSecurityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetSecurityProfile"></a>

```csharp
private void ResetSecurityProfile()
```

##### `ResetStorageAccount` <a name="ResetStorageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetStorageAccount"></a>

```csharp
private void ResetStorageAccount()
```

##### `ResetStorageAccountGen2` <a name="ResetStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetStorageAccountGen2"></a>

```csharp
private void ResetStorageAccountGen2()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsMinVersion` <a name="ResetTlsMinVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.resetTlsMinVersion"></a>

```csharp
private void ResetTlsMinVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HdinsightInteractiveQueryCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HdinsightInteractiveQueryCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HdinsightInteractiveQueryCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HdinsightInteractiveQueryCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HdinsightInteractiveQueryCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HdinsightInteractiveQueryCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HdinsightInteractiveQueryCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HdinsightInteractiveQueryCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HdinsightInteractiveQueryCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.componentVersion">ComponentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference">HdinsightInteractiveQueryClusterComponentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.computeIsolation">ComputeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference">HdinsightInteractiveQueryClusterComputeIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.diskEncryption">DiskEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList">HdinsightInteractiveQueryClusterDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference">HdinsightInteractiveQueryClusterExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference">HdinsightInteractiveQueryClusterGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.httpsEndpoint">HttpsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.metastores">Metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference">HdinsightInteractiveQueryClusterMetastoresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference">HdinsightInteractiveQueryClusterMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference">HdinsightInteractiveQueryClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.privateLinkConfiguration">PrivateLinkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference">HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference">HdinsightInteractiveQueryClusterRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.securityProfile">SecurityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference">HdinsightInteractiveQueryClusterSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.sshEndpoint">SshEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList">HdinsightInteractiveQueryClusterStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountGen2">StorageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference">HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference">HdinsightInteractiveQueryClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.componentVersionInput">ComponentVersionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.computeIsolationInput">ComputeIsolationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.diskEncryptionInput">DiskEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.encryptionInTransitEnabledInput">EncryptionInTransitEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.extensionInput">ExtensionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.gatewayInput">GatewayInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.metastoresInput">MetastoresInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.monitorInput">MonitorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.privateLinkConfigurationInput">PrivateLinkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.rolesInput">RolesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.securityProfileInput">SecurityProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountGen2Input">StorageAccountGen2Input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountInput">StorageAccountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tlsMinVersionInput">TlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.encryptionInTransitEnabled">EncryptionInTransitEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.componentVersion"></a>

```csharp
public HdinsightInteractiveQueryClusterComponentVersionOutputReference ComponentVersion { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference">HdinsightInteractiveQueryClusterComponentVersionOutputReference</a>

---

##### `ComputeIsolation`<sup>Required</sup> <a name="ComputeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.computeIsolation"></a>

```csharp
public HdinsightInteractiveQueryClusterComputeIsolationOutputReference ComputeIsolation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference">HdinsightInteractiveQueryClusterComputeIsolationOutputReference</a>

---

##### `DiskEncryption`<sup>Required</sup> <a name="DiskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.diskEncryption"></a>

```csharp
public HdinsightInteractiveQueryClusterDiskEncryptionList DiskEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList">HdinsightInteractiveQueryClusterDiskEncryptionList</a>

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.extension"></a>

```csharp
public HdinsightInteractiveQueryClusterExtensionOutputReference Extension { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference">HdinsightInteractiveQueryClusterExtensionOutputReference</a>

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.gateway"></a>

```csharp
public HdinsightInteractiveQueryClusterGatewayOutputReference Gateway { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference">HdinsightInteractiveQueryClusterGatewayOutputReference</a>

---

##### `HttpsEndpoint`<sup>Required</sup> <a name="HttpsEndpoint" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.httpsEndpoint"></a>

```csharp
public string HttpsEndpoint { get; }
```

- *Type:* string

---

##### `Metastores`<sup>Required</sup> <a name="Metastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.metastores"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastoresOutputReference Metastores { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference">HdinsightInteractiveQueryClusterMetastoresOutputReference</a>

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.monitor"></a>

```csharp
public HdinsightInteractiveQueryClusterMonitorOutputReference Monitor { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference">HdinsightInteractiveQueryClusterMonitorOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.network"></a>

```csharp
public HdinsightInteractiveQueryClusterNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference">HdinsightInteractiveQueryClusterNetworkOutputReference</a>

---

##### `PrivateLinkConfiguration`<sup>Required</sup> <a name="PrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.privateLinkConfiguration"></a>

```csharp
public HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference PrivateLinkConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference">HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.roles"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesOutputReference Roles { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference">HdinsightInteractiveQueryClusterRolesOutputReference</a>

---

##### `SecurityProfile`<sup>Required</sup> <a name="SecurityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.securityProfile"></a>

```csharp
public HdinsightInteractiveQueryClusterSecurityProfileOutputReference SecurityProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference">HdinsightInteractiveQueryClusterSecurityProfileOutputReference</a>

---

##### `SshEndpoint`<sup>Required</sup> <a name="SshEndpoint" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.sshEndpoint"></a>

```csharp
public string SshEndpoint { get; }
```

- *Type:* string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccount"></a>

```csharp
public HdinsightInteractiveQueryClusterStorageAccountList StorageAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList">HdinsightInteractiveQueryClusterStorageAccountList</a>

---

##### `StorageAccountGen2`<sup>Required</sup> <a name="StorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountGen2"></a>

```csharp
public HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference StorageAccountGen2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference">HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.timeouts"></a>

```csharp
public HdinsightInteractiveQueryClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference">HdinsightInteractiveQueryClusterTimeoutsOutputReference</a>

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.clusterVersionInput"></a>

```csharp
public string ClusterVersionInput { get; }
```

- *Type:* string

---

##### `ComponentVersionInput`<sup>Optional</sup> <a name="ComponentVersionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.componentVersionInput"></a>

```csharp
public HdinsightInteractiveQueryClusterComponentVersion ComponentVersionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a>

---

##### `ComputeIsolationInput`<sup>Optional</sup> <a name="ComputeIsolationInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.computeIsolationInput"></a>

```csharp
public HdinsightInteractiveQueryClusterComputeIsolation ComputeIsolationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a>

---

##### `DiskEncryptionInput`<sup>Optional</sup> <a name="DiskEncryptionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.diskEncryptionInput"></a>

```csharp
public object DiskEncryptionInput { get; }
```

- *Type:* object

---

##### `EncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="EncryptionInTransitEnabledInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.encryptionInTransitEnabledInput"></a>

```csharp
public object EncryptionInTransitEnabledInput { get; }
```

- *Type:* object

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.extensionInput"></a>

```csharp
public HdinsightInteractiveQueryClusterExtension ExtensionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a>

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.gatewayInput"></a>

```csharp
public HdinsightInteractiveQueryClusterGateway GatewayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MetastoresInput`<sup>Optional</sup> <a name="MetastoresInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.metastoresInput"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastores MetastoresInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a>

---

##### `MonitorInput`<sup>Optional</sup> <a name="MonitorInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.monitorInput"></a>

```csharp
public HdinsightInteractiveQueryClusterMonitor MonitorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.networkInput"></a>

```csharp
public HdinsightInteractiveQueryClusterNetwork NetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a>

---

##### `PrivateLinkConfigurationInput`<sup>Optional</sup> <a name="PrivateLinkConfigurationInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.privateLinkConfigurationInput"></a>

```csharp
public HdinsightInteractiveQueryClusterPrivateLinkConfiguration PrivateLinkConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.rolesInput"></a>

```csharp
public HdinsightInteractiveQueryClusterRoles RolesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a>

---

##### `SecurityProfileInput`<sup>Optional</sup> <a name="SecurityProfileInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.securityProfileInput"></a>

```csharp
public HdinsightInteractiveQueryClusterSecurityProfile SecurityProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a>

---

##### `StorageAccountGen2Input`<sup>Optional</sup> <a name="StorageAccountGen2Input" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountGen2Input"></a>

```csharp
public HdinsightInteractiveQueryClusterStorageAccountGen2 StorageAccountGen2Input { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a>

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.storageAccountInput"></a>

```csharp
public object StorageAccountInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TlsMinVersionInput`<sup>Optional</sup> <a name="TlsMinVersionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tlsMinVersionInput"></a>

```csharp
public string TlsMinVersionInput { get; }
```

- *Type:* string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; }
```

- *Type:* string

---

##### `EncryptionInTransitEnabled`<sup>Required</sup> <a name="EncryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.encryptionInTransitEnabled"></a>

```csharp
public object EncryptionInTransitEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HdinsightInteractiveQueryClusterComponentVersion <a name="HdinsightInteractiveQueryClusterComponentVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterComponentVersion {
    string InteractiveHive
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion.property.interactiveHive">InteractiveHive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#interactive_hive HdinsightInteractiveQueryCluster#interactive_hive}. |

---

##### `InteractiveHive`<sup>Required</sup> <a name="InteractiveHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion.property.interactiveHive"></a>

```csharp
public string InteractiveHive { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#interactive_hive HdinsightInteractiveQueryCluster#interactive_hive}.

---

### HdinsightInteractiveQueryClusterComputeIsolation <a name="HdinsightInteractiveQueryClusterComputeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterComputeIsolation {
    object ComputeIsolationEnabled = null,
    string HostSku = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.property.computeIsolationEnabled">ComputeIsolationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#compute_isolation_enabled HdinsightInteractiveQueryCluster#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.property.hostSku">HostSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#host_sku HdinsightInteractiveQueryCluster#host_sku}. |

---

##### `ComputeIsolationEnabled`<sup>Optional</sup> <a name="ComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.property.computeIsolationEnabled"></a>

```csharp
public object ComputeIsolationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#compute_isolation_enabled HdinsightInteractiveQueryCluster#compute_isolation_enabled}.

---

##### `HostSku`<sup>Optional</sup> <a name="HostSku" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation.property.hostSku"></a>

```csharp
public string HostSku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#host_sku HdinsightInteractiveQueryCluster#host_sku}.

---

### HdinsightInteractiveQueryClusterConfig <a name="HdinsightInteractiveQueryClusterConfig" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterVersion,
    HdinsightInteractiveQueryClusterComponentVersion ComponentVersion,
    HdinsightInteractiveQueryClusterGateway Gateway,
    string Location,
    string Name,
    string ResourceGroupName,
    HdinsightInteractiveQueryClusterRoles Roles,
    string Tier,
    HdinsightInteractiveQueryClusterComputeIsolation ComputeIsolation = null,
    object DiskEncryption = null,
    object EncryptionInTransitEnabled = null,
    HdinsightInteractiveQueryClusterExtension Extension = null,
    string Id = null,
    HdinsightInteractiveQueryClusterMetastores Metastores = null,
    HdinsightInteractiveQueryClusterMonitor Monitor = null,
    HdinsightInteractiveQueryClusterNetwork Network = null,
    HdinsightInteractiveQueryClusterPrivateLinkConfiguration PrivateLinkConfiguration = null,
    HdinsightInteractiveQueryClusterSecurityProfile SecurityProfile = null,
    object StorageAccount = null,
    HdinsightInteractiveQueryClusterStorageAccountGen2 StorageAccountGen2 = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    HdinsightInteractiveQueryClusterTimeouts Timeouts = null,
    string TlsMinVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#cluster_version HdinsightInteractiveQueryCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.componentVersion">ComponentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#location HdinsightInteractiveQueryCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#resource_group_name HdinsightInteractiveQueryCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tier">Tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#tier HdinsightInteractiveQueryCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.computeIsolation">ComputeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.diskEncryption">DiskEncryption</a></code> | <code>object</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.encryptionInTransitEnabled">EncryptionInTransitEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#encryption_in_transit_enabled HdinsightInteractiveQueryCluster#encryption_in_transit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#id HdinsightInteractiveQueryCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.metastores">Metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.privateLinkConfiguration">PrivateLinkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a></code> | private_link_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.securityProfile">SecurityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.storageAccount">StorageAccount</a></code> | <code>object</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.storageAccountGen2">StorageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#tags HdinsightInteractiveQueryCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#tls_min_version HdinsightInteractiveQueryCluster#tls_min_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#cluster_version HdinsightInteractiveQueryCluster#cluster_version}.

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.componentVersion"></a>

```csharp
public HdinsightInteractiveQueryClusterComponentVersion ComponentVersion { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#component_version HdinsightInteractiveQueryCluster#component_version}

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.gateway"></a>

```csharp
public HdinsightInteractiveQueryClusterGateway Gateway { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#gateway HdinsightInteractiveQueryCluster#gateway}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#location HdinsightInteractiveQueryCluster#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#resource_group_name HdinsightInteractiveQueryCluster#resource_group_name}.

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.roles"></a>

```csharp
public HdinsightInteractiveQueryClusterRoles Roles { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#roles HdinsightInteractiveQueryCluster#roles}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#tier HdinsightInteractiveQueryCluster#tier}.

---

##### `ComputeIsolation`<sup>Optional</sup> <a name="ComputeIsolation" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.computeIsolation"></a>

```csharp
public HdinsightInteractiveQueryClusterComputeIsolation ComputeIsolation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#compute_isolation HdinsightInteractiveQueryCluster#compute_isolation}

---

##### `DiskEncryption`<sup>Optional</sup> <a name="DiskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.diskEncryption"></a>

```csharp
public object DiskEncryption { get; set; }
```

- *Type:* object

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#disk_encryption HdinsightInteractiveQueryCluster#disk_encryption}

---

##### `EncryptionInTransitEnabled`<sup>Optional</sup> <a name="EncryptionInTransitEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.encryptionInTransitEnabled"></a>

```csharp
public object EncryptionInTransitEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#encryption_in_transit_enabled HdinsightInteractiveQueryCluster#encryption_in_transit_enabled}.

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.extension"></a>

```csharp
public HdinsightInteractiveQueryClusterExtension Extension { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#extension HdinsightInteractiveQueryCluster#extension}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#id HdinsightInteractiveQueryCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metastores`<sup>Optional</sup> <a name="Metastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.metastores"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastores Metastores { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#metastores HdinsightInteractiveQueryCluster#metastores}

---

##### `Monitor`<sup>Optional</sup> <a name="Monitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.monitor"></a>

```csharp
public HdinsightInteractiveQueryClusterMonitor Monitor { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#monitor HdinsightInteractiveQueryCluster#monitor}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.network"></a>

```csharp
public HdinsightInteractiveQueryClusterNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#network HdinsightInteractiveQueryCluster#network}

---

##### `PrivateLinkConfiguration`<sup>Optional</sup> <a name="PrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.privateLinkConfiguration"></a>

```csharp
public HdinsightInteractiveQueryClusterPrivateLinkConfiguration PrivateLinkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a>

private_link_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#private_link_configuration HdinsightInteractiveQueryCluster#private_link_configuration}

---

##### `SecurityProfile`<sup>Optional</sup> <a name="SecurityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.securityProfile"></a>

```csharp
public HdinsightInteractiveQueryClusterSecurityProfile SecurityProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#security_profile HdinsightInteractiveQueryCluster#security_profile}

---

##### `StorageAccount`<sup>Optional</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.storageAccount"></a>

```csharp
public object StorageAccount { get; set; }
```

- *Type:* object

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#storage_account HdinsightInteractiveQueryCluster#storage_account}

---

##### `StorageAccountGen2`<sup>Optional</sup> <a name="StorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.storageAccountGen2"></a>

```csharp
public HdinsightInteractiveQueryClusterStorageAccountGen2 StorageAccountGen2 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#storage_account_gen2 HdinsightInteractiveQueryCluster#storage_account_gen2}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#tags HdinsightInteractiveQueryCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.timeouts"></a>

```csharp
public HdinsightInteractiveQueryClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts">HdinsightInteractiveQueryClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#timeouts HdinsightInteractiveQueryCluster#timeouts}

---

##### `TlsMinVersion`<sup>Optional</sup> <a name="TlsMinVersion" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterConfig.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#tls_min_version HdinsightInteractiveQueryCluster#tls_min_version}.

---

### HdinsightInteractiveQueryClusterDiskEncryption <a name="HdinsightInteractiveQueryClusterDiskEncryption" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterDiskEncryption {
    string EncryptionAlgorithm = null,
    object EncryptionAtHostEnabled = null,
    string KeyVaultKeyId = null,
    string KeyVaultManagedIdentityId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#encryption_algorithm HdinsightInteractiveQueryCluster#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#encryption_at_host_enabled HdinsightInteractiveQueryCluster#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#key_vault_key_id HdinsightInteractiveQueryCluster#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.keyVaultManagedIdentityId">KeyVaultManagedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#key_vault_managed_identity_id HdinsightInteractiveQueryCluster#key_vault_managed_identity_id}. |

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#encryption_algorithm HdinsightInteractiveQueryCluster#encryption_algorithm}.

---

##### `EncryptionAtHostEnabled`<sup>Optional</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.encryptionAtHostEnabled"></a>

```csharp
public object EncryptionAtHostEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#encryption_at_host_enabled HdinsightInteractiveQueryCluster#encryption_at_host_enabled}.

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#key_vault_key_id HdinsightInteractiveQueryCluster#key_vault_key_id}.

---

##### `KeyVaultManagedIdentityId`<sup>Optional</sup> <a name="KeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryption.property.keyVaultManagedIdentityId"></a>

```csharp
public string KeyVaultManagedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#key_vault_managed_identity_id HdinsightInteractiveQueryCluster#key_vault_managed_identity_id}.

---

### HdinsightInteractiveQueryClusterExtension <a name="HdinsightInteractiveQueryClusterExtension" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterExtension {
    string LogAnalyticsWorkspaceId,
    string PrimaryKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#log_analytics_workspace_id HdinsightInteractiveQueryCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#primary_key HdinsightInteractiveQueryCluster#primary_key}. |

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#log_analytics_workspace_id HdinsightInteractiveQueryCluster#log_analytics_workspace_id}.

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#primary_key HdinsightInteractiveQueryCluster#primary_key}.

---

### HdinsightInteractiveQueryClusterGateway <a name="HdinsightInteractiveQueryClusterGateway" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterGateway {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

### HdinsightInteractiveQueryClusterMetastores <a name="HdinsightInteractiveQueryClusterMetastores" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterMetastores {
    HdinsightInteractiveQueryClusterMetastoresAmbari Ambari = null,
    HdinsightInteractiveQueryClusterMetastoresHive Hive = null,
    HdinsightInteractiveQueryClusterMetastoresOozie Oozie = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.ambari">Ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a></code> | ambari block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.hive">Hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a></code> | hive block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.oozie">Oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a></code> | oozie block. |

---

##### `Ambari`<sup>Optional</sup> <a name="Ambari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.ambari"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastoresAmbari Ambari { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#ambari HdinsightInteractiveQueryCluster#ambari}

---

##### `Hive`<sup>Optional</sup> <a name="Hive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.hive"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastoresHive Hive { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#hive HdinsightInteractiveQueryCluster#hive}

---

##### `Oozie`<sup>Optional</sup> <a name="Oozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores.property.oozie"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastoresOozie Oozie { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#oozie HdinsightInteractiveQueryCluster#oozie}

---

### HdinsightInteractiveQueryClusterMetastoresAmbari <a name="HdinsightInteractiveQueryClusterMetastoresAmbari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterMetastoresAmbari {
    string DatabaseName,
    string Password,
    string Server,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.server">Server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

### HdinsightInteractiveQueryClusterMetastoresHive <a name="HdinsightInteractiveQueryClusterMetastoresHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterMetastoresHive {
    string DatabaseName,
    string Password,
    string Server,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.server">Server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

### HdinsightInteractiveQueryClusterMetastoresOozie <a name="HdinsightInteractiveQueryClusterMetastoresOozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterMetastoresOozie {
    string DatabaseName,
    string Password,
    string Server,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.server">Server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

### HdinsightInteractiveQueryClusterMonitor <a name="HdinsightInteractiveQueryClusterMonitor" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterMonitor {
    string LogAnalyticsWorkspaceId,
    string PrimaryKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#log_analytics_workspace_id HdinsightInteractiveQueryCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#primary_key HdinsightInteractiveQueryCluster#primary_key}. |

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#log_analytics_workspace_id HdinsightInteractiveQueryCluster#log_analytics_workspace_id}.

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#primary_key HdinsightInteractiveQueryCluster#primary_key}.

---

### HdinsightInteractiveQueryClusterNetwork <a name="HdinsightInteractiveQueryClusterNetwork" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterNetwork {
    string ConnectionDirection = null,
    object PrivateLinkEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.property.connectionDirection">ConnectionDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#connection_direction HdinsightInteractiveQueryCluster#connection_direction}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.property.privateLinkEnabled">PrivateLinkEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#private_link_enabled HdinsightInteractiveQueryCluster#private_link_enabled}. |

---

##### `ConnectionDirection`<sup>Optional</sup> <a name="ConnectionDirection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.property.connectionDirection"></a>

```csharp
public string ConnectionDirection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#connection_direction HdinsightInteractiveQueryCluster#connection_direction}.

---

##### `PrivateLinkEnabled`<sup>Optional</sup> <a name="PrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork.property.privateLinkEnabled"></a>

```csharp
public object PrivateLinkEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#private_link_enabled HdinsightInteractiveQueryCluster#private_link_enabled}.

---

### HdinsightInteractiveQueryClusterPrivateLinkConfiguration <a name="HdinsightInteractiveQueryClusterPrivateLinkConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterPrivateLinkConfiguration {
    string GroupId,
    HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration IpConfiguration,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.groupId">GroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#group_id HdinsightInteractiveQueryCluster#group_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a></code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#group_id HdinsightInteractiveQueryCluster#group_id}.

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.ipConfiguration"></a>

```csharp
public HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration IpConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#ip_configuration HdinsightInteractiveQueryCluster#ip_configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

### HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration <a name="HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration {
    string Name,
    object Primary = null,
    string PrivateIpAddress = null,
    string PrivateIpAllocationMethod = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.primary">Primary</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#primary HdinsightInteractiveQueryCluster#primary}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#private_ip_address HdinsightInteractiveQueryCluster#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAllocationMethod">PrivateIpAllocationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#private_ip_allocation_method HdinsightInteractiveQueryCluster#private_ip_allocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.primary"></a>

```csharp
public object Primary { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#primary HdinsightInteractiveQueryCluster#primary}.

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#private_ip_address HdinsightInteractiveQueryCluster#private_ip_address}.

---

##### `PrivateIpAllocationMethod`<sup>Optional</sup> <a name="PrivateIpAllocationMethod" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.privateIpAllocationMethod"></a>

```csharp
public string PrivateIpAllocationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#private_ip_allocation_method HdinsightInteractiveQueryCluster#private_ip_allocation_method}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}.

---

### HdinsightInteractiveQueryClusterRoles <a name="HdinsightInteractiveQueryClusterRoles" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRoles {
    HdinsightInteractiveQueryClusterRolesHeadNode HeadNode,
    HdinsightInteractiveQueryClusterRolesWorkerNode WorkerNode,
    HdinsightInteractiveQueryClusterRolesZookeeperNode ZookeeperNode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.headNode">HeadNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a></code> | head_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.workerNode">WorkerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a></code> | worker_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.zookeeperNode">ZookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a></code> | zookeeper_node block. |

---

##### `HeadNode`<sup>Required</sup> <a name="HeadNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.headNode"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesHeadNode HeadNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#head_node HdinsightInteractiveQueryCluster#head_node}

---

##### `WorkerNode`<sup>Required</sup> <a name="WorkerNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.workerNode"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesWorkerNode WorkerNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#worker_node HdinsightInteractiveQueryCluster#worker_node}

---

##### `ZookeeperNode`<sup>Required</sup> <a name="ZookeeperNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles.property.zookeeperNode"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesZookeeperNode ZookeeperNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#zookeeper_node HdinsightInteractiveQueryCluster#zookeeper_node}

---

### HdinsightInteractiveQueryClusterRolesHeadNode <a name="HdinsightInteractiveQueryClusterRolesHeadNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesHeadNode {
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
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.scriptActions">ScriptActions</a></code> | <code>object</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `ScriptActions`<sup>Optional</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.scriptActions"></a>

```csharp
public object ScriptActions { get; set; }
```

- *Type:* object

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#script_actions HdinsightInteractiveQueryCluster#script_actions}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}.

---

### HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions <a name="HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions {
    string Name,
    string Uri,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActions.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}.

---

### HdinsightInteractiveQueryClusterRolesWorkerNode <a name="HdinsightInteractiveQueryClusterRolesWorkerNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesWorkerNode {
    double TargetInstanceCount,
    string Username,
    string VmSize,
    HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale Autoscale = null,
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
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.scriptActions">ScriptActions</a></code> | <code>object</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}. |

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.targetInstanceCount"></a>

```csharp
public double TargetInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}.

---

##### `Autoscale`<sup>Optional</sup> <a name="Autoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.autoscale"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale Autoscale { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#autoscale HdinsightInteractiveQueryCluster#autoscale}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `ScriptActions`<sup>Optional</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.scriptActions"></a>

```csharp
public object ScriptActions { get; set; }
```

- *Type:* object

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#script_actions HdinsightInteractiveQueryCluster#script_actions}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}.

---

### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale {
    HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence Recurrence = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | recurrence block. |

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale.property.recurrence"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence Recurrence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#recurrence HdinsightInteractiveQueryCluster#recurrence}

---

### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence {
    object Schedule,
    string Timezone
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule">Schedule</a></code> | <code>object</code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#timezone HdinsightInteractiveQueryCluster#timezone}. |

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule"></a>

```csharp
public object Schedule { get; set; }
```

- *Type:* object

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#schedule HdinsightInteractiveQueryCluster#schedule}

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#timezone HdinsightInteractiveQueryCluster#timezone}.

---

### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule {
    string[] Days,
    double TargetInstanceCount,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days">Days</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#days HdinsightInteractiveQueryCluster#days}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#time HdinsightInteractiveQueryCluster#time}. |

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days"></a>

```csharp
public string[] Days { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#days HdinsightInteractiveQueryCluster#days}.

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount"></a>

```csharp
public double TargetInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#time HdinsightInteractiveQueryCluster#time}.

---

### HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions {
    string Name,
    string Uri,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActions.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}.

---

### HdinsightInteractiveQueryClusterRolesZookeeperNode <a name="HdinsightInteractiveQueryClusterRolesZookeeperNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesZookeeperNode {
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
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.scriptActions">ScriptActions</a></code> | <code>object</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}.

---

##### `ScriptActions`<sup>Optional</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.scriptActions"></a>

```csharp
public object ScriptActions { get; set; }
```

- *Type:* object

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#script_actions HdinsightInteractiveQueryCluster#script_actions}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}.

---

### HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions <a name="HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions {
    string Name,
    string Uri,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#uri HdinsightInteractiveQueryCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActions.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#parameters HdinsightInteractiveQueryCluster#parameters}.

---

### HdinsightInteractiveQueryClusterSecurityProfile <a name="HdinsightInteractiveQueryClusterSecurityProfile" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterSecurityProfile {
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
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.aaddsResourceId">AaddsResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#aadds_resource_id HdinsightInteractiveQueryCluster#aadds_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#domain_name HdinsightInteractiveQueryCluster#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainUsername">DomainUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#domain_username HdinsightInteractiveQueryCluster#domain_username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainUserPassword">DomainUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#domain_user_password HdinsightInteractiveQueryCluster#domain_user_password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.ldapsUrls">LdapsUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#ldaps_urls HdinsightInteractiveQueryCluster#ldaps_urls}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.msiResourceId">MsiResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#msi_resource_id HdinsightInteractiveQueryCluster#msi_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.clusterUsersGroupDns">ClusterUsersGroupDns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#cluster_users_group_dns HdinsightInteractiveQueryCluster#cluster_users_group_dns}. |

---

##### `AaddsResourceId`<sup>Required</sup> <a name="AaddsResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.aaddsResourceId"></a>

```csharp
public string AaddsResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#aadds_resource_id HdinsightInteractiveQueryCluster#aadds_resource_id}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#domain_name HdinsightInteractiveQueryCluster#domain_name}.

---

##### `DomainUsername`<sup>Required</sup> <a name="DomainUsername" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainUsername"></a>

```csharp
public string DomainUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#domain_username HdinsightInteractiveQueryCluster#domain_username}.

---

##### `DomainUserPassword`<sup>Required</sup> <a name="DomainUserPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.domainUserPassword"></a>

```csharp
public string DomainUserPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#domain_user_password HdinsightInteractiveQueryCluster#domain_user_password}.

---

##### `LdapsUrls`<sup>Required</sup> <a name="LdapsUrls" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.ldapsUrls"></a>

```csharp
public string[] LdapsUrls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#ldaps_urls HdinsightInteractiveQueryCluster#ldaps_urls}.

---

##### `MsiResourceId`<sup>Required</sup> <a name="MsiResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.msiResourceId"></a>

```csharp
public string MsiResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#msi_resource_id HdinsightInteractiveQueryCluster#msi_resource_id}.

---

##### `ClusterUsersGroupDns`<sup>Optional</sup> <a name="ClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile.property.clusterUsersGroupDns"></a>

```csharp
public string[] ClusterUsersGroupDns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#cluster_users_group_dns HdinsightInteractiveQueryCluster#cluster_users_group_dns}.

---

### HdinsightInteractiveQueryClusterStorageAccount <a name="HdinsightInteractiveQueryClusterStorageAccount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterStorageAccount {
    object IsDefault,
    string StorageAccountKey,
    string StorageContainerId,
    string StorageResourceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.isDefault">IsDefault</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#is_default HdinsightInteractiveQueryCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#storage_account_key HdinsightInteractiveQueryCluster#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageContainerId">StorageContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#storage_container_id HdinsightInteractiveQueryCluster#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageResourceId">StorageResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}. |

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.isDefault"></a>

```csharp
public object IsDefault { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#is_default HdinsightInteractiveQueryCluster#is_default}.

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#storage_account_key HdinsightInteractiveQueryCluster#storage_account_key}.

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageContainerId"></a>

```csharp
public string StorageContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#storage_container_id HdinsightInteractiveQueryCluster#storage_container_id}.

---

##### `StorageResourceId`<sup>Optional</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccount.property.storageResourceId"></a>

```csharp
public string StorageResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}.

---

### HdinsightInteractiveQueryClusterStorageAccountGen2 <a name="HdinsightInteractiveQueryClusterStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterStorageAccountGen2 {
    string FilesystemId,
    object IsDefault,
    string ManagedIdentityResourceId,
    string StorageResourceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.filesystemId">FilesystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#filesystem_id HdinsightInteractiveQueryCluster#filesystem_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.isDefault">IsDefault</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#is_default HdinsightInteractiveQueryCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.managedIdentityResourceId">ManagedIdentityResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#managed_identity_resource_id HdinsightInteractiveQueryCluster#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.storageResourceId">StorageResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}. |

---

##### `FilesystemId`<sup>Required</sup> <a name="FilesystemId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.filesystemId"></a>

```csharp
public string FilesystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#filesystem_id HdinsightInteractiveQueryCluster#filesystem_id}.

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.isDefault"></a>

```csharp
public object IsDefault { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#is_default HdinsightInteractiveQueryCluster#is_default}.

---

##### `ManagedIdentityResourceId`<sup>Required</sup> <a name="ManagedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.managedIdentityResourceId"></a>

```csharp
public string ManagedIdentityResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#managed_identity_resource_id HdinsightInteractiveQueryCluster#managed_identity_resource_id}.

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2.property.storageResourceId"></a>

```csharp
public string StorageResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}.

---

### HdinsightInteractiveQueryClusterTimeouts <a name="HdinsightInteractiveQueryClusterTimeouts" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#create HdinsightInteractiveQueryCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#delete HdinsightInteractiveQueryCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#read HdinsightInteractiveQueryCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#update HdinsightInteractiveQueryCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#create HdinsightInteractiveQueryCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#delete HdinsightInteractiveQueryCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#read HdinsightInteractiveQueryCluster#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/hdinsight_interactive_query_cluster#update HdinsightInteractiveQueryCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HdinsightInteractiveQueryClusterComponentVersionOutputReference <a name="HdinsightInteractiveQueryClusterComponentVersionOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterComponentVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.interactiveHiveInput">InteractiveHiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.interactiveHive">InteractiveHive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InteractiveHiveInput`<sup>Optional</sup> <a name="InteractiveHiveInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.interactiveHiveInput"></a>

```csharp
public string InteractiveHiveInput { get; }
```

- *Type:* string

---

##### `InteractiveHive`<sup>Required</sup> <a name="InteractiveHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.interactiveHive"></a>

```csharp
public string InteractiveHive { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersionOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterComponentVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComponentVersion">HdinsightInteractiveQueryClusterComponentVersion</a>

---


### HdinsightInteractiveQueryClusterComputeIsolationOutputReference <a name="HdinsightInteractiveQueryClusterComputeIsolationOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterComputeIsolationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resetComputeIsolationEnabled">ResetComputeIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resetHostSku">ResetHostSku</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeIsolationEnabled` <a name="ResetComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resetComputeIsolationEnabled"></a>

```csharp
private void ResetComputeIsolationEnabled()
```

##### `ResetHostSku` <a name="ResetHostSku" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.resetHostSku"></a>

```csharp
private void ResetHostSku()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput">ComputeIsolationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.hostSkuInput">HostSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.computeIsolationEnabled">ComputeIsolationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.hostSku">HostSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeIsolationEnabledInput`<sup>Optional</sup> <a name="ComputeIsolationEnabledInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput"></a>

```csharp
public object ComputeIsolationEnabledInput { get; }
```

- *Type:* object

---

##### `HostSkuInput`<sup>Optional</sup> <a name="HostSkuInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.hostSkuInput"></a>

```csharp
public string HostSkuInput { get; }
```

- *Type:* string

---

##### `ComputeIsolationEnabled`<sup>Required</sup> <a name="ComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.computeIsolationEnabled"></a>

```csharp
public object ComputeIsolationEnabled { get; }
```

- *Type:* object

---

##### `HostSku`<sup>Required</sup> <a name="HostSku" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.hostSku"></a>

```csharp
public string HostSku { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolationOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterComputeIsolation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterComputeIsolation">HdinsightInteractiveQueryClusterComputeIsolation</a>

---


### HdinsightInteractiveQueryClusterDiskEncryptionList <a name="HdinsightInteractiveQueryClusterDiskEncryptionList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterDiskEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.get"></a>

```csharp
private HdinsightInteractiveQueryClusterDiskEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightInteractiveQueryClusterDiskEncryptionOutputReference <a name="HdinsightInteractiveQueryClusterDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterDiskEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled">ResetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId">ResetKeyVaultManagedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```csharp
private void ResetEncryptionAlgorithm()
```

##### `ResetEncryptionAtHostEnabled` <a name="ResetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled"></a>

```csharp
private void ResetEncryptionAtHostEnabled()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetKeyVaultKeyId"></a>

```csharp
private void ResetKeyVaultKeyId()
```

##### `ResetKeyVaultManagedIdentityId` <a name="ResetKeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId"></a>

```csharp
private void ResetKeyVaultManagedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput">EncryptionAtHostEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput">KeyVaultManagedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId">KeyVaultManagedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```csharp
public string EncryptionAlgorithmInput { get; }
```

- *Type:* string

---

##### `EncryptionAtHostEnabledInput`<sup>Optional</sup> <a name="EncryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput"></a>

```csharp
public object EncryptionAtHostEnabledInput { get; }
```

- *Type:* object

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultManagedIdentityIdInput`<sup>Optional</sup> <a name="KeyVaultManagedIdentityIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput"></a>

```csharp
public string KeyVaultManagedIdentityIdInput { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `EncryptionAtHostEnabled`<sup>Required</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled"></a>

```csharp
public object EncryptionAtHostEnabled { get; }
```

- *Type:* object

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `KeyVaultManagedIdentityId`<sup>Required</sup> <a name="KeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId"></a>

```csharp
public string KeyVaultManagedIdentityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterDiskEncryptionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightInteractiveQueryClusterExtensionOutputReference <a name="HdinsightInteractiveQueryClusterExtensionOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterExtensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.primaryKeyInput"></a>

```csharp
public string PrimaryKeyInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtensionOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterExtension InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterExtension">HdinsightInteractiveQueryClusterExtension</a>

---


### HdinsightInteractiveQueryClusterGatewayOutputReference <a name="HdinsightInteractiveQueryClusterGatewayOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGatewayOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterGateway">HdinsightInteractiveQueryClusterGateway</a>

---


### HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference <a name="HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastoresAmbari InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a>

---


### HdinsightInteractiveQueryClusterMetastoresHiveOutputReference <a name="HdinsightInteractiveQueryClusterMetastoresHiveOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterMetastoresHiveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastoresHive InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a>

---


### HdinsightInteractiveQueryClusterMetastoresOozieOutputReference <a name="HdinsightInteractiveQueryClusterMetastoresOozieOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterMetastoresOozieOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastoresOozie InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a>

---


### HdinsightInteractiveQueryClusterMetastoresOutputReference <a name="HdinsightInteractiveQueryClusterMetastoresOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterMetastoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putAmbari">PutAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putHive">PutHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putOozie">PutOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetAmbari">ResetAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetHive">ResetHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetOozie">ResetOozie</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmbari` <a name="PutAmbari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putAmbari"></a>

```csharp
private void PutAmbari(HdinsightInteractiveQueryClusterMetastoresAmbari Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putAmbari.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a>

---

##### `PutHive` <a name="PutHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putHive"></a>

```csharp
private void PutHive(HdinsightInteractiveQueryClusterMetastoresHive Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putHive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a>

---

##### `PutOozie` <a name="PutOozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putOozie"></a>

```csharp
private void PutOozie(HdinsightInteractiveQueryClusterMetastoresOozie Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.putOozie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a>

---

##### `ResetAmbari` <a name="ResetAmbari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetAmbari"></a>

```csharp
private void ResetAmbari()
```

##### `ResetHive` <a name="ResetHive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetHive"></a>

```csharp
private void ResetHive()
```

##### `ResetOozie` <a name="ResetOozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.resetOozie"></a>

```csharp
private void ResetOozie()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.ambari">Ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference">HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.hive">Hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference">HdinsightInteractiveQueryClusterMetastoresHiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.oozie">Oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference">HdinsightInteractiveQueryClusterMetastoresOozieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.ambariInput">AmbariInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.hiveInput">HiveInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.oozieInput">OozieInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ambari`<sup>Required</sup> <a name="Ambari" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.ambari"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference Ambari { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference">HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference</a>

---

##### `Hive`<sup>Required</sup> <a name="Hive" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.hive"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastoresHiveOutputReference Hive { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHiveOutputReference">HdinsightInteractiveQueryClusterMetastoresHiveOutputReference</a>

---

##### `Oozie`<sup>Required</sup> <a name="Oozie" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.oozie"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastoresOozieOutputReference Oozie { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozieOutputReference">HdinsightInteractiveQueryClusterMetastoresOozieOutputReference</a>

---

##### `AmbariInput`<sup>Optional</sup> <a name="AmbariInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.ambariInput"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastoresAmbari AmbariInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresAmbari">HdinsightInteractiveQueryClusterMetastoresAmbari</a>

---

##### `HiveInput`<sup>Optional</sup> <a name="HiveInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.hiveInput"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastoresHive HiveInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresHive">HdinsightInteractiveQueryClusterMetastoresHive</a>

---

##### `OozieInput`<sup>Optional</sup> <a name="OozieInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.oozieInput"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastoresOozie OozieInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOozie">HdinsightInteractiveQueryClusterMetastoresOozie</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastoresOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterMetastores InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMetastores">HdinsightInteractiveQueryClusterMetastores</a>

---


### HdinsightInteractiveQueryClusterMonitorOutputReference <a name="HdinsightInteractiveQueryClusterMonitorOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterMonitorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.primaryKeyInput"></a>

```csharp
public string PrimaryKeyInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitorOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterMonitor InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterMonitor">HdinsightInteractiveQueryClusterMonitor</a>

---


### HdinsightInteractiveQueryClusterNetworkOutputReference <a name="HdinsightInteractiveQueryClusterNetworkOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resetConnectionDirection">ResetConnectionDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resetPrivateLinkEnabled">ResetPrivateLinkEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionDirection` <a name="ResetConnectionDirection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resetConnectionDirection"></a>

```csharp
private void ResetConnectionDirection()
```

##### `ResetPrivateLinkEnabled` <a name="ResetPrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.resetPrivateLinkEnabled"></a>

```csharp
private void ResetPrivateLinkEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.connectionDirectionInput">ConnectionDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.privateLinkEnabledInput">PrivateLinkEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.connectionDirection">ConnectionDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.privateLinkEnabled">PrivateLinkEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionDirectionInput`<sup>Optional</sup> <a name="ConnectionDirectionInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.connectionDirectionInput"></a>

```csharp
public string ConnectionDirectionInput { get; }
```

- *Type:* string

---

##### `PrivateLinkEnabledInput`<sup>Optional</sup> <a name="PrivateLinkEnabledInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.privateLinkEnabledInput"></a>

```csharp
public object PrivateLinkEnabledInput { get; }
```

- *Type:* object

---

##### `ConnectionDirection`<sup>Required</sup> <a name="ConnectionDirection" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.connectionDirection"></a>

```csharp
public string ConnectionDirection { get; }
```

- *Type:* string

---

##### `PrivateLinkEnabled`<sup>Required</sup> <a name="PrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.privateLinkEnabled"></a>

```csharp
public object PrivateLinkEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetworkOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterNetwork">HdinsightInteractiveQueryClusterNetwork</a>

---


### HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference <a name="HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAllocationMethod">ResetPrivateIpAllocationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAddress"></a>

```csharp
private void ResetPrivateIpAddress()
```

##### `ResetPrivateIpAllocationMethod` <a name="ResetPrivateIpAllocationMethod" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetPrivateIpAllocationMethod"></a>

```csharp
private void ResetPrivateIpAllocationMethod()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethodInput">PrivateIpAllocationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primary">Primary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethod">PrivateIpAllocationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primaryInput"></a>

```csharp
public object PrimaryInput { get; }
```

- *Type:* object

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddressInput"></a>

```csharp
public string PrivateIpAddressInput { get; }
```

- *Type:* string

---

##### `PrivateIpAllocationMethodInput`<sup>Optional</sup> <a name="PrivateIpAllocationMethodInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethodInput"></a>

```csharp
public string PrivateIpAllocationMethodInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.primary"></a>

```csharp
public object Primary { get; }
```

- *Type:* object

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `PrivateIpAllocationMethod`<sup>Required</sup> <a name="PrivateIpAllocationMethod" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.privateIpAllocationMethod"></a>

```csharp
public string PrivateIpAllocationMethod { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a>

---


### HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference <a name="HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.putIpConfiguration">PutIpConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpConfiguration` <a name="PutIpConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.putIpConfiguration"></a>

```csharp
private void PutIpConfiguration(HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.putIpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.ipConfiguration"></a>

```csharp
public HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference IpConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfigurationOutputReference</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.ipConfigurationInput"></a>

```csharp
public HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration IpConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfigurationIpConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfigurationOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterPrivateLinkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterPrivateLinkConfiguration">HdinsightInteractiveQueryClusterPrivateLinkConfiguration</a>

---


### HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference <a name="HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.putScriptActions">PutScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetScriptActions">ResetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptActions` <a name="PutScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.putScriptActions"></a>

```csharp
private void PutScriptActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* object

---

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetScriptActions` <a name="ResetScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetScriptActions"></a>

```csharp
private void ResetScriptActions()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetSshKeys"></a>

```csharp
private void ResetSshKeys()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.scriptActions">ScriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.scriptActionsInput">ScriptActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptActions`<sup>Required</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.scriptActions"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList ScriptActions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ScriptActionsInput`<sup>Optional</sup> <a name="ScriptActionsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.scriptActionsInput"></a>

```csharp
public object ScriptActionsInput { get; }
```

- *Type:* object

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.sshKeysInput"></a>

```csharp
public string[] SshKeysInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesHeadNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a>

---


### HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList <a name="HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.get"></a>

```csharp
private HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference <a name="HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightInteractiveQueryClusterRolesOutputReference <a name="HdinsightInteractiveQueryClusterRolesOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putHeadNode">PutHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putWorkerNode">PutWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putZookeeperNode">PutZookeeperNode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeadNode` <a name="PutHeadNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putHeadNode"></a>

```csharp
private void PutHeadNode(HdinsightInteractiveQueryClusterRolesHeadNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putHeadNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a>

---

##### `PutWorkerNode` <a name="PutWorkerNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putWorkerNode"></a>

```csharp
private void PutWorkerNode(HdinsightInteractiveQueryClusterRolesWorkerNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putWorkerNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a>

---

##### `PutZookeeperNode` <a name="PutZookeeperNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putZookeeperNode"></a>

```csharp
private void PutZookeeperNode(HdinsightInteractiveQueryClusterRolesZookeeperNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.putZookeeperNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.headNode">HeadNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference">HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.workerNode">WorkerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.zookeeperNode">ZookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference">HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.headNodeInput">HeadNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.workerNodeInput">WorkerNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.zookeeperNodeInput">ZookeeperNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeadNode`<sup>Required</sup> <a name="HeadNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.headNode"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference HeadNode { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference">HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference</a>

---

##### `WorkerNode`<sup>Required</sup> <a name="WorkerNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.workerNode"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference WorkerNode { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference</a>

---

##### `ZookeeperNode`<sup>Required</sup> <a name="ZookeeperNode" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.zookeeperNode"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference ZookeeperNode { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference">HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference</a>

---

##### `HeadNodeInput`<sup>Optional</sup> <a name="HeadNodeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.headNodeInput"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesHeadNode HeadNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesHeadNode">HdinsightInteractiveQueryClusterRolesHeadNode</a>

---

##### `WorkerNodeInput`<sup>Optional</sup> <a name="WorkerNodeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.workerNodeInput"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesWorkerNode WorkerNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a>

---

##### `ZookeeperNodeInput`<sup>Optional</sup> <a name="ZookeeperNodeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.zookeeperNodeInput"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesZookeeperNode ZookeeperNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterRoles InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRoles">HdinsightInteractiveQueryClusterRoles</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence">PutRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence">ResetRecurrence</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecurrence` <a name="PutRecurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence"></a>

```csharp
private void PutRecurrence(HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence"></a>

```csharp
private void ResetRecurrence()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference Recurrence { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a>

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence RecurrenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule"></a>

```csharp
private void PutSchedule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput"></a>

```csharp
public object ScheduleInput { get; }
```

- *Type:* object

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get"></a>

```csharp
private HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput">DaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput">TargetInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days">Days</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput"></a>

```csharp
public string[] DaysInput { get; }
```

- *Type:* string[]

---

##### `TargetInstanceCountInput`<sup>Optional</sup> <a name="TargetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput"></a>

```csharp
public double TargetInstanceCountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days"></a>

```csharp
public string[] Days { get; }
```

- *Type:* string[]

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount"></a>

```csharp
public double TargetInstanceCount { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putAutoscale">PutAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putScriptActions">PutScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetAutoscale">ResetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetScriptActions">ResetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscale` <a name="PutAutoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putAutoscale"></a>

```csharp
private void PutAutoscale(HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a>

---

##### `PutScriptActions` <a name="PutScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putScriptActions"></a>

```csharp
private void PutScriptActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoscale` <a name="ResetAutoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetAutoscale"></a>

```csharp
private void ResetAutoscale()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetScriptActions` <a name="ResetScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetScriptActions"></a>

```csharp
private void ResetScriptActions()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetSshKeys"></a>

```csharp
private void ResetSshKeys()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.scriptActions">ScriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.autoscaleInput">AutoscaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.scriptActionsInput">ScriptActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput">TargetInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Autoscale`<sup>Required</sup> <a name="Autoscale" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.autoscale"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference Autoscale { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference</a>

---

##### `ScriptActions`<sup>Required</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.scriptActions"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList ScriptActions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList</a>

---

##### `AutoscaleInput`<sup>Optional</sup> <a name="AutoscaleInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.autoscaleInput"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale AutoscaleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale">HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ScriptActionsInput`<sup>Optional</sup> <a name="ScriptActionsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.scriptActionsInput"></a>

```csharp
public object ScriptActionsInput { get; }
```

- *Type:* object

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.sshKeysInput"></a>

```csharp
public string[] SshKeysInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TargetInstanceCountInput`<sup>Optional</sup> <a name="TargetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput"></a>

```csharp
public double TargetInstanceCountInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.targetInstanceCount"></a>

```csharp
public double TargetInstanceCount { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesWorkerNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNode">HdinsightInteractiveQueryClusterRolesWorkerNode</a>

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.get"></a>

```csharp
private HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference <a name="HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference <a name="HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.putScriptActions">PutScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetScriptActions">ResetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptActions` <a name="PutScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.putScriptActions"></a>

```csharp
private void PutScriptActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* object

---

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetScriptActions` <a name="ResetScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetScriptActions"></a>

```csharp
private void ResetScriptActions()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetSshKeys"></a>

```csharp
private void ResetSshKeys()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.scriptActions">ScriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput">ScriptActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptActions`<sup>Required</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.scriptActions"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList ScriptActions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList">HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ScriptActionsInput`<sup>Optional</sup> <a name="ScriptActionsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput"></a>

```csharp
public object ScriptActionsInput { get; }
```

- *Type:* object

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.sshKeysInput"></a>

```csharp
public string[] SshKeysInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterRolesZookeeperNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNode">HdinsightInteractiveQueryClusterRolesZookeeperNode</a>

---


### HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList <a name="HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.get"></a>

```csharp
private HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference <a name="HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightInteractiveQueryClusterSecurityProfileOutputReference <a name="HdinsightInteractiveQueryClusterSecurityProfileOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterSecurityProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resetClusterUsersGroupDns">ResetClusterUsersGroupDns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterUsersGroupDns` <a name="ResetClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.resetClusterUsersGroupDns"></a>

```csharp
private void ResetClusterUsersGroupDns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.aaddsResourceIdInput">AaddsResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput">ClusterUsersGroupDnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUsernameInput">DomainUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUserPasswordInput">DomainUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.ldapsUrlsInput">LdapsUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.msiResourceIdInput">MsiResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.aaddsResourceId">AaddsResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.clusterUsersGroupDns">ClusterUsersGroupDns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUsername">DomainUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUserPassword">DomainUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.ldapsUrls">LdapsUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.msiResourceId">MsiResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AaddsResourceIdInput`<sup>Optional</sup> <a name="AaddsResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.aaddsResourceIdInput"></a>

```csharp
public string AaddsResourceIdInput { get; }
```

- *Type:* string

---

##### `ClusterUsersGroupDnsInput`<sup>Optional</sup> <a name="ClusterUsersGroupDnsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput"></a>

```csharp
public string[] ClusterUsersGroupDnsInput { get; }
```

- *Type:* string[]

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `DomainUsernameInput`<sup>Optional</sup> <a name="DomainUsernameInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUsernameInput"></a>

```csharp
public string DomainUsernameInput { get; }
```

- *Type:* string

---

##### `DomainUserPasswordInput`<sup>Optional</sup> <a name="DomainUserPasswordInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUserPasswordInput"></a>

```csharp
public string DomainUserPasswordInput { get; }
```

- *Type:* string

---

##### `LdapsUrlsInput`<sup>Optional</sup> <a name="LdapsUrlsInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.ldapsUrlsInput"></a>

```csharp
public string[] LdapsUrlsInput { get; }
```

- *Type:* string[]

---

##### `MsiResourceIdInput`<sup>Optional</sup> <a name="MsiResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.msiResourceIdInput"></a>

```csharp
public string MsiResourceIdInput { get; }
```

- *Type:* string

---

##### `AaddsResourceId`<sup>Required</sup> <a name="AaddsResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.aaddsResourceId"></a>

```csharp
public string AaddsResourceId { get; }
```

- *Type:* string

---

##### `ClusterUsersGroupDns`<sup>Required</sup> <a name="ClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.clusterUsersGroupDns"></a>

```csharp
public string[] ClusterUsersGroupDns { get; }
```

- *Type:* string[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `DomainUsername`<sup>Required</sup> <a name="DomainUsername" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUsername"></a>

```csharp
public string DomainUsername { get; }
```

- *Type:* string

---

##### `DomainUserPassword`<sup>Required</sup> <a name="DomainUserPassword" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.domainUserPassword"></a>

```csharp
public string DomainUserPassword { get; }
```

- *Type:* string

---

##### `LdapsUrls`<sup>Required</sup> <a name="LdapsUrls" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.ldapsUrls"></a>

```csharp
public string[] LdapsUrls { get; }
```

- *Type:* string[]

---

##### `MsiResourceId`<sup>Required</sup> <a name="MsiResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.msiResourceId"></a>

```csharp
public string MsiResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfileOutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterSecurityProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterSecurityProfile">HdinsightInteractiveQueryClusterSecurityProfile</a>

---


### HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference <a name="HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.filesystemIdInput">FilesystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.isDefaultInput">IsDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput">ManagedIdentityResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.storageResourceIdInput">StorageResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.filesystemId">FilesystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.isDefault">IsDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId">ManagedIdentityResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.storageResourceId">StorageResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilesystemIdInput`<sup>Optional</sup> <a name="FilesystemIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.filesystemIdInput"></a>

```csharp
public string FilesystemIdInput { get; }
```

- *Type:* string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.isDefaultInput"></a>

```csharp
public object IsDefaultInput { get; }
```

- *Type:* object

---

##### `ManagedIdentityResourceIdInput`<sup>Optional</sup> <a name="ManagedIdentityResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput"></a>

```csharp
public string ManagedIdentityResourceIdInput { get; }
```

- *Type:* string

---

##### `StorageResourceIdInput`<sup>Optional</sup> <a name="StorageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.storageResourceIdInput"></a>

```csharp
public string StorageResourceIdInput { get; }
```

- *Type:* string

---

##### `FilesystemId`<sup>Required</sup> <a name="FilesystemId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.filesystemId"></a>

```csharp
public string FilesystemId { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.isDefault"></a>

```csharp
public object IsDefault { get; }
```

- *Type:* object

---

##### `ManagedIdentityResourceId`<sup>Required</sup> <a name="ManagedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId"></a>

```csharp
public string ManagedIdentityResourceId { get; }
```

- *Type:* string

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.storageResourceId"></a>

```csharp
public string StorageResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference.property.internalValue"></a>

```csharp
public HdinsightInteractiveQueryClusterStorageAccountGen2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountGen2">HdinsightInteractiveQueryClusterStorageAccountGen2</a>

---


### HdinsightInteractiveQueryClusterStorageAccountList <a name="HdinsightInteractiveQueryClusterStorageAccountList" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterStorageAccountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.get"></a>

```csharp
private HdinsightInteractiveQueryClusterStorageAccountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightInteractiveQueryClusterStorageAccountOutputReference <a name="HdinsightInteractiveQueryClusterStorageAccountOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterStorageAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resetStorageResourceId">ResetStorageResourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageResourceId` <a name="ResetStorageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.resetStorageResourceId"></a>

```csharp
private void ResetStorageResourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.isDefaultInput">IsDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageAccountKeyInput">StorageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageContainerIdInput">StorageContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageResourceIdInput">StorageResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.isDefault">IsDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageContainerId">StorageContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageResourceId">StorageResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.isDefaultInput"></a>

```csharp
public object IsDefaultInput { get; }
```

- *Type:* object

---

##### `StorageAccountKeyInput`<sup>Optional</sup> <a name="StorageAccountKeyInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageAccountKeyInput"></a>

```csharp
public string StorageAccountKeyInput { get; }
```

- *Type:* string

---

##### `StorageContainerIdInput`<sup>Optional</sup> <a name="StorageContainerIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageContainerIdInput"></a>

```csharp
public string StorageContainerIdInput { get; }
```

- *Type:* string

---

##### `StorageResourceIdInput`<sup>Optional</sup> <a name="StorageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageResourceIdInput"></a>

```csharp
public string StorageResourceIdInput { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.isDefault"></a>

```csharp
public object IsDefault { get; }
```

- *Type:* object

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; }
```

- *Type:* string

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageContainerId"></a>

```csharp
public string StorageContainerId { get; }
```

- *Type:* string

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.storageResourceId"></a>

```csharp
public string StorageResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterStorageAccountOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HdinsightInteractiveQueryClusterTimeoutsOutputReference <a name="HdinsightInteractiveQueryClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HdinsightInteractiveQueryClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightInteractiveQueryCluster.HdinsightInteractiveQueryClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



