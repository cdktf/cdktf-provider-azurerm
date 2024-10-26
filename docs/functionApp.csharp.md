# `functionApp` Submodule <a name="`functionApp` Submodule" id="@cdktf/provider-azurerm.functionApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionApp <a name="FunctionApp" id="@cdktf/provider-azurerm.functionApp.FunctionApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app azurerm_function_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionApp(Construct Scope, string Id, FunctionAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig">FunctionAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig">FunctionAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings">PutAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putConnectionString">PutConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig">PutSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl">PutSourceControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetAppSettings">ResetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetAuthSettings">ResetAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetClientCertMode">ResetClientCertMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetDailyMemoryTimeQuota">ResetDailyMemoryTimeQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnableBuiltinLogging">ResetEnableBuiltinLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetHttpsOnly">ResetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetKeyVaultReferenceIdentityId">ResetKeyVaultReferenceIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetOsType">ResetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetSiteConfig">ResetSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetSourceControl">ResetSourceControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.functionApp.FunctionApp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.functionApp.FunctionApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.functionApp.FunctionApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.functionApp.FunctionApp.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.functionApp.FunctionApp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.functionApp.FunctionApp.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.functionApp.FunctionApp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.functionApp.FunctionApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.functionApp.FunctionApp.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthSettings` <a name="PutAuthSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings"></a>

