# `cdnEndpointCustomDomain` Submodule <a name="`cdnEndpointCustomDomain` Submodule" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnEndpointCustomDomain <a name="CdnEndpointCustomDomain" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain azurerm_cdn_endpoint_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CdnEndpointCustomDomain(Construct Scope, string Id, CdnEndpointCustomDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig">CdnEndpointCustomDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig">CdnEndpointCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putCdnManagedHttps">PutCdnManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putUserManagedHttps">PutUserManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetCdnManagedHttps">ResetCdnManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetUserManagedHttps">ResetUserManagedHttps</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCdnManagedHttps` <a name="PutCdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putCdnManagedHttps"></a>

```csharp
private void PutCdnManagedHttps(CdnEndpointCustomDomainCdnManagedHttps Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putCdnManagedHttps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(CdnEndpointCustomDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts">CdnEndpointCustomDomainTimeouts</a>

---

##### `PutUserManagedHttps` <a name="PutUserManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putUserManagedHttps"></a>

```csharp
private void PutUserManagedHttps(CdnEndpointCustomDomainUserManagedHttps Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putUserManagedHttps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a>

---

##### `ResetCdnManagedHttps` <a name="ResetCdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetCdnManagedHttps"></a>

```csharp
private void ResetCdnManagedHttps()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserManagedHttps` <a name="ResetUserManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetUserManagedHttps"></a>

```csharp
private void ResetUserManagedHttps()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CdnEndpointCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CdnEndpointCustomDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CdnEndpointCustomDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CdnEndpointCustomDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CdnEndpointCustomDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CdnEndpointCustomDomain resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CdnEndpointCustomDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CdnEndpointCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CdnEndpointCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnManagedHttps">CdnManagedHttps</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference">CdnEndpointCustomDomainCdnManagedHttpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference">CdnEndpointCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.userManagedHttps">UserManagedHttps</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference">CdnEndpointCustomDomainUserManagedHttpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnEndpointIdInput">CdnEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnManagedHttpsInput">CdnManagedHttpsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.userManagedHttpsInput">UserManagedHttpsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnEndpointId">CdnEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CdnManagedHttps`<sup>Required</sup> <a name="CdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnManagedHttps"></a>

```csharp
public CdnEndpointCustomDomainCdnManagedHttpsOutputReference CdnManagedHttps { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference">CdnEndpointCustomDomainCdnManagedHttpsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.timeouts"></a>

```csharp
public CdnEndpointCustomDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference">CdnEndpointCustomDomainTimeoutsOutputReference</a>

---

##### `UserManagedHttps`<sup>Required</sup> <a name="UserManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.userManagedHttps"></a>

```csharp
public CdnEndpointCustomDomainUserManagedHttpsOutputReference UserManagedHttps { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference">CdnEndpointCustomDomainUserManagedHttpsOutputReference</a>

---

##### `CdnEndpointIdInput`<sup>Optional</sup> <a name="CdnEndpointIdInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnEndpointIdInput"></a>

```csharp
public string CdnEndpointIdInput { get; }
```

- *Type:* string

---

##### `CdnManagedHttpsInput`<sup>Optional</sup> <a name="CdnManagedHttpsInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnManagedHttpsInput"></a>

```csharp
public CdnEndpointCustomDomainCdnManagedHttps CdnManagedHttpsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a>

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserManagedHttpsInput`<sup>Optional</sup> <a name="UserManagedHttpsInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.userManagedHttpsInput"></a>

```csharp
public CdnEndpointCustomDomainUserManagedHttps UserManagedHttpsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a>

---

##### `CdnEndpointId`<sup>Required</sup> <a name="CdnEndpointId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnEndpointId"></a>

```csharp
public string CdnEndpointId { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnEndpointCustomDomainCdnManagedHttps <a name="CdnEndpointCustomDomainCdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CdnEndpointCustomDomainCdnManagedHttps {
    string CertificateType,
    string ProtocolType,
    string TlsVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.certificateType">CertificateType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#certificate_type CdnEndpointCustomDomain#certificate_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.protocolType">ProtocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#protocol_type CdnEndpointCustomDomain#protocol_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.tlsVersion">TlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#tls_version CdnEndpointCustomDomain#tls_version}. |

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.certificateType"></a>

```csharp
public string CertificateType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#certificate_type CdnEndpointCustomDomain#certificate_type}.

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.protocolType"></a>

```csharp
public string ProtocolType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#protocol_type CdnEndpointCustomDomain#protocol_type}.

---

##### `TlsVersion`<sup>Optional</sup> <a name="TlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.tlsVersion"></a>

```csharp
public string TlsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#tls_version CdnEndpointCustomDomain#tls_version}.

---

### CdnEndpointCustomDomainConfig <a name="CdnEndpointCustomDomainConfig" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CdnEndpointCustomDomainConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CdnEndpointId,
    string HostName,
    string Name,
    CdnEndpointCustomDomainCdnManagedHttps CdnManagedHttps = null,
    string Id = null,
    CdnEndpointCustomDomainTimeouts Timeouts = null,
    CdnEndpointCustomDomainUserManagedHttps UserManagedHttps = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.cdnEndpointId">CdnEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#cdn_endpoint_id CdnEndpointCustomDomain#cdn_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#host_name CdnEndpointCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#name CdnEndpointCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.cdnManagedHttps">CdnManagedHttps</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a></code> | cdn_managed_https block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#id CdnEndpointCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts">CdnEndpointCustomDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.userManagedHttps">UserManagedHttps</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a></code> | user_managed_https block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CdnEndpointId`<sup>Required</sup> <a name="CdnEndpointId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.cdnEndpointId"></a>

```csharp
public string CdnEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#cdn_endpoint_id CdnEndpointCustomDomain#cdn_endpoint_id}.

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#host_name CdnEndpointCustomDomain#host_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#name CdnEndpointCustomDomain#name}.

---

##### `CdnManagedHttps`<sup>Optional</sup> <a name="CdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.cdnManagedHttps"></a>

```csharp
public CdnEndpointCustomDomainCdnManagedHttps CdnManagedHttps { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a>

cdn_managed_https block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#cdn_managed_https CdnEndpointCustomDomain#cdn_managed_https}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#id CdnEndpointCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.timeouts"></a>

```csharp
public CdnEndpointCustomDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts">CdnEndpointCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#timeouts CdnEndpointCustomDomain#timeouts}

---

##### `UserManagedHttps`<sup>Optional</sup> <a name="UserManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.userManagedHttps"></a>

```csharp
public CdnEndpointCustomDomainUserManagedHttps UserManagedHttps { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a>

user_managed_https block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#user_managed_https CdnEndpointCustomDomain#user_managed_https}

---

### CdnEndpointCustomDomainTimeouts <a name="CdnEndpointCustomDomainTimeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CdnEndpointCustomDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#create CdnEndpointCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#delete CdnEndpointCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#read CdnEndpointCustomDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#update CdnEndpointCustomDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#create CdnEndpointCustomDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#delete CdnEndpointCustomDomain#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#read CdnEndpointCustomDomain#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#update CdnEndpointCustomDomain#update}.

---

### CdnEndpointCustomDomainUserManagedHttps <a name="CdnEndpointCustomDomainUserManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CdnEndpointCustomDomainUserManagedHttps {
    string KeyVaultSecretId,
    string TlsVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.keyVaultSecretId">KeyVaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#key_vault_secret_id CdnEndpointCustomDomain#key_vault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.tlsVersion">TlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#tls_version CdnEndpointCustomDomain#tls_version}. |

---

##### `KeyVaultSecretId`<sup>Required</sup> <a name="KeyVaultSecretId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.keyVaultSecretId"></a>

```csharp
public string KeyVaultSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#key_vault_secret_id CdnEndpointCustomDomain#key_vault_secret_id}.

---

##### `TlsVersion`<sup>Optional</sup> <a name="TlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.tlsVersion"></a>

```csharp
public string TlsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cdn_endpoint_custom_domain#tls_version CdnEndpointCustomDomain#tls_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnEndpointCustomDomainCdnManagedHttpsOutputReference <a name="CdnEndpointCustomDomainCdnManagedHttpsOutputReference" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CdnEndpointCustomDomainCdnManagedHttpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resetTlsVersion">ResetTlsVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTlsVersion` <a name="ResetTlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resetTlsVersion"></a>

```csharp
private void ResetTlsVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.certificateTypeInput">CertificateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.protocolTypeInput">ProtocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.tlsVersionInput">TlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.certificateType">CertificateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.protocolType">ProtocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.tlsVersion">TlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateTypeInput`<sup>Optional</sup> <a name="CertificateTypeInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.certificateTypeInput"></a>

```csharp
public string CertificateTypeInput { get; }
```

- *Type:* string

---

##### `ProtocolTypeInput`<sup>Optional</sup> <a name="ProtocolTypeInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.protocolTypeInput"></a>

```csharp
public string ProtocolTypeInput { get; }
```

- *Type:* string

---

##### `TlsVersionInput`<sup>Optional</sup> <a name="TlsVersionInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.tlsVersionInput"></a>

```csharp
public string TlsVersionInput { get; }
```

- *Type:* string

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.certificateType"></a>

```csharp
public string CertificateType { get; }
```

- *Type:* string

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.protocolType"></a>

```csharp
public string ProtocolType { get; }
```

- *Type:* string

---

##### `TlsVersion`<sup>Required</sup> <a name="TlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.tlsVersion"></a>

```csharp
public string TlsVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.internalValue"></a>

```csharp
public CdnEndpointCustomDomainCdnManagedHttps InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a>

---


### CdnEndpointCustomDomainTimeoutsOutputReference <a name="CdnEndpointCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CdnEndpointCustomDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CdnEndpointCustomDomainUserManagedHttpsOutputReference <a name="CdnEndpointCustomDomainUserManagedHttpsOutputReference" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CdnEndpointCustomDomainUserManagedHttpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resetTlsVersion">ResetTlsVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTlsVersion` <a name="ResetTlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resetTlsVersion"></a>

```csharp
private void ResetTlsVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultSecretIdInput">KeyVaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.tlsVersionInput">TlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultSecretId">KeyVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.tlsVersion">TlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyVaultSecretIdInput`<sup>Optional</sup> <a name="KeyVaultSecretIdInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultSecretIdInput"></a>

```csharp
public string KeyVaultSecretIdInput { get; }
```

- *Type:* string

---

##### `TlsVersionInput`<sup>Optional</sup> <a name="TlsVersionInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.tlsVersionInput"></a>

```csharp
public string TlsVersionInput { get; }
```

- *Type:* string

---

##### `KeyVaultSecretId`<sup>Required</sup> <a name="KeyVaultSecretId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultSecretId"></a>

```csharp
public string KeyVaultSecretId { get; }
```

- *Type:* string

---

##### `TlsVersion`<sup>Required</sup> <a name="TlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.tlsVersion"></a>

```csharp
public string TlsVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.internalValue"></a>

```csharp
public CdnEndpointCustomDomainUserManagedHttps InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a>

---



