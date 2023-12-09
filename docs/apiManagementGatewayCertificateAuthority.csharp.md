# `apiManagementGatewayCertificateAuthority` Submodule <a name="`apiManagementGatewayCertificateAuthority` Submodule" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementGatewayCertificateAuthority <a name="ApiManagementGatewayCertificateAuthority" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority azurerm_api_management_gateway_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementGatewayCertificateAuthority(Construct Scope, string Id, ApiManagementGatewayCertificateAuthorityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig">ApiManagementGatewayCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig">ApiManagementGatewayCertificateAuthorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetIsTrusted">ResetIsTrusted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiManagementGatewayCertificateAuthorityTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsTrusted` <a name="ResetIsTrusted" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetIsTrusted"></a>

```csharp
private void ResetIsTrusted()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementGatewayCertificateAuthority resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementGatewayCertificateAuthority.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementGatewayCertificateAuthority.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementGatewayCertificateAuthority.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementGatewayCertificateAuthority.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApiManagementGatewayCertificateAuthority resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementGatewayCertificateAuthority to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementGatewayCertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementGatewayCertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference">ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.apiManagementIdInput">ApiManagementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.certificateNameInput">CertificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.gatewayNameInput">GatewayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.isTrustedInput">IsTrustedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.apiManagementId">ApiManagementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.certificateName">CertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.gatewayName">GatewayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.isTrusted">IsTrusted</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.timeouts"></a>

```csharp
public ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference">ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference</a>

---

##### `ApiManagementIdInput`<sup>Optional</sup> <a name="ApiManagementIdInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.apiManagementIdInput"></a>

```csharp
public string ApiManagementIdInput { get; }
```

- *Type:* string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.certificateNameInput"></a>

```csharp
public string CertificateNameInput { get; }
```

- *Type:* string

---

##### `GatewayNameInput`<sup>Optional</sup> <a name="GatewayNameInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.gatewayNameInput"></a>

```csharp
public string GatewayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsTrustedInput`<sup>Optional</sup> <a name="IsTrustedInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.isTrustedInput"></a>

```csharp
public object IsTrustedInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.apiManagementId"></a>

```csharp
public string ApiManagementId { get; }
```

- *Type:* string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.certificateName"></a>

```csharp
public string CertificateName { get; }
```

- *Type:* string

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.gatewayName"></a>

```csharp
public string GatewayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsTrusted`<sup>Required</sup> <a name="IsTrusted" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.isTrusted"></a>

```csharp
public object IsTrusted { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementGatewayCertificateAuthorityConfig <a name="ApiManagementGatewayCertificateAuthorityConfig" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementGatewayCertificateAuthorityConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiManagementId,
    string CertificateName,
    string GatewayName,
    string Id = null,
    object IsTrusted = null,
    ApiManagementGatewayCertificateAuthorityTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.apiManagementId">ApiManagementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#api_management_id ApiManagementGatewayCertificateAuthority#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.certificateName">CertificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#certificate_name ApiManagementGatewayCertificateAuthority#certificate_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.gatewayName">GatewayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#gateway_name ApiManagementGatewayCertificateAuthority#gateway_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#id ApiManagementGatewayCertificateAuthority#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.isTrusted">IsTrusted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#is_trusted ApiManagementGatewayCertificateAuthority#is_trusted}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.apiManagementId"></a>

```csharp
public string ApiManagementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#api_management_id ApiManagementGatewayCertificateAuthority#api_management_id}.

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.certificateName"></a>

```csharp
public string CertificateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#certificate_name ApiManagementGatewayCertificateAuthority#certificate_name}.

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.gatewayName"></a>

```csharp
public string GatewayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#gateway_name ApiManagementGatewayCertificateAuthority#gateway_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#id ApiManagementGatewayCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsTrusted`<sup>Optional</sup> <a name="IsTrusted" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.isTrusted"></a>

```csharp
public object IsTrusted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#is_trusted ApiManagementGatewayCertificateAuthority#is_trusted}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.timeouts"></a>

```csharp
public ApiManagementGatewayCertificateAuthorityTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#timeouts ApiManagementGatewayCertificateAuthority#timeouts}

---

### ApiManagementGatewayCertificateAuthorityTimeouts <a name="ApiManagementGatewayCertificateAuthorityTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementGatewayCertificateAuthorityTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#create ApiManagementGatewayCertificateAuthority#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#delete ApiManagementGatewayCertificateAuthority#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#read ApiManagementGatewayCertificateAuthority#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#update ApiManagementGatewayCertificateAuthority#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#create ApiManagementGatewayCertificateAuthority#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#delete ApiManagementGatewayCertificateAuthority#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#read ApiManagementGatewayCertificateAuthority#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/api_management_gateway_certificate_authority#update ApiManagementGatewayCertificateAuthority#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference <a name="ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



