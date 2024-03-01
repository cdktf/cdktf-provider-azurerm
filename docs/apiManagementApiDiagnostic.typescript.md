# `apiManagementApiDiagnostic` Submodule <a name="`apiManagementApiDiagnostic` Submodule" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementApiDiagnostic <a name="ApiManagementApiDiagnostic" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic azurerm_api_management_api_diagnostic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnostic(scope: Construct, id: string, config: ApiManagementApiDiagnosticConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig">ApiManagementApiDiagnosticConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig">ApiManagementApiDiagnosticConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendRequest">putBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendResponse">putBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendRequest">putFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendResponse">putFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetAlwaysLogErrors">resetAlwaysLogErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetBackendRequest">resetBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetBackendResponse">resetBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetFrontendRequest">resetFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetFrontendResponse">resetFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetHttpCorrelationProtocol">resetHttpCorrelationProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetLogClientIp">resetLogClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetOperationNameFormat">resetOperationNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetSamplingPercentage">resetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetVerbosity">resetVerbosity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackendRequest` <a name="putBackendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendRequest"></a>

```typescript
public putBackendRequest(value: ApiManagementApiDiagnosticBackendRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a>

---

##### `putBackendResponse` <a name="putBackendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendResponse"></a>

```typescript
public putBackendResponse(value: ApiManagementApiDiagnosticBackendResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a>

---

##### `putFrontendRequest` <a name="putFrontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendRequest"></a>

```typescript
public putFrontendRequest(value: ApiManagementApiDiagnosticFrontendRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a>

---

##### `putFrontendResponse` <a name="putFrontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendResponse"></a>

```typescript
public putFrontendResponse(value: ApiManagementApiDiagnosticFrontendResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementApiDiagnosticTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts">ApiManagementApiDiagnosticTimeouts</a>

---

##### `resetAlwaysLogErrors` <a name="resetAlwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetAlwaysLogErrors"></a>

```typescript
public resetAlwaysLogErrors(): void
```

##### `resetBackendRequest` <a name="resetBackendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetBackendRequest"></a>

```typescript
public resetBackendRequest(): void
```

##### `resetBackendResponse` <a name="resetBackendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetBackendResponse"></a>

```typescript
public resetBackendResponse(): void
```

##### `resetFrontendRequest` <a name="resetFrontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetFrontendRequest"></a>

```typescript
public resetFrontendRequest(): void
```

##### `resetFrontendResponse` <a name="resetFrontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetFrontendResponse"></a>

```typescript
public resetFrontendResponse(): void
```

##### `resetHttpCorrelationProtocol` <a name="resetHttpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetHttpCorrelationProtocol"></a>

```typescript
public resetHttpCorrelationProtocol(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogClientIp` <a name="resetLogClientIp" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetLogClientIp"></a>

```typescript
public resetLogClientIp(): void
```

##### `resetOperationNameFormat` <a name="resetOperationNameFormat" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetOperationNameFormat"></a>

```typescript
public resetOperationNameFormat(): void
```

##### `resetSamplingPercentage` <a name="resetSamplingPercentage" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetSamplingPercentage"></a>

```typescript
public resetSamplingPercentage(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVerbosity` <a name="resetVerbosity" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetVerbosity"></a>

```typescript
public resetVerbosity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementApiDiagnostic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isConstruct"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformElement"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformResource"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.generateConfigForImport"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

apiManagementApiDiagnostic.ApiManagementApiDiagnostic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiManagementApiDiagnostic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementApiDiagnostic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementApiDiagnostic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementApiDiagnostic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendRequest">backendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference">ApiManagementApiDiagnosticBackendRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendResponse">backendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference">ApiManagementApiDiagnosticBackendResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendRequest">frontendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference">ApiManagementApiDiagnosticFrontendRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendResponse">frontendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference">ApiManagementApiDiagnosticFrontendResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference">ApiManagementApiDiagnosticTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.alwaysLogErrorsInput">alwaysLogErrorsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementLoggerIdInput">apiManagementLoggerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementNameInput">apiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiNameInput">apiNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendRequestInput">backendRequestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendResponseInput">backendResponseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendRequestInput">frontendRequestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendResponseInput">frontendResponseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.httpCorrelationProtocolInput">httpCorrelationProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.logClientIpInput">logClientIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.operationNameFormatInput">operationNameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.samplingPercentageInput">samplingPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts">ApiManagementApiDiagnosticTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.verbosityInput">verbosityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.alwaysLogErrors">alwaysLogErrors</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementLoggerId">apiManagementLoggerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiName">apiName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.httpCorrelationProtocol">httpCorrelationProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.logClientIp">logClientIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.operationNameFormat">operationNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.verbosity">verbosity</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendRequest`<sup>Required</sup> <a name="backendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendRequest"></a>

```typescript
public readonly backendRequest: ApiManagementApiDiagnosticBackendRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference">ApiManagementApiDiagnosticBackendRequestOutputReference</a>

---

##### `backendResponse`<sup>Required</sup> <a name="backendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendResponse"></a>

```typescript
public readonly backendResponse: ApiManagementApiDiagnosticBackendResponseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference">ApiManagementApiDiagnosticBackendResponseOutputReference</a>

---

##### `frontendRequest`<sup>Required</sup> <a name="frontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendRequest"></a>

```typescript
public readonly frontendRequest: ApiManagementApiDiagnosticFrontendRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference">ApiManagementApiDiagnosticFrontendRequestOutputReference</a>

---

##### `frontendResponse`<sup>Required</sup> <a name="frontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendResponse"></a>

```typescript
public readonly frontendResponse: ApiManagementApiDiagnosticFrontendResponseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference">ApiManagementApiDiagnosticFrontendResponseOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementApiDiagnosticTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference">ApiManagementApiDiagnosticTimeoutsOutputReference</a>

---

##### `alwaysLogErrorsInput`<sup>Optional</sup> <a name="alwaysLogErrorsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.alwaysLogErrorsInput"></a>

```typescript
public readonly alwaysLogErrorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiManagementLoggerIdInput`<sup>Optional</sup> <a name="apiManagementLoggerIdInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementLoggerIdInput"></a>

```typescript
public readonly apiManagementLoggerIdInput: string;
```

- *Type:* string

---

##### `apiManagementNameInput`<sup>Optional</sup> <a name="apiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementNameInput"></a>

```typescript
public readonly apiManagementNameInput: string;
```

- *Type:* string

---

##### `apiNameInput`<sup>Optional</sup> <a name="apiNameInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiNameInput"></a>

```typescript
public readonly apiNameInput: string;
```

- *Type:* string

---

##### `backendRequestInput`<sup>Optional</sup> <a name="backendRequestInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendRequestInput"></a>

```typescript
public readonly backendRequestInput: ApiManagementApiDiagnosticBackendRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a>

---

##### `backendResponseInput`<sup>Optional</sup> <a name="backendResponseInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendResponseInput"></a>

```typescript
public readonly backendResponseInput: ApiManagementApiDiagnosticBackendResponse;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a>

---

##### `frontendRequestInput`<sup>Optional</sup> <a name="frontendRequestInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendRequestInput"></a>

```typescript
public readonly frontendRequestInput: ApiManagementApiDiagnosticFrontendRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a>

---

##### `frontendResponseInput`<sup>Optional</sup> <a name="frontendResponseInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendResponseInput"></a>

```typescript
public readonly frontendResponseInput: ApiManagementApiDiagnosticFrontendResponse;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a>

---

##### `httpCorrelationProtocolInput`<sup>Optional</sup> <a name="httpCorrelationProtocolInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.httpCorrelationProtocolInput"></a>

```typescript
public readonly httpCorrelationProtocolInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logClientIpInput`<sup>Optional</sup> <a name="logClientIpInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.logClientIpInput"></a>

```typescript
public readonly logClientIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationNameFormatInput`<sup>Optional</sup> <a name="operationNameFormatInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.operationNameFormatInput"></a>

```typescript
public readonly operationNameFormatInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `samplingPercentageInput`<sup>Optional</sup> <a name="samplingPercentageInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.samplingPercentageInput"></a>

```typescript
public readonly samplingPercentageInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiManagementApiDiagnosticTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts">ApiManagementApiDiagnosticTimeouts</a>

---

##### `verbosityInput`<sup>Optional</sup> <a name="verbosityInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.verbosityInput"></a>

```typescript
public readonly verbosityInput: string;
```

- *Type:* string

---

##### `alwaysLogErrors`<sup>Required</sup> <a name="alwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.alwaysLogErrors"></a>

```typescript
public readonly alwaysLogErrors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiManagementLoggerId`<sup>Required</sup> <a name="apiManagementLoggerId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementLoggerId"></a>

```typescript
public readonly apiManagementLoggerId: string;
```

- *Type:* string

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

---

##### `apiName`<sup>Required</sup> <a name="apiName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiName"></a>

```typescript
public readonly apiName: string;
```

- *Type:* string

---

##### `httpCorrelationProtocol`<sup>Required</sup> <a name="httpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.httpCorrelationProtocol"></a>

```typescript
public readonly httpCorrelationProtocol: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `logClientIp`<sup>Required</sup> <a name="logClientIp" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.logClientIp"></a>

```typescript
public readonly logClientIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationNameFormat`<sup>Required</sup> <a name="operationNameFormat" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.operationNameFormat"></a>

```typescript
public readonly operationNameFormat: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

---

##### `verbosity`<sup>Required</sup> <a name="verbosity" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.verbosity"></a>

```typescript
public readonly verbosity: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementApiDiagnosticBackendRequest <a name="ApiManagementApiDiagnosticBackendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticBackendRequest: apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.bodyBytes">bodyBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.headersToLog">headersToLog</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}. |

---

##### `bodyBytes`<sup>Optional</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.bodyBytes"></a>

```typescript
public readonly bodyBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}.

---

##### `dataMasking`<sup>Optional</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.dataMasking"></a>

```typescript
public readonly dataMasking: ApiManagementApiDiagnosticBackendRequestDataMasking;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}

---

##### `headersToLog`<sup>Optional</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.headersToLog"></a>

```typescript
public readonly headersToLog: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}.

