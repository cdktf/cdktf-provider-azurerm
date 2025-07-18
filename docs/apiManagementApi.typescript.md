# `apiManagementApi` Submodule <a name="`apiManagementApi` Submodule" id="@cdktf/provider-azurerm.apiManagementApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementApi <a name="ApiManagementApi" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api azurerm_api_management_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

new apiManagementApi.ApiManagementApi(scope: Construct, id: string, config: ApiManagementApiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig">ApiManagementApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig">ApiManagementApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putContact">putContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putImport">putImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putLicense">putLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOauth2Authorization">putOauth2Authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOpenidAuthentication">putOpenidAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putSubscriptionKeyParameterNames">putSubscriptionKeyParameterNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetApiType">resetApiType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetContact">resetContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetImport">resetImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetLicense">resetLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOauth2Authorization">resetOauth2Authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOpenidAuthentication">resetOpenidAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetRevisionDescription">resetRevisionDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetServiceUrl">resetServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSourceApiId">resetSourceApiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSubscriptionKeyParameterNames">resetSubscriptionKeyParameterNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSubscriptionRequired">resetSubscriptionRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetTermsOfServiceUrl">resetTermsOfServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersionDescription">resetVersionDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersionSetId">resetVersionSetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContact` <a name="putContact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putContact"></a>

```typescript
public putContact(value: ApiManagementApiContact): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a>

---

##### `putImport` <a name="putImport" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putImport"></a>

```typescript
public putImport(value: ApiManagementApiImport): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putImport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a>

---

##### `putLicense` <a name="putLicense" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putLicense"></a>

```typescript
public putLicense(value: ApiManagementApiLicense): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putLicense.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a>

---

##### `putOauth2Authorization` <a name="putOauth2Authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOauth2Authorization"></a>

```typescript
public putOauth2Authorization(value: ApiManagementApiOauth2Authorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOauth2Authorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a>

---

##### `putOpenidAuthentication` <a name="putOpenidAuthentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOpenidAuthentication"></a>

```typescript
public putOpenidAuthentication(value: ApiManagementApiOpenidAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOpenidAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a>

---

##### `putSubscriptionKeyParameterNames` <a name="putSubscriptionKeyParameterNames" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putSubscriptionKeyParameterNames"></a>

```typescript
public putSubscriptionKeyParameterNames(value: ApiManagementApiSubscriptionKeyParameterNames): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putSubscriptionKeyParameterNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementApiTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a>

---

##### `resetApiType` <a name="resetApiType" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetApiType"></a>

```typescript
public resetApiType(): void
```

##### `resetContact` <a name="resetContact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetContact"></a>

```typescript
public resetContact(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImport` <a name="resetImport" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetImport"></a>

```typescript
public resetImport(): void
```

##### `resetLicense` <a name="resetLicense" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetLicense"></a>

```typescript
public resetLicense(): void
```

##### `resetOauth2Authorization` <a name="resetOauth2Authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOauth2Authorization"></a>

```typescript
public resetOauth2Authorization(): void
```

##### `resetOpenidAuthentication` <a name="resetOpenidAuthentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOpenidAuthentication"></a>

```typescript
public resetOpenidAuthentication(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetRevisionDescription` <a name="resetRevisionDescription" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetRevisionDescription"></a>

```typescript
public resetRevisionDescription(): void
```

##### `resetServiceUrl` <a name="resetServiceUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetServiceUrl"></a>

```typescript
public resetServiceUrl(): void
```

##### `resetSourceApiId` <a name="resetSourceApiId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSourceApiId"></a>

```typescript
public resetSourceApiId(): void
```

##### `resetSubscriptionKeyParameterNames` <a name="resetSubscriptionKeyParameterNames" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSubscriptionKeyParameterNames"></a>

```typescript
public resetSubscriptionKeyParameterNames(): void
```

##### `resetSubscriptionRequired` <a name="resetSubscriptionRequired" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSubscriptionRequired"></a>

```typescript
public resetSubscriptionRequired(): void
```

##### `resetTermsOfServiceUrl` <a name="resetTermsOfServiceUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetTermsOfServiceUrl"></a>

```typescript
public resetTermsOfServiceUrl(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetVersionDescription` <a name="resetVersionDescription" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersionDescription"></a>

```typescript
public resetVersionDescription(): void
```

##### `resetVersionSetId` <a name="resetVersionSetId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersionSetId"></a>

```typescript
public resetVersionSetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementApi resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isConstruct"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

apiManagementApi.ApiManagementApi.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformElement"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

apiManagementApi.ApiManagementApi.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformResource"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

apiManagementApi.ApiManagementApi.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

apiManagementApi.ApiManagementApi.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiManagementApi resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.contact">contact</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference">ApiManagementApiContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.import">import</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference">ApiManagementApiImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.isCurrent">isCurrent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.isOnline">isOnline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.license">license</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference">ApiManagementApiLicenseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.oauth2Authorization">oauth2Authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference">ApiManagementApiOauth2AuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.openidAuthentication">openidAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference">ApiManagementApiOpenidAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionKeyParameterNames">subscriptionKeyParameterNames</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference">ApiManagementApiSubscriptionKeyParameterNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference">ApiManagementApiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiManagementNameInput">apiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiTypeInput">apiTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.contactInput">contactInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.importInput">importInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.licenseInput">licenseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.oauth2AuthorizationInput">oauth2AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.openidAuthenticationInput">openidAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionDescriptionInput">revisionDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionInput">revisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.serviceUrlInput">serviceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.sourceApiIdInput">sourceApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionKeyParameterNamesInput">subscriptionKeyParameterNamesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionRequiredInput">subscriptionRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.termsOfServiceUrlInput">termsOfServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionDescriptionInput">versionDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionSetIdInput">versionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiType">apiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionDescription">revisionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.serviceUrl">serviceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.sourceApiId">sourceApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionRequired">subscriptionRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.termsOfServiceUrl">termsOfServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionDescription">versionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionSetId">versionSetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contact`<sup>Required</sup> <a name="contact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.contact"></a>

```typescript
public readonly contact: ApiManagementApiContactOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference">ApiManagementApiContactOutputReference</a>

---

##### `import`<sup>Required</sup> <a name="import" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.import"></a>

```typescript
public readonly import: ApiManagementApiImportOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference">ApiManagementApiImportOutputReference</a>

---

##### `isCurrent`<sup>Required</sup> <a name="isCurrent" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.isCurrent"></a>

```typescript
public readonly isCurrent: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOnline`<sup>Required</sup> <a name="isOnline" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.isOnline"></a>

```typescript
public readonly isOnline: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.license"></a>

```typescript
public readonly license: ApiManagementApiLicenseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference">ApiManagementApiLicenseOutputReference</a>

---

##### `oauth2Authorization`<sup>Required</sup> <a name="oauth2Authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.oauth2Authorization"></a>

```typescript
public readonly oauth2Authorization: ApiManagementApiOauth2AuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference">ApiManagementApiOauth2AuthorizationOutputReference</a>

---

##### `openidAuthentication`<sup>Required</sup> <a name="openidAuthentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.openidAuthentication"></a>

```typescript
public readonly openidAuthentication: ApiManagementApiOpenidAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference">ApiManagementApiOpenidAuthenticationOutputReference</a>

---

##### `subscriptionKeyParameterNames`<sup>Required</sup> <a name="subscriptionKeyParameterNames" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionKeyParameterNames"></a>

```typescript
public readonly subscriptionKeyParameterNames: ApiManagementApiSubscriptionKeyParameterNamesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference">ApiManagementApiSubscriptionKeyParameterNamesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementApiTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference">ApiManagementApiTimeoutsOutputReference</a>

---

##### `apiManagementNameInput`<sup>Optional</sup> <a name="apiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiManagementNameInput"></a>

```typescript
public readonly apiManagementNameInput: string;
```

- *Type:* string

---

##### `apiTypeInput`<sup>Optional</sup> <a name="apiTypeInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiTypeInput"></a>

```typescript
public readonly apiTypeInput: string;
```

- *Type:* string

---

##### `contactInput`<sup>Optional</sup> <a name="contactInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.contactInput"></a>

```typescript
public readonly contactInput: ApiManagementApiContact;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importInput`<sup>Optional</sup> <a name="importInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.importInput"></a>

```typescript
public readonly importInput: ApiManagementApiImport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a>

---

##### `licenseInput`<sup>Optional</sup> <a name="licenseInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.licenseInput"></a>

```typescript
public readonly licenseInput: ApiManagementApiLicense;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauth2AuthorizationInput`<sup>Optional</sup> <a name="oauth2AuthorizationInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.oauth2AuthorizationInput"></a>

```typescript
public readonly oauth2AuthorizationInput: ApiManagementApiOauth2Authorization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a>

---

##### `openidAuthenticationInput`<sup>Optional</sup> <a name="openidAuthenticationInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.openidAuthenticationInput"></a>

```typescript
public readonly openidAuthenticationInput: ApiManagementApiOpenidAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `revisionDescriptionInput`<sup>Optional</sup> <a name="revisionDescriptionInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionDescriptionInput"></a>

```typescript
public readonly revisionDescriptionInput: string;
```

- *Type:* string

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionInput"></a>

```typescript
public readonly revisionInput: string;
```

- *Type:* string

---

##### `serviceUrlInput`<sup>Optional</sup> <a name="serviceUrlInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.serviceUrlInput"></a>

```typescript
public readonly serviceUrlInput: string;
```

- *Type:* string

---

##### `sourceApiIdInput`<sup>Optional</sup> <a name="sourceApiIdInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.sourceApiIdInput"></a>

```typescript
public readonly sourceApiIdInput: string;
```

- *Type:* string

---

##### `subscriptionKeyParameterNamesInput`<sup>Optional</sup> <a name="subscriptionKeyParameterNamesInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionKeyParameterNamesInput"></a>

```typescript
public readonly subscriptionKeyParameterNamesInput: ApiManagementApiSubscriptionKeyParameterNames;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a>

---

##### `subscriptionRequiredInput`<sup>Optional</sup> <a name="subscriptionRequiredInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionRequiredInput"></a>

```typescript
public readonly subscriptionRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `termsOfServiceUrlInput`<sup>Optional</sup> <a name="termsOfServiceUrlInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.termsOfServiceUrlInput"></a>

```typescript
public readonly termsOfServiceUrlInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiManagementApiTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a>

---

##### `versionDescriptionInput`<sup>Optional</sup> <a name="versionDescriptionInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionDescriptionInput"></a>

```typescript
public readonly versionDescriptionInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `versionSetIdInput`<sup>Optional</sup> <a name="versionSetIdInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionSetIdInput"></a>

```typescript
public readonly versionSetIdInput: string;
```

- *Type:* string

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiType"></a>

```typescript
public readonly apiType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `revisionDescription`<sup>Required</sup> <a name="revisionDescription" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionDescription"></a>

```typescript
public readonly revisionDescription: string;
```

- *Type:* string

---

##### `serviceUrl`<sup>Required</sup> <a name="serviceUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.serviceUrl"></a>

```typescript
public readonly serviceUrl: string;
```

- *Type:* string

---

##### `sourceApiId`<sup>Required</sup> <a name="sourceApiId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.sourceApiId"></a>

```typescript
public readonly sourceApiId: string;
```

- *Type:* string

---

##### `subscriptionRequired`<sup>Required</sup> <a name="subscriptionRequired" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionRequired"></a>

```typescript
public readonly subscriptionRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `termsOfServiceUrl`<sup>Required</sup> <a name="termsOfServiceUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.termsOfServiceUrl"></a>

```typescript
public readonly termsOfServiceUrl: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionDescription"></a>

```typescript
public readonly versionDescription: string;
```

- *Type:* string

---

##### `versionSetId`<sup>Required</sup> <a name="versionSetId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionSetId"></a>

```typescript
public readonly versionSetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementApiConfig <a name="ApiManagementApiConfig" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

const apiManagementApiConfig: apiManagementApi.ApiManagementApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#api_management_name ApiManagementApi#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#name ApiManagementApi#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#resource_group_name ApiManagementApi#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.revision">revision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#revision ApiManagementApi#revision}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.apiType">apiType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#api_type ApiManagementApi#api_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.contact">contact</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a></code> | contact block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#description ApiManagementApi#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#display_name ApiManagementApi#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#id ApiManagementApi#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.import">import</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a></code> | import block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.license">license</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a></code> | license block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.oauth2Authorization">oauth2Authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a></code> | oauth2_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.openidAuthentication">openidAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a></code> | openid_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#path ApiManagementApi#path}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#protocols ApiManagementApi#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.revisionDescription">revisionDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#revision_description ApiManagementApi#revision_description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.serviceUrl">serviceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#service_url ApiManagementApi#service_url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.sourceApiId">sourceApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#source_api_id ApiManagementApi#source_api_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.subscriptionKeyParameterNames">subscriptionKeyParameterNames</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a></code> | subscription_key_parameter_names block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.subscriptionRequired">subscriptionRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#subscription_required ApiManagementApi#subscription_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.termsOfServiceUrl">termsOfServiceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#terms_of_service_url ApiManagementApi#terms_of_service_url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#version ApiManagementApi#version}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.versionDescription">versionDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#version_description ApiManagementApi#version_description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.versionSetId">versionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#version_set_id ApiManagementApi#version_set_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#api_management_name ApiManagementApi#api_management_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#name ApiManagementApi#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#resource_group_name ApiManagementApi#resource_group_name}.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#revision ApiManagementApi#revision}.

---

##### `apiType`<sup>Optional</sup> <a name="apiType" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.apiType"></a>

```typescript
public readonly apiType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#api_type ApiManagementApi#api_type}.

---

##### `contact`<sup>Optional</sup> <a name="contact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.contact"></a>

```typescript
public readonly contact: ApiManagementApiContact;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a>

contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#contact ApiManagementApi#contact}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#description ApiManagementApi#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#display_name ApiManagementApi#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#id ApiManagementApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import`<sup>Optional</sup> <a name="import" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.import"></a>

```typescript
public readonly import: ApiManagementApiImport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a>

import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#import ApiManagementApi#import}

---

##### `license`<sup>Optional</sup> <a name="license" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.license"></a>

```typescript
public readonly license: ApiManagementApiLicense;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a>

license block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#license ApiManagementApi#license}

---

##### `oauth2Authorization`<sup>Optional</sup> <a name="oauth2Authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.oauth2Authorization"></a>

```typescript
public readonly oauth2Authorization: ApiManagementApiOauth2Authorization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a>

oauth2_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#oauth2_authorization ApiManagementApi#oauth2_authorization}

---

##### `openidAuthentication`<sup>Optional</sup> <a name="openidAuthentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.openidAuthentication"></a>

```typescript
public readonly openidAuthentication: ApiManagementApiOpenidAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a>

openid_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#openid_authentication ApiManagementApi#openid_authentication}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#path ApiManagementApi#path}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#protocols ApiManagementApi#protocols}.

---

##### `revisionDescription`<sup>Optional</sup> <a name="revisionDescription" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.revisionDescription"></a>

```typescript
public readonly revisionDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#revision_description ApiManagementApi#revision_description}.

---

##### `serviceUrl`<sup>Optional</sup> <a name="serviceUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.serviceUrl"></a>

```typescript
public readonly serviceUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#service_url ApiManagementApi#service_url}.

---

##### `sourceApiId`<sup>Optional</sup> <a name="sourceApiId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.sourceApiId"></a>

```typescript
public readonly sourceApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#source_api_id ApiManagementApi#source_api_id}.

---

##### `subscriptionKeyParameterNames`<sup>Optional</sup> <a name="subscriptionKeyParameterNames" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.subscriptionKeyParameterNames"></a>

```typescript
public readonly subscriptionKeyParameterNames: ApiManagementApiSubscriptionKeyParameterNames;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a>

subscription_key_parameter_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#subscription_key_parameter_names ApiManagementApi#subscription_key_parameter_names}

---

##### `subscriptionRequired`<sup>Optional</sup> <a name="subscriptionRequired" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.subscriptionRequired"></a>

```typescript
public readonly subscriptionRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#subscription_required ApiManagementApi#subscription_required}.

---

##### `termsOfServiceUrl`<sup>Optional</sup> <a name="termsOfServiceUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.termsOfServiceUrl"></a>

```typescript
public readonly termsOfServiceUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#terms_of_service_url ApiManagementApi#terms_of_service_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementApiTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#timeouts ApiManagementApi#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#version ApiManagementApi#version}.

---

##### `versionDescription`<sup>Optional</sup> <a name="versionDescription" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.versionDescription"></a>

```typescript
public readonly versionDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#version_description ApiManagementApi#version_description}.

---

##### `versionSetId`<sup>Optional</sup> <a name="versionSetId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.versionSetId"></a>

```typescript
public readonly versionSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#version_set_id ApiManagementApi#version_set_id}.

---

### ApiManagementApiContact <a name="ApiManagementApiContact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

const apiManagementApiContact: apiManagementApi.ApiManagementApiContact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#email ApiManagementApi#email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#name ApiManagementApi#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#url ApiManagementApi#url}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#email ApiManagementApi#email}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#name ApiManagementApi#name}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#url ApiManagementApi#url}.

---

### ApiManagementApiImport <a name="ApiManagementApiImport" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

const apiManagementApiImport: apiManagementApi.ApiManagementApiImport = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.contentFormat">contentFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#content_format ApiManagementApi#content_format}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.contentValue">contentValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#content_value ApiManagementApi#content_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.wsdlSelector">wsdlSelector</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a></code> | wsdl_selector block. |

---

##### `contentFormat`<sup>Required</sup> <a name="contentFormat" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.contentFormat"></a>

```typescript
public readonly contentFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#content_format ApiManagementApi#content_format}.

---

##### `contentValue`<sup>Required</sup> <a name="contentValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.contentValue"></a>

```typescript
public readonly contentValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#content_value ApiManagementApi#content_value}.

---

##### `wsdlSelector`<sup>Optional</sup> <a name="wsdlSelector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.wsdlSelector"></a>

```typescript
public readonly wsdlSelector: ApiManagementApiImportWsdlSelector;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a>

wsdl_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#wsdl_selector ApiManagementApi#wsdl_selector}

---

### ApiManagementApiImportWsdlSelector <a name="ApiManagementApiImportWsdlSelector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

const apiManagementApiImportWsdlSelector: apiManagementApi.ApiManagementApiImportWsdlSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.property.endpointName">endpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#endpoint_name ApiManagementApi#endpoint_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#service_name ApiManagementApi#service_name}. |

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#endpoint_name ApiManagementApi#endpoint_name}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#service_name ApiManagementApi#service_name}.

---

### ApiManagementApiLicense <a name="ApiManagementApiLicense" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

const apiManagementApiLicense: apiManagementApi.ApiManagementApiLicense = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#name ApiManagementApi#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#url ApiManagementApi#url}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#name ApiManagementApi#name}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#url ApiManagementApi#url}.

---

### ApiManagementApiOauth2Authorization <a name="ApiManagementApiOauth2Authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

const apiManagementApiOauth2Authorization: apiManagementApi.ApiManagementApiOauth2Authorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.property.authorizationServerName">authorizationServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#authorization_server_name ApiManagementApi#authorization_server_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#scope ApiManagementApi#scope}. |

---

##### `authorizationServerName`<sup>Required</sup> <a name="authorizationServerName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.property.authorizationServerName"></a>

```typescript
public readonly authorizationServerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#authorization_server_name ApiManagementApi#authorization_server_name}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#scope ApiManagementApi#scope}.

---

### ApiManagementApiOpenidAuthentication <a name="ApiManagementApiOpenidAuthentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

const apiManagementApiOpenidAuthentication: apiManagementApi.ApiManagementApiOpenidAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.property.openidProviderName">openidProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#openid_provider_name ApiManagementApi#openid_provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.property.bearerTokenSendingMethods">bearerTokenSendingMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#bearer_token_sending_methods ApiManagementApi#bearer_token_sending_methods}. |

---

##### `openidProviderName`<sup>Required</sup> <a name="openidProviderName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.property.openidProviderName"></a>

```typescript
public readonly openidProviderName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#openid_provider_name ApiManagementApi#openid_provider_name}.

---

##### `bearerTokenSendingMethods`<sup>Optional</sup> <a name="bearerTokenSendingMethods" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.property.bearerTokenSendingMethods"></a>

```typescript
public readonly bearerTokenSendingMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#bearer_token_sending_methods ApiManagementApi#bearer_token_sending_methods}.

---

### ApiManagementApiSubscriptionKeyParameterNames <a name="ApiManagementApiSubscriptionKeyParameterNames" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

const apiManagementApiSubscriptionKeyParameterNames: apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.property.header">header</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#header ApiManagementApi#header}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#query ApiManagementApi#query}. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#header ApiManagementApi#header}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#query ApiManagementApi#query}.

---

### ApiManagementApiTimeouts <a name="ApiManagementApiTimeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

const apiManagementApiTimeouts: apiManagementApi.ApiManagementApiTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#create ApiManagementApi#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#delete ApiManagementApi#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#read ApiManagementApi#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#update ApiManagementApi#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#create ApiManagementApi#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#delete ApiManagementApi#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#read ApiManagementApi#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_api#update ApiManagementApi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementApiContactOutputReference <a name="ApiManagementApiContactOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

new apiManagementApi.ApiManagementApiContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiContact;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a>

---


### ApiManagementApiImportOutputReference <a name="ApiManagementApiImportOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

new apiManagementApi.ApiManagementApiImportOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.putWsdlSelector">putWsdlSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resetWsdlSelector">resetWsdlSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWsdlSelector` <a name="putWsdlSelector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.putWsdlSelector"></a>

```typescript
public putWsdlSelector(value: ApiManagementApiImportWsdlSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.putWsdlSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a>

---

##### `resetWsdlSelector` <a name="resetWsdlSelector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resetWsdlSelector"></a>

```typescript
public resetWsdlSelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.wsdlSelector">wsdlSelector</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference">ApiManagementApiImportWsdlSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentFormatInput">contentFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentValueInput">contentValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.wsdlSelectorInput">wsdlSelectorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentFormat">contentFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentValue">contentValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `wsdlSelector`<sup>Required</sup> <a name="wsdlSelector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.wsdlSelector"></a>

```typescript
public readonly wsdlSelector: ApiManagementApiImportWsdlSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference">ApiManagementApiImportWsdlSelectorOutputReference</a>

---

##### `contentFormatInput`<sup>Optional</sup> <a name="contentFormatInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentFormatInput"></a>

```typescript
public readonly contentFormatInput: string;
```

- *Type:* string

---

##### `contentValueInput`<sup>Optional</sup> <a name="contentValueInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentValueInput"></a>

```typescript
public readonly contentValueInput: string;
```

- *Type:* string

---

##### `wsdlSelectorInput`<sup>Optional</sup> <a name="wsdlSelectorInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.wsdlSelectorInput"></a>

```typescript
public readonly wsdlSelectorInput: ApiManagementApiImportWsdlSelector;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a>

---

##### `contentFormat`<sup>Required</sup> <a name="contentFormat" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentFormat"></a>

```typescript
public readonly contentFormat: string;
```

- *Type:* string

---

##### `contentValue`<sup>Required</sup> <a name="contentValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentValue"></a>

```typescript
public readonly contentValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiImport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a>

---


### ApiManagementApiImportWsdlSelectorOutputReference <a name="ApiManagementApiImportWsdlSelectorOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

new apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.endpointNameInput">endpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.endpointNameInput"></a>

```typescript
public readonly endpointNameInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiImportWsdlSelector;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a>

---


### ApiManagementApiLicenseOutputReference <a name="ApiManagementApiLicenseOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

new apiManagementApi.ApiManagementApiLicenseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiLicense;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a>

---


### ApiManagementApiOauth2AuthorizationOutputReference <a name="ApiManagementApiOauth2AuthorizationOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

new apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.authorizationServerNameInput">authorizationServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.authorizationServerName">authorizationServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationServerNameInput`<sup>Optional</sup> <a name="authorizationServerNameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.authorizationServerNameInput"></a>

```typescript
public readonly authorizationServerNameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `authorizationServerName`<sup>Required</sup> <a name="authorizationServerName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.authorizationServerName"></a>

```typescript
public readonly authorizationServerName: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiOauth2Authorization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a>

---


### ApiManagementApiOpenidAuthenticationOutputReference <a name="ApiManagementApiOpenidAuthenticationOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

new apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resetBearerTokenSendingMethods">resetBearerTokenSendingMethods</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBearerTokenSendingMethods` <a name="resetBearerTokenSendingMethods" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resetBearerTokenSendingMethods"></a>

```typescript
public resetBearerTokenSendingMethods(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.bearerTokenSendingMethodsInput">bearerTokenSendingMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.openidProviderNameInput">openidProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.bearerTokenSendingMethods">bearerTokenSendingMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.openidProviderName">openidProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bearerTokenSendingMethodsInput`<sup>Optional</sup> <a name="bearerTokenSendingMethodsInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.bearerTokenSendingMethodsInput"></a>

```typescript
public readonly bearerTokenSendingMethodsInput: string[];
```

- *Type:* string[]

---

##### `openidProviderNameInput`<sup>Optional</sup> <a name="openidProviderNameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.openidProviderNameInput"></a>

```typescript
public readonly openidProviderNameInput: string;
```

- *Type:* string

---

##### `bearerTokenSendingMethods`<sup>Required</sup> <a name="bearerTokenSendingMethods" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.bearerTokenSendingMethods"></a>

```typescript
public readonly bearerTokenSendingMethods: string[];
```

- *Type:* string[]

---

##### `openidProviderName`<sup>Required</sup> <a name="openidProviderName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.openidProviderName"></a>

```typescript
public readonly openidProviderName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiOpenidAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a>

---


### ApiManagementApiSubscriptionKeyParameterNamesOutputReference <a name="ApiManagementApiSubscriptionKeyParameterNamesOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

new apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.headerInput">headerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiSubscriptionKeyParameterNames;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a>

---


### ApiManagementApiTimeoutsOutputReference <a name="ApiManagementApiTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementApi } from '@cdktf/provider-azurerm'

new apiManagementApi.ApiManagementApiTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a>

---



