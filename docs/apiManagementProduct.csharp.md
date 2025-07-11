# `apiManagementProduct` Submodule <a name="`apiManagementProduct` Submodule" id="@cdktf/provider-azurerm.apiManagementProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementProduct <a name="ApiManagementProduct" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product azurerm_api_management_product}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementProduct(Construct Scope, string Id, ApiManagementProductConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig">ApiManagementProductConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig">ApiManagementProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetApprovalRequired">ResetApprovalRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetSubscriptionRequired">ResetSubscriptionRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetSubscriptionsLimit">ResetSubscriptionsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetTerms">ResetTerms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiManagementProductTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts">ApiManagementProductTimeouts</a>

---

##### `ResetApprovalRequired` <a name="ResetApprovalRequired" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetApprovalRequired"></a>

```csharp
private void ResetApprovalRequired()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSubscriptionRequired` <a name="ResetSubscriptionRequired" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetSubscriptionRequired"></a>

```csharp
private void ResetSubscriptionRequired()
```

##### `ResetSubscriptionsLimit` <a name="ResetSubscriptionsLimit" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetSubscriptionsLimit"></a>

```csharp
private void ResetSubscriptionsLimit()
```

##### `ResetTerms` <a name="ResetTerms" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetTerms"></a>

```csharp
private void ResetTerms()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementProduct resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementProduct.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementProduct.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementProduct.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementProduct.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApiManagementProduct resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementProduct to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference">ApiManagementProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.apiManagementNameInput">ApiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.approvalRequiredInput">ApprovalRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.publishedInput">PublishedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionRequiredInput">SubscriptionRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionsLimitInput">SubscriptionsLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.termsInput">TermsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.apiManagementName">ApiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.approvalRequired">ApprovalRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.published">Published</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionRequired">SubscriptionRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionsLimit">SubscriptionsLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terms">Terms</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.timeouts"></a>

```csharp
public ApiManagementProductTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference">ApiManagementProductTimeoutsOutputReference</a>

---

##### `ApiManagementNameInput`<sup>Optional</sup> <a name="ApiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.apiManagementNameInput"></a>

```csharp
public string ApiManagementNameInput { get; }
```

- *Type:* string

---

##### `ApprovalRequiredInput`<sup>Optional</sup> <a name="ApprovalRequiredInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.approvalRequiredInput"></a>

```csharp
public object ApprovalRequiredInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `PublishedInput`<sup>Optional</sup> <a name="PublishedInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.publishedInput"></a>

```csharp
public object PublishedInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SubscriptionRequiredInput`<sup>Optional</sup> <a name="SubscriptionRequiredInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionRequiredInput"></a>

```csharp
public object SubscriptionRequiredInput { get; }
```

- *Type:* object

---

##### `SubscriptionsLimitInput`<sup>Optional</sup> <a name="SubscriptionsLimitInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionsLimitInput"></a>

```csharp
public double SubscriptionsLimitInput { get; }
```

- *Type:* double

---

##### `TermsInput`<sup>Optional</sup> <a name="TermsInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.termsInput"></a>

```csharp
public string TermsInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.apiManagementName"></a>

```csharp
public string ApiManagementName { get; }
```

- *Type:* string

---

##### `ApprovalRequired`<sup>Required</sup> <a name="ApprovalRequired" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.approvalRequired"></a>

```csharp
public object ApprovalRequired { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `Published`<sup>Required</sup> <a name="Published" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.published"></a>

```csharp
public object Published { get; }
```

- *Type:* object

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SubscriptionRequired`<sup>Required</sup> <a name="SubscriptionRequired" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionRequired"></a>

```csharp
public object SubscriptionRequired { get; }
```

- *Type:* object

---

##### `SubscriptionsLimit`<sup>Required</sup> <a name="SubscriptionsLimit" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionsLimit"></a>

```csharp
public double SubscriptionsLimit { get; }
```

- *Type:* double

---

##### `Terms`<sup>Required</sup> <a name="Terms" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terms"></a>

```csharp
public string Terms { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementProductConfig <a name="ApiManagementProductConfig" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementProductConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiManagementName,
    string DisplayName,
    string ProductId,
    object Published,
    string ResourceGroupName,
    object ApprovalRequired = null,
    string Description = null,
    string Id = null,
    object SubscriptionRequired = null,
    double SubscriptionsLimit = null,
    string Terms = null,
    ApiManagementProductTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.apiManagementName">ApiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#api_management_name ApiManagementProduct#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#display_name ApiManagementProduct#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.productId">ProductId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#product_id ApiManagementProduct#product_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.published">Published</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#published ApiManagementProduct#published}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#resource_group_name ApiManagementProduct#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.approvalRequired">ApprovalRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#approval_required ApiManagementProduct#approval_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#description ApiManagementProduct#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#id ApiManagementProduct#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.subscriptionRequired">SubscriptionRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#subscription_required ApiManagementProduct#subscription_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.subscriptionsLimit">SubscriptionsLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#subscriptions_limit ApiManagementProduct#subscriptions_limit}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.terms">Terms</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#terms ApiManagementProduct#terms}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts">ApiManagementProductTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.apiManagementName"></a>

```csharp
public string ApiManagementName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#api_management_name ApiManagementProduct#api_management_name}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#display_name ApiManagementProduct#display_name}.

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#product_id ApiManagementProduct#product_id}.

---

##### `Published`<sup>Required</sup> <a name="Published" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.published"></a>

```csharp
public object Published { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#published ApiManagementProduct#published}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#resource_group_name ApiManagementProduct#resource_group_name}.

---

##### `ApprovalRequired`<sup>Optional</sup> <a name="ApprovalRequired" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.approvalRequired"></a>

```csharp
public object ApprovalRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#approval_required ApiManagementProduct#approval_required}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#description ApiManagementProduct#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#id ApiManagementProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SubscriptionRequired`<sup>Optional</sup> <a name="SubscriptionRequired" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.subscriptionRequired"></a>

```csharp
public object SubscriptionRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#subscription_required ApiManagementProduct#subscription_required}.

---

##### `SubscriptionsLimit`<sup>Optional</sup> <a name="SubscriptionsLimit" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.subscriptionsLimit"></a>

```csharp
public double SubscriptionsLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#subscriptions_limit ApiManagementProduct#subscriptions_limit}.

---

##### `Terms`<sup>Optional</sup> <a name="Terms" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.terms"></a>

```csharp
public string Terms { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#terms ApiManagementProduct#terms}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.timeouts"></a>

```csharp
public ApiManagementProductTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts">ApiManagementProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#timeouts ApiManagementProduct#timeouts}

---

### ApiManagementProductTimeouts <a name="ApiManagementProductTimeouts" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementProductTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#create ApiManagementProduct#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#delete ApiManagementProduct#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#read ApiManagementProduct#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#update ApiManagementProduct#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#create ApiManagementProduct#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#delete ApiManagementProduct#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#read ApiManagementProduct#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/api_management_product#update ApiManagementProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementProductTimeoutsOutputReference <a name="ApiManagementProductTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementProductTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



