# `searchService` Submodule <a name="`searchService` Submodule" id="@cdktf/provider-azurerm.searchService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SearchService <a name="SearchService" id="@cdktf/provider-azurerm.searchService.SearchService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service azurerm_search_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SearchService(Construct Scope, string Id, SearchServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig">SearchServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.searchService.SearchService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig">SearchServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetAllowedIps">ResetAllowedIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetAuthenticationFailureMode">ResetAuthenticationFailureMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetCustomerManagedKeyEnforcementEnabled">ResetCustomerManagedKeyEnforcementEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetHostingMode">ResetHostingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetLocalAuthenticationEnabled">ResetLocalAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetPartitionCount">ResetPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetSemanticSearchSku">ResetSemanticSearchSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.searchService.SearchService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.searchService.SearchService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.searchService.SearchService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.searchService.SearchService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.searchService.SearchService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.searchService.SearchService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.searchService.SearchService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.searchService.SearchService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.searchService.SearchService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.searchService.SearchService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.searchService.SearchService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.searchService.SearchService.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.searchService.SearchService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.searchService.SearchService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.searchService.SearchService.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.searchService.SearchService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.searchService.SearchService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.searchService.SearchService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.searchService.SearchService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.searchService.SearchService.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.searchService.SearchService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.searchService.SearchService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.searchService.SearchService.putIdentity"></a>

