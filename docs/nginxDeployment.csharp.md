# `nginxDeployment` Submodule <a name="`nginxDeployment` Submodule" id="@cdktf/provider-azurerm.nginxDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NginxDeployment <a name="NginxDeployment" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment azurerm_nginx_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeployment(Construct Scope, string Id, NginxDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig">NginxDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig">NginxDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putAutoScaleProfile">PutAutoScaleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPrivate">PutFrontendPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPublic">PutFrontendPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putLoggingStorageAccount">PutLoggingStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putWebApplicationFirewall">PutWebApplicationFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetAutomaticUpgradeChannel">ResetAutomaticUpgradeChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetAutoScaleProfile">ResetAutoScaleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetDiagnoseSupportEnabled">ResetDiagnoseSupportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetFrontendPrivate">ResetFrontendPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetFrontendPublic">ResetFrontendPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetLoggingStorageAccount">ResetLoggingStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetManagedResourceGroup">ResetManagedResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetWebApplicationFirewall">ResetWebApplicationFirewall</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoScaleProfile` <a name="PutAutoScaleProfile" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putAutoScaleProfile"></a>

```csharp
private void PutAutoScaleProfile(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putAutoScaleProfile.parameter.value"></a>

- *Type:* object

---

##### `PutFrontendPrivate` <a name="PutFrontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPrivate"></a>

```csharp
private void PutFrontendPrivate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPrivate.parameter.value"></a>

- *Type:* object

---

##### `PutFrontendPublic` <a name="PutFrontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPublic"></a>

