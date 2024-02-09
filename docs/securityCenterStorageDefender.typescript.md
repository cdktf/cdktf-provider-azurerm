# `securityCenterStorageDefender` Submodule <a name="`securityCenterStorageDefender` Submodule" id="@cdktf/provider-azurerm.securityCenterStorageDefender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityCenterStorageDefender <a name="SecurityCenterStorageDefender" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender azurerm_security_center_storage_defender}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer"></a>

```typescript
import { securityCenterStorageDefender } from '@cdktf/provider-azurerm'

new securityCenterStorageDefender.SecurityCenterStorageDefender(scope: Construct, id: string, config: SecurityCenterStorageDefenderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig">SecurityCenterStorageDefenderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig">SecurityCenterStorageDefenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadCapGbPerMonth">resetMalwareScanningOnUploadCapGbPerMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadEnabled">resetMalwareScanningOnUploadEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideSubscriptionSettingsEnabled">resetOverrideSubscriptionSettingsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetSensitiveDataDiscoveryEnabled">resetSensitiveDataDiscoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.putTimeouts"></a>

```typescript
public putTimeouts(value: SecurityCenterStorageDefenderTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMalwareScanningOnUploadCapGbPerMonth` <a name="resetMalwareScanningOnUploadCapGbPerMonth" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadCapGbPerMonth"></a>

```typescript
public resetMalwareScanningOnUploadCapGbPerMonth(): void
```

##### `resetMalwareScanningOnUploadEnabled` <a name="resetMalwareScanningOnUploadEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadEnabled"></a>

```typescript
public resetMalwareScanningOnUploadEnabled(): void
```

##### `resetOverrideSubscriptionSettingsEnabled` <a name="resetOverrideSubscriptionSettingsEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideSubscriptionSettingsEnabled"></a>

```typescript
public resetOverrideSubscriptionSettingsEnabled(): void
```

##### `resetSensitiveDataDiscoveryEnabled` <a name="resetSensitiveDataDiscoveryEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetSensitiveDataDiscoveryEnabled"></a>

```typescript
public resetSensitiveDataDiscoveryEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityCenterStorageDefender resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isConstruct"></a>

```typescript
import { securityCenterStorageDefender } from '@cdktf/provider-azurerm'

securityCenterStorageDefender.SecurityCenterStorageDefender.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformElement"></a>

```typescript
import { securityCenterStorageDefender } from '@cdktf/provider-azurerm'

securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformResource"></a>

```typescript
import { securityCenterStorageDefender } from '@cdktf/provider-azurerm'

securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport"></a>

```typescript
import { securityCenterStorageDefender } from '@cdktf/provider-azurerm'

securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecurityCenterStorageDefender resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityCenterStorageDefender to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityCenterStorageDefender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityCenterStorageDefender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference">SecurityCenterStorageDefenderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonthInput">malwareScanningOnUploadCapGbPerMonthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabledInput">malwareScanningOnUploadEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabledInput">overrideSubscriptionSettingsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabledInput">sensitiveDataDiscoveryEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonth">malwareScanningOnUploadCapGbPerMonth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabled">malwareScanningOnUploadEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabled">overrideSubscriptionSettingsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabled">sensitiveDataDiscoveryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityCenterStorageDefenderTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference">SecurityCenterStorageDefenderTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `malwareScanningOnUploadCapGbPerMonthInput`<sup>Optional</sup> <a name="malwareScanningOnUploadCapGbPerMonthInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonthInput"></a>

```typescript
public readonly malwareScanningOnUploadCapGbPerMonthInput: number;
```

- *Type:* number

---

##### `malwareScanningOnUploadEnabledInput`<sup>Optional</sup> <a name="malwareScanningOnUploadEnabledInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabledInput"></a>

```typescript
public readonly malwareScanningOnUploadEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `overrideSubscriptionSettingsEnabledInput`<sup>Optional</sup> <a name="overrideSubscriptionSettingsEnabledInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabledInput"></a>

```typescript
public readonly overrideSubscriptionSettingsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sensitiveDataDiscoveryEnabledInput`<sup>Optional</sup> <a name="sensitiveDataDiscoveryEnabledInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabledInput"></a>

```typescript
public readonly sensitiveDataDiscoveryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SecurityCenterStorageDefenderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `malwareScanningOnUploadCapGbPerMonth`<sup>Required</sup> <a name="malwareScanningOnUploadCapGbPerMonth" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonth"></a>

```typescript
public readonly malwareScanningOnUploadCapGbPerMonth: number;
```

- *Type:* number

---

##### `malwareScanningOnUploadEnabled`<sup>Required</sup> <a name="malwareScanningOnUploadEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabled"></a>

```typescript
public readonly malwareScanningOnUploadEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `overrideSubscriptionSettingsEnabled`<sup>Required</sup> <a name="overrideSubscriptionSettingsEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabled"></a>

```typescript
public readonly overrideSubscriptionSettingsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sensitiveDataDiscoveryEnabled`<sup>Required</sup> <a name="sensitiveDataDiscoveryEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabled"></a>

```typescript
public readonly sensitiveDataDiscoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityCenterStorageDefenderConfig <a name="SecurityCenterStorageDefenderConfig" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.Initializer"></a>

```typescript
import { securityCenterStorageDefender } from '@cdktf/provider-azurerm'

const securityCenterStorageDefenderConfig: securityCenterStorageDefender.SecurityCenterStorageDefenderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#storage_account_id SecurityCenterStorageDefender#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#id SecurityCenterStorageDefender#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadCapGbPerMonth">malwareScanningOnUploadCapGbPerMonth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_cap_gb_per_month SecurityCenterStorageDefender#malware_scanning_on_upload_cap_gb_per_month}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadEnabled">malwareScanningOnUploadEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_enabled SecurityCenterStorageDefender#malware_scanning_on_upload_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.overrideSubscriptionSettingsEnabled">overrideSubscriptionSettingsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#override_subscription_settings_enabled SecurityCenterStorageDefender#override_subscription_settings_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.sensitiveDataDiscoveryEnabled">sensitiveDataDiscoveryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#sensitive_data_discovery_enabled SecurityCenterStorageDefender#sensitive_data_discovery_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#storage_account_id SecurityCenterStorageDefender#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#id SecurityCenterStorageDefender#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `malwareScanningOnUploadCapGbPerMonth`<sup>Optional</sup> <a name="malwareScanningOnUploadCapGbPerMonth" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadCapGbPerMonth"></a>

```typescript
public readonly malwareScanningOnUploadCapGbPerMonth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_cap_gb_per_month SecurityCenterStorageDefender#malware_scanning_on_upload_cap_gb_per_month}.

---

##### `malwareScanningOnUploadEnabled`<sup>Optional</sup> <a name="malwareScanningOnUploadEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadEnabled"></a>

```typescript
public readonly malwareScanningOnUploadEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_enabled SecurityCenterStorageDefender#malware_scanning_on_upload_enabled}.

---

##### `overrideSubscriptionSettingsEnabled`<sup>Optional</sup> <a name="overrideSubscriptionSettingsEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.overrideSubscriptionSettingsEnabled"></a>

```typescript
public readonly overrideSubscriptionSettingsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#override_subscription_settings_enabled SecurityCenterStorageDefender#override_subscription_settings_enabled}.

---

##### `sensitiveDataDiscoveryEnabled`<sup>Optional</sup> <a name="sensitiveDataDiscoveryEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.sensitiveDataDiscoveryEnabled"></a>

```typescript
public readonly sensitiveDataDiscoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#sensitive_data_discovery_enabled SecurityCenterStorageDefender#sensitive_data_discovery_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityCenterStorageDefenderTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#timeouts SecurityCenterStorageDefender#timeouts}

---

### SecurityCenterStorageDefenderTimeouts <a name="SecurityCenterStorageDefenderTimeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.Initializer"></a>

```typescript
import { securityCenterStorageDefender } from '@cdktf/provider-azurerm'

const securityCenterStorageDefenderTimeouts: securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#create SecurityCenterStorageDefender#create}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#delete SecurityCenterStorageDefender#delete}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#read SecurityCenterStorageDefender#read}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#update SecurityCenterStorageDefender#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#create SecurityCenterStorageDefender#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#delete SecurityCenterStorageDefender#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#read SecurityCenterStorageDefender#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.91.0/docs/resources/security_center_storage_defender#update SecurityCenterStorageDefender#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityCenterStorageDefenderTimeoutsOutputReference <a name="SecurityCenterStorageDefenderTimeoutsOutputReference" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer"></a>

```typescript
import { securityCenterStorageDefender } from '@cdktf/provider-azurerm'

new securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityCenterStorageDefenderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a>

---



