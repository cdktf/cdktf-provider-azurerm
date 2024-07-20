# `healthcareService` Submodule <a name="`healthcareService` Submodule" id="@cdktf/provider-azurerm.healthcareService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareService <a name="HealthcareService" id="@cdktf/provider-azurerm.healthcareService.HealthcareService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service azurerm_healthcare_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer"></a>

```typescript
import { healthcareService } from '@cdktf/provider-azurerm'

new healthcareService.HealthcareService(scope: Construct, id: string, config: HealthcareServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig">HealthcareServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig">HealthcareServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.putAuthenticationConfiguration">putAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.putCorsConfiguration">putCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetAccessPolicyObjectIds">resetAccessPolicyObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetAuthenticationConfiguration">resetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetConfigurationExportStorageAccountName">resetConfigurationExportStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCorsConfiguration">resetCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCosmosdbKeyVaultKeyVersionlessId">resetCosmosdbKeyVaultKeyVersionlessId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCosmosdbThroughput">resetCosmosdbThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticationConfiguration` <a name="putAuthenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putAuthenticationConfiguration"></a>

```typescript
public putAuthenticationConfiguration(value: HealthcareServiceAuthenticationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a>

---

##### `putCorsConfiguration` <a name="putCorsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putCorsConfiguration"></a>

```typescript
public putCorsConfiguration(value: HealthcareServiceCorsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putCorsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putIdentity"></a>

```typescript
public putIdentity(value: HealthcareServiceIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity">HealthcareServiceIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putTimeouts"></a>

```typescript
public putTimeouts(value: HealthcareServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a>

---

##### `resetAccessPolicyObjectIds` <a name="resetAccessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetAccessPolicyObjectIds"></a>

```typescript
public resetAccessPolicyObjectIds(): void
```

##### `resetAuthenticationConfiguration` <a name="resetAuthenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetAuthenticationConfiguration"></a>

```typescript
public resetAuthenticationConfiguration(): void
```

##### `resetConfigurationExportStorageAccountName` <a name="resetConfigurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetConfigurationExportStorageAccountName"></a>

```typescript
public resetConfigurationExportStorageAccountName(): void
```

##### `resetCorsConfiguration` <a name="resetCorsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCorsConfiguration"></a>

```typescript
public resetCorsConfiguration(): void
```

##### `resetCosmosdbKeyVaultKeyVersionlessId` <a name="resetCosmosdbKeyVaultKeyVersionlessId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCosmosdbKeyVaultKeyVersionlessId"></a>

```typescript
public resetCosmosdbKeyVaultKeyVersionlessId(): void
```

##### `resetCosmosdbThroughput` <a name="resetCosmosdbThroughput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCosmosdbThroughput"></a>

```typescript
public resetCosmosdbThroughput(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HealthcareService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isConstruct"></a>

```typescript
import { healthcareService } from '@cdktf/provider-azurerm'

healthcareService.HealthcareService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformElement"></a>

```typescript
import { healthcareService } from '@cdktf/provider-azurerm'

healthcareService.HealthcareService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformResource"></a>

```typescript
import { healthcareService } from '@cdktf/provider-azurerm'

healthcareService.HealthcareService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport"></a>

```typescript
import { healthcareService } from '@cdktf/provider-azurerm'

healthcareService.HealthcareService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HealthcareService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthcareService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthcareService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HealthcareService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference">HealthcareServiceAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.corsConfiguration">corsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference">HealthcareServiceCorsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference">HealthcareServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference">HealthcareServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.accessPolicyObjectIdsInput">accessPolicyObjectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.authenticationConfigurationInput">authenticationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.configurationExportStorageAccountNameInput">configurationExportStorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.corsConfigurationInput">corsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbKeyVaultKeyVersionlessIdInput">cosmosdbKeyVaultKeyVersionlessIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbThroughputInput">cosmosdbThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity">HealthcareServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.accessPolicyObjectIds">accessPolicyObjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.configurationExportStorageAccountName">configurationExportStorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbKeyVaultKeyVersionlessId">cosmosdbKeyVaultKeyVersionlessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbThroughput">cosmosdbThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="authenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.authenticationConfiguration"></a>

```typescript
public readonly authenticationConfiguration: HealthcareServiceAuthenticationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference">HealthcareServiceAuthenticationConfigurationOutputReference</a>

---

##### `corsConfiguration`<sup>Required</sup> <a name="corsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.corsConfiguration"></a>

```typescript
public readonly corsConfiguration: HealthcareServiceCorsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference">HealthcareServiceCorsConfigurationOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.identity"></a>

```typescript
public readonly identity: HealthcareServiceIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference">HealthcareServiceIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference">HealthcareServiceTimeoutsOutputReference</a>

---

##### `accessPolicyObjectIdsInput`<sup>Optional</sup> <a name="accessPolicyObjectIdsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.accessPolicyObjectIdsInput"></a>

```typescript
public readonly accessPolicyObjectIdsInput: string[];
```

- *Type:* string[]

---

##### `authenticationConfigurationInput`<sup>Optional</sup> <a name="authenticationConfigurationInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.authenticationConfigurationInput"></a>

```typescript
public readonly authenticationConfigurationInput: HealthcareServiceAuthenticationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a>

---

##### `configurationExportStorageAccountNameInput`<sup>Optional</sup> <a name="configurationExportStorageAccountNameInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.configurationExportStorageAccountNameInput"></a>

```typescript
public readonly configurationExportStorageAccountNameInput: string;
```

- *Type:* string

---

##### `corsConfigurationInput`<sup>Optional</sup> <a name="corsConfigurationInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.corsConfigurationInput"></a>

```typescript
public readonly corsConfigurationInput: HealthcareServiceCorsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a>

---

##### `cosmosdbKeyVaultKeyVersionlessIdInput`<sup>Optional</sup> <a name="cosmosdbKeyVaultKeyVersionlessIdInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbKeyVaultKeyVersionlessIdInput"></a>

```typescript
public readonly cosmosdbKeyVaultKeyVersionlessIdInput: string;
```

- *Type:* string

---

##### `cosmosdbThroughputInput`<sup>Optional</sup> <a name="cosmosdbThroughputInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbThroughputInput"></a>

```typescript
public readonly cosmosdbThroughputInput: number;
```

- *Type:* number

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.identityInput"></a>

```typescript
public readonly identityInput: HealthcareServiceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity">HealthcareServiceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HealthcareServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a>

---

##### `accessPolicyObjectIds`<sup>Required</sup> <a name="accessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.accessPolicyObjectIds"></a>

```typescript
public readonly accessPolicyObjectIds: string[];
```

- *Type:* string[]

---

##### `configurationExportStorageAccountName`<sup>Required</sup> <a name="configurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.configurationExportStorageAccountName"></a>

```typescript
public readonly configurationExportStorageAccountName: string;
```

- *Type:* string

---

##### `cosmosdbKeyVaultKeyVersionlessId`<sup>Required</sup> <a name="cosmosdbKeyVaultKeyVersionlessId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbKeyVaultKeyVersionlessId"></a>

```typescript
public readonly cosmosdbKeyVaultKeyVersionlessId: string;
```

- *Type:* string

---

##### `cosmosdbThroughput`<sup>Required</sup> <a name="cosmosdbThroughput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbThroughput"></a>

```typescript
public readonly cosmosdbThroughput: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareServiceAuthenticationConfiguration <a name="HealthcareServiceAuthenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.Initializer"></a>

```typescript
import { healthcareService } from '@cdktf/provider-azurerm'

const healthcareServiceAuthenticationConfiguration: healthcareService.HealthcareServiceAuthenticationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.audience">audience</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#audience HealthcareService#audience}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.authority">authority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#authority HealthcareService#authority}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.smartProxyEnabled">smartProxyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#smart_proxy_enabled HealthcareService#smart_proxy_enabled}. |

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#audience HealthcareService#audience}.

---

##### `authority`<sup>Optional</sup> <a name="authority" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.authority"></a>

```typescript
public readonly authority: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#authority HealthcareService#authority}.

---

##### `smartProxyEnabled`<sup>Optional</sup> <a name="smartProxyEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.smartProxyEnabled"></a>

```typescript
public readonly smartProxyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#smart_proxy_enabled HealthcareService#smart_proxy_enabled}.

---

### HealthcareServiceConfig <a name="HealthcareServiceConfig" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.Initializer"></a>

```typescript
import { healthcareService } from '@cdktf/provider-azurerm'

const healthcareServiceConfig: healthcareService.HealthcareServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#location HealthcareService#location}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#name HealthcareService#name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#resource_group_name HealthcareService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.accessPolicyObjectIds">accessPolicyObjectIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#access_policy_object_ids HealthcareService#access_policy_object_ids}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.configurationExportStorageAccountName">configurationExportStorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#configuration_export_storage_account_name HealthcareService#configuration_export_storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.corsConfiguration">corsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a></code> | cors_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.cosmosdbKeyVaultKeyVersionlessId">cosmosdbKeyVaultKeyVersionlessId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#cosmosdb_key_vault_key_versionless_id HealthcareService#cosmosdb_key_vault_key_versionless_id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.cosmosdbThroughput">cosmosdbThroughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#cosmosdb_throughput HealthcareService#cosmosdb_throughput}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#id HealthcareService#id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity">HealthcareServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#kind HealthcareService#kind}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#public_network_access_enabled HealthcareService#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#tags HealthcareService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#location HealthcareService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#name HealthcareService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#resource_group_name HealthcareService#resource_group_name}.

---

##### `accessPolicyObjectIds`<sup>Optional</sup> <a name="accessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.accessPolicyObjectIds"></a>

```typescript
public readonly accessPolicyObjectIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#access_policy_object_ids HealthcareService#access_policy_object_ids}.

---

##### `authenticationConfiguration`<sup>Optional</sup> <a name="authenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.authenticationConfiguration"></a>

```typescript
public readonly authenticationConfiguration: HealthcareServiceAuthenticationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#authentication_configuration HealthcareService#authentication_configuration}

---

##### `configurationExportStorageAccountName`<sup>Optional</sup> <a name="configurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.configurationExportStorageAccountName"></a>

```typescript
public readonly configurationExportStorageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#configuration_export_storage_account_name HealthcareService#configuration_export_storage_account_name}.

---

##### `corsConfiguration`<sup>Optional</sup> <a name="corsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.corsConfiguration"></a>

```typescript
public readonly corsConfiguration: HealthcareServiceCorsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a>

cors_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#cors_configuration HealthcareService#cors_configuration}

---

##### `cosmosdbKeyVaultKeyVersionlessId`<sup>Optional</sup> <a name="cosmosdbKeyVaultKeyVersionlessId" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.cosmosdbKeyVaultKeyVersionlessId"></a>

```typescript
public readonly cosmosdbKeyVaultKeyVersionlessId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#cosmosdb_key_vault_key_versionless_id HealthcareService#cosmosdb_key_vault_key_versionless_id}.

---

##### `cosmosdbThroughput`<sup>Optional</sup> <a name="cosmosdbThroughput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.cosmosdbThroughput"></a>

```typescript
public readonly cosmosdbThroughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#cosmosdb_throughput HealthcareService#cosmosdb_throughput}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#id HealthcareService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.identity"></a>

```typescript
public readonly identity: HealthcareServiceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity">HealthcareServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#identity HealthcareService#identity}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#kind HealthcareService#kind}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#public_network_access_enabled HealthcareService#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#tags HealthcareService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#timeouts HealthcareService#timeouts}

---

### HealthcareServiceCorsConfiguration <a name="HealthcareServiceCorsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.Initializer"></a>

```typescript
import { healthcareService } from '@cdktf/provider-azurerm'

const healthcareServiceCorsConfiguration: healthcareService.HealthcareServiceCorsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowCredentials">allowCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allow_credentials HealthcareService#allow_credentials}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allowed_headers HealthcareService#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allowed_methods HealthcareService#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allowed_origins HealthcareService#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#max_age_in_seconds HealthcareService#max_age_in_seconds}. |

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allow_credentials HealthcareService#allow_credentials}.

---

##### `allowedHeaders`<sup>Optional</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allowed_headers HealthcareService#allowed_headers}.

---

##### `allowedMethods`<sup>Optional</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allowed_methods HealthcareService#allowed_methods}.

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allowed_origins HealthcareService#allowed_origins}.

---

##### `maxAgeInSeconds`<sup>Optional</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#max_age_in_seconds HealthcareService#max_age_in_seconds}.

---

### HealthcareServiceIdentity <a name="HealthcareServiceIdentity" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity.Initializer"></a>

```typescript
import { healthcareService } from '@cdktf/provider-azurerm'

const healthcareServiceIdentity: healthcareService.HealthcareServiceIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#type HealthcareService#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#type HealthcareService#type}.

---

### HealthcareServiceTimeouts <a name="HealthcareServiceTimeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.Initializer"></a>

```typescript
import { healthcareService } from '@cdktf/provider-azurerm'

const healthcareServiceTimeouts: healthcareService.HealthcareServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#create HealthcareService#create}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#delete HealthcareService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#read HealthcareService#read}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#update HealthcareService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#create HealthcareService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#delete HealthcareService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#read HealthcareService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#update HealthcareService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareServiceAuthenticationConfigurationOutputReference <a name="HealthcareServiceAuthenticationConfigurationOutputReference" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer"></a>

```typescript
import { healthcareService } from '@cdktf/provider-azurerm'

new healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetAuthority">resetAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetSmartProxyEnabled">resetSmartProxyEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetAuthority` <a name="resetAuthority" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetAuthority"></a>

```typescript
public resetAuthority(): void
```

##### `resetSmartProxyEnabled` <a name="resetSmartProxyEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetSmartProxyEnabled"></a>

```typescript
public resetSmartProxyEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.authorityInput">authorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.smartProxyEnabledInput">smartProxyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.authority">authority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.smartProxyEnabled">smartProxyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `authorityInput`<sup>Optional</sup> <a name="authorityInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.authorityInput"></a>

```typescript
public readonly authorityInput: string;
```

- *Type:* string

---

##### `smartProxyEnabledInput`<sup>Optional</sup> <a name="smartProxyEnabledInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.smartProxyEnabledInput"></a>

```typescript
public readonly smartProxyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.authority"></a>

```typescript
public readonly authority: string;
```

- *Type:* string

---

##### `smartProxyEnabled`<sup>Required</sup> <a name="smartProxyEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.smartProxyEnabled"></a>

```typescript
public readonly smartProxyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcareServiceAuthenticationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a>

---


### HealthcareServiceCorsConfigurationOutputReference <a name="HealthcareServiceCorsConfigurationOutputReference" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer"></a>

```typescript
import { healthcareService } from '@cdktf/provider-azurerm'

new healthcareService.HealthcareServiceCorsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedHeaders">resetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedMethods">resetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetMaxAgeInSeconds">resetMaxAgeInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowCredentials"></a>

```typescript
public resetAllowCredentials(): void
```

##### `resetAllowedHeaders` <a name="resetAllowedHeaders" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedHeaders"></a>

```typescript
public resetAllowedHeaders(): void
```

##### `resetAllowedMethods` <a name="resetAllowedMethods" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedMethods"></a>

```typescript
public resetAllowedMethods(): void
```

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedOrigins"></a>

```typescript
public resetAllowedOrigins(): void
```

##### `resetMaxAgeInSeconds` <a name="resetMaxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetMaxAgeInSeconds"></a>

```typescript
public resetMaxAgeInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowCredentialsInput"></a>

```typescript
public readonly allowCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedHeadersInput"></a>

```typescript
public readonly allowedHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.maxAgeInSecondsInput"></a>

```typescript
public readonly maxAgeInSecondsInput: number;
```

- *Type:* number

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcareServiceCorsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a>

---


### HealthcareServiceIdentityOutputReference <a name="HealthcareServiceIdentityOutputReference" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.Initializer"></a>

```typescript
import { healthcareService } from '@cdktf/provider-azurerm'

new healthcareService.HealthcareServiceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity">HealthcareServiceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcareServiceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity">HealthcareServiceIdentity</a>

---


### HealthcareServiceTimeoutsOutputReference <a name="HealthcareServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { healthcareService } from '@cdktf/provider-azurerm'

new healthcareService.HealthcareServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcareServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a>

---