---

### ApiManagementApiDiagnosticBackendRequestDataMasking <a name="ApiManagementApiDiagnosticBackendRequestDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticBackendRequestDataMasking: apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders">ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders</a>[]</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.property.queryParams">queryParams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams</a>[]</code> | query_params block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.property.headers"></a>

```typescript
public readonly headers: IResolvable | ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders">ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}

---

##### `queryParams`<sup>Optional</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.property.queryParams"></a>

```typescript
public readonly queryParams: IResolvable | ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams</a>[]

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}

---

### ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticBackendRequestDataMaskingHeaders: apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticBackendRequestDataMaskingQueryParams: apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticBackendResponse <a name="ApiManagementApiDiagnosticBackendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticBackendResponse: apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.bodyBytes">bodyBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.headersToLog">headersToLog</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}. |

---

##### `bodyBytes`<sup>Optional</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.bodyBytes"></a>

```typescript
public readonly bodyBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}.

---

##### `dataMasking`<sup>Optional</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.dataMasking"></a>

```typescript
public readonly dataMasking: ApiManagementApiDiagnosticBackendResponseDataMasking;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}

---

##### `headersToLog`<sup>Optional</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.headersToLog"></a>

```typescript
public readonly headersToLog: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}.

---

### ApiManagementApiDiagnosticBackendResponseDataMasking <a name="ApiManagementApiDiagnosticBackendResponseDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticBackendResponseDataMasking: apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders">ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders</a>[]</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.property.queryParams">queryParams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams</a>[]</code> | query_params block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.property.headers"></a>

```typescript
public readonly headers: IResolvable | ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders">ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}

