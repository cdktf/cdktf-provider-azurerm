# `sqlManagedInstance` Submodule <a name="`sqlManagedInstance` Submodule" id="@cdktf/provider-azurerm.sqlManagedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlManagedInstance <a name="SqlManagedInstance" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance azurerm_sql_managed_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer"></a>

```typescript
import { sqlManagedInstance } from '@cdktf/provider-azurerm'

new sqlManagedInstance.SqlManagedInstance(scope: Construct, id: string, config: SqlManagedInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig">SqlManagedInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig">SqlManagedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetCollation">resetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetDnsZonePartnerId">resetDnsZonePartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetMinimumTlsVersion">resetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetProxyOverride">resetProxyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetPublicDataEndpointEnabled">resetPublicDataEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetStorageAccountType">resetStorageAccountType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetTimezoneId">resetTimezoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.putIdentity"></a>

```typescript
public putIdentity(value: SqlManagedInstanceIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: SqlManagedInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a>

---

##### `resetCollation` <a name="resetCollation" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetCollation"></a>

```typescript
public resetCollation(): void
```

##### `resetDnsZonePartnerId` <a name="resetDnsZonePartnerId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetDnsZonePartnerId"></a>

```typescript
public resetDnsZonePartnerId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetMinimumTlsVersion` <a name="resetMinimumTlsVersion" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetMinimumTlsVersion"></a>

```typescript
public resetMinimumTlsVersion(): void
```

##### `resetProxyOverride` <a name="resetProxyOverride" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetProxyOverride"></a>

```typescript
public resetProxyOverride(): void
```

##### `resetPublicDataEndpointEnabled` <a name="resetPublicDataEndpointEnabled" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetPublicDataEndpointEnabled"></a>

```typescript
public resetPublicDataEndpointEnabled(): void
```

##### `resetStorageAccountType` <a name="resetStorageAccountType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetStorageAccountType"></a>

```typescript
public resetStorageAccountType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimezoneId` <a name="resetTimezoneId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.resetTimezoneId"></a>

```typescript
public resetTimezoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlManagedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isConstruct"></a>

```typescript
import { sqlManagedInstance } from '@cdktf/provider-azurerm'

sqlManagedInstance.SqlManagedInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isTerraformElement"></a>

```typescript
import { sqlManagedInstance } from '@cdktf/provider-azurerm'

sqlManagedInstance.SqlManagedInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isTerraformResource"></a>

```typescript
import { sqlManagedInstance } from '@cdktf/provider-azurerm'

sqlManagedInstance.SqlManagedInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.generateConfigForImport"></a>

```typescript
import { sqlManagedInstance } from '@cdktf/provider-azurerm'

sqlManagedInstance.SqlManagedInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SqlManagedInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlManagedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlManagedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlManagedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference">SqlManagedInstanceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference">SqlManagedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLoginInput">administratorLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLoginPasswordInput">administratorLoginPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.collationInput">collationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.dnsZonePartnerIdInput">dnsZonePartnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.minimumTlsVersionInput">minimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.proxyOverrideInput">proxyOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.publicDataEndpointEnabledInput">publicDataEndpointEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageSizeInGbInput">storageSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timezoneIdInput">timezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.vcoresInput">vcoresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.collation">collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.dnsZonePartnerId">dnsZonePartnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.proxyOverride">proxyOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.publicDataEndpointEnabled">publicDataEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageSizeInGb">storageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timezoneId">timezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.vcores">vcores</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.identity"></a>

```typescript
public readonly identity: SqlManagedInstanceIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference">SqlManagedInstanceIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timeouts"></a>

```typescript
public readonly timeouts: SqlManagedInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference">SqlManagedInstanceTimeoutsOutputReference</a>

---

##### `administratorLoginInput`<sup>Optional</sup> <a name="administratorLoginInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLoginInput"></a>

```typescript
public readonly administratorLoginInput: string;
```

- *Type:* string

---

##### `administratorLoginPasswordInput`<sup>Optional</sup> <a name="administratorLoginPasswordInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLoginPasswordInput"></a>

```typescript
public readonly administratorLoginPasswordInput: string;
```

- *Type:* string

---

##### `collationInput`<sup>Optional</sup> <a name="collationInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.collationInput"></a>

```typescript
public readonly collationInput: string;
```

- *Type:* string

---

##### `dnsZonePartnerIdInput`<sup>Optional</sup> <a name="dnsZonePartnerIdInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.dnsZonePartnerIdInput"></a>

```typescript
public readonly dnsZonePartnerIdInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.identityInput"></a>

```typescript
public readonly identityInput: SqlManagedInstanceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `minimumTlsVersionInput`<sup>Optional</sup> <a name="minimumTlsVersionInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.minimumTlsVersionInput"></a>

```typescript
public readonly minimumTlsVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `proxyOverrideInput`<sup>Optional</sup> <a name="proxyOverrideInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.proxyOverrideInput"></a>

```typescript
public readonly proxyOverrideInput: string;
```

- *Type:* string

---

##### `publicDataEndpointEnabledInput`<sup>Optional</sup> <a name="publicDataEndpointEnabledInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.publicDataEndpointEnabledInput"></a>

```typescript
public readonly publicDataEndpointEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageAccountTypeInput"></a>

```typescript
public readonly storageAccountTypeInput: string;
```

- *Type:* string

---

##### `storageSizeInGbInput`<sup>Optional</sup> <a name="storageSizeInGbInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageSizeInGbInput"></a>

```typescript
public readonly storageSizeInGbInput: number;
```

- *Type:* number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SqlManagedInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a>

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timezoneIdInput"></a>

```typescript
public readonly timezoneIdInput: string;
```

- *Type:* string

---

##### `vcoresInput`<sup>Optional</sup> <a name="vcoresInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.vcoresInput"></a>

```typescript
public readonly vcoresInput: number;
```

- *Type:* number

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.administratorLoginPassword"></a>

```typescript
public readonly administratorLoginPassword: string;
```

- *Type:* string

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string

---

##### `dnsZonePartnerId`<sup>Required</sup> <a name="dnsZonePartnerId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.dnsZonePartnerId"></a>

```typescript
public readonly dnsZonePartnerId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `proxyOverride`<sup>Required</sup> <a name="proxyOverride" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.proxyOverride"></a>

```typescript
public readonly proxyOverride: string;
```

- *Type:* string

---

##### `publicDataEndpointEnabled`<sup>Required</sup> <a name="publicDataEndpointEnabled" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.publicDataEndpointEnabled"></a>

```typescript
public readonly publicDataEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

---

##### `storageSizeInGb`<sup>Required</sup> <a name="storageSizeInGb" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.storageSizeInGb"></a>

```typescript
public readonly storageSizeInGb: number;
```

- *Type:* number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.vcores"></a>

```typescript
public readonly vcores: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlManagedInstanceConfig <a name="SqlManagedInstanceConfig" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.Initializer"></a>

```typescript
import { sqlManagedInstance } from '@cdktf/provider-azurerm'

const sqlManagedInstanceConfig: sqlManagedInstance.SqlManagedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#administrator_login SqlManagedInstance#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#administrator_login_password SqlManagedInstance#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.licenseType">licenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#license_type SqlManagedInstance#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#location SqlManagedInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#name SqlManagedInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#resource_group_name SqlManagedInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#sku_name SqlManagedInstance#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.storageSizeInGb">storageSizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#storage_size_in_gb SqlManagedInstance#storage_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#subnet_id SqlManagedInstance#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.vcores">vcores</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#vcores SqlManagedInstance#vcores}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.collation">collation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#collation SqlManagedInstance#collation}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.dnsZonePartnerId">dnsZonePartnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#dns_zone_partner_id SqlManagedInstance#dns_zone_partner_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#id SqlManagedInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#minimum_tls_version SqlManagedInstance#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.proxyOverride">proxyOverride</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#proxy_override SqlManagedInstance#proxy_override}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.publicDataEndpointEnabled">publicDataEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#public_data_endpoint_enabled SqlManagedInstance#public_data_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#storage_account_type SqlManagedInstance#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#tags SqlManagedInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.timezoneId">timezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#timezone_id SqlManagedInstance#timezone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#administrator_login SqlManagedInstance#administrator_login}.

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.administratorLoginPassword"></a>

```typescript
public readonly administratorLoginPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#administrator_login_password SqlManagedInstance#administrator_login_password}.

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#license_type SqlManagedInstance#license_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#location SqlManagedInstance#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#name SqlManagedInstance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#resource_group_name SqlManagedInstance#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#sku_name SqlManagedInstance#sku_name}.

---

##### `storageSizeInGb`<sup>Required</sup> <a name="storageSizeInGb" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.storageSizeInGb"></a>

```typescript
public readonly storageSizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#storage_size_in_gb SqlManagedInstance#storage_size_in_gb}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#subnet_id SqlManagedInstance#subnet_id}.

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.vcores"></a>

```typescript
public readonly vcores: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#vcores SqlManagedInstance#vcores}.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#collation SqlManagedInstance#collation}.

---

##### `dnsZonePartnerId`<sup>Optional</sup> <a name="dnsZonePartnerId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.dnsZonePartnerId"></a>

```typescript
public readonly dnsZonePartnerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#dns_zone_partner_id SqlManagedInstance#dns_zone_partner_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#id SqlManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.identity"></a>

```typescript
public readonly identity: SqlManagedInstanceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#identity SqlManagedInstance#identity}

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#minimum_tls_version SqlManagedInstance#minimum_tls_version}.

---

##### `proxyOverride`<sup>Optional</sup> <a name="proxyOverride" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.proxyOverride"></a>

```typescript
public readonly proxyOverride: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#proxy_override SqlManagedInstance#proxy_override}.

---

##### `publicDataEndpointEnabled`<sup>Optional</sup> <a name="publicDataEndpointEnabled" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.publicDataEndpointEnabled"></a>

```typescript
public readonly publicDataEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#public_data_endpoint_enabled SqlManagedInstance#public_data_endpoint_enabled}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#storage_account_type SqlManagedInstance#storage_account_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#tags SqlManagedInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SqlManagedInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#timeouts SqlManagedInstance#timeouts}

---

##### `timezoneId`<sup>Optional</sup> <a name="timezoneId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceConfig.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#timezone_id SqlManagedInstance#timezone_id}.

---

### SqlManagedInstanceIdentity <a name="SqlManagedInstanceIdentity" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity.Initializer"></a>

```typescript
import { sqlManagedInstance } from '@cdktf/provider-azurerm'

const sqlManagedInstanceIdentity: sqlManagedInstance.SqlManagedInstanceIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#type SqlManagedInstance#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#type SqlManagedInstance#type}.

---

### SqlManagedInstanceTimeouts <a name="SqlManagedInstanceTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.Initializer"></a>

```typescript
import { sqlManagedInstance } from '@cdktf/provider-azurerm'

const sqlManagedInstanceTimeouts: sqlManagedInstance.SqlManagedInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#create SqlManagedInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#delete SqlManagedInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#read SqlManagedInstance#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#update SqlManagedInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#create SqlManagedInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#delete SqlManagedInstance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#read SqlManagedInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/sql_managed_instance#update SqlManagedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlManagedInstanceIdentityOutputReference <a name="SqlManagedInstanceIdentityOutputReference" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.Initializer"></a>

```typescript
import { sqlManagedInstance } from '@cdktf/provider-azurerm'

new sqlManagedInstance.SqlManagedInstanceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlManagedInstanceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceIdentity">SqlManagedInstanceIdentity</a>

---


### SqlManagedInstanceTimeoutsOutputReference <a name="SqlManagedInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { sqlManagedInstance } from '@cdktf/provider-azurerm'

new sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlManagedInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sqlManagedInstance.SqlManagedInstanceTimeouts">SqlManagedInstanceTimeouts</a>

---