```csharp
private void PutFrontendPublic(NginxDeploymentFrontendPublic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putFrontendPublic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putIdentity"></a>

```csharp
private void PutIdentity(NginxDeploymentIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a>

---

##### `PutLoggingStorageAccount` <a name="PutLoggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putLoggingStorageAccount"></a>

```csharp
private void PutLoggingStorageAccount(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putLoggingStorageAccount.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putNetworkInterface"></a>

```csharp
private void PutNetworkInterface(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putNetworkInterface.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(NginxDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a>

---

##### `PutWebApplicationFirewall` <a name="PutWebApplicationFirewall" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putWebApplicationFirewall"></a>

```csharp
private void PutWebApplicationFirewall(NginxDeploymentWebApplicationFirewall Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.putWebApplicationFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall">NginxDeploymentWebApplicationFirewall</a>

---

##### `ResetAutomaticUpgradeChannel` <a name="ResetAutomaticUpgradeChannel" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetAutomaticUpgradeChannel"></a>

```csharp
private void ResetAutomaticUpgradeChannel()
```

##### `ResetAutoScaleProfile` <a name="ResetAutoScaleProfile" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetAutoScaleProfile"></a>

```csharp
private void ResetAutoScaleProfile()
```

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetCapacity"></a>

```csharp
private void ResetCapacity()
```

##### `ResetDiagnoseSupportEnabled` <a name="ResetDiagnoseSupportEnabled" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetDiagnoseSupportEnabled"></a>

```csharp
private void ResetDiagnoseSupportEnabled()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetFrontendPrivate` <a name="ResetFrontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetFrontendPrivate"></a>

```csharp
private void ResetFrontendPrivate()
```

##### `ResetFrontendPublic` <a name="ResetFrontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetFrontendPublic"></a>

```csharp
private void ResetFrontendPublic()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetLoggingStorageAccount` <a name="ResetLoggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetLoggingStorageAccount"></a>

```csharp
private void ResetLoggingStorageAccount()
```

##### `ResetManagedResourceGroup` <a name="ResetManagedResourceGroup" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetManagedResourceGroup"></a>

```csharp
private void ResetManagedResourceGroup()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetNetworkInterface"></a>

```csharp
private void ResetNetworkInterface()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWebApplicationFirewall` <a name="ResetWebApplicationFirewall" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.resetWebApplicationFirewall"></a>

```csharp
private void ResetWebApplicationFirewall()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NginxDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NginxDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NginxDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NginxDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NginxDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NginxDeployment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NginxDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NginxDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NginxDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.autoScaleProfile">AutoScaleProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList">NginxDeploymentAutoScaleProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.dataplaneApiEndpoint">DataplaneApiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPrivate">FrontendPrivate</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList">NginxDeploymentFrontendPrivateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPublic">FrontendPublic</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference">NginxDeploymentFrontendPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference">NginxDeploymentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.loggingStorageAccount">LoggingStorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList">NginxDeploymentLoggingStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList">NginxDeploymentNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.nginxVersion">NginxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference">NginxDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.webApplicationFirewall">WebApplicationFirewall</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference">NginxDeploymentWebApplicationFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.automaticUpgradeChannelInput">AutomaticUpgradeChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.autoScaleProfileInput">AutoScaleProfileInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.capacityInput">CapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.diagnoseSupportEnabledInput">DiagnoseSupportEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPrivateInput">FrontendPrivateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPublicInput">FrontendPublicInput</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.loggingStorageAccountInput">LoggingStorageAccountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.managedResourceGroupInput">ManagedResourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.webApplicationFirewallInput">WebApplicationFirewallInput</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall">NginxDeploymentWebApplicationFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.automaticUpgradeChannel">AutomaticUpgradeChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.diagnoseSupportEnabled">DiagnoseSupportEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.managedResourceGroup">ManagedResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoScaleProfile`<sup>Required</sup> <a name="AutoScaleProfile" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.autoScaleProfile"></a>

```csharp
public NginxDeploymentAutoScaleProfileList AutoScaleProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList">NginxDeploymentAutoScaleProfileList</a>

---

##### `DataplaneApiEndpoint`<sup>Required</sup> <a name="DataplaneApiEndpoint" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.dataplaneApiEndpoint"></a>

```csharp
public string DataplaneApiEndpoint { get; }
```

- *Type:* string

---

##### `FrontendPrivate`<sup>Required</sup> <a name="FrontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPrivate"></a>

```csharp
public NginxDeploymentFrontendPrivateList FrontendPrivate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList">NginxDeploymentFrontendPrivateList</a>

---

##### `FrontendPublic`<sup>Required</sup> <a name="FrontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPublic"></a>

```csharp
public NginxDeploymentFrontendPublicOutputReference FrontendPublic { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference">NginxDeploymentFrontendPublicOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.identity"></a>

```csharp
public NginxDeploymentIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference">NginxDeploymentIdentityOutputReference</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `LoggingStorageAccount`<sup>Required</sup> <a name="LoggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.loggingStorageAccount"></a>

```csharp
public NginxDeploymentLoggingStorageAccountList LoggingStorageAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList">NginxDeploymentLoggingStorageAccountList</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.networkInterface"></a>

```csharp
public NginxDeploymentNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList">NginxDeploymentNetworkInterfaceList</a>

---

##### `NginxVersion`<sup>Required</sup> <a name="NginxVersion" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.nginxVersion"></a>

```csharp
public string NginxVersion { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.timeouts"></a>

```csharp
public NginxDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference">NginxDeploymentTimeoutsOutputReference</a>

---

##### `WebApplicationFirewall`<sup>Required</sup> <a name="WebApplicationFirewall" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.webApplicationFirewall"></a>

```csharp
public NginxDeploymentWebApplicationFirewallOutputReference WebApplicationFirewall { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference">NginxDeploymentWebApplicationFirewallOutputReference</a>

---

##### `AutomaticUpgradeChannelInput`<sup>Optional</sup> <a name="AutomaticUpgradeChannelInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.automaticUpgradeChannelInput"></a>

```csharp
public string AutomaticUpgradeChannelInput { get; }
```

- *Type:* string

---

##### `AutoScaleProfileInput`<sup>Optional</sup> <a name="AutoScaleProfileInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.autoScaleProfileInput"></a>

```csharp
public object AutoScaleProfileInput { get; }
```

- *Type:* object

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.capacityInput"></a>

```csharp
public double CapacityInput { get; }
```

- *Type:* double

---

##### `DiagnoseSupportEnabledInput`<sup>Optional</sup> <a name="DiagnoseSupportEnabledInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.diagnoseSupportEnabledInput"></a>

```csharp
public object DiagnoseSupportEnabledInput { get; }
```

- *Type:* object

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `FrontendPrivateInput`<sup>Optional</sup> <a name="FrontendPrivateInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPrivateInput"></a>

```csharp
public object FrontendPrivateInput { get; }
```

- *Type:* object

---

##### `FrontendPublicInput`<sup>Optional</sup> <a name="FrontendPublicInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.frontendPublicInput"></a>

```csharp
public NginxDeploymentFrontendPublic FrontendPublicInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.identityInput"></a>

```csharp
public NginxDeploymentIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LoggingStorageAccountInput`<sup>Optional</sup> <a name="LoggingStorageAccountInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.loggingStorageAccountInput"></a>

```csharp
public object LoggingStorageAccountInput { get; }
```

- *Type:* object

---

##### `ManagedResourceGroupInput`<sup>Optional</sup> <a name="ManagedResourceGroupInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.managedResourceGroupInput"></a>

```csharp
public string ManagedResourceGroupInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.networkInterfaceInput"></a>

```csharp
public object NetworkInterfaceInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WebApplicationFirewallInput`<sup>Optional</sup> <a name="WebApplicationFirewallInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.webApplicationFirewallInput"></a>

```csharp
public NginxDeploymentWebApplicationFirewall WebApplicationFirewallInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall">NginxDeploymentWebApplicationFirewall</a>

---

##### `AutomaticUpgradeChannel`<sup>Required</sup> <a name="AutomaticUpgradeChannel" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.automaticUpgradeChannel"></a>

```csharp
public string AutomaticUpgradeChannel { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `DiagnoseSupportEnabled`<sup>Required</sup> <a name="DiagnoseSupportEnabled" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.diagnoseSupportEnabled"></a>

```csharp
public object DiagnoseSupportEnabled { get; }
```

- *Type:* object

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedResourceGroup`<sup>Required</sup> <a name="ManagedResourceGroup" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.managedResourceGroup"></a>

```csharp
public string ManagedResourceGroup { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NginxDeploymentAutoScaleProfile <a name="NginxDeploymentAutoScaleProfile" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentAutoScaleProfile {
    double MaxCapacity,
    double MinCapacity,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#max_capacity NginxDeployment#max_capacity}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile.property.minCapacity">MinCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#min_capacity NginxDeployment#min_capacity}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#name NginxDeployment#name}. |

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#max_capacity NginxDeployment#max_capacity}.

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile.property.minCapacity"></a>

```csharp
public double MinCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#min_capacity NginxDeployment#min_capacity}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfile.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#name NginxDeployment#name}.

---

### NginxDeploymentConfig <a name="NginxDeploymentConfig" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string Sku,
    string AutomaticUpgradeChannel = null,
    object AutoScaleProfile = null,
    double Capacity = null,
    object DiagnoseSupportEnabled = null,
    string Email = null,
    object FrontendPrivate = null,
    NginxDeploymentFrontendPublic FrontendPublic = null,
    string Id = null,
    NginxDeploymentIdentity Identity = null,
    object LoggingStorageAccount = null,
    string ManagedResourceGroup = null,
    object NetworkInterface = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    NginxDeploymentTimeouts Timeouts = null,
    NginxDeploymentWebApplicationFirewall WebApplicationFirewall = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#location NginxDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#name NginxDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#resource_group_name NginxDeployment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#sku NginxDeployment#sku}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.automaticUpgradeChannel">AutomaticUpgradeChannel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#automatic_upgrade_channel NginxDeployment#automatic_upgrade_channel}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.autoScaleProfile">AutoScaleProfile</a></code> | <code>object</code> | auto_scale_profile block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.capacity">Capacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#capacity NginxDeployment#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.diagnoseSupportEnabled">DiagnoseSupportEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#diagnose_support_enabled NginxDeployment#diagnose_support_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#email NginxDeployment#email}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.frontendPrivate">FrontendPrivate</a></code> | <code>object</code> | frontend_private block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.frontendPublic">FrontendPublic</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a></code> | frontend_public block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#id NginxDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.loggingStorageAccount">LoggingStorageAccount</a></code> | <code>object</code> | logging_storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.managedResourceGroup">ManagedResourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#managed_resource_group NginxDeployment#managed_resource_group}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.networkInterface">NetworkInterface</a></code> | <code>object</code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#tags NginxDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.webApplicationFirewall">WebApplicationFirewall</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall">NginxDeploymentWebApplicationFirewall</a></code> | web_application_firewall block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#location NginxDeployment#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#name NginxDeployment#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#resource_group_name NginxDeployment#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#sku NginxDeployment#sku}.

---

##### `AutomaticUpgradeChannel`<sup>Optional</sup> <a name="AutomaticUpgradeChannel" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.automaticUpgradeChannel"></a>

```csharp
public string AutomaticUpgradeChannel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#automatic_upgrade_channel NginxDeployment#automatic_upgrade_channel}.

---

##### `AutoScaleProfile`<sup>Optional</sup> <a name="AutoScaleProfile" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.autoScaleProfile"></a>

```csharp
public object AutoScaleProfile { get; set; }
```

- *Type:* object

auto_scale_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#auto_scale_profile NginxDeployment#auto_scale_profile}

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.capacity"></a>

```csharp
public double Capacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#capacity NginxDeployment#capacity}.

---

##### `DiagnoseSupportEnabled`<sup>Optional</sup> <a name="DiagnoseSupportEnabled" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.diagnoseSupportEnabled"></a>

```csharp
public object DiagnoseSupportEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#diagnose_support_enabled NginxDeployment#diagnose_support_enabled}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#email NginxDeployment#email}.

---

##### `FrontendPrivate`<sup>Optional</sup> <a name="FrontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.frontendPrivate"></a>

```csharp
public object FrontendPrivate { get; set; }
```

- *Type:* object

frontend_private block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#frontend_private NginxDeployment#frontend_private}

---

##### `FrontendPublic`<sup>Optional</sup> <a name="FrontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.frontendPublic"></a>

```csharp
public NginxDeploymentFrontendPublic FrontendPublic { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a>

frontend_public block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#frontend_public NginxDeployment#frontend_public}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#id NginxDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.identity"></a>

```csharp
public NginxDeploymentIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#identity NginxDeployment#identity}

---

##### `LoggingStorageAccount`<sup>Optional</sup> <a name="LoggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.loggingStorageAccount"></a>

```csharp
public object LoggingStorageAccount { get; set; }
```

- *Type:* object

logging_storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#logging_storage_account NginxDeployment#logging_storage_account}

---

##### `ManagedResourceGroup`<sup>Optional</sup> <a name="ManagedResourceGroup" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.managedResourceGroup"></a>

```csharp
public string ManagedResourceGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#managed_resource_group NginxDeployment#managed_resource_group}.

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.networkInterface"></a>

```csharp
public object NetworkInterface { get; set; }
```

- *Type:* object

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#network_interface NginxDeployment#network_interface}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#tags NginxDeployment#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.timeouts"></a>

```csharp
public NginxDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts">NginxDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#timeouts NginxDeployment#timeouts}

---

##### `WebApplicationFirewall`<sup>Optional</sup> <a name="WebApplicationFirewall" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentConfig.property.webApplicationFirewall"></a>

```csharp
public NginxDeploymentWebApplicationFirewall WebApplicationFirewall { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall">NginxDeploymentWebApplicationFirewall</a>

web_application_firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#web_application_firewall NginxDeployment#web_application_firewall}

---

### NginxDeploymentFrontendPrivate <a name="NginxDeploymentFrontendPrivate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentFrontendPrivate {
    string AllocationMethod,
    string IpAddress,
    string SubnetId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.allocationMethod">AllocationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#allocation_method NginxDeployment#allocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#ip_address NginxDeployment#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#subnet_id NginxDeployment#subnet_id}. |

---

##### `AllocationMethod`<sup>Required</sup> <a name="AllocationMethod" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.allocationMethod"></a>

```csharp
public string AllocationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#allocation_method NginxDeployment#allocation_method}.

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#ip_address NginxDeployment#ip_address}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivate.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#subnet_id NginxDeployment#subnet_id}.

---

### NginxDeploymentFrontendPublic <a name="NginxDeploymentFrontendPublic" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentFrontendPublic {
    string[] IpAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic.property.ipAddress">IpAddress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#ip_address NginxDeployment#ip_address}. |

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic.property.ipAddress"></a>

```csharp
public string[] IpAddress { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#ip_address NginxDeployment#ip_address}.

---

### NginxDeploymentIdentity <a name="NginxDeploymentIdentity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#type NginxDeployment#type}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#identity_ids NginxDeployment#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#type NginxDeployment#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#identity_ids NginxDeployment#identity_ids}.

---

### NginxDeploymentLoggingStorageAccount <a name="NginxDeploymentLoggingStorageAccount" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentLoggingStorageAccount {
    string ContainerName = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.property.containerName">ContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#container_name NginxDeployment#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#name NginxDeployment#name}. |

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#container_name NginxDeployment#container_name}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccount.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#name NginxDeployment#name}.

---

### NginxDeploymentNetworkInterface <a name="NginxDeploymentNetworkInterface" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentNetworkInterface {
    string SubnetId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#subnet_id NginxDeployment#subnet_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterface.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#subnet_id NginxDeployment#subnet_id}.

---

### NginxDeploymentTimeouts <a name="NginxDeploymentTimeouts" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#create NginxDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#delete NginxDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#read NginxDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#update NginxDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#create NginxDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#delete NginxDeployment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#read NginxDeployment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#update NginxDeployment#update}.

---

### NginxDeploymentWebApplicationFirewall <a name="NginxDeploymentWebApplicationFirewall" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewall {
    object ActivationStateEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall.property.activationStateEnabled">ActivationStateEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#activation_state_enabled NginxDeployment#activation_state_enabled}. |

---

##### `ActivationStateEnabled`<sup>Required</sup> <a name="ActivationStateEnabled" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall.property.activationStateEnabled"></a>

```csharp
public object ActivationStateEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/nginx_deployment#activation_state_enabled NginxDeployment#activation_state_enabled}.

---

### NginxDeploymentWebApplicationFirewallStatus <a name="NginxDeploymentWebApplicationFirewallStatus" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatus {

};
```


### NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage <a name="NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage {

};
```


### NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage <a name="NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage {

};
```


### NginxDeploymentWebApplicationFirewallStatusComponentVersions <a name="NginxDeploymentWebApplicationFirewallStatusComponentVersions" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatusComponentVersions {

};
```


### NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage <a name="NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage {

};
```


## Classes <a name="Classes" id="Classes"></a>

### NginxDeploymentAutoScaleProfileList <a name="NginxDeploymentAutoScaleProfileList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentAutoScaleProfileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.get"></a>

```csharp
private NginxDeploymentAutoScaleProfileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NginxDeploymentAutoScaleProfileOutputReference <a name="NginxDeploymentAutoScaleProfileOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentAutoScaleProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.minCapacity">MinCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.minCapacityInput"></a>

```csharp
public double MinCapacityInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.minCapacity"></a>

```csharp
public double MinCapacity { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentAutoScaleProfileOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NginxDeploymentFrontendPrivateList <a name="NginxDeploymentFrontendPrivateList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentFrontendPrivateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.get"></a>

```csharp
private NginxDeploymentFrontendPrivateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NginxDeploymentFrontendPrivateOutputReference <a name="NginxDeploymentFrontendPrivateOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentFrontendPrivateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.allocationMethodInput">AllocationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.allocationMethod">AllocationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocationMethodInput`<sup>Optional</sup> <a name="AllocationMethodInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.allocationMethodInput"></a>

```csharp
public string AllocationMethodInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `AllocationMethod`<sup>Required</sup> <a name="AllocationMethod" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.allocationMethod"></a>

```csharp
public string AllocationMethod { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPrivateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NginxDeploymentFrontendPublicOutputReference <a name="NginxDeploymentFrontendPublicOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentFrontendPublicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.ipAddress">IpAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.ipAddressInput"></a>

```csharp
public string[] IpAddressInput { get; }
```

- *Type:* string[]

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.ipAddress"></a>

```csharp
public string[] IpAddress { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublicOutputReference.property.internalValue"></a>

```csharp
public NginxDeploymentFrontendPublic InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentFrontendPublic">NginxDeploymentFrontendPublic</a>

---


### NginxDeploymentIdentityOutputReference <a name="NginxDeploymentIdentityOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentityOutputReference.property.internalValue"></a>

```csharp
public NginxDeploymentIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentIdentity">NginxDeploymentIdentity</a>

---


### NginxDeploymentLoggingStorageAccountList <a name="NginxDeploymentLoggingStorageAccountList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentLoggingStorageAccountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.get"></a>

```csharp
private NginxDeploymentLoggingStorageAccountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NginxDeploymentLoggingStorageAccountOutputReference <a name="NginxDeploymentLoggingStorageAccountOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentLoggingStorageAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resetContainerName"></a>

```csharp
private void ResetContainerName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentLoggingStorageAccountOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NginxDeploymentNetworkInterfaceList <a name="NginxDeploymentNetworkInterfaceList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.get"></a>

```csharp
private NginxDeploymentNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NginxDeploymentNetworkInterfaceOutputReference <a name="NginxDeploymentNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NginxDeploymentTimeoutsOutputReference <a name="NginxDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NginxDeploymentWebApplicationFirewallOutputReference <a name="NginxDeploymentWebApplicationFirewallOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList">NginxDeploymentWebApplicationFirewallStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.activationStateEnabledInput">ActivationStateEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.activationStateEnabled">ActivationStateEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall">NginxDeploymentWebApplicationFirewall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.status"></a>

```csharp
public NginxDeploymentWebApplicationFirewallStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList">NginxDeploymentWebApplicationFirewallStatusList</a>

---

##### `ActivationStateEnabledInput`<sup>Optional</sup> <a name="ActivationStateEnabledInput" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.activationStateEnabledInput"></a>

```csharp
public object ActivationStateEnabledInput { get; }
```

- *Type:* object

---

##### `ActivationStateEnabled`<sup>Required</sup> <a name="ActivationStateEnabled" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.activationStateEnabled"></a>

```csharp
public object ActivationStateEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallOutputReference.property.internalValue"></a>

```csharp
public NginxDeploymentWebApplicationFirewall InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewall">NginxDeploymentWebApplicationFirewall</a>

---


### NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList <a name="NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.get"></a>

```csharp
private NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference <a name="NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.revisionDatetime">RevisionDatetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage">NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevisionDatetime`<sup>Required</sup> <a name="RevisionDatetime" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.revisionDatetime"></a>

```csharp
public string RevisionDatetime { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.internalValue"></a>

```csharp
public NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage">NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage</a>

---


### NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList <a name="NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.get"></a>

```csharp
private NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference <a name="NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.revisionDatetime">RevisionDatetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage">NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevisionDatetime`<sup>Required</sup> <a name="RevisionDatetime" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.revisionDatetime"></a>

```csharp
public string RevisionDatetime { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.internalValue"></a>

```csharp
public NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage">NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage</a>

---


### NginxDeploymentWebApplicationFirewallStatusComponentVersionsList <a name="NginxDeploymentWebApplicationFirewallStatusComponentVersionsList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatusComponentVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.get"></a>

```csharp
private NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference <a name="NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.wafEngineVersion">WafEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.wafNginxVersion">WafNginxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersions">NginxDeploymentWebApplicationFirewallStatusComponentVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WafEngineVersion`<sup>Required</sup> <a name="WafEngineVersion" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.wafEngineVersion"></a>

```csharp
public string WafEngineVersion { get; }
```

- *Type:* string

---

##### `WafNginxVersion`<sup>Required</sup> <a name="WafNginxVersion" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.wafNginxVersion"></a>

```csharp
public string WafNginxVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.internalValue"></a>

```csharp
public NginxDeploymentWebApplicationFirewallStatusComponentVersions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersions">NginxDeploymentWebApplicationFirewallStatusComponentVersions</a>

---


### NginxDeploymentWebApplicationFirewallStatusList <a name="NginxDeploymentWebApplicationFirewallStatusList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.get"></a>

```csharp
private NginxDeploymentWebApplicationFirewallStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NginxDeploymentWebApplicationFirewallStatusOutputReference <a name="NginxDeploymentWebApplicationFirewallStatusOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.attackSignaturesPackage">AttackSignaturesPackage</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList">NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.botSignaturesPackage">BotSignaturesPackage</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList">NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.componentVersions">ComponentVersions</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList">NginxDeploymentWebApplicationFirewallStatusComponentVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.threatCampaignsPackage">ThreatCampaignsPackage</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList">NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatus">NginxDeploymentWebApplicationFirewallStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttackSignaturesPackage`<sup>Required</sup> <a name="AttackSignaturesPackage" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.attackSignaturesPackage"></a>

```csharp
public NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList AttackSignaturesPackage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList">NginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList</a>

---

##### `BotSignaturesPackage`<sup>Required</sup> <a name="BotSignaturesPackage" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.botSignaturesPackage"></a>

```csharp
public NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList BotSignaturesPackage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList">NginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList</a>

---

##### `ComponentVersions`<sup>Required</sup> <a name="ComponentVersions" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.componentVersions"></a>

```csharp
public NginxDeploymentWebApplicationFirewallStatusComponentVersionsList ComponentVersions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusComponentVersionsList">NginxDeploymentWebApplicationFirewallStatusComponentVersionsList</a>

---

##### `ThreatCampaignsPackage`<sup>Required</sup> <a name="ThreatCampaignsPackage" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.threatCampaignsPackage"></a>

```csharp
public NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList ThreatCampaignsPackage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList">NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusOutputReference.property.internalValue"></a>

```csharp
public NginxDeploymentWebApplicationFirewallStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatus">NginxDeploymentWebApplicationFirewallStatus</a>

---


### NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList <a name="NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.get"></a>

```csharp
private NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference <a name="NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.revisionDatetime">RevisionDatetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage">NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevisionDatetime`<sup>Required</sup> <a name="RevisionDatetime" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.revisionDatetime"></a>

```csharp
public string RevisionDatetime { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.internalValue"></a>

```csharp
public NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.nginxDeployment.NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage">NginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage</a>

---



