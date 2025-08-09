# `dataFactoryLinkedServiceKusto` Submodule <a name="`dataFactoryLinkedServiceKusto` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceKusto <a name="DataFactoryLinkedServiceKusto" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto azurerm_data_factory_linked_service_kusto}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceKusto(Construct Scope, string Id, DataFactoryLinkedServiceKustoConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig">DataFactoryLinkedServiceKustoConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig">DataFactoryLinkedServiceKustoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetIntegrationRuntimeName">ResetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetServicePrincipalId">ResetServicePrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetServicePrincipalKey">ResetServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetTenant">ResetTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetUseManagedIdentity">ResetUseManagedIdentity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryLinkedServiceKustoTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts">DataFactoryLinkedServiceKustoTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIntegrationRuntimeName` <a name="ResetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetIntegrationRuntimeName"></a>

```csharp
private void ResetIntegrationRuntimeName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetServicePrincipalId` <a name="ResetServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetServicePrincipalId"></a>

```csharp
private void ResetServicePrincipalId()
```

##### `ResetServicePrincipalKey` <a name="ResetServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetServicePrincipalKey"></a>

```csharp
private void ResetServicePrincipalKey()
```

##### `ResetTenant` <a name="ResetTenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetTenant"></a>

```csharp
private void ResetTenant()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUseManagedIdentity` <a name="ResetUseManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetUseManagedIdentity"></a>

```csharp
private void ResetUseManagedIdentity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceKusto resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceKusto.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceKusto.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceKusto.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceKusto.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataFactoryLinkedServiceKusto resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryLinkedServiceKusto to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryLinkedServiceKusto that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceKusto to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference">DataFactoryLinkedServiceKustoTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.annotationsInput">AnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.integrationRuntimeNameInput">IntegrationRuntimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoDatabaseNameInput">KustoDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoEndpointInput">KustoEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalKeyInput">ServicePrincipalKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.tenantInput">TenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.useManagedIdentityInput">UseManagedIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoDatabaseName">KustoDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoEndpoint">KustoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalKey">ServicePrincipalKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.tenant">Tenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.useManagedIdentity">UseManagedIdentity</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.timeouts"></a>

```csharp
public DataFactoryLinkedServiceKustoTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference">DataFactoryLinkedServiceKustoTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.additionalPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.annotationsInput"></a>

```csharp
public string[] AnnotationsInput { get; }
```

- *Type:* string[]

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationRuntimeNameInput`<sup>Optional</sup> <a name="IntegrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.integrationRuntimeNameInput"></a>

```csharp
public string IntegrationRuntimeNameInput { get; }
```

- *Type:* string

---

##### `KustoDatabaseNameInput`<sup>Optional</sup> <a name="KustoDatabaseNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoDatabaseNameInput"></a>

```csharp
public string KustoDatabaseNameInput { get; }
```

- *Type:* string

---

##### `KustoEndpointInput`<sup>Optional</sup> <a name="KustoEndpointInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoEndpointInput"></a>

```csharp
public string KustoEndpointInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalIdInput"></a>

```csharp
public string ServicePrincipalIdInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalKeyInput`<sup>Optional</sup> <a name="ServicePrincipalKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalKeyInput"></a>

```csharp
public string ServicePrincipalKeyInput { get; }
```

- *Type:* string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.tenantInput"></a>

```csharp
public string TenantInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UseManagedIdentityInput`<sup>Optional</sup> <a name="UseManagedIdentityInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.useManagedIdentityInput"></a>

```csharp
public object UseManagedIdentityInput { get; }
```

