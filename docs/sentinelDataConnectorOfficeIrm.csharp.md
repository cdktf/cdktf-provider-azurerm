# `azurerm_sentinel_data_connector_office_irm`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_data_connector_office_irm`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm).

# `sentinelDataConnectorOfficeIrm` Submodule <a name="`sentinelDataConnectorOfficeIrm` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorOfficeIrm <a name="SentinelDataConnectorOfficeIrm" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm azurerm_sentinel_data_connector_office_irm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorOfficeIrm(Construct Scope, string Id, SentinelDataConnectorOfficeIrmConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig">SentinelDataConnectorOfficeIrmConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig">SentinelDataConnectorOfficeIrmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.putTimeouts"></a>

```csharp
private void PutTimeouts(SentinelDataConnectorOfficeIrmTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeouts">SentinelDataConnectorOfficeIrmTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelDataConnectorOfficeIrm resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorOfficeIrm.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorOfficeIrm.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorOfficeIrm.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorOfficeIrm.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SentinelDataConnectorOfficeIrm resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelDataConnectorOfficeIrm to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelDataConnectorOfficeIrm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorOfficeIrm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference">SentinelDataConnectorOfficeIrmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.timeouts"></a>

```csharp
public SentinelDataConnectorOfficeIrmTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference">SentinelDataConnectorOfficeIrmTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrm.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorOfficeIrmConfig <a name="SentinelDataConnectorOfficeIrmConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorOfficeIrmConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LogAnalyticsWorkspaceId,
    string Name,
    string Id = null,
    string TenantId = null,
    SentinelDataConnectorOfficeIrmTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#log_analytics_workspace_id SentinelDataConnectorOfficeIrm#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#name SentinelDataConnectorOfficeIrm#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#id SentinelDataConnectorOfficeIrm#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#tenant_id SentinelDataConnectorOfficeIrm#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeouts">SentinelDataConnectorOfficeIrmTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#log_analytics_workspace_id SentinelDataConnectorOfficeIrm#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#name SentinelDataConnectorOfficeIrm#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#id SentinelDataConnectorOfficeIrm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#tenant_id SentinelDataConnectorOfficeIrm#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmConfig.property.timeouts"></a>

```csharp
public SentinelDataConnectorOfficeIrmTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeouts">SentinelDataConnectorOfficeIrmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#timeouts SentinelDataConnectorOfficeIrm#timeouts}

---

### SentinelDataConnectorOfficeIrmTimeouts <a name="SentinelDataConnectorOfficeIrmTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorOfficeIrmTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#create SentinelDataConnectorOfficeIrm#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#delete SentinelDataConnectorOfficeIrm#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#read SentinelDataConnectorOfficeIrm#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#create SentinelDataConnectorOfficeIrm#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#delete SentinelDataConnectorOfficeIrm#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/sentinel_data_connector_office_irm#read SentinelDataConnectorOfficeIrm#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorOfficeIrmTimeoutsOutputReference <a name="SentinelDataConnectorOfficeIrmTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorOfficeIrmTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorOfficeIrm.SentinelDataConnectorOfficeIrmTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