---

##### `queryParams`<sup>Optional</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.property.queryParams"></a>

```typescript
public readonly queryParams: IResolvable | ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams</a>[]

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}

---

### ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticBackendResponseDataMaskingHeaders: apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticBackendResponseDataMaskingQueryParams: apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticConfig <a name="ApiManagementApiDiagnosticConfig" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticConfig: apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiManagementLoggerId">apiManagementLoggerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#api_management_logger_id ApiManagementApiDiagnostic#api_management_logger_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#api_management_name ApiManagementApiDiagnostic#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiName">apiName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#api_name ApiManagementApiDiagnostic#api_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#identifier ApiManagementApiDiagnostic#identifier}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#resource_group_name ApiManagementApiDiagnostic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.alwaysLogErrors">alwaysLogErrors</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#always_log_errors ApiManagementApiDiagnostic#always_log_errors}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.backendRequest">backendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a></code> | backend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.backendResponse">backendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a></code> | backend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.frontendRequest">frontendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a></code> | frontend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.frontendResponse">frontendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a></code> | frontend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.httpCorrelationProtocol">httpCorrelationProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#http_correlation_protocol ApiManagementApiDiagnostic#http_correlation_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#id ApiManagementApiDiagnostic#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.logClientIp">logClientIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#log_client_ip ApiManagementApiDiagnostic#log_client_ip}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.operationNameFormat">operationNameFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#operation_name_format ApiManagementApiDiagnostic#operation_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#sampling_percentage ApiManagementApiDiagnostic#sampling_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts">ApiManagementApiDiagnosticTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.verbosity">verbosity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#verbosity ApiManagementApiDiagnostic#verbosity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiManagementLoggerId`<sup>Required</sup> <a name="apiManagementLoggerId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiManagementLoggerId"></a>

