# `hpcCache` Submodule <a name="`hpcCache` Submodule" id="@cdktf/provider-azurerm.hpcCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HpcCache <a name="HpcCache" id="@cdktf/provider-azurerm.hpcCache.HpcCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache azurerm_hpc_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCache(Construct Scope, string Id, HpcCacheConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig">HpcCacheConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig">HpcCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy">PutDefaultAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory">PutDirectoryActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile">PutDirectoryFlatFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap">PutDirectoryLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDns">PutDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetAutomaticallyRotateKeyToLatestEnabled">ResetAutomaticallyRotateKeyToLatestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDefaultAccessPolicy">ResetDefaultAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryActiveDirectory">ResetDirectoryActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryFlatFile">ResetDirectoryFlatFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryLdap">ResetDirectoryLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDns">ResetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetNtpServer">ResetNtpServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.hpcCache.HpcCache.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultAccessPolicy` <a name="PutDefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy"></a>

```csharp
private void PutDefaultAccessPolicy(HpcCacheDefaultAccessPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

---

##### `PutDirectoryActiveDirectory` <a name="PutDirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory"></a>

```csharp
private void PutDirectoryActiveDirectory(HpcCacheDirectoryActiveDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

---

##### `PutDirectoryFlatFile` <a name="PutDirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile"></a>

```csharp
private void PutDirectoryFlatFile(HpcCacheDirectoryFlatFile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

---

##### `PutDirectoryLdap` <a name="PutDirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap"></a>

```csharp
private void PutDirectoryLdap(HpcCacheDirectoryLdap Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

---

##### `PutDns` <a name="PutDns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDns"></a>

```csharp
private void PutDns(HpcCacheDns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity"></a>

```csharp
private void PutIdentity(HpcCacheIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts"></a>

```csharp
private void PutTimeouts(HpcCacheTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

---

##### `ResetAutomaticallyRotateKeyToLatestEnabled` <a name="ResetAutomaticallyRotateKeyToLatestEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetAutomaticallyRotateKeyToLatestEnabled"></a>

```csharp
private void ResetAutomaticallyRotateKeyToLatestEnabled()
```

##### `ResetDefaultAccessPolicy` <a name="ResetDefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDefaultAccessPolicy"></a>

```csharp
private void ResetDefaultAccessPolicy()
```

##### `ResetDirectoryActiveDirectory` <a name="ResetDirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryActiveDirectory"></a>

```csharp
private void ResetDirectoryActiveDirectory()
```

##### `ResetDirectoryFlatFile` <a name="ResetDirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryFlatFile"></a>

```csharp
private void ResetDirectoryFlatFile()
```

##### `ResetDirectoryLdap` <a name="ResetDirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryLdap"></a>

```csharp
private void ResetDirectoryLdap()
```

##### `ResetDns` <a name="ResetDns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDns"></a>

```csharp
private void ResetDns()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetKeyVaultKeyId"></a>

```csharp
private void ResetKeyVaultKeyId()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetNtpServer` <a name="ResetNtpServer" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetNtpServer"></a>

```csharp
private void ResetNtpServer()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HpcCache resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCache.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCache.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCache.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCache.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HpcCache resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HpcCache to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HpcCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HpcCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicy">DefaultAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference">HpcCacheDefaultAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectory">DirectoryActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference">HpcCacheDirectoryActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFile">DirectoryFlatFile</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference">HpcCacheDirectoryFlatFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdap">DirectoryLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference">HpcCacheDirectoryLdapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference">HpcCacheDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference">HpcCacheIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mountAddresses">MountAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference">HpcCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabledInput">AutomaticallyRotateKeyToLatestEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGbInput">CacheSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicyInput">DefaultAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectoryInput">DirectoryActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFileInput">DirectoryFlatFileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdapInput">DirectoryLdapInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dnsInput">DnsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServerInput">NtpServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabled">AutomaticallyRotateKeyToLatestEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGb">CacheSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServer">NtpServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefaultAccessPolicy`<sup>Required</sup> <a name="DefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicy"></a>

```csharp
public HpcCacheDefaultAccessPolicyOutputReference DefaultAccessPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference">HpcCacheDefaultAccessPolicyOutputReference</a>

---

##### `DirectoryActiveDirectory`<sup>Required</sup> <a name="DirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectory"></a>

```csharp
public HpcCacheDirectoryActiveDirectoryOutputReference DirectoryActiveDirectory { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference">HpcCacheDirectoryActiveDirectoryOutputReference</a>

---

##### `DirectoryFlatFile`<sup>Required</sup> <a name="DirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFile"></a>

```csharp
public HpcCacheDirectoryFlatFileOutputReference DirectoryFlatFile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference">HpcCacheDirectoryFlatFileOutputReference</a>

---

##### `DirectoryLdap`<sup>Required</sup> <a name="DirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdap"></a>

```csharp
public HpcCacheDirectoryLdapOutputReference DirectoryLdap { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference">HpcCacheDirectoryLdapOutputReference</a>

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dns"></a>

```csharp
public HpcCacheDnsOutputReference Dns { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference">HpcCacheDnsOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.identity"></a>

```csharp
public HpcCacheIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference">HpcCacheIdentityOutputReference</a>

---

##### `MountAddresses`<sup>Required</sup> <a name="MountAddresses" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mountAddresses"></a>

```csharp
public string[] MountAddresses { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeouts"></a>

```csharp
public HpcCacheTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference">HpcCacheTimeoutsOutputReference</a>

---

##### `AutomaticallyRotateKeyToLatestEnabledInput`<sup>Optional</sup> <a name="AutomaticallyRotateKeyToLatestEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabledInput"></a>

```csharp
public object AutomaticallyRotateKeyToLatestEnabledInput { get; }
```

- *Type:* object

---

##### `CacheSizeInGbInput`<sup>Optional</sup> <a name="CacheSizeInGbInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGbInput"></a>

```csharp
public double CacheSizeInGbInput { get; }
```

- *Type:* double

---

##### `DefaultAccessPolicyInput`<sup>Optional</sup> <a name="DefaultAccessPolicyInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicyInput"></a>

```csharp
public HpcCacheDefaultAccessPolicy DefaultAccessPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

---

##### `DirectoryActiveDirectoryInput`<sup>Optional</sup> <a name="DirectoryActiveDirectoryInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectoryInput"></a>

```csharp
public HpcCacheDirectoryActiveDirectory DirectoryActiveDirectoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

---

##### `DirectoryFlatFileInput`<sup>Optional</sup> <a name="DirectoryFlatFileInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFileInput"></a>

```csharp
public HpcCacheDirectoryFlatFile DirectoryFlatFileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

---

##### `DirectoryLdapInput`<sup>Optional</sup> <a name="DirectoryLdapInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdapInput"></a>

```csharp
public HpcCacheDirectoryLdap DirectoryLdapInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dnsInput"></a>

```csharp
public HpcCacheDns DnsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.identityInput"></a>

```csharp
public HpcCacheIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NtpServerInput`<sup>Optional</sup> <a name="NtpServerInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServerInput"></a>

```csharp
public string NtpServerInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutomaticallyRotateKeyToLatestEnabled`<sup>Required</sup> <a name="AutomaticallyRotateKeyToLatestEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabled"></a>

```csharp
public object AutomaticallyRotateKeyToLatestEnabled { get; }
```

- *Type:* object

---

##### `CacheSizeInGb`<sup>Required</sup> <a name="CacheSizeInGb" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGb"></a>

```csharp
public double CacheSizeInGb { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NtpServer`<sup>Required</sup> <a name="NtpServer" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServer"></a>

```csharp
public string NtpServer { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HpcCacheConfig <a name="HpcCacheConfig" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double CacheSizeInGb,
    string Location,
    string Name,
    string ResourceGroupName,
    string SkuName,
    string SubnetId,
    object AutomaticallyRotateKeyToLatestEnabled = null,
    HpcCacheDefaultAccessPolicy DefaultAccessPolicy = null,
    HpcCacheDirectoryActiveDirectory DirectoryActiveDirectory = null,
    HpcCacheDirectoryFlatFile DirectoryFlatFile = null,
    HpcCacheDirectoryLdap DirectoryLdap = null,
    HpcCacheDns Dns = null,
    string Id = null,
    HpcCacheIdentity Identity = null,
    string KeyVaultKeyId = null,
    double Mtu = null,
    string NtpServer = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    HpcCacheTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.cacheSizeInGb">CacheSizeInGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#location HpcCache#location}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#name HpcCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.automaticallyRotateKeyToLatestEnabled">AutomaticallyRotateKeyToLatestEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.defaultAccessPolicy">DefaultAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | default_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryActiveDirectory">DirectoryActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | directory_active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryFlatFile">DirectoryFlatFile</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | directory_flat_file block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryLdap">DirectoryLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | directory_ldap block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#id HpcCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.mtu">Mtu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#mtu HpcCache#mtu}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.ntpServer">NtpServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#tags HpcCache#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CacheSizeInGb`<sup>Required</sup> <a name="CacheSizeInGb" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.cacheSizeInGb"></a>

```csharp
public double CacheSizeInGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#location HpcCache#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#name HpcCache#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}.

---

##### `AutomaticallyRotateKeyToLatestEnabled`<sup>Optional</sup> <a name="AutomaticallyRotateKeyToLatestEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.automaticallyRotateKeyToLatestEnabled"></a>

```csharp
public object AutomaticallyRotateKeyToLatestEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}.

---

##### `DefaultAccessPolicy`<sup>Optional</sup> <a name="DefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.defaultAccessPolicy"></a>

```csharp
public HpcCacheDefaultAccessPolicy DefaultAccessPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

default_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#default_access_policy HpcCache#default_access_policy}

---

##### `DirectoryActiveDirectory`<sup>Optional</sup> <a name="DirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryActiveDirectory"></a>

```csharp
public HpcCacheDirectoryActiveDirectory DirectoryActiveDirectory { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

directory_active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#directory_active_directory HpcCache#directory_active_directory}

---

##### `DirectoryFlatFile`<sup>Optional</sup> <a name="DirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryFlatFile"></a>

```csharp
public HpcCacheDirectoryFlatFile DirectoryFlatFile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

directory_flat_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#directory_flat_file HpcCache#directory_flat_file}

---

##### `DirectoryLdap`<sup>Optional</sup> <a name="DirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryLdap"></a>

```csharp
public HpcCacheDirectoryLdap DirectoryLdap { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

directory_ldap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#directory_ldap HpcCache#directory_ldap}

---

##### `Dns`<sup>Optional</sup> <a name="Dns" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dns"></a>

```csharp
public HpcCacheDns Dns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#dns HpcCache#dns}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#id HpcCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.identity"></a>

```csharp
public HpcCacheIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#identity HpcCache#identity}

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}.

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#mtu HpcCache#mtu}.

---

##### `NtpServer`<sup>Optional</sup> <a name="NtpServer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.ntpServer"></a>

```csharp
public string NtpServer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#tags HpcCache#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.timeouts"></a>

```csharp
public HpcCacheTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#timeouts HpcCache#timeouts}

---

### HpcCacheDefaultAccessPolicy <a name="HpcCacheDefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDefaultAccessPolicy {
    object AccessRule
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.property.accessRule">AccessRule</a></code> | <code>object</code> | access_rule block. |

---

##### `AccessRule`<sup>Required</sup> <a name="AccessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.property.accessRule"></a>

```csharp
public object AccessRule { get; set; }
```

- *Type:* object

access_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#access_rule HpcCache#access_rule}

---

### HpcCacheDefaultAccessPolicyAccessRule <a name="HpcCacheDefaultAccessPolicyAccessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDefaultAccessPolicyAccessRule {
    string Access,
    string Scope,
    double AnonymousGid = null,
    double AnonymousUid = null,
    string Filter = null,
    object RootSquashEnabled = null,
    object SubmountAccessEnabled = null,
    object SuidEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.access">Access</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#access HpcCache#access}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#scope HpcCache#scope}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousGid">AnonymousGid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#anonymous_gid HpcCache#anonymous_gid}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousUid">AnonymousUid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#anonymous_uid HpcCache#anonymous_uid}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.filter">Filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#filter HpcCache#filter}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.rootSquashEnabled">RootSquashEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#root_squash_enabled HpcCache#root_squash_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.submountAccessEnabled">SubmountAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#submount_access_enabled HpcCache#submount_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.suidEnabled">SuidEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#suid_enabled HpcCache#suid_enabled}. |

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.access"></a>

```csharp
public string Access { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#access HpcCache#access}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#scope HpcCache#scope}.

---

##### `AnonymousGid`<sup>Optional</sup> <a name="AnonymousGid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousGid"></a>

```csharp
public double AnonymousGid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#anonymous_gid HpcCache#anonymous_gid}.

---

##### `AnonymousUid`<sup>Optional</sup> <a name="AnonymousUid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousUid"></a>

```csharp
public double AnonymousUid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#anonymous_uid HpcCache#anonymous_uid}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#filter HpcCache#filter}.

---

##### `RootSquashEnabled`<sup>Optional</sup> <a name="RootSquashEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.rootSquashEnabled"></a>

```csharp
public object RootSquashEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#root_squash_enabled HpcCache#root_squash_enabled}.

---

##### `SubmountAccessEnabled`<sup>Optional</sup> <a name="SubmountAccessEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.submountAccessEnabled"></a>

```csharp
public object SubmountAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#submount_access_enabled HpcCache#submount_access_enabled}.

---

##### `SuidEnabled`<sup>Optional</sup> <a name="SuidEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.suidEnabled"></a>

```csharp
public object SuidEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#suid_enabled HpcCache#suid_enabled}.

---

### HpcCacheDirectoryActiveDirectory <a name="HpcCacheDirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDirectoryActiveDirectory {
    string CacheNetbiosName,
    string DnsPrimaryIp,
    string DomainName,
    string DomainNetbiosName,
    string Password,
    string Username,
    string DnsSecondaryIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.cacheNetbiosName">CacheNetbiosName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#cache_netbios_name HpcCache#cache_netbios_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsPrimaryIp">DnsPrimaryIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#dns_primary_ip HpcCache#dns_primary_ip}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#domain_name HpcCache#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainNetbiosName">DomainNetbiosName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#domain_netbios_name HpcCache#domain_netbios_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#password HpcCache#password}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#username HpcCache#username}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsSecondaryIp">DnsSecondaryIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#dns_secondary_ip HpcCache#dns_secondary_ip}. |

---

##### `CacheNetbiosName`<sup>Required</sup> <a name="CacheNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.cacheNetbiosName"></a>

```csharp
public string CacheNetbiosName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#cache_netbios_name HpcCache#cache_netbios_name}.

---

##### `DnsPrimaryIp`<sup>Required</sup> <a name="DnsPrimaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsPrimaryIp"></a>

```csharp
public string DnsPrimaryIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#dns_primary_ip HpcCache#dns_primary_ip}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#domain_name HpcCache#domain_name}.

---

##### `DomainNetbiosName`<sup>Required</sup> <a name="DomainNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainNetbiosName"></a>

```csharp
public string DomainNetbiosName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#domain_netbios_name HpcCache#domain_netbios_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#password HpcCache#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#username HpcCache#username}.

---

##### `DnsSecondaryIp`<sup>Optional</sup> <a name="DnsSecondaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsSecondaryIp"></a>

```csharp
public string DnsSecondaryIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#dns_secondary_ip HpcCache#dns_secondary_ip}.

---

### HpcCacheDirectoryFlatFile <a name="HpcCacheDirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDirectoryFlatFile {
    string GroupFileUri,
    string PasswordFileUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.groupFileUri">GroupFileUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#group_file_uri HpcCache#group_file_uri}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.passwordFileUri">PasswordFileUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#password_file_uri HpcCache#password_file_uri}. |

---

##### `GroupFileUri`<sup>Required</sup> <a name="GroupFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.groupFileUri"></a>

```csharp
public string GroupFileUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#group_file_uri HpcCache#group_file_uri}.

---

##### `PasswordFileUri`<sup>Required</sup> <a name="PasswordFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.passwordFileUri"></a>

```csharp
public string PasswordFileUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#password_file_uri HpcCache#password_file_uri}.

---

### HpcCacheDirectoryLdap <a name="HpcCacheDirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDirectoryLdap {
    string BaseDn,
    string Server,
    HpcCacheDirectoryLdapBind Bind = null,
    string CertificateValidationUri = null,
    object DownloadCertificateAutomatically = null,
    object Encrypted = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.baseDn">BaseDn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#base_dn HpcCache#base_dn}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.server">Server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#server HpcCache#server}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.bind">Bind</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | bind block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.certificateValidationUri">CertificateValidationUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#certificate_validation_uri HpcCache#certificate_validation_uri}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.downloadCertificateAutomatically">DownloadCertificateAutomatically</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#download_certificate_automatically HpcCache#download_certificate_automatically}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#encrypted HpcCache#encrypted}. |

---

##### `BaseDn`<sup>Required</sup> <a name="BaseDn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.baseDn"></a>

```csharp
public string BaseDn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#base_dn HpcCache#base_dn}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#server HpcCache#server}.

---

##### `Bind`<sup>Optional</sup> <a name="Bind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.bind"></a>

```csharp
public HpcCacheDirectoryLdapBind Bind { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

bind block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#bind HpcCache#bind}

---

##### `CertificateValidationUri`<sup>Optional</sup> <a name="CertificateValidationUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.certificateValidationUri"></a>

```csharp
public string CertificateValidationUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#certificate_validation_uri HpcCache#certificate_validation_uri}.

---

##### `DownloadCertificateAutomatically`<sup>Optional</sup> <a name="DownloadCertificateAutomatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.downloadCertificateAutomatically"></a>

```csharp
public object DownloadCertificateAutomatically { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#download_certificate_automatically HpcCache#download_certificate_automatically}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#encrypted HpcCache#encrypted}.

---

### HpcCacheDirectoryLdapBind <a name="HpcCacheDirectoryLdapBind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDirectoryLdapBind {
    string Dn,
    string Password
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.dn">Dn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#dn HpcCache#dn}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#password HpcCache#password}. |

---

##### `Dn`<sup>Required</sup> <a name="Dn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.dn"></a>

```csharp
public string Dn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#dn HpcCache#dn}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#password HpcCache#password}.

---

### HpcCacheDns <a name="HpcCacheDns" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDns {
    string[] Servers,
    string SearchDomain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.servers">Servers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#servers HpcCache#servers}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.searchDomain">SearchDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#search_domain HpcCache#search_domain}. |

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.servers"></a>

```csharp
public string[] Servers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#servers HpcCache#servers}.

---

##### `SearchDomain`<sup>Optional</sup> <a name="SearchDomain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.searchDomain"></a>

```csharp
public string SearchDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#search_domain HpcCache#search_domain}.

---

### HpcCacheIdentity <a name="HpcCacheIdentity" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#type HpcCache#type}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#identity_ids HpcCache#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#type HpcCache#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#identity_ids HpcCache#identity_ids}.

---

### HpcCacheTimeouts <a name="HpcCacheTimeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#create HpcCache#create}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#delete HpcCache#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#read HpcCache#read}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#update HpcCache#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#create HpcCache#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#delete HpcCache#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#read HpcCache#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/hpc_cache#update HpcCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HpcCacheDefaultAccessPolicyAccessRuleList <a name="HpcCacheDefaultAccessPolicyAccessRuleList" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDefaultAccessPolicyAccessRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get"></a>

```csharp
private HpcCacheDefaultAccessPolicyAccessRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HpcCacheDefaultAccessPolicyAccessRuleOutputReference <a name="HpcCacheDefaultAccessPolicyAccessRuleOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDefaultAccessPolicyAccessRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousGid">ResetAnonymousGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousUid">ResetAnonymousUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetRootSquashEnabled">ResetRootSquashEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSubmountAccessEnabled">ResetSubmountAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSuidEnabled">ResetSuidEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnonymousGid` <a name="ResetAnonymousGid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousGid"></a>

```csharp
private void ResetAnonymousGid()
```

##### `ResetAnonymousUid` <a name="ResetAnonymousUid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousUid"></a>

```csharp
private void ResetAnonymousUid()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetRootSquashEnabled` <a name="ResetRootSquashEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetRootSquashEnabled"></a>

```csharp
private void ResetRootSquashEnabled()
```

##### `ResetSubmountAccessEnabled` <a name="ResetSubmountAccessEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSubmountAccessEnabled"></a>

```csharp
private void ResetSubmountAccessEnabled()
```

##### `ResetSuidEnabled` <a name="ResetSuidEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSuidEnabled"></a>

```csharp
private void ResetSuidEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.accessInput">AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGidInput">AnonymousGidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUidInput">AnonymousUidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabledInput">RootSquashEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabledInput">SubmountAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabledInput">SuidEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.access">Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGid">AnonymousGid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUid">AnonymousUid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabled">RootSquashEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabled">SubmountAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabled">SuidEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.accessInput"></a>

```csharp
public string AccessInput { get; }
```

- *Type:* string

---

##### `AnonymousGidInput`<sup>Optional</sup> <a name="AnonymousGidInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGidInput"></a>

```csharp
public double AnonymousGidInput { get; }
```

- *Type:* double

---

##### `AnonymousUidInput`<sup>Optional</sup> <a name="AnonymousUidInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUidInput"></a>

```csharp
public double AnonymousUidInput { get; }
```

- *Type:* double

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `RootSquashEnabledInput`<sup>Optional</sup> <a name="RootSquashEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabledInput"></a>

```csharp
public object RootSquashEnabledInput { get; }
```

- *Type:* object

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `SubmountAccessEnabledInput`<sup>Optional</sup> <a name="SubmountAccessEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabledInput"></a>

```csharp
public object SubmountAccessEnabledInput { get; }
```

- *Type:* object

---

##### `SuidEnabledInput`<sup>Optional</sup> <a name="SuidEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabledInput"></a>

```csharp
public object SuidEnabledInput { get; }
```

- *Type:* object

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.access"></a>

```csharp
public string Access { get; }
```

- *Type:* string

---

##### `AnonymousGid`<sup>Required</sup> <a name="AnonymousGid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGid"></a>

```csharp
public double AnonymousGid { get; }
```

- *Type:* double

---

##### `AnonymousUid`<sup>Required</sup> <a name="AnonymousUid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUid"></a>

```csharp
public double AnonymousUid { get; }
```

- *Type:* double

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `RootSquashEnabled`<sup>Required</sup> <a name="RootSquashEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabled"></a>

```csharp
public object RootSquashEnabled { get; }
```

- *Type:* object

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `SubmountAccessEnabled`<sup>Required</sup> <a name="SubmountAccessEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabled"></a>

```csharp
public object SubmountAccessEnabled { get; }
```

- *Type:* object

---

##### `SuidEnabled`<sup>Required</sup> <a name="SuidEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabled"></a>

```csharp
public object SuidEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HpcCacheDefaultAccessPolicyOutputReference <a name="HpcCacheDefaultAccessPolicyOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDefaultAccessPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule">PutAccessRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessRule` <a name="PutAccessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule"></a>

```csharp
private void PutAccessRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRule">AccessRule</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList">HpcCacheDefaultAccessPolicyAccessRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRuleInput">AccessRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessRule`<sup>Required</sup> <a name="AccessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRule"></a>

```csharp
public HpcCacheDefaultAccessPolicyAccessRuleList AccessRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList">HpcCacheDefaultAccessPolicyAccessRuleList</a>

---

##### `AccessRuleInput`<sup>Optional</sup> <a name="AccessRuleInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRuleInput"></a>

```csharp
public object AccessRuleInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.internalValue"></a>

```csharp
public HpcCacheDefaultAccessPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

---


### HpcCacheDirectoryActiveDirectoryOutputReference <a name="HpcCacheDirectoryActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDirectoryActiveDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resetDnsSecondaryIp">ResetDnsSecondaryIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsSecondaryIp` <a name="ResetDnsSecondaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resetDnsSecondaryIp"></a>

```csharp
private void ResetDnsSecondaryIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosNameInput">CacheNetbiosNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIpInput">DnsPrimaryIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIpInput">DnsSecondaryIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosNameInput">DomainNetbiosNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosName">CacheNetbiosName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIp">DnsPrimaryIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIp">DnsSecondaryIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosName">DomainNetbiosName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheNetbiosNameInput`<sup>Optional</sup> <a name="CacheNetbiosNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosNameInput"></a>

```csharp
public string CacheNetbiosNameInput { get; }
```

- *Type:* string

---

##### `DnsPrimaryIpInput`<sup>Optional</sup> <a name="DnsPrimaryIpInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIpInput"></a>

```csharp
public string DnsPrimaryIpInput { get; }
```

- *Type:* string

---

##### `DnsSecondaryIpInput`<sup>Optional</sup> <a name="DnsSecondaryIpInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIpInput"></a>

```csharp
public string DnsSecondaryIpInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `DomainNetbiosNameInput`<sup>Optional</sup> <a name="DomainNetbiosNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosNameInput"></a>

```csharp
public string DomainNetbiosNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `CacheNetbiosName`<sup>Required</sup> <a name="CacheNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosName"></a>

```csharp
public string CacheNetbiosName { get; }
```

- *Type:* string

---

##### `DnsPrimaryIp`<sup>Required</sup> <a name="DnsPrimaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIp"></a>

```csharp
public string DnsPrimaryIp { get; }
```

- *Type:* string

---

##### `DnsSecondaryIp`<sup>Required</sup> <a name="DnsSecondaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIp"></a>

```csharp
public string DnsSecondaryIp { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `DomainNetbiosName`<sup>Required</sup> <a name="DomainNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosName"></a>

```csharp
public string DomainNetbiosName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.internalValue"></a>

```csharp
public HpcCacheDirectoryActiveDirectory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

---


### HpcCacheDirectoryFlatFileOutputReference <a name="HpcCacheDirectoryFlatFileOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDirectoryFlatFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUriInput">GroupFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUriInput">PasswordFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUri">GroupFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUri">PasswordFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupFileUriInput`<sup>Optional</sup> <a name="GroupFileUriInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUriInput"></a>

```csharp
public string GroupFileUriInput { get; }
```

- *Type:* string

---

##### `PasswordFileUriInput`<sup>Optional</sup> <a name="PasswordFileUriInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUriInput"></a>

```csharp
public string PasswordFileUriInput { get; }
```

- *Type:* string

---

##### `GroupFileUri`<sup>Required</sup> <a name="GroupFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUri"></a>

```csharp
public string GroupFileUri { get; }
```

- *Type:* string

---

##### `PasswordFileUri`<sup>Required</sup> <a name="PasswordFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUri"></a>

```csharp
public string PasswordFileUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.internalValue"></a>

```csharp
public HpcCacheDirectoryFlatFile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

---


### HpcCacheDirectoryLdapBindOutputReference <a name="HpcCacheDirectoryLdapBindOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDirectoryLdapBindOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dnInput">DnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dn">Dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnInput`<sup>Optional</sup> <a name="DnInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dnInput"></a>

```csharp
public string DnInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `Dn`<sup>Required</sup> <a name="Dn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dn"></a>

```csharp
public string Dn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.internalValue"></a>

```csharp
public HpcCacheDirectoryLdapBind InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

---


### HpcCacheDirectoryLdapOutputReference <a name="HpcCacheDirectoryLdapOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDirectoryLdapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind">PutBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetBind">ResetBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetCertificateValidationUri">ResetCertificateValidationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetDownloadCertificateAutomatically">ResetDownloadCertificateAutomatically</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBind` <a name="PutBind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind"></a>

```csharp
private void PutBind(HpcCacheDirectoryLdapBind Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

---

##### `ResetBind` <a name="ResetBind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetBind"></a>

```csharp
private void ResetBind()
```

##### `ResetCertificateValidationUri` <a name="ResetCertificateValidationUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetCertificateValidationUri"></a>

```csharp
private void ResetCertificateValidationUri()
```

##### `ResetDownloadCertificateAutomatically` <a name="ResetDownloadCertificateAutomatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetDownloadCertificateAutomatically"></a>

```csharp
private void ResetDownloadCertificateAutomatically()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bind">Bind</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference">HpcCacheDirectoryLdapBindOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDnInput">BaseDnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bindInput">BindInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUriInput">CertificateValidationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomaticallyInput">DownloadCertificateAutomaticallyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDn">BaseDn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUri">CertificateValidationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomatically">DownloadCertificateAutomatically</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bind`<sup>Required</sup> <a name="Bind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bind"></a>

```csharp
public HpcCacheDirectoryLdapBindOutputReference Bind { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference">HpcCacheDirectoryLdapBindOutputReference</a>

---

##### `BaseDnInput`<sup>Optional</sup> <a name="BaseDnInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDnInput"></a>

```csharp
public string BaseDnInput { get; }
```

- *Type:* string

---

##### `BindInput`<sup>Optional</sup> <a name="BindInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bindInput"></a>

```csharp
public HpcCacheDirectoryLdapBind BindInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

---

##### `CertificateValidationUriInput`<sup>Optional</sup> <a name="CertificateValidationUriInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUriInput"></a>

```csharp
public string CertificateValidationUriInput { get; }
```

- *Type:* string

---

##### `DownloadCertificateAutomaticallyInput`<sup>Optional</sup> <a name="DownloadCertificateAutomaticallyInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomaticallyInput"></a>

```csharp
public object DownloadCertificateAutomaticallyInput { get; }
```

- *Type:* object

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `BaseDn`<sup>Required</sup> <a name="BaseDn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDn"></a>

```csharp
public string BaseDn { get; }
```

- *Type:* string

---

##### `CertificateValidationUri`<sup>Required</sup> <a name="CertificateValidationUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUri"></a>

```csharp
public string CertificateValidationUri { get; }
```

- *Type:* string

---

##### `DownloadCertificateAutomatically`<sup>Required</sup> <a name="DownloadCertificateAutomatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomatically"></a>

```csharp
public object DownloadCertificateAutomatically { get; }
```

- *Type:* object

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.internalValue"></a>

```csharp
public HpcCacheDirectoryLdap InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

---


### HpcCacheDnsOutputReference <a name="HpcCacheDnsOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheDnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resetSearchDomain">ResetSearchDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSearchDomain` <a name="ResetSearchDomain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resetSearchDomain"></a>

```csharp
private void ResetSearchDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomainInput">SearchDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.serversInput">ServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomain">SearchDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.servers">Servers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SearchDomainInput`<sup>Optional</sup> <a name="SearchDomainInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomainInput"></a>

```csharp
public string SearchDomainInput { get; }
```

- *Type:* string

---

##### `ServersInput`<sup>Optional</sup> <a name="ServersInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.serversInput"></a>

```csharp
public string[] ServersInput { get; }
```

- *Type:* string[]

---

##### `SearchDomain`<sup>Required</sup> <a name="SearchDomain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomain"></a>

```csharp
public string SearchDomain { get; }
```

- *Type:* string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.servers"></a>

```csharp
public string[] Servers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.internalValue"></a>

```csharp
public HpcCacheDns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

---


### HpcCacheIdentityOutputReference <a name="HpcCacheIdentityOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.internalValue"></a>

```csharp
public HpcCacheIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

---


### HpcCacheTimeoutsOutputReference <a name="HpcCacheTimeoutsOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