```csharp
private void PutIdentity(SearchServiceIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.searchService.SearchService.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.searchService.SearchService.putTimeouts"></a>

```csharp
private void PutTimeouts(SearchServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.searchService.SearchService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts">SearchServiceTimeouts</a>

---

##### `ResetAllowedIps` <a name="ResetAllowedIps" id="@cdktf/provider-azurerm.searchService.SearchService.resetAllowedIps"></a>

```csharp
private void ResetAllowedIps()
```

##### `ResetAuthenticationFailureMode` <a name="ResetAuthenticationFailureMode" id="@cdktf/provider-azurerm.searchService.SearchService.resetAuthenticationFailureMode"></a>

```csharp
private void ResetAuthenticationFailureMode()
```

##### `ResetCustomerManagedKeyEnforcementEnabled` <a name="ResetCustomerManagedKeyEnforcementEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.resetCustomerManagedKeyEnforcementEnabled"></a>

```csharp
private void ResetCustomerManagedKeyEnforcementEnabled()
```

##### `ResetHostingMode` <a name="ResetHostingMode" id="@cdktf/provider-azurerm.searchService.SearchService.resetHostingMode"></a>

```csharp
private void ResetHostingMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.searchService.SearchService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.searchService.SearchService.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetLocalAuthenticationEnabled` <a name="ResetLocalAuthenticationEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.resetLocalAuthenticationEnabled"></a>

```csharp
private void ResetLocalAuthenticationEnabled()
```

##### `ResetPartitionCount` <a name="ResetPartitionCount" id="@cdktf/provider-azurerm.searchService.SearchService.resetPartitionCount"></a>

```csharp
private void ResetPartitionCount()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktf/provider-azurerm.searchService.SearchService.resetReplicaCount"></a>

```csharp
private void ResetReplicaCount()
```

##### `ResetSemanticSearchSku` <a name="ResetSemanticSearchSku" id="@cdktf/provider-azurerm.searchService.SearchService.resetSemanticSearchSku"></a>

```csharp
private void ResetSemanticSearchSku()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.searchService.SearchService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.searchService.SearchService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SearchService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.searchService.SearchService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SearchService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.searchService.SearchService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.searchService.SearchService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SearchService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.searchService.SearchService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.searchService.SearchService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SearchService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.searchService.SearchService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.searchService.SearchService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SearchService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SearchService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.searchService.SearchService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.searchService.SearchService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SearchService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.searchService.SearchService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SearchService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.searchService.SearchService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SearchService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference">SearchServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.queryKeys">QueryKeys</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList">SearchServiceQueryKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.secondaryKey">SecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference">SearchServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.allowedIpsInput">AllowedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.authenticationFailureModeInput">AuthenticationFailureModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.customerManagedKeyEnforcementEnabledInput">CustomerManagedKeyEnforcementEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.hostingModeInput">HostingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.localAuthenticationEnabledInput">LocalAuthenticationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.partitionCountInput">PartitionCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.replicaCountInput">ReplicaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.semanticSearchSkuInput">SemanticSearchSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.allowedIps">AllowedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.authenticationFailureMode">AuthenticationFailureMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.customerManagedKeyEnforcementEnabled">CustomerManagedKeyEnforcementEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.hostingMode">HostingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.localAuthenticationEnabled">LocalAuthenticationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.partitionCount">PartitionCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.replicaCount">ReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.semanticSearchSku">SemanticSearchSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.searchService.SearchService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.searchService.SearchService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.searchService.SearchService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.searchService.SearchService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.searchService.SearchService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.searchService.SearchService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.searchService.SearchService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.searchService.SearchService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.searchService.SearchService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.searchService.SearchService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.searchService.SearchService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.searchService.SearchService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.searchService.SearchService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.searchService.SearchService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.searchService.SearchService.property.identity"></a>

```csharp
public SearchServiceIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference">SearchServiceIdentityOutputReference</a>

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.searchService.SearchService.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `QueryKeys`<sup>Required</sup> <a name="QueryKeys" id="@cdktf/provider-azurerm.searchService.SearchService.property.queryKeys"></a>

```csharp
public SearchServiceQueryKeysList QueryKeys { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList">SearchServiceQueryKeysList</a>

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-azurerm.searchService.SearchService.property.secondaryKey"></a>

```csharp
public string SecondaryKey { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.searchService.SearchService.property.timeouts"></a>

```csharp
public SearchServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference">SearchServiceTimeoutsOutputReference</a>

---

##### `AllowedIpsInput`<sup>Optional</sup> <a name="AllowedIpsInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.allowedIpsInput"></a>

```csharp
public string[] AllowedIpsInput { get; }
```

- *Type:* string[]

---

##### `AuthenticationFailureModeInput`<sup>Optional</sup> <a name="AuthenticationFailureModeInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.authenticationFailureModeInput"></a>

```csharp
public string AuthenticationFailureModeInput { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyEnforcementEnabledInput`<sup>Optional</sup> <a name="CustomerManagedKeyEnforcementEnabledInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.customerManagedKeyEnforcementEnabledInput"></a>

```csharp
public object CustomerManagedKeyEnforcementEnabledInput { get; }
```

- *Type:* object

---

##### `HostingModeInput`<sup>Optional</sup> <a name="HostingModeInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.hostingModeInput"></a>

```csharp
public string HostingModeInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.identityInput"></a>

```csharp
public SearchServiceIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalAuthenticationEnabledInput`<sup>Optional</sup> <a name="LocalAuthenticationEnabledInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.localAuthenticationEnabledInput"></a>

```csharp
public object LocalAuthenticationEnabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartitionCountInput`<sup>Optional</sup> <a name="PartitionCountInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.partitionCountInput"></a>

```csharp
public double PartitionCountInput { get; }
```

- *Type:* double

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.replicaCountInput"></a>

```csharp
public double ReplicaCountInput { get; }
```

- *Type:* double

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SemanticSearchSkuInput`<sup>Optional</sup> <a name="SemanticSearchSkuInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.semanticSearchSkuInput"></a>

```csharp
public string SemanticSearchSkuInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.searchService.SearchService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowedIps`<sup>Required</sup> <a name="AllowedIps" id="@cdktf/provider-azurerm.searchService.SearchService.property.allowedIps"></a>

```csharp
public string[] AllowedIps { get; }
```

- *Type:* string[]

---

##### `AuthenticationFailureMode`<sup>Required</sup> <a name="AuthenticationFailureMode" id="@cdktf/provider-azurerm.searchService.SearchService.property.authenticationFailureMode"></a>

```csharp
public string AuthenticationFailureMode { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyEnforcementEnabled`<sup>Required</sup> <a name="CustomerManagedKeyEnforcementEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.property.customerManagedKeyEnforcementEnabled"></a>

```csharp
public object CustomerManagedKeyEnforcementEnabled { get; }
```

- *Type:* object

---

##### `HostingMode`<sup>Required</sup> <a name="HostingMode" id="@cdktf/provider-azurerm.searchService.SearchService.property.hostingMode"></a>

```csharp
public string HostingMode { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.searchService.SearchService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalAuthenticationEnabled`<sup>Required</sup> <a name="LocalAuthenticationEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.property.localAuthenticationEnabled"></a>

```csharp
public object LocalAuthenticationEnabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.searchService.SearchService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.searchService.SearchService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartitionCount`<sup>Required</sup> <a name="PartitionCount" id="@cdktf/provider-azurerm.searchService.SearchService.property.partitionCount"></a>

```csharp
public double PartitionCount { get; }
```

- *Type:* double

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.searchService.SearchService.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktf/provider-azurerm.searchService.SearchService.property.replicaCount"></a>

```csharp
public double ReplicaCount { get; }
```

- *Type:* double

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.searchService.SearchService.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SemanticSearchSku`<sup>Required</sup> <a name="SemanticSearchSku" id="@cdktf/provider-azurerm.searchService.SearchService.property.semanticSearchSku"></a>

```csharp
public string SemanticSearchSku { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.searchService.SearchService.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.searchService.SearchService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.searchService.SearchService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SearchServiceConfig <a name="SearchServiceConfig" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SearchServiceConfig {
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
    string[] AllowedIps = null,
    string AuthenticationFailureMode = null,
    object CustomerManagedKeyEnforcementEnabled = null,
    string HostingMode = null,
    string Id = null,
    SearchServiceIdentity Identity = null,
    object LocalAuthenticationEnabled = null,
    double PartitionCount = null,
    object PublicNetworkAccessEnabled = null,
    double ReplicaCount = null,
    string SemanticSearchSku = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SearchServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#location SearchService#location}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#name SearchService#name}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#resource_group_name SearchService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#sku SearchService#sku}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.allowedIps">AllowedIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#allowed_ips SearchService#allowed_ips}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.authenticationFailureMode">AuthenticationFailureMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#authentication_failure_mode SearchService#authentication_failure_mode}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.customerManagedKeyEnforcementEnabled">CustomerManagedKeyEnforcementEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#customer_managed_key_enforcement_enabled SearchService#customer_managed_key_enforcement_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.hostingMode">HostingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#hosting_mode SearchService#hosting_mode}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#id SearchService#id}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.localAuthenticationEnabled">LocalAuthenticationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#local_authentication_enabled SearchService#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.partitionCount">PartitionCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#partition_count SearchService#partition_count}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#public_network_access_enabled SearchService#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.replicaCount">ReplicaCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#replica_count SearchService#replica_count}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.semanticSearchSku">SemanticSearchSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#semantic_search_sku SearchService#semantic_search_sku}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#tags SearchService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts">SearchServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#location SearchService#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#name SearchService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#resource_group_name SearchService#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#sku SearchService#sku}.

---

##### `AllowedIps`<sup>Optional</sup> <a name="AllowedIps" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.allowedIps"></a>

```csharp
public string[] AllowedIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#allowed_ips SearchService#allowed_ips}.

---

##### `AuthenticationFailureMode`<sup>Optional</sup> <a name="AuthenticationFailureMode" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.authenticationFailureMode"></a>

```csharp
public string AuthenticationFailureMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#authentication_failure_mode SearchService#authentication_failure_mode}.

---

##### `CustomerManagedKeyEnforcementEnabled`<sup>Optional</sup> <a name="CustomerManagedKeyEnforcementEnabled" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.customerManagedKeyEnforcementEnabled"></a>

```csharp
public object CustomerManagedKeyEnforcementEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#customer_managed_key_enforcement_enabled SearchService#customer_managed_key_enforcement_enabled}.

---

##### `HostingMode`<sup>Optional</sup> <a name="HostingMode" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.hostingMode"></a>

```csharp
public string HostingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#hosting_mode SearchService#hosting_mode}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#id SearchService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.identity"></a>

```csharp
public SearchServiceIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#identity SearchService#identity}

---

##### `LocalAuthenticationEnabled`<sup>Optional</sup> <a name="LocalAuthenticationEnabled" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.localAuthenticationEnabled"></a>

```csharp
public object LocalAuthenticationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#local_authentication_enabled SearchService#local_authentication_enabled}.

---

##### `PartitionCount`<sup>Optional</sup> <a name="PartitionCount" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.partitionCount"></a>

```csharp
public double PartitionCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#partition_count SearchService#partition_count}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#public_network_access_enabled SearchService#public_network_access_enabled}.

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.replicaCount"></a>

```csharp
public double ReplicaCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#replica_count SearchService#replica_count}.

---

##### `SemanticSearchSku`<sup>Optional</sup> <a name="SemanticSearchSku" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.semanticSearchSku"></a>

```csharp
public string SemanticSearchSku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#semantic_search_sku SearchService#semantic_search_sku}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#tags SearchService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.searchService.SearchServiceConfig.property.timeouts"></a>

```csharp
public SearchServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts">SearchServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#timeouts SearchService#timeouts}

---

### SearchServiceIdentity <a name="SearchServiceIdentity" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SearchServiceIdentity {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#type SearchService#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#type SearchService#type}.

---

### SearchServiceQueryKeys <a name="SearchServiceQueryKeys" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SearchServiceQueryKeys {

};
```


### SearchServiceTimeouts <a name="SearchServiceTimeouts" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SearchServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#create SearchService#create}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#delete SearchService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#read SearchService#read}. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#update SearchService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#create SearchService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#delete SearchService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#read SearchService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/search_service#update SearchService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SearchServiceIdentityOutputReference <a name="SearchServiceIdentityOutputReference" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SearchServiceIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.searchService.SearchServiceIdentityOutputReference.property.internalValue"></a>

```csharp
public SearchServiceIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceIdentity">SearchServiceIdentity</a>

---


### SearchServiceQueryKeysList <a name="SearchServiceQueryKeysList" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SearchServiceQueryKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.get"></a>

```csharp
private SearchServiceQueryKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SearchServiceQueryKeysOutputReference <a name="SearchServiceQueryKeysOutputReference" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SearchServiceQueryKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeys">SearchServiceQueryKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.searchService.SearchServiceQueryKeysOutputReference.property.internalValue"></a>

```csharp
public SearchServiceQueryKeys InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchService.SearchServiceQueryKeys">SearchServiceQueryKeys</a>

---


### SearchServiceTimeoutsOutputReference <a name="SearchServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SearchServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.searchService.SearchServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



