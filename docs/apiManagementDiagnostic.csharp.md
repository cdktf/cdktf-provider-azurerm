# `azurerm_api_management_diagnostic`

Refer to the Terraform Registory for docs: [`azurerm_api_management_diagnostic`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic).

# `apiManagementDiagnostic` Submodule <a name="`apiManagementDiagnostic` Submodule" id="@cdktf/provider-azurerm.apiManagementDiagnostic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementDiagnostic <a name="ApiManagementDiagnostic" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic azurerm_api_management_diagnostic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnostic(Construct Scope, string Id, ApiManagementDiagnosticConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig">ApiManagementDiagnosticConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig">ApiManagementDiagnosticConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendRequest">PutBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendResponse">PutBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendRequest">PutFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendResponse">PutFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetAlwaysLogErrors">ResetAlwaysLogErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetBackendRequest">ResetBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetBackendResponse">ResetBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetFrontendRequest">ResetFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetFrontendResponse">ResetFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetHttpCorrelationProtocol">ResetHttpCorrelationProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetLogClientIp">ResetLogClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetOperationNameFormat">ResetOperationNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetSamplingPercentage">ResetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetVerbosity">ResetVerbosity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutBackendRequest` <a name="PutBackendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendRequest"></a>

```csharp
private void PutBackendRequest(ApiManagementDiagnosticBackendRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a>

---

##### `PutBackendResponse` <a name="PutBackendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendResponse"></a>

```csharp
private void PutBackendResponse(ApiManagementDiagnosticBackendResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a>

---

##### `PutFrontendRequest` <a name="PutFrontendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendRequest"></a>

```csharp
private void PutFrontendRequest(ApiManagementDiagnosticFrontendRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a>

---

##### `PutFrontendResponse` <a name="PutFrontendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendResponse"></a>

```csharp
private void PutFrontendResponse(ApiManagementDiagnosticFrontendResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiManagementDiagnosticTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a>

---

##### `ResetAlwaysLogErrors` <a name="ResetAlwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetAlwaysLogErrors"></a>

```csharp
private void ResetAlwaysLogErrors()
```

##### `ResetBackendRequest` <a name="ResetBackendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetBackendRequest"></a>

```csharp
private void ResetBackendRequest()
```

##### `ResetBackendResponse` <a name="ResetBackendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetBackendResponse"></a>

```csharp
private void ResetBackendResponse()
```

##### `ResetFrontendRequest` <a name="ResetFrontendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetFrontendRequest"></a>

```csharp
private void ResetFrontendRequest()
```

##### `ResetFrontendResponse` <a name="ResetFrontendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetFrontendResponse"></a>

```csharp
private void ResetFrontendResponse()
```

##### `ResetHttpCorrelationProtocol` <a name="ResetHttpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetHttpCorrelationProtocol"></a>

```csharp
private void ResetHttpCorrelationProtocol()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogClientIp` <a name="ResetLogClientIp" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetLogClientIp"></a>

```csharp
private void ResetLogClientIp()
```

##### `ResetOperationNameFormat` <a name="ResetOperationNameFormat" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetOperationNameFormat"></a>

```csharp
private void ResetOperationNameFormat()
```

##### `ResetSamplingPercentage` <a name="ResetSamplingPercentage" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetSamplingPercentage"></a>

```csharp
private void ResetSamplingPercentage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVerbosity` <a name="ResetVerbosity" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetVerbosity"></a>

```csharp
private void ResetVerbosity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementDiagnostic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementDiagnostic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementDiagnostic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendRequest">BackendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference">ApiManagementDiagnosticBackendRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendResponse">BackendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference">ApiManagementDiagnosticBackendResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendRequest">FrontendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference">ApiManagementDiagnosticFrontendRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendResponse">FrontendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference">ApiManagementDiagnosticFrontendResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference">ApiManagementDiagnosticTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.alwaysLogErrorsInput">AlwaysLogErrorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementLoggerIdInput">ApiManagementLoggerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementNameInput">ApiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendRequestInput">BackendRequestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendResponseInput">BackendResponseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendRequestInput">FrontendRequestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendResponseInput">FrontendResponseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.httpCorrelationProtocolInput">HttpCorrelationProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.logClientIpInput">LogClientIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.operationNameFormatInput">OperationNameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.samplingPercentageInput">SamplingPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.verbosityInput">VerbosityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.alwaysLogErrors">AlwaysLogErrors</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementLoggerId">ApiManagementLoggerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementName">ApiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.httpCorrelationProtocol">HttpCorrelationProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.logClientIp">LogClientIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.operationNameFormat">OperationNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.samplingPercentage">SamplingPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.verbosity">Verbosity</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackendRequest`<sup>Required</sup> <a name="BackendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendRequest"></a>

```csharp
public ApiManagementDiagnosticBackendRequestOutputReference BackendRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference">ApiManagementDiagnosticBackendRequestOutputReference</a>

---

##### `BackendResponse`<sup>Required</sup> <a name="BackendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendResponse"></a>

```csharp
public ApiManagementDiagnosticBackendResponseOutputReference BackendResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference">ApiManagementDiagnosticBackendResponseOutputReference</a>

---

##### `FrontendRequest`<sup>Required</sup> <a name="FrontendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendRequest"></a>

```csharp
public ApiManagementDiagnosticFrontendRequestOutputReference FrontendRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference">ApiManagementDiagnosticFrontendRequestOutputReference</a>

---

##### `FrontendResponse`<sup>Required</sup> <a name="FrontendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendResponse"></a>

```csharp
public ApiManagementDiagnosticFrontendResponseOutputReference FrontendResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference">ApiManagementDiagnosticFrontendResponseOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.timeouts"></a>

```csharp
public ApiManagementDiagnosticTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference">ApiManagementDiagnosticTimeoutsOutputReference</a>

---

##### `AlwaysLogErrorsInput`<sup>Optional</sup> <a name="AlwaysLogErrorsInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.alwaysLogErrorsInput"></a>

```csharp
public object AlwaysLogErrorsInput { get; }
```

- *Type:* object

---

##### `ApiManagementLoggerIdInput`<sup>Optional</sup> <a name="ApiManagementLoggerIdInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementLoggerIdInput"></a>

```csharp
public string ApiManagementLoggerIdInput { get; }
```

- *Type:* string

---

##### `ApiManagementNameInput`<sup>Optional</sup> <a name="ApiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementNameInput"></a>

```csharp
public string ApiManagementNameInput { get; }
```

- *Type:* string

---

##### `BackendRequestInput`<sup>Optional</sup> <a name="BackendRequestInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendRequestInput"></a>

```csharp
public ApiManagementDiagnosticBackendRequest BackendRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a>

---

##### `BackendResponseInput`<sup>Optional</sup> <a name="BackendResponseInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendResponseInput"></a>

```csharp
public ApiManagementDiagnosticBackendResponse BackendResponseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a>

---

##### `FrontendRequestInput`<sup>Optional</sup> <a name="FrontendRequestInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendRequestInput"></a>

```csharp
public ApiManagementDiagnosticFrontendRequest FrontendRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a>

---

##### `FrontendResponseInput`<sup>Optional</sup> <a name="FrontendResponseInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendResponseInput"></a>

```csharp
public ApiManagementDiagnosticFrontendResponse FrontendResponseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a>

---

##### `HttpCorrelationProtocolInput`<sup>Optional</sup> <a name="HttpCorrelationProtocolInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.httpCorrelationProtocolInput"></a>

```csharp
public string HttpCorrelationProtocolInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogClientIpInput`<sup>Optional</sup> <a name="LogClientIpInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.logClientIpInput"></a>

```csharp
public object LogClientIpInput { get; }
```

- *Type:* object

---

##### `OperationNameFormatInput`<sup>Optional</sup> <a name="OperationNameFormatInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.operationNameFormatInput"></a>

```csharp
public string OperationNameFormatInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SamplingPercentageInput`<sup>Optional</sup> <a name="SamplingPercentageInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.samplingPercentageInput"></a>

```csharp
public double SamplingPercentageInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VerbosityInput`<sup>Optional</sup> <a name="VerbosityInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.verbosityInput"></a>

```csharp
public string VerbosityInput { get; }
```

- *Type:* string

---

##### `AlwaysLogErrors`<sup>Required</sup> <a name="AlwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.alwaysLogErrors"></a>

```csharp
public object AlwaysLogErrors { get; }
```

- *Type:* object

---

##### `ApiManagementLoggerId`<sup>Required</sup> <a name="ApiManagementLoggerId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementLoggerId"></a>

```csharp
public string ApiManagementLoggerId { get; }
```

- *Type:* string

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementName"></a>

```csharp
public string ApiManagementName { get; }
```

- *Type:* string

---

##### `HttpCorrelationProtocol`<sup>Required</sup> <a name="HttpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.httpCorrelationProtocol"></a>

```csharp
public string HttpCorrelationProtocol { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `LogClientIp`<sup>Required</sup> <a name="LogClientIp" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.logClientIp"></a>

```csharp
public object LogClientIp { get; }
```

- *Type:* object

---

##### `OperationNameFormat`<sup>Required</sup> <a name="OperationNameFormat" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.operationNameFormat"></a>

```csharp
public string OperationNameFormat { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SamplingPercentage`<sup>Required</sup> <a name="SamplingPercentage" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.samplingPercentage"></a>

```csharp
public double SamplingPercentage { get; }
```

- *Type:* double

---

##### `Verbosity`<sup>Required</sup> <a name="Verbosity" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.verbosity"></a>

```csharp
public string Verbosity { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementDiagnosticBackendRequest <a name="ApiManagementDiagnosticBackendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendRequest {
    double BodyBytes = null,
    ApiManagementDiagnosticBackendRequestDataMasking DataMasking = null,
    string[] HeadersToLog = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}. |

---

##### `BodyBytes`<sup>Optional</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

##### `DataMasking`<sup>Optional</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.dataMasking"></a>

```csharp
public ApiManagementDiagnosticBackendRequestDataMasking DataMasking { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

##### `HeadersToLog`<sup>Optional</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

### ApiManagementDiagnosticBackendRequestDataMasking <a name="ApiManagementDiagnosticBackendRequestDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendRequestDataMasking {
    object Headers = null,
    object QueryParams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.property.headers">Headers</a></code> | <code>object</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.property.queryParams">QueryParams</a></code> | <code>object</code> | query_params block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

##### `QueryParams`<sup>Optional</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.property.queryParams"></a>

```csharp
public object QueryParams { get; set; }
```

- *Type:* object

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

### ApiManagementDiagnosticBackendRequestDataMaskingHeaders <a name="ApiManagementDiagnosticBackendRequestDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendRequestDataMaskingHeaders {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticBackendRequestDataMaskingQueryParams <a name="ApiManagementDiagnosticBackendRequestDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendRequestDataMaskingQueryParams {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticBackendResponse <a name="ApiManagementDiagnosticBackendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendResponse {
    double BodyBytes = null,
    ApiManagementDiagnosticBackendResponseDataMasking DataMasking = null,
    string[] HeadersToLog = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}. |

---

##### `BodyBytes`<sup>Optional</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

##### `DataMasking`<sup>Optional</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.dataMasking"></a>

```csharp
public ApiManagementDiagnosticBackendResponseDataMasking DataMasking { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

##### `HeadersToLog`<sup>Optional</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

### ApiManagementDiagnosticBackendResponseDataMasking <a name="ApiManagementDiagnosticBackendResponseDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendResponseDataMasking {
    object Headers = null,
    object QueryParams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.property.headers">Headers</a></code> | <code>object</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.property.queryParams">QueryParams</a></code> | <code>object</code> | query_params block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

##### `QueryParams`<sup>Optional</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.property.queryParams"></a>

```csharp
public object QueryParams { get; set; }
```

- *Type:* object

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

### ApiManagementDiagnosticBackendResponseDataMaskingHeaders <a name="ApiManagementDiagnosticBackendResponseDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendResponseDataMaskingHeaders {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticBackendResponseDataMaskingQueryParams <a name="ApiManagementDiagnosticBackendResponseDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendResponseDataMaskingQueryParams {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticConfig <a name="ApiManagementDiagnosticConfig" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiManagementLoggerId,
    string ApiManagementName,
    string Identifier,
    string ResourceGroupName,
    object AlwaysLogErrors = null,
    ApiManagementDiagnosticBackendRequest BackendRequest = null,
    ApiManagementDiagnosticBackendResponse BackendResponse = null,
    ApiManagementDiagnosticFrontendRequest FrontendRequest = null,
    ApiManagementDiagnosticFrontendResponse FrontendResponse = null,
    string HttpCorrelationProtocol = null,
    string Id = null,
    object LogClientIp = null,
    string OperationNameFormat = null,
    double SamplingPercentage = null,
    ApiManagementDiagnosticTimeouts Timeouts = null,
    string Verbosity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.apiManagementLoggerId">ApiManagementLoggerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#api_management_logger_id ApiManagementDiagnostic#api_management_logger_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.apiManagementName">ApiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#api_management_name ApiManagementDiagnostic#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#identifier ApiManagementDiagnostic#identifier}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#resource_group_name ApiManagementDiagnostic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.alwaysLogErrors">AlwaysLogErrors</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#always_log_errors ApiManagementDiagnostic#always_log_errors}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.backendRequest">BackendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a></code> | backend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.backendResponse">BackendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a></code> | backend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.frontendRequest">FrontendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a></code> | frontend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.frontendResponse">FrontendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a></code> | frontend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.httpCorrelationProtocol">HttpCorrelationProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#http_correlation_protocol ApiManagementDiagnostic#http_correlation_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#id ApiManagementDiagnostic#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.logClientIp">LogClientIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#log_client_ip ApiManagementDiagnostic#log_client_ip}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.operationNameFormat">OperationNameFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#operation_name_format ApiManagementDiagnostic#operation_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.samplingPercentage">SamplingPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#sampling_percentage ApiManagementDiagnostic#sampling_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.verbosity">Verbosity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#verbosity ApiManagementDiagnostic#verbosity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiManagementLoggerId`<sup>Required</sup> <a name="ApiManagementLoggerId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.apiManagementLoggerId"></a>

```csharp
public string ApiManagementLoggerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#api_management_logger_id ApiManagementDiagnostic#api_management_logger_id}.

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.apiManagementName"></a>

```csharp
public string ApiManagementName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#api_management_name ApiManagementDiagnostic#api_management_name}.

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#identifier ApiManagementDiagnostic#identifier}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#resource_group_name ApiManagementDiagnostic#resource_group_name}.

---

##### `AlwaysLogErrors`<sup>Optional</sup> <a name="AlwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.alwaysLogErrors"></a>

```csharp
public object AlwaysLogErrors { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#always_log_errors ApiManagementDiagnostic#always_log_errors}.

---

##### `BackendRequest`<sup>Optional</sup> <a name="BackendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.backendRequest"></a>

```csharp
public ApiManagementDiagnosticBackendRequest BackendRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a>

backend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#backend_request ApiManagementDiagnostic#backend_request}

---

##### `BackendResponse`<sup>Optional</sup> <a name="BackendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.backendResponse"></a>

```csharp
public ApiManagementDiagnosticBackendResponse BackendResponse { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a>

backend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#backend_response ApiManagementDiagnostic#backend_response}

---

##### `FrontendRequest`<sup>Optional</sup> <a name="FrontendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.frontendRequest"></a>

```csharp
public ApiManagementDiagnosticFrontendRequest FrontendRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a>

frontend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#frontend_request ApiManagementDiagnostic#frontend_request}

---

##### `FrontendResponse`<sup>Optional</sup> <a name="FrontendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.frontendResponse"></a>

```csharp
public ApiManagementDiagnosticFrontendResponse FrontendResponse { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a>

frontend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#frontend_response ApiManagementDiagnostic#frontend_response}

---

##### `HttpCorrelationProtocol`<sup>Optional</sup> <a name="HttpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.httpCorrelationProtocol"></a>

```csharp
public string HttpCorrelationProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#http_correlation_protocol ApiManagementDiagnostic#http_correlation_protocol}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#id ApiManagementDiagnostic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogClientIp`<sup>Optional</sup> <a name="LogClientIp" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.logClientIp"></a>

```csharp
public object LogClientIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#log_client_ip ApiManagementDiagnostic#log_client_ip}.

---

##### `OperationNameFormat`<sup>Optional</sup> <a name="OperationNameFormat" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.operationNameFormat"></a>

```csharp
public string OperationNameFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#operation_name_format ApiManagementDiagnostic#operation_name_format}.

---

##### `SamplingPercentage`<sup>Optional</sup> <a name="SamplingPercentage" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.samplingPercentage"></a>

```csharp
public double SamplingPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#sampling_percentage ApiManagementDiagnostic#sampling_percentage}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.timeouts"></a>

```csharp
public ApiManagementDiagnosticTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#timeouts ApiManagementDiagnostic#timeouts}

---

##### `Verbosity`<sup>Optional</sup> <a name="Verbosity" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.verbosity"></a>

```csharp
public string Verbosity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#verbosity ApiManagementDiagnostic#verbosity}.

---

### ApiManagementDiagnosticFrontendRequest <a name="ApiManagementDiagnosticFrontendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendRequest {
    double BodyBytes = null,
    ApiManagementDiagnosticFrontendRequestDataMasking DataMasking = null,
    string[] HeadersToLog = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}. |

---

##### `BodyBytes`<sup>Optional</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

##### `DataMasking`<sup>Optional</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.dataMasking"></a>

```csharp
public ApiManagementDiagnosticFrontendRequestDataMasking DataMasking { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

##### `HeadersToLog`<sup>Optional</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

### ApiManagementDiagnosticFrontendRequestDataMasking <a name="ApiManagementDiagnosticFrontendRequestDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendRequestDataMasking {
    object Headers = null,
    object QueryParams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.property.headers">Headers</a></code> | <code>object</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.property.queryParams">QueryParams</a></code> | <code>object</code> | query_params block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

##### `QueryParams`<sup>Optional</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.property.queryParams"></a>

```csharp
public object QueryParams { get; set; }
```

- *Type:* object

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

### ApiManagementDiagnosticFrontendRequestDataMaskingHeaders <a name="ApiManagementDiagnosticFrontendRequestDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendRequestDataMaskingHeaders {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams <a name="ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticFrontendResponse <a name="ApiManagementDiagnosticFrontendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendResponse {
    double BodyBytes = null,
    ApiManagementDiagnosticFrontendResponseDataMasking DataMasking = null,
    string[] HeadersToLog = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}. |

---

##### `BodyBytes`<sup>Optional</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

##### `DataMasking`<sup>Optional</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.dataMasking"></a>

```csharp
public ApiManagementDiagnosticFrontendResponseDataMasking DataMasking { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

##### `HeadersToLog`<sup>Optional</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

### ApiManagementDiagnosticFrontendResponseDataMasking <a name="ApiManagementDiagnosticFrontendResponseDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendResponseDataMasking {
    object Headers = null,
    object QueryParams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.property.headers">Headers</a></code> | <code>object</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.property.queryParams">QueryParams</a></code> | <code>object</code> | query_params block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

##### `QueryParams`<sup>Optional</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.property.queryParams"></a>

```csharp
public object QueryParams { get; set; }
```

- *Type:* object

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

### ApiManagementDiagnosticFrontendResponseDataMaskingHeaders <a name="ApiManagementDiagnosticFrontendResponseDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendResponseDataMaskingHeaders {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams <a name="ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticTimeouts <a name="ApiManagementDiagnosticTimeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#create ApiManagementDiagnostic#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#delete ApiManagementDiagnostic#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#read ApiManagementDiagnostic#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#update ApiManagementDiagnostic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#create ApiManagementDiagnostic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#delete ApiManagementDiagnostic#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#read ApiManagementDiagnostic#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_diagnostic#update ApiManagementDiagnostic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementDiagnosticBackendRequestDataMaskingHeadersList <a name="ApiManagementDiagnosticBackendRequestDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendRequestDataMaskingHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.get"></a>

```csharp
private ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference <a name="ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticBackendRequestDataMaskingOutputReference <a name="ApiManagementDiagnosticBackendRequestDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendRequestDataMaskingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams">PutQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resetQueryParams">ResetQueryParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `PutQueryParams` <a name="PutQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams"></a>

```csharp
private void PutQueryParams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* object

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetQueryParams` <a name="ResetQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resetQueryParams"></a>

```csharp
private void ResetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList">ApiManagementDiagnosticBackendRequestDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.queryParams">QueryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList">ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.queryParamsInput">QueryParamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.headers"></a>

```csharp
public ApiManagementDiagnosticBackendRequestDataMaskingHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList">ApiManagementDiagnosticBackendRequestDataMaskingHeadersList</a>

---

##### `QueryParams`<sup>Required</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.queryParams"></a>

```csharp
public ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList QueryParams { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList">ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `QueryParamsInput`<sup>Optional</sup> <a name="QueryParamsInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.queryParamsInput"></a>

```csharp
public object QueryParamsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.internalValue"></a>

```csharp
public ApiManagementDiagnosticBackendRequestDataMasking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a>

---


### ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList <a name="ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.get"></a>

```csharp
private ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference <a name="ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticBackendRequestOutputReference <a name="ApiManagementDiagnosticBackendRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.putDataMasking">PutDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetBodyBytes">ResetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetDataMasking">ResetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetHeadersToLog">ResetHeadersToLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataMasking` <a name="PutDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.putDataMasking"></a>

```csharp
private void PutDataMasking(ApiManagementDiagnosticBackendRequestDataMasking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a>

---

##### `ResetBodyBytes` <a name="ResetBodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetBodyBytes"></a>

```csharp
private void ResetBodyBytes()
```

##### `ResetDataMasking` <a name="ResetDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetDataMasking"></a>

```csharp
private void ResetDataMasking()
```

##### `ResetHeadersToLog` <a name="ResetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetHeadersToLog"></a>

```csharp
private void ResetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference">ApiManagementDiagnosticBackendRequestDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.bodyBytesInput">BodyBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.dataMaskingInput">DataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.headersToLogInput">HeadersToLogInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataMasking`<sup>Required</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.dataMasking"></a>

```csharp
public ApiManagementDiagnosticBackendRequestDataMaskingOutputReference DataMasking { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference">ApiManagementDiagnosticBackendRequestDataMaskingOutputReference</a>

---

##### `BodyBytesInput`<sup>Optional</sup> <a name="BodyBytesInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.bodyBytesInput"></a>

```csharp
public double BodyBytesInput { get; }
```

- *Type:* double

---

##### `DataMaskingInput`<sup>Optional</sup> <a name="DataMaskingInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.dataMaskingInput"></a>

```csharp
public ApiManagementDiagnosticBackendRequestDataMasking DataMaskingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a>

---

##### `HeadersToLogInput`<sup>Optional</sup> <a name="HeadersToLogInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.headersToLogInput"></a>

```csharp
public string[] HeadersToLogInput { get; }
```

- *Type:* string[]

---

##### `BodyBytes`<sup>Required</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; }
```

- *Type:* double

---

##### `HeadersToLog`<sup>Required</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.internalValue"></a>

```csharp
public ApiManagementDiagnosticBackendRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a>

---


### ApiManagementDiagnosticBackendResponseDataMaskingHeadersList <a name="ApiManagementDiagnosticBackendResponseDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendResponseDataMaskingHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.get"></a>

```csharp
private ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference <a name="ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticBackendResponseDataMaskingOutputReference <a name="ApiManagementDiagnosticBackendResponseDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendResponseDataMaskingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams">PutQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resetQueryParams">ResetQueryParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `PutQueryParams` <a name="PutQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams"></a>

```csharp
private void PutQueryParams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* object

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetQueryParams` <a name="ResetQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resetQueryParams"></a>

```csharp
private void ResetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList">ApiManagementDiagnosticBackendResponseDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.queryParams">QueryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList">ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.queryParamsInput">QueryParamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.headers"></a>

```csharp
public ApiManagementDiagnosticBackendResponseDataMaskingHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList">ApiManagementDiagnosticBackendResponseDataMaskingHeadersList</a>

---

##### `QueryParams`<sup>Required</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.queryParams"></a>

```csharp
public ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList QueryParams { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList">ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `QueryParamsInput`<sup>Optional</sup> <a name="QueryParamsInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.queryParamsInput"></a>

```csharp
public object QueryParamsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.internalValue"></a>

```csharp
public ApiManagementDiagnosticBackendResponseDataMasking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a>

---


### ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList <a name="ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.get"></a>

```csharp
private ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference <a name="ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticBackendResponseOutputReference <a name="ApiManagementDiagnosticBackendResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticBackendResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.putDataMasking">PutDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetBodyBytes">ResetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetDataMasking">ResetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetHeadersToLog">ResetHeadersToLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataMasking` <a name="PutDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.putDataMasking"></a>

```csharp
private void PutDataMasking(ApiManagementDiagnosticBackendResponseDataMasking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a>

---

##### `ResetBodyBytes` <a name="ResetBodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetBodyBytes"></a>

```csharp
private void ResetBodyBytes()
```

##### `ResetDataMasking` <a name="ResetDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetDataMasking"></a>

```csharp
private void ResetDataMasking()
```

##### `ResetHeadersToLog` <a name="ResetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetHeadersToLog"></a>

```csharp
private void ResetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference">ApiManagementDiagnosticBackendResponseDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.bodyBytesInput">BodyBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.dataMaskingInput">DataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.headersToLogInput">HeadersToLogInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataMasking`<sup>Required</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.dataMasking"></a>

```csharp
public ApiManagementDiagnosticBackendResponseDataMaskingOutputReference DataMasking { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference">ApiManagementDiagnosticBackendResponseDataMaskingOutputReference</a>

---

##### `BodyBytesInput`<sup>Optional</sup> <a name="BodyBytesInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.bodyBytesInput"></a>

```csharp
public double BodyBytesInput { get; }
```

- *Type:* double

---

##### `DataMaskingInput`<sup>Optional</sup> <a name="DataMaskingInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.dataMaskingInput"></a>

```csharp
public ApiManagementDiagnosticBackendResponseDataMasking DataMaskingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a>

---

##### `HeadersToLogInput`<sup>Optional</sup> <a name="HeadersToLogInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.headersToLogInput"></a>

```csharp
public string[] HeadersToLogInput { get; }
```

- *Type:* string[]

---

##### `BodyBytes`<sup>Required</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; }
```

- *Type:* double

---

##### `HeadersToLog`<sup>Required</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.internalValue"></a>

```csharp
public ApiManagementDiagnosticBackendResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a>

---


### ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList <a name="ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.get"></a>

```csharp
private ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference <a name="ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference <a name="ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams">PutQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resetQueryParams">ResetQueryParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `PutQueryParams` <a name="PutQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams"></a>

```csharp
private void PutQueryParams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* object

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetQueryParams` <a name="ResetQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resetQueryParams"></a>

```csharp
private void ResetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList">ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParams">QueryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParamsInput">QueryParamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.headers"></a>

```csharp
public ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList">ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList</a>

---

##### `QueryParams`<sup>Required</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParams"></a>

```csharp
public ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList QueryParams { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `QueryParamsInput`<sup>Optional</sup> <a name="QueryParamsInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParamsInput"></a>

```csharp
public object QueryParamsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.internalValue"></a>

```csharp
public ApiManagementDiagnosticFrontendRequestDataMasking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a>

---


### ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList <a name="ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.get"></a>

```csharp
private ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference <a name="ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticFrontendRequestOutputReference <a name="ApiManagementDiagnosticFrontendRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.putDataMasking">PutDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetBodyBytes">ResetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetDataMasking">ResetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetHeadersToLog">ResetHeadersToLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataMasking` <a name="PutDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.putDataMasking"></a>

```csharp
private void PutDataMasking(ApiManagementDiagnosticFrontendRequestDataMasking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a>

---

##### `ResetBodyBytes` <a name="ResetBodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetBodyBytes"></a>

```csharp
private void ResetBodyBytes()
```

##### `ResetDataMasking` <a name="ResetDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetDataMasking"></a>

```csharp
private void ResetDataMasking()
```

##### `ResetHeadersToLog` <a name="ResetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetHeadersToLog"></a>

```csharp
private void ResetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference">ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.bodyBytesInput">BodyBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.dataMaskingInput">DataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.headersToLogInput">HeadersToLogInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataMasking`<sup>Required</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.dataMasking"></a>

```csharp
public ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference DataMasking { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference">ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference</a>

---

##### `BodyBytesInput`<sup>Optional</sup> <a name="BodyBytesInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.bodyBytesInput"></a>

```csharp
public double BodyBytesInput { get; }
```

- *Type:* double

---

##### `DataMaskingInput`<sup>Optional</sup> <a name="DataMaskingInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.dataMaskingInput"></a>

```csharp
public ApiManagementDiagnosticFrontendRequestDataMasking DataMaskingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a>

---

##### `HeadersToLogInput`<sup>Optional</sup> <a name="HeadersToLogInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.headersToLogInput"></a>

```csharp
public string[] HeadersToLogInput { get; }
```

- *Type:* string[]

---

##### `BodyBytes`<sup>Required</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; }
```

- *Type:* double

---

##### `HeadersToLog`<sup>Required</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.internalValue"></a>

```csharp
public ApiManagementDiagnosticFrontendRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a>

---


### ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList <a name="ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.get"></a>

```csharp
private ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference <a name="ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference <a name="ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams">PutQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resetQueryParams">ResetQueryParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `PutQueryParams` <a name="PutQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams"></a>

```csharp
private void PutQueryParams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* object

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetQueryParams` <a name="ResetQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resetQueryParams"></a>

```csharp
private void ResetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList">ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParams">QueryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParamsInput">QueryParamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.headers"></a>

```csharp
public ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList">ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList</a>

---

##### `QueryParams`<sup>Required</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParams"></a>

```csharp
public ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList QueryParams { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `QueryParamsInput`<sup>Optional</sup> <a name="QueryParamsInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParamsInput"></a>

```csharp
public object QueryParamsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.internalValue"></a>

```csharp
public ApiManagementDiagnosticFrontendResponseDataMasking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a>

---


### ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList <a name="ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.get"></a>

```csharp
private ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference <a name="ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDiagnosticFrontendResponseOutputReference <a name="ApiManagementDiagnosticFrontendResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticFrontendResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.putDataMasking">PutDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetBodyBytes">ResetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetDataMasking">ResetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetHeadersToLog">ResetHeadersToLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataMasking` <a name="PutDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.putDataMasking"></a>

```csharp
private void PutDataMasking(ApiManagementDiagnosticFrontendResponseDataMasking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a>

---

##### `ResetBodyBytes` <a name="ResetBodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetBodyBytes"></a>

```csharp
private void ResetBodyBytes()
```

##### `ResetDataMasking` <a name="ResetDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetDataMasking"></a>

```csharp
private void ResetDataMasking()
```

##### `ResetHeadersToLog` <a name="ResetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetHeadersToLog"></a>

```csharp
private void ResetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference">ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.bodyBytesInput">BodyBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.dataMaskingInput">DataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.headersToLogInput">HeadersToLogInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataMasking`<sup>Required</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.dataMasking"></a>

```csharp
public ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference DataMasking { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference">ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference</a>

---

##### `BodyBytesInput`<sup>Optional</sup> <a name="BodyBytesInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.bodyBytesInput"></a>

```csharp
public double BodyBytesInput { get; }
```

- *Type:* double

---

##### `DataMaskingInput`<sup>Optional</sup> <a name="DataMaskingInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.dataMaskingInput"></a>

```csharp
public ApiManagementDiagnosticFrontendResponseDataMasking DataMaskingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a>

---

##### `HeadersToLogInput`<sup>Optional</sup> <a name="HeadersToLogInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.headersToLogInput"></a>

```csharp
public string[] HeadersToLogInput { get; }
```

- *Type:* string[]

---

##### `BodyBytes`<sup>Required</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; }
```

- *Type:* double

---

##### `HeadersToLog`<sup>Required</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.internalValue"></a>

```csharp
public ApiManagementDiagnosticFrontendResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a>

---


### ApiManagementDiagnosticTimeoutsOutputReference <a name="ApiManagementDiagnosticTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDiagnosticTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