- *Type:* object

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationRuntimeName`<sup>Required</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.integrationRuntimeName"></a>

```csharp
public string IntegrationRuntimeName { get; }
```

- *Type:* string

---

##### `KustoDatabaseName`<sup>Required</sup> <a name="KustoDatabaseName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoDatabaseName"></a>

```csharp
public string KustoDatabaseName { get; }
```

- *Type:* string

---

##### `KustoEndpoint`<sup>Required</sup> <a name="KustoEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoEndpoint"></a>

```csharp
public string KustoEndpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; }
```

- *Type:* string

---

##### `ServicePrincipalKey`<sup>Required</sup> <a name="ServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalKey"></a>

```csharp
public string ServicePrincipalKey { get; }
```

- *Type:* string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.tenant"></a>

```csharp
public string Tenant { get; }
```

- *Type:* string

---

##### `UseManagedIdentity`<sup>Required</sup> <a name="UseManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.useManagedIdentity"></a>

```csharp
public object UseManagedIdentity { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceKustoConfig <a name="DataFactoryLinkedServiceKustoConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceKustoConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataFactoryId,
    string KustoDatabaseName,
    string KustoEndpoint,
    string Name,
    System.Collections.Generic.IDictionary<string, string> AdditionalProperties = null,
    string[] Annotations = null,
    string Description = null,
    string Id = null,
    string IntegrationRuntimeName = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string ServicePrincipalId = null,
    string ServicePrincipalKey = null,
    string Tenant = null,
    DataFactoryLinkedServiceKustoTimeouts Timeouts = null,
    object UseManagedIdentity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#data_factory_id DataFactoryLinkedServiceKusto#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.kustoDatabaseName">KustoDatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#kusto_database_name DataFactoryLinkedServiceKusto#kusto_database_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.kustoEndpoint">KustoEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#kusto_endpoint DataFactoryLinkedServiceKusto#kusto_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#name DataFactoryLinkedServiceKusto#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#additional_properties DataFactoryLinkedServiceKusto#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.annotations">Annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#annotations DataFactoryLinkedServiceKusto#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#description DataFactoryLinkedServiceKusto#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#id DataFactoryLinkedServiceKusto#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#integration_runtime_name DataFactoryLinkedServiceKusto#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#parameters DataFactoryLinkedServiceKusto#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#service_principal_id DataFactoryLinkedServiceKusto#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.servicePrincipalKey">ServicePrincipalKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#service_principal_key DataFactoryLinkedServiceKusto#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.tenant">Tenant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#tenant DataFactoryLinkedServiceKusto#tenant}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts">DataFactoryLinkedServiceKustoTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.useManagedIdentity">UseManagedIdentity</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#use_managed_identity DataFactoryLinkedServiceKusto#use_managed_identity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#data_factory_id DataFactoryLinkedServiceKusto#data_factory_id}.

---

##### `KustoDatabaseName`<sup>Required</sup> <a name="KustoDatabaseName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.kustoDatabaseName"></a>

```csharp
public string KustoDatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#kusto_database_name DataFactoryLinkedServiceKusto#kusto_database_name}.

---

##### `KustoEndpoint`<sup>Required</sup> <a name="KustoEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.kustoEndpoint"></a>

```csharp
public string KustoEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#kusto_endpoint DataFactoryLinkedServiceKusto#kusto_endpoint}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#name DataFactoryLinkedServiceKusto#name}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#additional_properties DataFactoryLinkedServiceKusto#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.annotations"></a>

```csharp
public string[] Annotations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#annotations DataFactoryLinkedServiceKusto#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#description DataFactoryLinkedServiceKusto#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#id DataFactoryLinkedServiceKusto#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationRuntimeName`<sup>Optional</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.integrationRuntimeName"></a>

```csharp
public string IntegrationRuntimeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#integration_runtime_name DataFactoryLinkedServiceKusto#integration_runtime_name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#parameters DataFactoryLinkedServiceKusto#parameters}.

---

##### `ServicePrincipalId`<sup>Optional</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#service_principal_id DataFactoryLinkedServiceKusto#service_principal_id}.

---

##### `ServicePrincipalKey`<sup>Optional</sup> <a name="ServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.servicePrincipalKey"></a>

```csharp
public string ServicePrincipalKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#service_principal_key DataFactoryLinkedServiceKusto#service_principal_key}.

---

##### `Tenant`<sup>Optional</sup> <a name="Tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.tenant"></a>

```csharp
public string Tenant { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#tenant DataFactoryLinkedServiceKusto#tenant}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.timeouts"></a>

```csharp
public DataFactoryLinkedServiceKustoTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts">DataFactoryLinkedServiceKustoTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#timeouts DataFactoryLinkedServiceKusto#timeouts}

---

##### `UseManagedIdentity`<sup>Optional</sup> <a name="UseManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.useManagedIdentity"></a>

```csharp
public object UseManagedIdentity { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#use_managed_identity DataFactoryLinkedServiceKusto#use_managed_identity}.

---

### DataFactoryLinkedServiceKustoTimeouts <a name="DataFactoryLinkedServiceKustoTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceKustoTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#create DataFactoryLinkedServiceKusto#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#delete DataFactoryLinkedServiceKusto#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#read DataFactoryLinkedServiceKusto#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#update DataFactoryLinkedServiceKusto#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#create DataFactoryLinkedServiceKusto#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#delete DataFactoryLinkedServiceKusto#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#read DataFactoryLinkedServiceKusto#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/data_factory_linked_service_kusto#update DataFactoryLinkedServiceKusto#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceKustoTimeoutsOutputReference <a name="DataFactoryLinkedServiceKustoTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceKustoTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