```csharp
private void PutAuthSettings(FunctionAppAuthSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

---

##### `PutConnectionString` <a name="PutConnectionString" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putConnectionString"></a>

```csharp
private void PutConnectionString(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putConnectionString.parameter.value"></a>

- *Type:* object

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putIdentity"></a>

```csharp
private void PutIdentity(FunctionAppIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

---

##### `PutSiteConfig` <a name="PutSiteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig"></a>

```csharp
private void PutSiteConfig(FunctionAppSiteConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

---

##### `PutSourceControl` <a name="PutSourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl"></a>

```csharp
private void PutSourceControl(FunctionAppSourceControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts"></a>

```csharp
private void PutTimeouts(FunctionAppTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>

---

##### `ResetAppSettings` <a name="ResetAppSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetAppSettings"></a>

```csharp
private void ResetAppSettings()
```

##### `ResetAuthSettings` <a name="ResetAuthSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetAuthSettings"></a>

```csharp
private void ResetAuthSettings()
```

##### `ResetClientCertMode` <a name="ResetClientCertMode" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetClientCertMode"></a>

```csharp
private void ResetClientCertMode()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetDailyMemoryTimeQuota` <a name="ResetDailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetDailyMemoryTimeQuota"></a>

```csharp
private void ResetDailyMemoryTimeQuota()
```

##### `ResetEnableBuiltinLogging` <a name="ResetEnableBuiltinLogging" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnableBuiltinLogging"></a>

```csharp
private void ResetEnableBuiltinLogging()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHttpsOnly` <a name="ResetHttpsOnly" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetHttpsOnly"></a>

```csharp
private void ResetHttpsOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetKeyVaultReferenceIdentityId` <a name="ResetKeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetKeyVaultReferenceIdentityId"></a>

```csharp
private void ResetKeyVaultReferenceIdentityId()
```

##### `ResetOsType` <a name="ResetOsType" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetOsType"></a>

```csharp
private void ResetOsType()
```

##### `ResetSiteConfig` <a name="ResetSiteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetSiteConfig"></a>

```csharp
private void ResetSiteConfig()
```

##### `ResetSourceControl` <a name="ResetSourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetSourceControl"></a>

```csharp
private void ResetSourceControl()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionApp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FunctionApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FunctionApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FunctionApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.functionApp.FunctionApp.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FunctionApp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FunctionApp resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.functionApp.FunctionApp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FunctionApp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FunctionApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.functionApp.FunctionApp.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FunctionApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettings">AuthSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference">FunctionAppAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionString">ConnectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList">FunctionAppConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.customDomainVerificationId">CustomDomainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.defaultHostname">DefaultHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference">FunctionAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.outboundIpAddresses">OutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.possibleOutboundIpAddresses">PossibleOutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference">FunctionAppSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteCredential">SiteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList">FunctionAppSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControl">SourceControl</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference">FunctionAppSourceControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference">FunctionAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanIdInput">AppServicePlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettingsInput">AppSettingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettingsInput">AuthSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertModeInput">ClientCertModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionStringInput">ConnectionStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuotaInput">DailyMemoryTimeQuotaInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLoggingInput">EnableBuiltinLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnlyInput">HttpsOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityIdInput">KeyVaultReferenceIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.osTypeInput">OsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfigInput">SiteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControlInput">SourceControlInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanId">AppServicePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettings">AppSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertMode">ClientCertMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuota">DailyMemoryTimeQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLogging">EnableBuiltinLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnly">HttpsOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityId">KeyVaultReferenceIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.osType">OsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuthSettings`<sup>Required</sup> <a name="AuthSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettings"></a>

```csharp
public FunctionAppAuthSettingsOutputReference AuthSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference">FunctionAppAuthSettingsOutputReference</a>

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionString"></a>

```csharp
public FunctionAppConnectionStringList ConnectionString { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList">FunctionAppConnectionStringList</a>

---

##### `CustomDomainVerificationId`<sup>Required</sup> <a name="CustomDomainVerificationId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.customDomainVerificationId"></a>

```csharp
public string CustomDomainVerificationId { get; }
```

- *Type:* string

---

##### `DefaultHostname`<sup>Required</sup> <a name="DefaultHostname" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.defaultHostname"></a>

```csharp
public string DefaultHostname { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.identity"></a>

```csharp
public FunctionAppIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference">FunctionAppIdentityOutputReference</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `OutboundIpAddresses`<sup>Required</sup> <a name="OutboundIpAddresses" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.outboundIpAddresses"></a>

```csharp
public string OutboundIpAddresses { get; }
```

- *Type:* string

---

##### `PossibleOutboundIpAddresses`<sup>Required</sup> <a name="PossibleOutboundIpAddresses" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.possibleOutboundIpAddresses"></a>

```csharp
public string PossibleOutboundIpAddresses { get; }
```

- *Type:* string

---

##### `SiteConfig`<sup>Required</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfig"></a>

```csharp
public FunctionAppSiteConfigOutputReference SiteConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference">FunctionAppSiteConfigOutputReference</a>

---

##### `SiteCredential`<sup>Required</sup> <a name="SiteCredential" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteCredential"></a>

```csharp
public FunctionAppSiteCredentialList SiteCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList">FunctionAppSiteCredentialList</a>

---

##### `SourceControl`<sup>Required</sup> <a name="SourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControl"></a>

```csharp
public FunctionAppSourceControlOutputReference SourceControl { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference">FunctionAppSourceControlOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeouts"></a>

```csharp
public FunctionAppTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference">FunctionAppTimeoutsOutputReference</a>

---

##### `AppServicePlanIdInput`<sup>Optional</sup> <a name="AppServicePlanIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanIdInput"></a>

```csharp
public string AppServicePlanIdInput { get; }
```

- *Type:* string

---

##### `AppSettingsInput`<sup>Optional</sup> <a name="AppSettingsInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AppSettingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthSettingsInput`<sup>Optional</sup> <a name="AuthSettingsInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettingsInput"></a>

```csharp
public FunctionAppAuthSettings AuthSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

---

##### `ClientCertModeInput`<sup>Optional</sup> <a name="ClientCertModeInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertModeInput"></a>

```csharp
public string ClientCertModeInput { get; }
```

- *Type:* string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionStringInput"></a>

```csharp
public object ConnectionStringInput { get; }
```

- *Type:* object

---

##### `DailyMemoryTimeQuotaInput`<sup>Optional</sup> <a name="DailyMemoryTimeQuotaInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuotaInput"></a>

```csharp
public double DailyMemoryTimeQuotaInput { get; }
```

- *Type:* double

---

##### `EnableBuiltinLoggingInput`<sup>Optional</sup> <a name="EnableBuiltinLoggingInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLoggingInput"></a>

```csharp
public object EnableBuiltinLoggingInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HttpsOnlyInput`<sup>Optional</sup> <a name="HttpsOnlyInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnlyInput"></a>

```csharp
public object HttpsOnlyInput { get; }
```

- *Type:* object

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.identityInput"></a>

```csharp
public FunctionAppIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyVaultReferenceIdentityIdInput`<sup>Optional</sup> <a name="KeyVaultReferenceIdentityIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityIdInput"></a>

```csharp
public string KeyVaultReferenceIdentityIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.osTypeInput"></a>

```csharp
public string OsTypeInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SiteConfigInput`<sup>Optional</sup> <a name="SiteConfigInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfigInput"></a>

```csharp
public FunctionAppSiteConfig SiteConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

---

##### `SourceControlInput`<sup>Optional</sup> <a name="SourceControlInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControlInput"></a>

```csharp
public FunctionAppSourceControl SourceControlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKeyInput"></a>

```csharp
public string StorageAccountAccessKeyInput { get; }
```

- *Type:* string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountNameInput"></a>

```csharp
public string StorageAccountNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `AppServicePlanId`<sup>Required</sup> <a name="AppServicePlanId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanId"></a>

```csharp
public string AppServicePlanId { get; }
```

- *Type:* string

---

##### `AppSettings`<sup>Required</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AppSettings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClientCertMode`<sup>Required</sup> <a name="ClientCertMode" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertMode"></a>

```csharp
public string ClientCertMode { get; }
```

- *Type:* string

---

##### `DailyMemoryTimeQuota`<sup>Required</sup> <a name="DailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuota"></a>

```csharp
public double DailyMemoryTimeQuota { get; }
```

- *Type:* double

---

##### `EnableBuiltinLogging`<sup>Required</sup> <a name="EnableBuiltinLogging" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLogging"></a>

```csharp
public object EnableBuiltinLogging { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `HttpsOnly`<sup>Required</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnly"></a>

```csharp
public object HttpsOnly { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyVaultReferenceIdentityId`<sup>Required</sup> <a name="KeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityId"></a>

```csharp
public string KeyVaultReferenceIdentityId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.osType"></a>

```csharp
public string OsType { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; }
```

- *Type:* string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionAppAuthSettings <a name="FunctionAppAuthSettings" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppAuthSettings {
    object Enabled,
    FunctionAppAuthSettingsActiveDirectory ActiveDirectory = null,
    System.Collections.Generic.IDictionary<string, string> AdditionalLoginParams = null,
    string[] AllowedExternalRedirectUrls = null,
    string DefaultProvider = null,
    FunctionAppAuthSettingsFacebook Facebook = null,
    FunctionAppAuthSettingsGoogle Google = null,
    string Issuer = null,
    FunctionAppAuthSettingsMicrosoft Microsoft = null,
    string RuntimeVersion = null,
    double TokenRefreshExtensionHours = null,
    object TokenStoreEnabled = null,
    FunctionAppAuthSettingsTwitter Twitter = null,
    string UnauthenticatedClientAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#enabled FunctionApp#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.additionalLoginParams">AdditionalLoginParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#additional_login_params FunctionApp#additional_login_params}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.allowedExternalRedirectUrls">AllowedExternalRedirectUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#allowed_external_redirect_urls FunctionApp#allowed_external_redirect_urls}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.defaultProvider">DefaultProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#default_provider FunctionApp#default_provider}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.facebook">Facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.google">Google</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#issuer FunctionApp#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.microsoft">Microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#runtime_version FunctionApp#runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenRefreshExtensionHours">TokenRefreshExtensionHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#token_refresh_extension_hours FunctionApp#token_refresh_extension_hours}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenStoreEnabled">TokenStoreEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#token_store_enabled FunctionApp#token_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.twitter">Twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.unauthenticatedClientAction">UnauthenticatedClientAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#unauthenticated_client_action FunctionApp#unauthenticated_client_action}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#enabled FunctionApp#enabled}.

---

##### `ActiveDirectory`<sup>Optional</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.activeDirectory"></a>

```csharp
public FunctionAppAuthSettingsActiveDirectory ActiveDirectory { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#active_directory FunctionApp#active_directory}

---

##### `AdditionalLoginParams`<sup>Optional</sup> <a name="AdditionalLoginParams" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.additionalLoginParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalLoginParams { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#additional_login_params FunctionApp#additional_login_params}.

---

##### `AllowedExternalRedirectUrls`<sup>Optional</sup> <a name="AllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.allowedExternalRedirectUrls"></a>

```csharp
public string[] AllowedExternalRedirectUrls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#allowed_external_redirect_urls FunctionApp#allowed_external_redirect_urls}.

---

##### `DefaultProvider`<sup>Optional</sup> <a name="DefaultProvider" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.defaultProvider"></a>

```csharp
public string DefaultProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#default_provider FunctionApp#default_provider}.

---

##### `Facebook`<sup>Optional</sup> <a name="Facebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.facebook"></a>

```csharp
public FunctionAppAuthSettingsFacebook Facebook { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#facebook FunctionApp#facebook}

---

##### `Google`<sup>Optional</sup> <a name="Google" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.google"></a>

```csharp
public FunctionAppAuthSettingsGoogle Google { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#google FunctionApp#google}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#issuer FunctionApp#issuer}.

---

##### `Microsoft`<sup>Optional</sup> <a name="Microsoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.microsoft"></a>

```csharp
public FunctionAppAuthSettingsMicrosoft Microsoft { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#microsoft FunctionApp#microsoft}

---

##### `RuntimeVersion`<sup>Optional</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#runtime_version FunctionApp#runtime_version}.

---

##### `TokenRefreshExtensionHours`<sup>Optional</sup> <a name="TokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenRefreshExtensionHours"></a>

```csharp
public double TokenRefreshExtensionHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#token_refresh_extension_hours FunctionApp#token_refresh_extension_hours}.

---

##### `TokenStoreEnabled`<sup>Optional</sup> <a name="TokenStoreEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenStoreEnabled"></a>

```csharp
public object TokenStoreEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#token_store_enabled FunctionApp#token_store_enabled}.

---

##### `Twitter`<sup>Optional</sup> <a name="Twitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.twitter"></a>

```csharp
public FunctionAppAuthSettingsTwitter Twitter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#twitter FunctionApp#twitter}

---

##### `UnauthenticatedClientAction`<sup>Optional</sup> <a name="UnauthenticatedClientAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.unauthenticatedClientAction"></a>

```csharp
public string UnauthenticatedClientAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#unauthenticated_client_action FunctionApp#unauthenticated_client_action}.

---

### FunctionAppAuthSettingsActiveDirectory <a name="FunctionAppAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppAuthSettingsActiveDirectory {
    string ClientId,
    string[] AllowedAudiences = null,
    string ClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#client_id FunctionApp#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.allowedAudiences">AllowedAudiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#allowed_audiences FunctionApp#allowed_audiences}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#client_secret FunctionApp#client_secret}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#client_id FunctionApp#client_id}.

---

##### `AllowedAudiences`<sup>Optional</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```csharp
public string[] AllowedAudiences { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#allowed_audiences FunctionApp#allowed_audiences}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

### FunctionAppAuthSettingsFacebook <a name="FunctionAppAuthSettingsFacebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppAuthSettingsFacebook {
    string AppId,
    string AppSecret,
    string[] OauthScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appId">AppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#app_id FunctionApp#app_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appSecret">AppSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#app_secret FunctionApp#app_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}. |

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#app_id FunctionApp#app_id}.

---

##### `AppSecret`<sup>Required</sup> <a name="AppSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appSecret"></a>

```csharp
public string AppSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#app_secret FunctionApp#app_secret}.

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

### FunctionAppAuthSettingsGoogle <a name="FunctionAppAuthSettingsGoogle" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppAuthSettingsGoogle {
    string ClientId,
    string ClientSecret,
    string[] OauthScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#client_id FunctionApp#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#client_secret FunctionApp#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#client_id FunctionApp#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

### FunctionAppAuthSettingsMicrosoft <a name="FunctionAppAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppAuthSettingsMicrosoft {
    string ClientId,
    string ClientSecret,
    string[] OauthScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#client_id FunctionApp#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#client_secret FunctionApp#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#client_id FunctionApp#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

### FunctionAppAuthSettingsTwitter <a name="FunctionAppAuthSettingsTwitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppAuthSettingsTwitter {
    string ConsumerKey,
    string ConsumerSecret
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#consumer_key FunctionApp#consumer_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#consumer_secret FunctionApp#consumer_secret}. |

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#consumer_key FunctionApp#consumer_key}.

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#consumer_secret FunctionApp#consumer_secret}.

---

### FunctionAppConfig <a name="FunctionAppConfig" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppServicePlanId,
    string Location,
    string Name,
    string ResourceGroupName,
    string StorageAccountAccessKey,
    string StorageAccountName,
    System.Collections.Generic.IDictionary<string, string> AppSettings = null,
    FunctionAppAuthSettings AuthSettings = null,
    string ClientCertMode = null,
    object ConnectionString = null,
    double DailyMemoryTimeQuota = null,
    object EnableBuiltinLogging = null,
    object Enabled = null,
    object HttpsOnly = null,
    string Id = null,
    FunctionAppIdentity Identity = null,
    string KeyVaultReferenceIdentityId = null,
    string OsType = null,
    FunctionAppSiteConfig SiteConfig = null,
    FunctionAppSourceControl SourceControl = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    FunctionAppTimeouts Timeouts = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appServicePlanId">AppServicePlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#app_service_plan_id FunctionApp#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#location FunctionApp#location}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#resource_group_name FunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#storage_account_access_key FunctionApp#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#storage_account_name FunctionApp#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appSettings">AppSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#app_settings FunctionApp#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.authSettings">AuthSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.clientCertMode">ClientCertMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#client_cert_mode FunctionApp#client_cert_mode}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connectionString">ConnectionString</a></code> | <code>object</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dailyMemoryTimeQuota">DailyMemoryTimeQuota</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#daily_memory_time_quota FunctionApp#daily_memory_time_quota}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enableBuiltinLogging">EnableBuiltinLogging</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#enable_builtin_logging FunctionApp#enable_builtin_logging}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#enabled FunctionApp#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.httpsOnly">HttpsOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#https_only FunctionApp#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#id FunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.keyVaultReferenceIdentityId">KeyVaultReferenceIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#key_vault_reference_identity_id FunctionApp#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.osType">OsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#os_type FunctionApp#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.sourceControl">SourceControl</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a></code> | source_control block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#tags FunctionApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#version FunctionApp#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppServicePlanId`<sup>Required</sup> <a name="AppServicePlanId" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appServicePlanId"></a>

```csharp
public string AppServicePlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#app_service_plan_id FunctionApp#app_service_plan_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#location FunctionApp#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#name FunctionApp#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#resource_group_name FunctionApp#resource_group_name}.

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#storage_account_access_key FunctionApp#storage_account_access_key}.

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#storage_account_name FunctionApp#storage_account_name}.

---

##### `AppSettings`<sup>Optional</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AppSettings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#app_settings FunctionApp#app_settings}.

---

##### `AuthSettings`<sup>Optional</sup> <a name="AuthSettings" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.authSettings"></a>

```csharp
public FunctionAppAuthSettings AuthSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#auth_settings FunctionApp#auth_settings}

---

##### `ClientCertMode`<sup>Optional</sup> <a name="ClientCertMode" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.clientCertMode"></a>

```csharp
public string ClientCertMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#client_cert_mode FunctionApp#client_cert_mode}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connectionString"></a>

```csharp
public object ConnectionString { get; set; }
```

- *Type:* object

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#connection_string FunctionApp#connection_string}

---

##### `DailyMemoryTimeQuota`<sup>Optional</sup> <a name="DailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dailyMemoryTimeQuota"></a>

```csharp
public double DailyMemoryTimeQuota { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#daily_memory_time_quota FunctionApp#daily_memory_time_quota}.

---

##### `EnableBuiltinLogging`<sup>Optional</sup> <a name="EnableBuiltinLogging" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enableBuiltinLogging"></a>

```csharp
public object EnableBuiltinLogging { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#enable_builtin_logging FunctionApp#enable_builtin_logging}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#enabled FunctionApp#enabled}.

---

##### `HttpsOnly`<sup>Optional</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.httpsOnly"></a>

```csharp
public object HttpsOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#https_only FunctionApp#https_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#id FunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.identity"></a>

```csharp
public FunctionAppIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#identity FunctionApp#identity}

---

##### `KeyVaultReferenceIdentityId`<sup>Optional</sup> <a name="KeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.keyVaultReferenceIdentityId"></a>

```csharp
public string KeyVaultReferenceIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#key_vault_reference_identity_id FunctionApp#key_vault_reference_identity_id}.

---

##### `OsType`<sup>Optional</sup> <a name="OsType" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.osType"></a>

```csharp
public string OsType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#os_type FunctionApp#os_type}.

---

##### `SiteConfig`<sup>Optional</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.siteConfig"></a>

```csharp
public FunctionAppSiteConfig SiteConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#site_config FunctionApp#site_config}

---

##### `SourceControl`<sup>Optional</sup> <a name="SourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.sourceControl"></a>

```csharp
public FunctionAppSourceControl SourceControl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

source_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#source_control FunctionApp#source_control}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#tags FunctionApp#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.timeouts"></a>

```csharp
public FunctionAppTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#timeouts FunctionApp#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#version FunctionApp#version}.

---

### FunctionAppConnectionString <a name="FunctionAppConnectionString" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppConnectionString {
    string Name,
    string Type,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#type FunctionApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#value FunctionApp#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#name FunctionApp#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#type FunctionApp#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#value FunctionApp#value}.

---

### FunctionAppIdentity <a name="FunctionAppIdentity" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#type FunctionApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#identity_ids FunctionApp#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#type FunctionApp#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#identity_ids FunctionApp#identity_ids}.

---

### FunctionAppSiteConfig <a name="FunctionAppSiteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfig {
    object AlwaysOn = null,
    double AppScaleLimit = null,
    string AutoSwapSlotName = null,
    FunctionAppSiteConfigCors Cors = null,
    string DotnetFrameworkVersion = null,
    double ElasticInstanceMinimum = null,
    string FtpsState = null,
    string HealthCheckPath = null,
    object Http2Enabled = null,
    object IpRestriction = null,
    string JavaVersion = null,
    string LinuxFxVersion = null,
    string MinTlsVersion = null,
    double PreWarmedInstanceCount = null,
    object RuntimeScaleMonitoringEnabled = null,
    object ScmIpRestriction = null,
    string ScmType = null,
    object ScmUseMainIpRestriction = null,
    object Use32BitWorkerProcess = null,
    object VnetRouteAllEnabled = null,
    object WebsocketsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.alwaysOn">AlwaysOn</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#always_on FunctionApp#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.appScaleLimit">AppScaleLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#app_scale_limit FunctionApp#app_scale_limit}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.autoSwapSlotName">AutoSwapSlotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#auto_swap_slot_name FunctionApp#auto_swap_slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.dotnetFrameworkVersion">DotnetFrameworkVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#dotnet_framework_version FunctionApp#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.elasticInstanceMinimum">ElasticInstanceMinimum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#elastic_instance_minimum FunctionApp#elastic_instance_minimum}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ftpsState">FtpsState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#ftps_state FunctionApp#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#health_check_path FunctionApp#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.http2Enabled">Http2Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#http2_enabled FunctionApp#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ipRestriction">IpRestriction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#ip_restriction FunctionApp#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.javaVersion">JavaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#java_version FunctionApp#java_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.linuxFxVersion">LinuxFxVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#linux_fx_version FunctionApp#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#min_tls_version FunctionApp#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.preWarmedInstanceCount">PreWarmedInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#pre_warmed_instance_count FunctionApp#pre_warmed_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.runtimeScaleMonitoringEnabled">RuntimeScaleMonitoringEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#runtime_scale_monitoring_enabled FunctionApp#runtime_scale_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmIpRestriction">ScmIpRestriction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#scm_ip_restriction FunctionApp#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmType">ScmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#scm_type FunctionApp#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#scm_use_main_ip_restriction FunctionApp#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.use32BitWorkerProcess">Use32BitWorkerProcess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#use_32_bit_worker_process FunctionApp#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#vnet_route_all_enabled FunctionApp#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#websockets_enabled FunctionApp#websockets_enabled}. |

---

##### `AlwaysOn`<sup>Optional</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.alwaysOn"></a>

```csharp
public object AlwaysOn { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#always_on FunctionApp#always_on}.

---

##### `AppScaleLimit`<sup>Optional</sup> <a name="AppScaleLimit" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.appScaleLimit"></a>

```csharp
public double AppScaleLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#app_scale_limit FunctionApp#app_scale_limit}.

---

##### `AutoSwapSlotName`<sup>Optional</sup> <a name="AutoSwapSlotName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.autoSwapSlotName"></a>

```csharp
public string AutoSwapSlotName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#auto_swap_slot_name FunctionApp#auto_swap_slot_name}.

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.cors"></a>

```csharp
public FunctionAppSiteConfigCors Cors { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#cors FunctionApp#cors}

---

##### `DotnetFrameworkVersion`<sup>Optional</sup> <a name="DotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.dotnetFrameworkVersion"></a>

```csharp
public string DotnetFrameworkVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#dotnet_framework_version FunctionApp#dotnet_framework_version}.

---

##### `ElasticInstanceMinimum`<sup>Optional</sup> <a name="ElasticInstanceMinimum" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.elasticInstanceMinimum"></a>

```csharp
public double ElasticInstanceMinimum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#elastic_instance_minimum FunctionApp#elastic_instance_minimum}.

---

##### `FtpsState`<sup>Optional</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ftpsState"></a>

```csharp
public string FtpsState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#ftps_state FunctionApp#ftps_state}.

---

##### `HealthCheckPath`<sup>Optional</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#health_check_path FunctionApp#health_check_path}.

---

##### `Http2Enabled`<sup>Optional</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.http2Enabled"></a>

```csharp
public object Http2Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#http2_enabled FunctionApp#http2_enabled}.

---

##### `IpRestriction`<sup>Optional</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ipRestriction"></a>

```csharp
public object IpRestriction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#ip_restriction FunctionApp#ip_restriction}.

---

##### `JavaVersion`<sup>Optional</sup> <a name="JavaVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.javaVersion"></a>

```csharp
public string JavaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#java_version FunctionApp#java_version}.

---

##### `LinuxFxVersion`<sup>Optional</sup> <a name="LinuxFxVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.linuxFxVersion"></a>

```csharp
public string LinuxFxVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#linux_fx_version FunctionApp#linux_fx_version}.

---

##### `MinTlsVersion`<sup>Optional</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#min_tls_version FunctionApp#min_tls_version}.

---

##### `PreWarmedInstanceCount`<sup>Optional</sup> <a name="PreWarmedInstanceCount" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.preWarmedInstanceCount"></a>

```csharp
public double PreWarmedInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#pre_warmed_instance_count FunctionApp#pre_warmed_instance_count}.

---

##### `RuntimeScaleMonitoringEnabled`<sup>Optional</sup> <a name="RuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```csharp
public object RuntimeScaleMonitoringEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#runtime_scale_monitoring_enabled FunctionApp#runtime_scale_monitoring_enabled}.

---

##### `ScmIpRestriction`<sup>Optional</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmIpRestriction"></a>

```csharp
public object ScmIpRestriction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#scm_ip_restriction FunctionApp#scm_ip_restriction}.

---

##### `ScmType`<sup>Optional</sup> <a name="ScmType" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmType"></a>

```csharp
public string ScmType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#scm_type FunctionApp#scm_type}.

---

##### `ScmUseMainIpRestriction`<sup>Optional</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmUseMainIpRestriction"></a>

```csharp
public object ScmUseMainIpRestriction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#scm_use_main_ip_restriction FunctionApp#scm_use_main_ip_restriction}.

---

##### `Use32BitWorkerProcess`<sup>Optional</sup> <a name="Use32BitWorkerProcess" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.use32BitWorkerProcess"></a>

```csharp
public object Use32BitWorkerProcess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#use_32_bit_worker_process FunctionApp#use_32_bit_worker_process}.

---

##### `VnetRouteAllEnabled`<sup>Optional</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.vnetRouteAllEnabled"></a>

```csharp
public object VnetRouteAllEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#vnet_route_all_enabled FunctionApp#vnet_route_all_enabled}.

---

##### `WebsocketsEnabled`<sup>Optional</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.websocketsEnabled"></a>

```csharp
public object WebsocketsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#websockets_enabled FunctionApp#websockets_enabled}.

---

### FunctionAppSiteConfigCors <a name="FunctionAppSiteConfigCors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigCors {
    string[] AllowedOrigins,
    object SupportCredentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#allowed_origins FunctionApp#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.supportCredentials">SupportCredentials</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#support_credentials FunctionApp#support_credentials}. |

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#allowed_origins FunctionApp#allowed_origins}.

---

##### `SupportCredentials`<sup>Optional</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.supportCredentials"></a>

```csharp
public object SupportCredentials { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#support_credentials FunctionApp#support_credentials}.

---

### FunctionAppSiteConfigIpRestriction <a name="FunctionAppSiteConfigIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigIpRestriction {
    string Action = null,
    object Headers = null,
    string IpAddress = null,
    string Name = null,
    double Priority = null,
    string ServiceTag = null,
    string VirtualNetworkSubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#action FunctionApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.headers">Headers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#headers FunctionApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#ip_address FunctionApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#priority FunctionApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.serviceTag">ServiceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#service_tag FunctionApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#action FunctionApp#action}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#headers FunctionApp#headers}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#ip_address FunctionApp#ip_address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#name FunctionApp#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#priority FunctionApp#priority}.

---

##### `ServiceTag`<sup>Optional</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.serviceTag"></a>

```csharp
public string ServiceTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#service_tag FunctionApp#service_tag}.

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}.

---

### FunctionAppSiteConfigIpRestrictionHeaders <a name="FunctionAppSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigIpRestrictionHeaders {
    string[] XAzureFdid = null,
    string[] XFdHealthProbe = null,
    string[] XForwardedFor = null,
    string[] XForwardedHost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}. |

---

##### `XAzureFdid`<sup>Optional</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}.

---

##### `XFdHealthProbe`<sup>Optional</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}.

---

##### `XForwardedFor`<sup>Optional</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}.

---

##### `XForwardedHost`<sup>Optional</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}.

---

### FunctionAppSiteConfigScmIpRestriction <a name="FunctionAppSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigScmIpRestriction {
    string Action = null,
    object Headers = null,
    string IpAddress = null,
    string Name = null,
    double Priority = null,
    string ServiceTag = null,
    string VirtualNetworkSubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#action FunctionApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.headers">Headers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#headers FunctionApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#ip_address FunctionApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#priority FunctionApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.serviceTag">ServiceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#service_tag FunctionApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#action FunctionApp#action}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#headers FunctionApp#headers}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#ip_address FunctionApp#ip_address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#name FunctionApp#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#priority FunctionApp#priority}.

---

##### `ServiceTag`<sup>Optional</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.serviceTag"></a>

```csharp
public string ServiceTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#service_tag FunctionApp#service_tag}.

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}.

---

### FunctionAppSiteConfigScmIpRestrictionHeaders <a name="FunctionAppSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigScmIpRestrictionHeaders {
    string[] XAzureFdid = null,
    string[] XFdHealthProbe = null,
    string[] XForwardedFor = null,
    string[] XForwardedHost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}. |

---

##### `XAzureFdid`<sup>Optional</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}.

---

##### `XFdHealthProbe`<sup>Optional</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}.

---

##### `XForwardedFor`<sup>Optional</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}.

---

##### `XForwardedHost`<sup>Optional</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}.

---

### FunctionAppSiteCredential <a name="FunctionAppSiteCredential" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteCredential {

};
```


### FunctionAppSourceControl <a name="FunctionAppSourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSourceControl {
    string Branch = null,
    object ManualIntegration = null,
    string RepoUrl = null,
    object RollbackEnabled = null,
    object UseMercurial = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#branch FunctionApp#branch}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.manualIntegration">ManualIntegration</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#manual_integration FunctionApp#manual_integration}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.repoUrl">RepoUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#repo_url FunctionApp#repo_url}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.rollbackEnabled">RollbackEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#rollback_enabled FunctionApp#rollback_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.useMercurial">UseMercurial</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#use_mercurial FunctionApp#use_mercurial}. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#branch FunctionApp#branch}.

---

##### `ManualIntegration`<sup>Optional</sup> <a name="ManualIntegration" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.manualIntegration"></a>

```csharp
public object ManualIntegration { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#manual_integration FunctionApp#manual_integration}.

---

##### `RepoUrl`<sup>Optional</sup> <a name="RepoUrl" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.repoUrl"></a>

```csharp
public string RepoUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#repo_url FunctionApp#repo_url}.

---

##### `RollbackEnabled`<sup>Optional</sup> <a name="RollbackEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.rollbackEnabled"></a>

```csharp
public object RollbackEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#rollback_enabled FunctionApp#rollback_enabled}.

---

##### `UseMercurial`<sup>Optional</sup> <a name="UseMercurial" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.useMercurial"></a>

```csharp
public object UseMercurial { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#use_mercurial FunctionApp#use_mercurial}.

---

### FunctionAppTimeouts <a name="FunctionAppTimeouts" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#create FunctionApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#delete FunctionApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#read FunctionApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#update FunctionApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#create FunctionApp#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#delete FunctionApp#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#read FunctionApp#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/function_app#update FunctionApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionAppAuthSettingsActiveDirectoryOutputReference <a name="FunctionAppAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppAuthSettingsActiveDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">ResetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAudiences` <a name="ResetAllowedAudiences" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```csharp
private void ResetAllowedAudiences()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">AllowedAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAudiencesInput`<sup>Optional</sup> <a name="AllowedAudiencesInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```csharp
public string[] AllowedAudiencesInput { get; }
```

- *Type:* string[]

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```csharp
public string[] AllowedAudiences { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```csharp
public FunctionAppAuthSettingsActiveDirectory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

---


### FunctionAppAuthSettingsFacebookOutputReference <a name="FunctionAppAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppAuthSettingsFacebookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```csharp
private void ResetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecretInput">AppSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecret">AppSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `AppSecretInput`<sup>Optional</sup> <a name="AppSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```csharp
public string AppSecretInput { get; }
```

- *Type:* string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```csharp
public string[] OauthScopesInput { get; }
```

- *Type:* string[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `AppSecret`<sup>Required</sup> <a name="AppSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecret"></a>

```csharp
public string AppSecret { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.internalValue"></a>

```csharp
public FunctionAppAuthSettingsFacebook InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

---


### FunctionAppAuthSettingsGoogleOutputReference <a name="FunctionAppAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppAuthSettingsGoogleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```csharp
private void ResetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```csharp
public string[] OauthScopesInput { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.internalValue"></a>

```csharp
public FunctionAppAuthSettingsGoogle InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

---


### FunctionAppAuthSettingsMicrosoftOutputReference <a name="FunctionAppAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppAuthSettingsMicrosoftOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```csharp
private void ResetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```csharp
public string[] OauthScopesInput { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```csharp
public FunctionAppAuthSettingsMicrosoft InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

---


### FunctionAppAuthSettingsOutputReference <a name="FunctionAppAuthSettingsOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppAuthSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putActiveDirectory">PutActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putFacebook">PutFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putGoogle">PutGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putMicrosoft">PutMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putTwitter">PutTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetActiveDirectory">ResetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAdditionalLoginParams">ResetAdditionalLoginParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">ResetAllowedExternalRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetDefaultProvider">ResetDefaultProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetFacebook">ResetFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetGoogle">ResetGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetMicrosoft">ResetMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetRuntimeVersion">ResetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours">ResetTokenRefreshExtensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenStoreEnabled">ResetTokenStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTwitter">ResetTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetUnauthenticatedClientAction">ResetUnauthenticatedClientAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveDirectory` <a name="PutActiveDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putActiveDirectory"></a>

```csharp
private void PutActiveDirectory(FunctionAppAuthSettingsActiveDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

---

##### `PutFacebook` <a name="PutFacebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putFacebook"></a>

```csharp
private void PutFacebook(FunctionAppAuthSettingsFacebook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putFacebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

---

##### `PutGoogle` <a name="PutGoogle" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putGoogle"></a>

```csharp
private void PutGoogle(FunctionAppAuthSettingsGoogle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putGoogle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

---

##### `PutMicrosoft` <a name="PutMicrosoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putMicrosoft"></a>

```csharp
private void PutMicrosoft(FunctionAppAuthSettingsMicrosoft Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putMicrosoft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

---

##### `PutTwitter` <a name="PutTwitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putTwitter"></a>

```csharp
private void PutTwitter(FunctionAppAuthSettingsTwitter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

---

##### `ResetActiveDirectory` <a name="ResetActiveDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetActiveDirectory"></a>

```csharp
private void ResetActiveDirectory()
```

##### `ResetAdditionalLoginParams` <a name="ResetAdditionalLoginParams" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAdditionalLoginParams"></a>

```csharp
private void ResetAdditionalLoginParams()
```

##### `ResetAllowedExternalRedirectUrls` <a name="ResetAllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```csharp
private void ResetAllowedExternalRedirectUrls()
```

##### `ResetDefaultProvider` <a name="ResetDefaultProvider" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetDefaultProvider"></a>

```csharp
private void ResetDefaultProvider()
```

##### `ResetFacebook` <a name="ResetFacebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetFacebook"></a>

```csharp
private void ResetFacebook()
```

##### `ResetGoogle` <a name="ResetGoogle" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetGoogle"></a>

```csharp
private void ResetGoogle()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetMicrosoft` <a name="ResetMicrosoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetMicrosoft"></a>

```csharp
private void ResetMicrosoft()
```

##### `ResetRuntimeVersion` <a name="ResetRuntimeVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetRuntimeVersion"></a>

```csharp
private void ResetRuntimeVersion()
```

##### `ResetTokenRefreshExtensionHours` <a name="ResetTokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```csharp
private void ResetTokenRefreshExtensionHours()
```

##### `ResetTokenStoreEnabled` <a name="ResetTokenStoreEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```csharp
private void ResetTokenStoreEnabled()
```

##### `ResetTwitter` <a name="ResetTwitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTwitter"></a>

```csharp
private void ResetTwitter()
```

##### `ResetUnauthenticatedClientAction` <a name="ResetUnauthenticatedClientAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```csharp
private void ResetUnauthenticatedClientAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference">FunctionAppAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebook">Facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference">FunctionAppAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.google">Google</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference">FunctionAppAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoft">Microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference">FunctionAppAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitter">Twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference">FunctionAppAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectoryInput">ActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParamsInput">AdditionalLoginParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">AllowedExternalRedirectUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProviderInput">DefaultProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebookInput">FacebookInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.googleInput">GoogleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoftInput">MicrosoftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">TokenRefreshExtensionHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabledInput">TokenStoreEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitterInput">TwitterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput">UnauthenticatedClientActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParams">AdditionalLoginParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls">AllowedExternalRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProvider">DefaultProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours">TokenRefreshExtensionHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled">TokenStoreEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction">UnauthenticatedClientAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectory"></a>

```csharp
public FunctionAppAuthSettingsActiveDirectoryOutputReference ActiveDirectory { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference">FunctionAppAuthSettingsActiveDirectoryOutputReference</a>

---

##### `Facebook`<sup>Required</sup> <a name="Facebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebook"></a>

```csharp
public FunctionAppAuthSettingsFacebookOutputReference Facebook { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference">FunctionAppAuthSettingsFacebookOutputReference</a>

---

##### `Google`<sup>Required</sup> <a name="Google" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.google"></a>

```csharp
public FunctionAppAuthSettingsGoogleOutputReference Google { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference">FunctionAppAuthSettingsGoogleOutputReference</a>

---

##### `Microsoft`<sup>Required</sup> <a name="Microsoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoft"></a>

```csharp
public FunctionAppAuthSettingsMicrosoftOutputReference Microsoft { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference">FunctionAppAuthSettingsMicrosoftOutputReference</a>

---

##### `Twitter`<sup>Required</sup> <a name="Twitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitter"></a>

```csharp
public FunctionAppAuthSettingsTwitterOutputReference Twitter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference">FunctionAppAuthSettingsTwitterOutputReference</a>

---

##### `ActiveDirectoryInput`<sup>Optional</sup> <a name="ActiveDirectoryInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```csharp
public FunctionAppAuthSettingsActiveDirectory ActiveDirectoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

---

##### `AdditionalLoginParamsInput`<sup>Optional</sup> <a name="AdditionalLoginParamsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParamsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalLoginParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowedExternalRedirectUrlsInput`<sup>Optional</sup> <a name="AllowedExternalRedirectUrlsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```csharp
public string[] AllowedExternalRedirectUrlsInput { get; }
```

- *Type:* string[]

---

##### `DefaultProviderInput`<sup>Optional</sup> <a name="DefaultProviderInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProviderInput"></a>

```csharp
public string DefaultProviderInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FacebookInput`<sup>Optional</sup> <a name="FacebookInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebookInput"></a>

```csharp
public FunctionAppAuthSettingsFacebook FacebookInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

---

##### `GoogleInput`<sup>Optional</sup> <a name="GoogleInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.googleInput"></a>

```csharp
public FunctionAppAuthSettingsGoogle GoogleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `MicrosoftInput`<sup>Optional</sup> <a name="MicrosoftInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoftInput"></a>

```csharp
public FunctionAppAuthSettingsMicrosoft MicrosoftInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```csharp
public string RuntimeVersionInput { get; }
```

- *Type:* string

---

##### `TokenRefreshExtensionHoursInput`<sup>Optional</sup> <a name="TokenRefreshExtensionHoursInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```csharp
public double TokenRefreshExtensionHoursInput { get; }
```

- *Type:* double

---

##### `TokenStoreEnabledInput`<sup>Optional</sup> <a name="TokenStoreEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```csharp
public object TokenStoreEnabledInput { get; }
```

- *Type:* object

---

##### `TwitterInput`<sup>Optional</sup> <a name="TwitterInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitterInput"></a>

```csharp
public FunctionAppAuthSettingsTwitter TwitterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

---

##### `UnauthenticatedClientActionInput`<sup>Optional</sup> <a name="UnauthenticatedClientActionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```csharp
public string UnauthenticatedClientActionInput { get; }
```

- *Type:* string

---

##### `AdditionalLoginParams`<sup>Required</sup> <a name="AdditionalLoginParams" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalLoginParams { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowedExternalRedirectUrls`<sup>Required</sup> <a name="AllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```csharp
public string[] AllowedExternalRedirectUrls { get; }
```

- *Type:* string[]

---

##### `DefaultProvider`<sup>Required</sup> <a name="DefaultProvider" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProvider"></a>

```csharp
public string DefaultProvider { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `TokenRefreshExtensionHours`<sup>Required</sup> <a name="TokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```csharp
public double TokenRefreshExtensionHours { get; }
```

- *Type:* double

---

##### `TokenStoreEnabled`<sup>Required</sup> <a name="TokenStoreEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```csharp
public object TokenStoreEnabled { get; }
```

- *Type:* object

---

##### `UnauthenticatedClientAction`<sup>Required</sup> <a name="UnauthenticatedClientAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```csharp
public string UnauthenticatedClientAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.internalValue"></a>

```csharp
public FunctionAppAuthSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

---


### FunctionAppAuthSettingsTwitterOutputReference <a name="FunctionAppAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppAuthSettingsTwitterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKeyInput">ConsumerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretInput">ConsumerSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerKeyInput`<sup>Optional</sup> <a name="ConsumerKeyInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```csharp
public string ConsumerKeyInput { get; }
```

- *Type:* string

---

##### `ConsumerSecretInput`<sup>Optional</sup> <a name="ConsumerSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```csharp
public string ConsumerSecretInput { get; }
```

- *Type:* string

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; }
```

- *Type:* string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.internalValue"></a>

```csharp
public FunctionAppAuthSettingsTwitter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

---


### FunctionAppConnectionStringList <a name="FunctionAppConnectionStringList" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppConnectionStringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.get"></a>

```csharp
private FunctionAppConnectionStringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppConnectionStringOutputReference <a name="FunctionAppConnectionStringOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppConnectionStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppIdentityOutputReference <a name="FunctionAppIdentityOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.internalValue"></a>

```csharp
public FunctionAppIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

---


### FunctionAppSiteConfigCorsOutputReference <a name="FunctionAppSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigCorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resetSupportCredentials">ResetSupportCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSupportCredentials` <a name="ResetSupportCredentials" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```csharp
private void ResetSupportCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentialsInput">SupportCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentials">SupportCredentials</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `SupportCredentialsInput`<sup>Optional</sup> <a name="SupportCredentialsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```csharp
public object SupportCredentialsInput { get; }
```

- *Type:* object

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `SupportCredentials`<sup>Required</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentials"></a>

```csharp
public object SupportCredentials { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.internalValue"></a>

```csharp
public FunctionAppSiteConfigCors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

---


### FunctionAppSiteConfigIpRestrictionHeadersList <a name="FunctionAppSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigIpRestrictionHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.get"></a>

```csharp
private FunctionAppSiteConfigIpRestrictionHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSiteConfigIpRestrictionHeadersOutputReference <a name="FunctionAppSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigIpRestrictionHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">ResetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">ResetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">ResetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">ResetXForwardedHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetXAzureFdid` <a name="ResetXAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```csharp
private void ResetXAzureFdid()
```

##### `ResetXFdHealthProbe` <a name="ResetXFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```csharp
private void ResetXFdHealthProbe()
```

##### `ResetXForwardedFor` <a name="ResetXForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```csharp
private void ResetXForwardedFor()
```

##### `ResetXForwardedHost` <a name="ResetXForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```csharp
private void ResetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">XAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">XFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">XForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">XForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `XAzureFdidInput`<sup>Optional</sup> <a name="XAzureFdidInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```csharp
public string[] XAzureFdidInput { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbeInput`<sup>Optional</sup> <a name="XFdHealthProbeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```csharp
public string[] XFdHealthProbeInput { get; }
```

- *Type:* string[]

---

##### `XForwardedForInput`<sup>Optional</sup> <a name="XForwardedForInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```csharp
public string[] XForwardedForInput { get; }
```

- *Type:* string[]

---

##### `XForwardedHostInput`<sup>Optional</sup> <a name="XForwardedHostInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```csharp
public string[] XForwardedHostInput { get; }
```

- *Type:* string[]

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; }
```

- *Type:* string[]

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; }
```

- *Type:* string[]

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSiteConfigIpRestrictionList <a name="FunctionAppSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigIpRestrictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.get"></a>

```csharp
private FunctionAppSiteConfigIpRestrictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSiteConfigIpRestrictionOutputReference <a name="FunctionAppSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigIpRestrictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetServiceTag">ResetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetServiceTag` <a name="ResetServiceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```csharp
private void ResetServiceTag()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```csharp
private void ResetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList">FunctionAppSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput">ServiceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headers"></a>

```csharp
public FunctionAppSiteConfigIpRestrictionHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList">FunctionAppSiteConfigIpRestrictionHeadersList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ServiceTagInput`<sup>Optional</sup> <a name="ServiceTagInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```csharp
public string ServiceTagInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```csharp
public string VirtualNetworkSubnetIdInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```csharp
public string ServiceTag { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSiteConfigOutputReference <a name="FunctionAppSiteConfigOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putIpRestriction">PutIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putScmIpRestriction">PutScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAlwaysOn">ResetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAppScaleLimit">ResetAppScaleLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAutoSwapSlotName">ResetAutoSwapSlotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetDotnetFrameworkVersion">ResetDotnetFrameworkVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetElasticInstanceMinimum">ResetElasticInstanceMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetFtpsState">ResetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHealthCheckPath">ResetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHttp2Enabled">ResetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetIpRestriction">ResetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetJavaVersion">ResetJavaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetLinuxFxVersion">ResetLinuxFxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetMinTlsVersion">ResetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetPreWarmedInstanceCount">ResetPreWarmedInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">ResetRuntimeScaleMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmIpRestriction">ResetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmType">ResetScmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmUseMainIpRestriction">ResetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetUse32BitWorkerProcess">ResetUse32BitWorkerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetVnetRouteAllEnabled">ResetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetWebsocketsEnabled">ResetWebsocketsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCors` <a name="PutCors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putCors"></a>

```csharp
private void PutCors(FunctionAppSiteConfigCors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

---

##### `PutIpRestriction` <a name="PutIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putIpRestriction"></a>

```csharp
private void PutIpRestriction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* object

---

##### `PutScmIpRestriction` <a name="PutScmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putScmIpRestriction"></a>

```csharp
private void PutScmIpRestriction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* object

---

##### `ResetAlwaysOn` <a name="ResetAlwaysOn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAlwaysOn"></a>

```csharp
private void ResetAlwaysOn()
```

##### `ResetAppScaleLimit` <a name="ResetAppScaleLimit" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAppScaleLimit"></a>

```csharp
private void ResetAppScaleLimit()
```

##### `ResetAutoSwapSlotName` <a name="ResetAutoSwapSlotName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAutoSwapSlotName"></a>

```csharp
private void ResetAutoSwapSlotName()
```

##### `ResetCors` <a name="ResetCors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetCors"></a>

```csharp
private void ResetCors()
```

##### `ResetDotnetFrameworkVersion` <a name="ResetDotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```csharp
private void ResetDotnetFrameworkVersion()
```

##### `ResetElasticInstanceMinimum` <a name="ResetElasticInstanceMinimum" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```csharp
private void ResetElasticInstanceMinimum()
```

##### `ResetFtpsState` <a name="ResetFtpsState" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetFtpsState"></a>

```csharp
private void ResetFtpsState()
```

##### `ResetHealthCheckPath` <a name="ResetHealthCheckPath" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHealthCheckPath"></a>

```csharp
private void ResetHealthCheckPath()
```

##### `ResetHttp2Enabled` <a name="ResetHttp2Enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHttp2Enabled"></a>

```csharp
private void ResetHttp2Enabled()
```

##### `ResetIpRestriction` <a name="ResetIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetIpRestriction"></a>

```csharp
private void ResetIpRestriction()
```

##### `ResetJavaVersion` <a name="ResetJavaVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetJavaVersion"></a>

```csharp
private void ResetJavaVersion()
```

##### `ResetLinuxFxVersion` <a name="ResetLinuxFxVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetLinuxFxVersion"></a>

```csharp
private void ResetLinuxFxVersion()
```

##### `ResetMinTlsVersion` <a name="ResetMinTlsVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetMinTlsVersion"></a>

```csharp
private void ResetMinTlsVersion()
```

##### `ResetPreWarmedInstanceCount` <a name="ResetPreWarmedInstanceCount" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```csharp
private void ResetPreWarmedInstanceCount()
```

##### `ResetRuntimeScaleMonitoringEnabled` <a name="ResetRuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```csharp
private void ResetRuntimeScaleMonitoringEnabled()
```

##### `ResetScmIpRestriction` <a name="ResetScmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmIpRestriction"></a>

```csharp
private void ResetScmIpRestriction()
```

##### `ResetScmType` <a name="ResetScmType" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmType"></a>

```csharp
private void ResetScmType()
```

##### `ResetScmUseMainIpRestriction` <a name="ResetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```csharp
private void ResetScmUseMainIpRestriction()
```

##### `ResetUse32BitWorkerProcess` <a name="ResetUse32BitWorkerProcess" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```csharp
private void ResetUse32BitWorkerProcess()
```

##### `ResetVnetRouteAllEnabled` <a name="ResetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```csharp
private void ResetVnetRouteAllEnabled()
```

##### `ResetWebsocketsEnabled` <a name="ResetWebsocketsEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```csharp
private void ResetWebsocketsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference">FunctionAppSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestriction">IpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList">FunctionAppSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestriction">ScmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList">FunctionAppSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOnInput">AlwaysOnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimitInput">AppScaleLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotNameInput">AutoSwapSlotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.corsInput">CorsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersionInput">DotnetFrameworkVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimumInput">ElasticInstanceMinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsStateInput">FtpsStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPathInput">HealthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2EnabledInput">Http2EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestrictionInput">IpRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersionInput">JavaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersionInput">LinuxFxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersionInput">MinTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCountInput">PreWarmedInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">RuntimeScaleMonitoringEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestrictionInput">ScmIpRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmTypeInput">ScmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">ScmUseMainIpRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcessInput">Use32BitWorkerProcessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput">VnetRouteAllEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabledInput">WebsocketsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOn">AlwaysOn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimit">AppScaleLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotName">AutoSwapSlotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersion">DotnetFrameworkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum">ElasticInstanceMinimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsState">FtpsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2Enabled">Http2Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersion">JavaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersion">LinuxFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount">PreWarmedInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">RuntimeScaleMonitoringEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmType">ScmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcess">Use32BitWorkerProcess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.cors"></a>

```csharp
public FunctionAppSiteConfigCorsOutputReference Cors { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference">FunctionAppSiteConfigCorsOutputReference</a>

---

##### `IpRestriction`<sup>Required</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestriction"></a>

```csharp
public FunctionAppSiteConfigIpRestrictionList IpRestriction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList">FunctionAppSiteConfigIpRestrictionList</a>

---

##### `ScmIpRestriction`<sup>Required</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestriction"></a>

```csharp
public FunctionAppSiteConfigScmIpRestrictionList ScmIpRestriction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList">FunctionAppSiteConfigScmIpRestrictionList</a>

---

##### `AlwaysOnInput`<sup>Optional</sup> <a name="AlwaysOnInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOnInput"></a>

```csharp
public object AlwaysOnInput { get; }
```

- *Type:* object

---

##### `AppScaleLimitInput`<sup>Optional</sup> <a name="AppScaleLimitInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimitInput"></a>

```csharp
public double AppScaleLimitInput { get; }
```

- *Type:* double

---

##### `AutoSwapSlotNameInput`<sup>Optional</sup> <a name="AutoSwapSlotNameInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotNameInput"></a>

```csharp
public string AutoSwapSlotNameInput { get; }
```

- *Type:* string

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.corsInput"></a>

```csharp
public FunctionAppSiteConfigCors CorsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

---

##### `DotnetFrameworkVersionInput`<sup>Optional</sup> <a name="DotnetFrameworkVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```csharp
public string DotnetFrameworkVersionInput { get; }
```

- *Type:* string

---

##### `ElasticInstanceMinimumInput`<sup>Optional</sup> <a name="ElasticInstanceMinimumInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```csharp
public double ElasticInstanceMinimumInput { get; }
```

- *Type:* double

---

##### `FtpsStateInput`<sup>Optional</sup> <a name="FtpsStateInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsStateInput"></a>

```csharp
public string FtpsStateInput { get; }
```

- *Type:* string

---

##### `HealthCheckPathInput`<sup>Optional</sup> <a name="HealthCheckPathInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPathInput"></a>

```csharp
public string HealthCheckPathInput { get; }
```

- *Type:* string

---

##### `Http2EnabledInput`<sup>Optional</sup> <a name="Http2EnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2EnabledInput"></a>

```csharp
public object Http2EnabledInput { get; }
```

- *Type:* object

---

##### `IpRestrictionInput`<sup>Optional</sup> <a name="IpRestrictionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestrictionInput"></a>

```csharp
public object IpRestrictionInput { get; }
```

- *Type:* object

---

##### `JavaVersionInput`<sup>Optional</sup> <a name="JavaVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersionInput"></a>

```csharp
public string JavaVersionInput { get; }
```

- *Type:* string

---

##### `LinuxFxVersionInput`<sup>Optional</sup> <a name="LinuxFxVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```csharp
public string LinuxFxVersionInput { get; }
```

- *Type:* string

---

##### `MinTlsVersionInput`<sup>Optional</sup> <a name="MinTlsVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersionInput"></a>

```csharp
public string MinTlsVersionInput { get; }
```

- *Type:* string

---

##### `PreWarmedInstanceCountInput`<sup>Optional</sup> <a name="PreWarmedInstanceCountInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```csharp
public double PreWarmedInstanceCountInput { get; }
```

- *Type:* double

---

##### `RuntimeScaleMonitoringEnabledInput`<sup>Optional</sup> <a name="RuntimeScaleMonitoringEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```csharp
public object RuntimeScaleMonitoringEnabledInput { get; }
```

- *Type:* object

---

##### `ScmIpRestrictionInput`<sup>Optional</sup> <a name="ScmIpRestrictionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```csharp
public object ScmIpRestrictionInput { get; }
```

- *Type:* object

---

##### `ScmTypeInput`<sup>Optional</sup> <a name="ScmTypeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmTypeInput"></a>

```csharp
public string ScmTypeInput { get; }
```

- *Type:* string

---

##### `ScmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="ScmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```csharp
public object ScmUseMainIpRestrictionInput { get; }
```

- *Type:* object

---

##### `Use32BitWorkerProcessInput`<sup>Optional</sup> <a name="Use32BitWorkerProcessInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```csharp
public object Use32BitWorkerProcessInput { get; }
```

- *Type:* object

---

##### `VnetRouteAllEnabledInput`<sup>Optional</sup> <a name="VnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```csharp
public object VnetRouteAllEnabledInput { get; }
```

- *Type:* object

---

##### `WebsocketsEnabledInput`<sup>Optional</sup> <a name="WebsocketsEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```csharp
public object WebsocketsEnabledInput { get; }
```

- *Type:* object

---

##### `AlwaysOn`<sup>Required</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOn"></a>

```csharp
public object AlwaysOn { get; }
```

- *Type:* object

---

##### `AppScaleLimit`<sup>Required</sup> <a name="AppScaleLimit" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimit"></a>

```csharp
public double AppScaleLimit { get; }
```

- *Type:* double

---

##### `AutoSwapSlotName`<sup>Required</sup> <a name="AutoSwapSlotName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotName"></a>

```csharp
public string AutoSwapSlotName { get; }
```

- *Type:* string

---

##### `DotnetFrameworkVersion`<sup>Required</sup> <a name="DotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```csharp
public string DotnetFrameworkVersion { get; }
```

- *Type:* string

---

##### `ElasticInstanceMinimum`<sup>Required</sup> <a name="ElasticInstanceMinimum" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```csharp
public double ElasticInstanceMinimum { get; }
```

- *Type:* double

---

##### `FtpsState`<sup>Required</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsState"></a>

```csharp
public string FtpsState { get; }
```

- *Type:* string

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; }
```

- *Type:* string

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2Enabled"></a>

```csharp
public object Http2Enabled { get; }
```

- *Type:* object

---

##### `JavaVersion`<sup>Required</sup> <a name="JavaVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersion"></a>

```csharp
public string JavaVersion { get; }
```

- *Type:* string

---

##### `LinuxFxVersion`<sup>Required</sup> <a name="LinuxFxVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersion"></a>

```csharp
public string LinuxFxVersion { get; }
```

- *Type:* string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; }
```

- *Type:* string

---

##### `PreWarmedInstanceCount`<sup>Required</sup> <a name="PreWarmedInstanceCount" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```csharp
public double PreWarmedInstanceCount { get; }
```

- *Type:* double

---

##### `RuntimeScaleMonitoringEnabled`<sup>Required</sup> <a name="RuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```csharp
public object RuntimeScaleMonitoringEnabled { get; }
```

- *Type:* object

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmType"></a>

```csharp
public string ScmType { get; }
```

- *Type:* string

---

##### `ScmUseMainIpRestriction`<sup>Required</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```csharp
public object ScmUseMainIpRestriction { get; }
```

- *Type:* object

---

##### `Use32BitWorkerProcess`<sup>Required</sup> <a name="Use32BitWorkerProcess" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```csharp
public object Use32BitWorkerProcess { get; }
```

- *Type:* object

---

##### `VnetRouteAllEnabled`<sup>Required</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```csharp
public object VnetRouteAllEnabled { get; }
```

- *Type:* object

---

##### `WebsocketsEnabled`<sup>Required</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabled"></a>

```csharp
public object WebsocketsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.internalValue"></a>

```csharp
public FunctionAppSiteConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

---


### FunctionAppSiteConfigScmIpRestrictionHeadersList <a name="FunctionAppSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigScmIpRestrictionHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.get"></a>

```csharp
private FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference <a name="FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">ResetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">ResetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">ResetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">ResetXForwardedHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetXAzureFdid` <a name="ResetXAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```csharp
private void ResetXAzureFdid()
```

##### `ResetXFdHealthProbe` <a name="ResetXFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```csharp
private void ResetXFdHealthProbe()
```

##### `ResetXForwardedFor` <a name="ResetXForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```csharp
private void ResetXForwardedFor()
```

##### `ResetXForwardedHost` <a name="ResetXForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```csharp
private void ResetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">XAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">XFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">XForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">XForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `XAzureFdidInput`<sup>Optional</sup> <a name="XAzureFdidInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```csharp
public string[] XAzureFdidInput { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbeInput`<sup>Optional</sup> <a name="XFdHealthProbeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```csharp
public string[] XFdHealthProbeInput { get; }
```

- *Type:* string[]

---

##### `XForwardedForInput`<sup>Optional</sup> <a name="XForwardedForInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```csharp
public string[] XForwardedForInput { get; }
```

- *Type:* string[]

---

##### `XForwardedHostInput`<sup>Optional</sup> <a name="XForwardedHostInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```csharp
public string[] XForwardedHostInput { get; }
```

- *Type:* string[]

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; }
```

- *Type:* string[]

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; }
```

- *Type:* string[]

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSiteConfigScmIpRestrictionList <a name="FunctionAppSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigScmIpRestrictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.get"></a>

```csharp
private FunctionAppSiteConfigScmIpRestrictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSiteConfigScmIpRestrictionOutputReference <a name="FunctionAppSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteConfigScmIpRestrictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag">ResetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetServiceTag` <a name="ResetServiceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```csharp
private void ResetServiceTag()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```csharp
private void ResetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList">FunctionAppSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">ServiceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```csharp
public FunctionAppSiteConfigScmIpRestrictionHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList">FunctionAppSiteConfigScmIpRestrictionHeadersList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ServiceTagInput`<sup>Optional</sup> <a name="ServiceTagInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```csharp
public string ServiceTagInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```csharp
public string VirtualNetworkSubnetIdInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```csharp
public string ServiceTag { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSiteCredentialList <a name="FunctionAppSiteCredentialList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteCredentialList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.get"></a>

```csharp
private FunctionAppSiteCredentialOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FunctionAppSiteCredentialOutputReference <a name="FunctionAppSiteCredentialOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSiteCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential">FunctionAppSiteCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.internalValue"></a>

```csharp
public FunctionAppSiteCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential">FunctionAppSiteCredential</a>

---


### FunctionAppSourceControlOutputReference <a name="FunctionAppSourceControlOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSourceControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetManualIntegration">ResetManualIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRepoUrl">ResetRepoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRollbackEnabled">ResetRollbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetUseMercurial">ResetUseMercurial</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetManualIntegration` <a name="ResetManualIntegration" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetManualIntegration"></a>

```csharp
private void ResetManualIntegration()
```

##### `ResetRepoUrl` <a name="ResetRepoUrl" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRepoUrl"></a>

```csharp
private void ResetRepoUrl()
```

##### `ResetRollbackEnabled` <a name="ResetRollbackEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRollbackEnabled"></a>

```csharp
private void ResetRollbackEnabled()
```

##### `ResetUseMercurial` <a name="ResetUseMercurial" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetUseMercurial"></a>

```csharp
private void ResetUseMercurial()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegrationInput">ManualIntegrationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrlInput">RepoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabledInput">RollbackEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurialInput">UseMercurialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegration">ManualIntegration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrl">RepoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabled">RollbackEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurial">UseMercurial</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `ManualIntegrationInput`<sup>Optional</sup> <a name="ManualIntegrationInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegrationInput"></a>

```csharp
public object ManualIntegrationInput { get; }
```

- *Type:* object

---

##### `RepoUrlInput`<sup>Optional</sup> <a name="RepoUrlInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrlInput"></a>

```csharp
public string RepoUrlInput { get; }
```

- *Type:* string

---

##### `RollbackEnabledInput`<sup>Optional</sup> <a name="RollbackEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabledInput"></a>

```csharp
public object RollbackEnabledInput { get; }
```

- *Type:* object

---

##### `UseMercurialInput`<sup>Optional</sup> <a name="UseMercurialInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurialInput"></a>

```csharp
public object UseMercurialInput { get; }
```

- *Type:* object

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `ManualIntegration`<sup>Required</sup> <a name="ManualIntegration" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegration"></a>

```csharp
public object ManualIntegration { get; }
```

- *Type:* object

---

##### `RepoUrl`<sup>Required</sup> <a name="RepoUrl" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrl"></a>

```csharp
public string RepoUrl { get; }
```

- *Type:* string

---

##### `RollbackEnabled`<sup>Required</sup> <a name="RollbackEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabled"></a>

```csharp
public object RollbackEnabled { get; }
```

- *Type:* object

---

##### `UseMercurial`<sup>Required</sup> <a name="UseMercurial" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurial"></a>

```csharp
public object UseMercurial { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.internalValue"></a>

```csharp
public FunctionAppSourceControl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

---


### FunctionAppTimeoutsOutputReference <a name="FunctionAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



