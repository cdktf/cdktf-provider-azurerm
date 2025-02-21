# `cdnFrontdoorOrigin` Submodule <a name="`cdnFrontdoorOrigin` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorOrigin <a name="CdnFrontdoorOrigin" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin azurerm_cdn_frontdoor_origin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CdnFrontdoorOrigin(Construct Scope, string Id, CdnFrontdoorOriginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig">CdnFrontdoorOriginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig">CdnFrontdoorOriginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putPrivateLink">PutPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHttpPort">ResetHttpPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHttpsPort">ResetHttpsPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetOriginHostHeader">ResetOriginHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetPrivateLink">ResetPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrivateLink` <a name="PutPrivateLink" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putPrivateLink"></a>

```csharp
private void PutPrivateLink(CdnFrontdoorOriginPrivateLink Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putPrivateLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putTimeouts"></a>

```csharp
private void PutTimeouts(CdnFrontdoorOriginTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHttpPort` <a name="ResetHttpPort" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHttpPort"></a>

```csharp
private void ResetHttpPort()
```

##### `ResetHttpsPort` <a name="ResetHttpsPort" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHttpsPort"></a>

```csharp
private void ResetHttpsPort()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOriginHostHeader` <a name="ResetOriginHostHeader" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetOriginHostHeader"></a>

```csharp
private void ResetOriginHostHeader()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetPrivateLink` <a name="ResetPrivateLink" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetPrivateLink"></a>

```csharp
private void ResetPrivateLink()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetWeight"></a>

```csharp
private void ResetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CdnFrontdoorOrigin resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CdnFrontdoorOrigin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CdnFrontdoorOrigin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CdnFrontdoorOrigin.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CdnFrontdoorOrigin.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CdnFrontdoorOrigin resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CdnFrontdoorOrigin to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CdnFrontdoorOrigin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorOrigin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.privateLink">PrivateLink</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference">CdnFrontdoorOriginPrivateLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference">CdnFrontdoorOriginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdnFrontdoorOriginGroupIdInput">CdnFrontdoorOriginGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.certificateNameCheckEnabledInput">CertificateNameCheckEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpPortInput">HttpPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpsPortInput">HttpsPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.originHostHeaderInput">OriginHostHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.privateLinkInput">PrivateLinkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdnFrontdoorOriginGroupId">CdnFrontdoorOriginGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.certificateNameCheckEnabled">CertificateNameCheckEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpPort">HttpPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpsPort">HttpsPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.originHostHeader">OriginHostHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.weight">Weight</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PrivateLink`<sup>Required</sup> <a name="PrivateLink" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.privateLink"></a>

```csharp
public CdnFrontdoorOriginPrivateLinkOutputReference PrivateLink { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference">CdnFrontdoorOriginPrivateLinkOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.timeouts"></a>

```csharp
public CdnFrontdoorOriginTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference">CdnFrontdoorOriginTimeoutsOutputReference</a>

---

##### `CdnFrontdoorOriginGroupIdInput`<sup>Optional</sup> <a name="CdnFrontdoorOriginGroupIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdnFrontdoorOriginGroupIdInput"></a>

```csharp
public string CdnFrontdoorOriginGroupIdInput { get; }
```

- *Type:* string

---

##### `CertificateNameCheckEnabledInput`<sup>Optional</sup> <a name="CertificateNameCheckEnabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.certificateNameCheckEnabledInput"></a>

```csharp
public object CertificateNameCheckEnabledInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `HttpPortInput`<sup>Optional</sup> <a name="HttpPortInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpPortInput"></a>

```csharp
public double HttpPortInput { get; }
```

- *Type:* double

---

##### `HttpsPortInput`<sup>Optional</sup> <a name="HttpsPortInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpsPortInput"></a>

```csharp
public double HttpsPortInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OriginHostHeaderInput`<sup>Optional</sup> <a name="OriginHostHeaderInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.originHostHeaderInput"></a>

```csharp
public string OriginHostHeaderInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `PrivateLinkInput`<sup>Optional</sup> <a name="PrivateLinkInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.privateLinkInput"></a>

```csharp
public CdnFrontdoorOriginPrivateLink PrivateLinkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `CdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="CdnFrontdoorOriginGroupId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdnFrontdoorOriginGroupId"></a>

```csharp
public string CdnFrontdoorOriginGroupId { get; }
```

- *Type:* string

---

##### `CertificateNameCheckEnabled`<sup>Required</sup> <a name="CertificateNameCheckEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.certificateNameCheckEnabled"></a>

```csharp
public object CertificateNameCheckEnabled { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpPort"></a>

```csharp
public double HttpPort { get; }
```

- *Type:* double

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpsPort"></a>

```csharp
public double HttpsPort { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OriginHostHeader`<sup>Required</sup> <a name="OriginHostHeader" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.originHostHeader"></a>

```csharp
public string OriginHostHeader { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorOriginConfig <a name="CdnFrontdoorOriginConfig" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CdnFrontdoorOriginConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CdnFrontdoorOriginGroupId,
    object CertificateNameCheckEnabled,
    string HostName,
    string Name,
    object Enabled = null,
    double HttpPort = null,
    double HttpsPort = null,
    string Id = null,
    string OriginHostHeader = null,
    double Priority = null,
    CdnFrontdoorOriginPrivateLink PrivateLink = null,
    CdnFrontdoorOriginTimeouts Timeouts = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.cdnFrontdoorOriginGroupId">CdnFrontdoorOriginGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#cdn_frontdoor_origin_group_id CdnFrontdoorOrigin#cdn_frontdoor_origin_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.certificateNameCheckEnabled">CertificateNameCheckEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#certificate_name_check_enabled CdnFrontdoorOrigin#certificate_name_check_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#host_name CdnFrontdoorOrigin#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#name CdnFrontdoorOrigin#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#enabled CdnFrontdoorOrigin#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.httpPort">HttpPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#http_port CdnFrontdoorOrigin#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.httpsPort">HttpsPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#https_port CdnFrontdoorOrigin#https_port}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#id CdnFrontdoorOrigin#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.originHostHeader">OriginHostHeader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#origin_host_header CdnFrontdoorOrigin#origin_host_header}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#priority CdnFrontdoorOrigin#priority}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.privateLink">PrivateLink</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a></code> | private_link block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#weight CdnFrontdoorOrigin#weight}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="CdnFrontdoorOriginGroupId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.cdnFrontdoorOriginGroupId"></a>

```csharp
public string CdnFrontdoorOriginGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#cdn_frontdoor_origin_group_id CdnFrontdoorOrigin#cdn_frontdoor_origin_group_id}.

---

##### `CertificateNameCheckEnabled`<sup>Required</sup> <a name="CertificateNameCheckEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.certificateNameCheckEnabled"></a>

```csharp
public object CertificateNameCheckEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#certificate_name_check_enabled CdnFrontdoorOrigin#certificate_name_check_enabled}.

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#host_name CdnFrontdoorOrigin#host_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#name CdnFrontdoorOrigin#name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#enabled CdnFrontdoorOrigin#enabled}.

---

##### `HttpPort`<sup>Optional</sup> <a name="HttpPort" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.httpPort"></a>

```csharp
public double HttpPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#http_port CdnFrontdoorOrigin#http_port}.

---

##### `HttpsPort`<sup>Optional</sup> <a name="HttpsPort" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.httpsPort"></a>

```csharp
public double HttpsPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#https_port CdnFrontdoorOrigin#https_port}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#id CdnFrontdoorOrigin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OriginHostHeader`<sup>Optional</sup> <a name="OriginHostHeader" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.originHostHeader"></a>

```csharp
public string OriginHostHeader { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#origin_host_header CdnFrontdoorOrigin#origin_host_header}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#priority CdnFrontdoorOrigin#priority}.

---

##### `PrivateLink`<sup>Optional</sup> <a name="PrivateLink" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.privateLink"></a>

```csharp
public CdnFrontdoorOriginPrivateLink PrivateLink { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a>

private_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#private_link CdnFrontdoorOrigin#private_link}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.timeouts"></a>

```csharp
public CdnFrontdoorOriginTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#timeouts CdnFrontdoorOrigin#timeouts}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#weight CdnFrontdoorOrigin#weight}.

---

### CdnFrontdoorOriginPrivateLink <a name="CdnFrontdoorOriginPrivateLink" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CdnFrontdoorOriginPrivateLink {
    string Location,
    string PrivateLinkTargetId,
    string RequestMessage = null,
    string TargetType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#location CdnFrontdoorOrigin#location}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.privateLinkTargetId">PrivateLinkTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#private_link_target_id CdnFrontdoorOrigin#private_link_target_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.requestMessage">RequestMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#request_message CdnFrontdoorOrigin#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.targetType">TargetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#target_type CdnFrontdoorOrigin#target_type}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#location CdnFrontdoorOrigin#location}.

---

##### `PrivateLinkTargetId`<sup>Required</sup> <a name="PrivateLinkTargetId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.privateLinkTargetId"></a>

```csharp
public string PrivateLinkTargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#private_link_target_id CdnFrontdoorOrigin#private_link_target_id}.

---

##### `RequestMessage`<sup>Optional</sup> <a name="RequestMessage" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.requestMessage"></a>

```csharp
public string RequestMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#request_message CdnFrontdoorOrigin#request_message}.

---

##### `TargetType`<sup>Optional</sup> <a name="TargetType" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.targetType"></a>

```csharp
public string TargetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#target_type CdnFrontdoorOrigin#target_type}.

---

### CdnFrontdoorOriginTimeouts <a name="CdnFrontdoorOriginTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CdnFrontdoorOriginTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#create CdnFrontdoorOrigin#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#delete CdnFrontdoorOrigin#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#read CdnFrontdoorOrigin#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#update CdnFrontdoorOrigin#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#create CdnFrontdoorOrigin#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#delete CdnFrontdoorOrigin#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#read CdnFrontdoorOrigin#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/cdn_frontdoor_origin#update CdnFrontdoorOrigin#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorOriginPrivateLinkOutputReference <a name="CdnFrontdoorOriginPrivateLinkOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CdnFrontdoorOriginPrivateLinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resetRequestMessage">ResetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resetTargetType">ResetTargetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequestMessage` <a name="ResetRequestMessage" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resetRequestMessage"></a>

```csharp
private void ResetRequestMessage()
```

##### `ResetTargetType` <a name="ResetTargetType" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resetTargetType"></a>

```csharp
private void ResetTargetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.privateLinkTargetIdInput">PrivateLinkTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.requestMessageInput">RequestMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.targetTypeInput">TargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.privateLinkTargetId">PrivateLinkTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.requestMessage">RequestMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PrivateLinkTargetIdInput`<sup>Optional</sup> <a name="PrivateLinkTargetIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.privateLinkTargetIdInput"></a>

```csharp
public string PrivateLinkTargetIdInput { get; }
```

- *Type:* string

---

##### `RequestMessageInput`<sup>Optional</sup> <a name="RequestMessageInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.requestMessageInput"></a>

```csharp
public string RequestMessageInput { get; }
```

- *Type:* string

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.targetTypeInput"></a>

```csharp
public string TargetTypeInput { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PrivateLinkTargetId`<sup>Required</sup> <a name="PrivateLinkTargetId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.privateLinkTargetId"></a>

```csharp
public string PrivateLinkTargetId { get; }
```

- *Type:* string

---

##### `RequestMessage`<sup>Required</sup> <a name="RequestMessage" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.requestMessage"></a>

```csharp
public string RequestMessage { get; }
```

- *Type:* string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.internalValue"></a>

```csharp
public CdnFrontdoorOriginPrivateLink InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a>

---


### CdnFrontdoorOriginTimeoutsOutputReference <a name="CdnFrontdoorOriginTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CdnFrontdoorOriginTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