```typescript
public readonly apiManagementLoggerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#api_management_logger_id ApiManagementApiDiagnostic#api_management_logger_id}.

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#api_management_name ApiManagementApiDiagnostic#api_management_name}.

---

##### `apiName`<sup>Required</sup> <a name="apiName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiName"></a>

```typescript
public readonly apiName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#api_name ApiManagementApiDiagnostic#api_name}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#identifier ApiManagementApiDiagnostic#identifier}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#resource_group_name ApiManagementApiDiagnostic#resource_group_name}.

---

##### `alwaysLogErrors`<sup>Optional</sup> <a name="alwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.alwaysLogErrors"></a>

```typescript
public readonly alwaysLogErrors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#always_log_errors ApiManagementApiDiagnostic#always_log_errors}.

---

##### `backendRequest`<sup>Optional</sup> <a name="backendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.backendRequest"></a>

```typescript
public readonly backendRequest: ApiManagementApiDiagnosticBackendRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a>

backend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#backend_request ApiManagementApiDiagnostic#backend_request}

---

##### `backendResponse`<sup>Optional</sup> <a name="backendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.backendResponse"></a>

```typescript
public readonly backendResponse: ApiManagementApiDiagnosticBackendResponse;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a>

backend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#backend_response ApiManagementApiDiagnostic#backend_response}

---

##### `frontendRequest`<sup>Optional</sup> <a name="frontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.frontendRequest"></a>

```typescript
public readonly frontendRequest: ApiManagementApiDiagnosticFrontendRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a>

frontend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#frontend_request ApiManagementApiDiagnostic#frontend_request}

---

##### `frontendResponse`<sup>Optional</sup> <a name="frontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.frontendResponse"></a>

```typescript
public readonly frontendResponse: ApiManagementApiDiagnosticFrontendResponse;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a>

frontend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#frontend_response ApiManagementApiDiagnostic#frontend_response}

---

##### `httpCorrelationProtocol`<sup>Optional</sup> <a name="httpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.httpCorrelationProtocol"></a>

```typescript
public readonly httpCorrelationProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#http_correlation_protocol ApiManagementApiDiagnostic#http_correlation_protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#id ApiManagementApiDiagnostic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logClientIp`<sup>Optional</sup> <a name="logClientIp" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.logClientIp"></a>

```typescript
public readonly logClientIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#log_client_ip ApiManagementApiDiagnostic#log_client_ip}.

---

##### `operationNameFormat`<sup>Optional</sup> <a name="operationNameFormat" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.operationNameFormat"></a>

```typescript
public readonly operationNameFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#operation_name_format ApiManagementApiDiagnostic#operation_name_format}.

---

##### `samplingPercentage`<sup>Optional</sup> <a name="samplingPercentage" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#sampling_percentage ApiManagementApiDiagnostic#sampling_percentage}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementApiDiagnosticTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts">ApiManagementApiDiagnosticTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#timeouts ApiManagementApiDiagnostic#timeouts}

---

##### `verbosity`<sup>Optional</sup> <a name="verbosity" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.verbosity"></a>

```typescript
public readonly verbosity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#verbosity ApiManagementApiDiagnostic#verbosity}.

---

### ApiManagementApiDiagnosticFrontendRequest <a name="ApiManagementApiDiagnosticFrontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticFrontendRequest: apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.bodyBytes">bodyBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.headersToLog">headersToLog</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}. |

---

##### `bodyBytes`<sup>Optional</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.bodyBytes"></a>

```typescript
public readonly bodyBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}.

---

##### `dataMasking`<sup>Optional</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.dataMasking"></a>

```typescript
public readonly dataMasking: ApiManagementApiDiagnosticFrontendRequestDataMasking;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}

---

##### `headersToLog`<sup>Optional</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.headersToLog"></a>

```typescript
public readonly headersToLog: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}.

---

### ApiManagementApiDiagnosticFrontendRequestDataMasking <a name="ApiManagementApiDiagnosticFrontendRequestDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticFrontendRequestDataMasking: apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders</a>[]</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.property.queryParams">queryParams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams</a>[]</code> | query_params block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.property.headers"></a>

```typescript
public readonly headers: IResolvable | ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}

---

##### `queryParams`<sup>Optional</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.property.queryParams"></a>

```typescript
public readonly queryParams: IResolvable | ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams</a>[]

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}

---

### ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticFrontendRequestDataMaskingHeaders: apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams: apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticFrontendResponse <a name="ApiManagementApiDiagnosticFrontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticFrontendResponse: apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.bodyBytes">bodyBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.headersToLog">headersToLog</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}. |

---

##### `bodyBytes`<sup>Optional</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.bodyBytes"></a>

```typescript
public readonly bodyBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}.

---

##### `dataMasking`<sup>Optional</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.dataMasking"></a>

```typescript
public readonly dataMasking: ApiManagementApiDiagnosticFrontendResponseDataMasking;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}

---

##### `headersToLog`<sup>Optional</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.headersToLog"></a>

```typescript
public readonly headersToLog: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}.

---

### ApiManagementApiDiagnosticFrontendResponseDataMasking <a name="ApiManagementApiDiagnosticFrontendResponseDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticFrontendResponseDataMasking: apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders</a>[]</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.property.queryParams">queryParams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams</a>[]</code> | query_params block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.property.headers"></a>

```typescript
public readonly headers: IResolvable | ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}

---

##### `queryParams`<sup>Optional</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.property.queryParams"></a>

```typescript
public readonly queryParams: IResolvable | ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams</a>[]

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}

---

### ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticFrontendResponseDataMaskingHeaders: apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams: apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticTimeouts <a name="ApiManagementApiDiagnosticTimeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

const apiManagementApiDiagnosticTimeouts: apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#create ApiManagementApiDiagnostic#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#delete ApiManagementApiDiagnostic#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#read ApiManagementApiDiagnostic#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#update ApiManagementApiDiagnostic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#create ApiManagementApiDiagnostic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#delete ApiManagementApiDiagnostic#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#read ApiManagementApiDiagnostic#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/api_management_api_diagnostic#update ApiManagementApiDiagnostic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.get"></a>

```typescript
public get(index: number): ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders">ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders">ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders</a>[]

---


### ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders">ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders">ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders</a>

---


### ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams">putQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resetQueryParams">resetQueryParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders">ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders</a>[]

---

##### `putQueryParams` <a name="putQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams"></a>

```typescript
public putQueryParams(value: IResolvable | ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams</a>[]

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetQueryParams` <a name="resetQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resetQueryParams"></a>

```typescript
public resetQueryParams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList">ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.queryParams">queryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders">ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.queryParamsInput">queryParamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.headers"></a>

```typescript
public readonly headers: ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList">ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList</a>

---

##### `queryParams`<sup>Required</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.queryParams"></a>

```typescript
public readonly queryParams: ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders">ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders</a>[]

---

##### `queryParamsInput`<sup>Optional</sup> <a name="queryParamsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.queryParamsInput"></a>

```typescript
public readonly queryParamsInput: IResolvable | ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiDiagnosticBackendRequestDataMasking;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a>

---


### ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.get"></a>

```typescript
public get(index: number): ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams</a>[]

---


### ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams</a>

---


### ApiManagementApiDiagnosticBackendRequestOutputReference <a name="ApiManagementApiDiagnosticBackendRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.putDataMasking">putDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetBodyBytes">resetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetDataMasking">resetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetHeadersToLog">resetHeadersToLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataMasking` <a name="putDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.putDataMasking"></a>

```typescript
public putDataMasking(value: ApiManagementApiDiagnosticBackendRequestDataMasking): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a>

---

##### `resetBodyBytes` <a name="resetBodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetBodyBytes"></a>

```typescript
public resetBodyBytes(): void
```

##### `resetDataMasking` <a name="resetDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetDataMasking"></a>

```typescript
public resetDataMasking(): void
```

##### `resetHeadersToLog` <a name="resetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetHeadersToLog"></a>

```typescript
public resetHeadersToLog(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference">ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.bodyBytesInput">bodyBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.dataMaskingInput">dataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.headersToLogInput">headersToLogInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.bodyBytes">bodyBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.headersToLog">headersToLog</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataMasking`<sup>Required</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.dataMasking"></a>

```typescript
public readonly dataMasking: ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference">ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference</a>

---

##### `bodyBytesInput`<sup>Optional</sup> <a name="bodyBytesInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.bodyBytesInput"></a>

```typescript
public readonly bodyBytesInput: number;
```

- *Type:* number

---

##### `dataMaskingInput`<sup>Optional</sup> <a name="dataMaskingInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.dataMaskingInput"></a>

```typescript
public readonly dataMaskingInput: ApiManagementApiDiagnosticBackendRequestDataMasking;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a>

---

##### `headersToLogInput`<sup>Optional</sup> <a name="headersToLogInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.headersToLogInput"></a>

```typescript
public readonly headersToLogInput: string[];
```

- *Type:* string[]

---

##### `bodyBytes`<sup>Required</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.bodyBytes"></a>

```typescript
public readonly bodyBytes: number;
```

- *Type:* number

---

##### `headersToLog`<sup>Required</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.headersToLog"></a>

```typescript
public readonly headersToLog: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiDiagnosticBackendRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a>

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.get"></a>

```typescript
public get(index: number): ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders">ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders">ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders</a>[]

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders">ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders">ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders</a>

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams">putQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resetQueryParams">resetQueryParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders">ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders</a>[]

---

##### `putQueryParams` <a name="putQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams"></a>

```typescript
public putQueryParams(value: IResolvable | ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams</a>[]

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetQueryParams` <a name="resetQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resetQueryParams"></a>

```typescript
public resetQueryParams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList">ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.queryParams">queryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders">ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.queryParamsInput">queryParamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.headers"></a>

```typescript
public readonly headers: ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList">ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList</a>

---

##### `queryParams`<sup>Required</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.queryParams"></a>

```typescript
public readonly queryParams: ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders">ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders</a>[]

---

##### `queryParamsInput`<sup>Optional</sup> <a name="queryParamsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.queryParamsInput"></a>

```typescript
public readonly queryParamsInput: IResolvable | ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiDiagnosticBackendResponseDataMasking;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a>

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.get"></a>

```typescript
public get(index: number): ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams</a>[]

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams</a>

---


### ApiManagementApiDiagnosticBackendResponseOutputReference <a name="ApiManagementApiDiagnosticBackendResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.putDataMasking">putDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetBodyBytes">resetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetDataMasking">resetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetHeadersToLog">resetHeadersToLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataMasking` <a name="putDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.putDataMasking"></a>

```typescript
public putDataMasking(value: ApiManagementApiDiagnosticBackendResponseDataMasking): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a>

---

##### `resetBodyBytes` <a name="resetBodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetBodyBytes"></a>

```typescript
public resetBodyBytes(): void
```

##### `resetDataMasking` <a name="resetDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetDataMasking"></a>

```typescript
public resetDataMasking(): void
```

##### `resetHeadersToLog` <a name="resetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetHeadersToLog"></a>

```typescript
public resetHeadersToLog(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference">ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.bodyBytesInput">bodyBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.dataMaskingInput">dataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.headersToLogInput">headersToLogInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.bodyBytes">bodyBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.headersToLog">headersToLog</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataMasking`<sup>Required</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.dataMasking"></a>

```typescript
public readonly dataMasking: ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference">ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference</a>

---

##### `bodyBytesInput`<sup>Optional</sup> <a name="bodyBytesInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.bodyBytesInput"></a>

```typescript
public readonly bodyBytesInput: number;
```

- *Type:* number

---

##### `dataMaskingInput`<sup>Optional</sup> <a name="dataMaskingInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.dataMaskingInput"></a>

```typescript
public readonly dataMaskingInput: ApiManagementApiDiagnosticBackendResponseDataMasking;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a>

---

##### `headersToLogInput`<sup>Optional</sup> <a name="headersToLogInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.headersToLogInput"></a>

```typescript
public readonly headersToLogInput: string[];
```

- *Type:* string[]

---

##### `bodyBytes`<sup>Required</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.bodyBytes"></a>

```typescript
public readonly bodyBytes: number;
```

- *Type:* number

---

##### `headersToLog`<sup>Required</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.headersToLog"></a>

```typescript
public readonly headersToLog: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiDiagnosticBackendResponse;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a>

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.get"></a>

```typescript
public get(index: number): ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders</a>[]

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders</a>

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams">putQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resetQueryParams">resetQueryParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders</a>[]

---

##### `putQueryParams` <a name="putQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams"></a>

```typescript
public putQueryParams(value: IResolvable | ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams</a>[]

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetQueryParams` <a name="resetQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resetQueryParams"></a>

```typescript
public resetQueryParams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParams">queryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParamsInput">queryParamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.headers"></a>

```typescript
public readonly headers: ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList</a>

---

##### `queryParams`<sup>Required</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParams"></a>

```typescript
public readonly queryParams: ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders</a>[]

---

##### `queryParamsInput`<sup>Optional</sup> <a name="queryParamsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParamsInput"></a>

```typescript
public readonly queryParamsInput: IResolvable | ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiDiagnosticFrontendRequestDataMasking;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a>

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.get"></a>

```typescript
public get(index: number): ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams</a>[]

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams</a>

---


### ApiManagementApiDiagnosticFrontendRequestOutputReference <a name="ApiManagementApiDiagnosticFrontendRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.putDataMasking">putDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetBodyBytes">resetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetDataMasking">resetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetHeadersToLog">resetHeadersToLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataMasking` <a name="putDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.putDataMasking"></a>

```typescript
public putDataMasking(value: ApiManagementApiDiagnosticFrontendRequestDataMasking): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a>

---

##### `resetBodyBytes` <a name="resetBodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetBodyBytes"></a>

```typescript
public resetBodyBytes(): void
```

##### `resetDataMasking` <a name="resetDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetDataMasking"></a>

```typescript
public resetDataMasking(): void
```

##### `resetHeadersToLog` <a name="resetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetHeadersToLog"></a>

```typescript
public resetHeadersToLog(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference">ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.bodyBytesInput">bodyBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.dataMaskingInput">dataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.headersToLogInput">headersToLogInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.bodyBytes">bodyBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.headersToLog">headersToLog</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataMasking`<sup>Required</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.dataMasking"></a>

```typescript
public readonly dataMasking: ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference">ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference</a>

---

##### `bodyBytesInput`<sup>Optional</sup> <a name="bodyBytesInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.bodyBytesInput"></a>

```typescript
public readonly bodyBytesInput: number;
```

- *Type:* number

---

##### `dataMaskingInput`<sup>Optional</sup> <a name="dataMaskingInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.dataMaskingInput"></a>

```typescript
public readonly dataMaskingInput: ApiManagementApiDiagnosticFrontendRequestDataMasking;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a>

---

##### `headersToLogInput`<sup>Optional</sup> <a name="headersToLogInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.headersToLogInput"></a>

```typescript
public readonly headersToLogInput: string[];
```

- *Type:* string[]

---

##### `bodyBytes`<sup>Required</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.bodyBytes"></a>

```typescript
public readonly bodyBytes: number;
```

- *Type:* number

---

##### `headersToLog`<sup>Required</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.headersToLog"></a>

```typescript
public readonly headersToLog: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiDiagnosticFrontendRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a>

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.get"></a>

```typescript
public get(index: number): ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders</a>[]

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders</a>

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams">putQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resetQueryParams">resetQueryParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders</a>[]

---

##### `putQueryParams` <a name="putQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams"></a>

```typescript
public putQueryParams(value: IResolvable | ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams</a>[]

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetQueryParams` <a name="resetQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resetQueryParams"></a>

```typescript
public resetQueryParams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParams">queryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParamsInput">queryParamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.headers"></a>

```typescript
public readonly headers: ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList</a>

---

##### `queryParams`<sup>Required</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParams"></a>

```typescript
public readonly queryParams: ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders</a>[]

---

##### `queryParamsInput`<sup>Optional</sup> <a name="queryParamsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParamsInput"></a>

```typescript
public readonly queryParamsInput: IResolvable | ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiDiagnosticFrontendResponseDataMasking;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a>

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.get"></a>

```typescript
public get(index: number): ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams</a>[]

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams</a>

---


### ApiManagementApiDiagnosticFrontendResponseOutputReference <a name="ApiManagementApiDiagnosticFrontendResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.putDataMasking">putDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetBodyBytes">resetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetDataMasking">resetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetHeadersToLog">resetHeadersToLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataMasking` <a name="putDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.putDataMasking"></a>

```typescript
public putDataMasking(value: ApiManagementApiDiagnosticFrontendResponseDataMasking): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a>

---

##### `resetBodyBytes` <a name="resetBodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetBodyBytes"></a>

```typescript
public resetBodyBytes(): void
```

##### `resetDataMasking` <a name="resetDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetDataMasking"></a>

```typescript
public resetDataMasking(): void
```

##### `resetHeadersToLog` <a name="resetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetHeadersToLog"></a>

```typescript
public resetHeadersToLog(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference">ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.bodyBytesInput">bodyBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.dataMaskingInput">dataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.headersToLogInput">headersToLogInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.bodyBytes">bodyBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.headersToLog">headersToLog</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataMasking`<sup>Required</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.dataMasking"></a>

```typescript
public readonly dataMasking: ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference">ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference</a>

---

##### `bodyBytesInput`<sup>Optional</sup> <a name="bodyBytesInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.bodyBytesInput"></a>

```typescript
public readonly bodyBytesInput: number;
```

- *Type:* number

---

##### `dataMaskingInput`<sup>Optional</sup> <a name="dataMaskingInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.dataMaskingInput"></a>

```typescript
public readonly dataMaskingInput: ApiManagementApiDiagnosticFrontendResponseDataMasking;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a>

---

##### `headersToLogInput`<sup>Optional</sup> <a name="headersToLogInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.headersToLogInput"></a>

```typescript
public readonly headersToLogInput: string[];
```

- *Type:* string[]

---

##### `bodyBytes`<sup>Required</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.bodyBytes"></a>

```typescript
public readonly bodyBytes: number;
```

- *Type:* number

---

##### `headersToLog`<sup>Required</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.headersToLog"></a>

```typescript
public readonly headersToLog: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiDiagnosticFrontendResponse;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a>

---


### ApiManagementApiDiagnosticTimeoutsOutputReference <a name="ApiManagementApiDiagnosticTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementApiDiagnostic } from '@cdktf/provider-azurerm'

new apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts">ApiManagementApiDiagnosticTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiDiagnosticTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts">ApiManagementApiDiagnosticTimeouts</a>

---



