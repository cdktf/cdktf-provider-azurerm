# `billingAccountCostManagementExport` Submodule <a name="`billingAccountCostManagementExport` Submodule" id="@cdktf/provider-azurerm.billingAccountCostManagementExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingAccountCostManagementExport <a name="BillingAccountCostManagementExport" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export azurerm_billing_account_cost_management_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer"></a>

```typescript
import { billingAccountCostManagementExport } from '@cdktf/provider-azurerm'

new billingAccountCostManagementExport.BillingAccountCostManagementExport(scope: Construct, id: string, config: BillingAccountCostManagementExportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig">BillingAccountCostManagementExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig">BillingAccountCostManagementExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataOptions">putExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataStorageLocation">putExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExportDataOptions` <a name="putExportDataOptions" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataOptions"></a>

```typescript
public putExportDataOptions(value: BillingAccountCostManagementExportExportDataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

---

##### `putExportDataStorageLocation` <a name="putExportDataStorageLocation" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataStorageLocation"></a>

```typescript
public putExportDataStorageLocation(value: BillingAccountCostManagementExportExportDataStorageLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts"></a>

```typescript
public putTimeouts(value: BillingAccountCostManagementExportTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BillingAccountCostManagementExport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isConstruct"></a>

```typescript
import { billingAccountCostManagementExport } from '@cdktf/provider-azurerm'

billingAccountCostManagementExport.BillingAccountCostManagementExport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformElement"></a>

```typescript
import { billingAccountCostManagementExport } from '@cdktf/provider-azurerm'

billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformResource"></a>

```typescript
import { billingAccountCostManagementExport } from '@cdktf/provider-azurerm'

billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport"></a>

```typescript
import { billingAccountCostManagementExport } from '@cdktf/provider-azurerm'

billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BillingAccountCostManagementExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BillingAccountCostManagementExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BillingAccountCostManagementExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BillingAccountCostManagementExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference">BillingAccountCostManagementExportExportDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference">BillingAccountCostManagementExportExportDataStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference">BillingAccountCostManagementExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountIdInput">billingAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptionsInput">exportDataOptionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocationInput">exportDataStorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDateInput">recurrencePeriodEndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDateInput">recurrencePeriodStartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceTypeInput">recurrenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountId">billingAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceType">recurrenceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptions"></a>

```typescript
public readonly exportDataOptions: BillingAccountCostManagementExportExportDataOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference">BillingAccountCostManagementExportExportDataOptionsOutputReference</a>

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocation"></a>

```typescript
public readonly exportDataStorageLocation: BillingAccountCostManagementExportExportDataStorageLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference">BillingAccountCostManagementExportExportDataStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeouts"></a>

```typescript
public readonly timeouts: BillingAccountCostManagementExportTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference">BillingAccountCostManagementExportTimeoutsOutputReference</a>

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `billingAccountIdInput`<sup>Optional</sup> <a name="billingAccountIdInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountIdInput"></a>

```typescript
public readonly billingAccountIdInput: string;
```

- *Type:* string

---

##### `exportDataOptionsInput`<sup>Optional</sup> <a name="exportDataOptionsInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptionsInput"></a>

```typescript
public readonly exportDataOptionsInput: BillingAccountCostManagementExportExportDataOptions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

---

##### `exportDataStorageLocationInput`<sup>Optional</sup> <a name="exportDataStorageLocationInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocationInput"></a>

```typescript
public readonly exportDataStorageLocationInput: BillingAccountCostManagementExportExportDataStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recurrencePeriodEndDateInput`<sup>Optional</sup> <a name="recurrencePeriodEndDateInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDateInput"></a>

```typescript
public readonly recurrencePeriodEndDateInput: string;
```

- *Type:* string

---

##### `recurrencePeriodStartDateInput`<sup>Optional</sup> <a name="recurrencePeriodStartDateInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDateInput"></a>

```typescript
public readonly recurrencePeriodStartDateInput: string;
```

- *Type:* string

---

##### `recurrenceTypeInput`<sup>Optional</sup> <a name="recurrenceTypeInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceTypeInput"></a>

```typescript
public readonly recurrenceTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BillingAccountCostManagementExportTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `billingAccountId`<sup>Required</sup> <a name="billingAccountId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountId"></a>

```typescript
public readonly billingAccountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDate"></a>

```typescript
public readonly recurrencePeriodEndDate: string;
```

- *Type:* string

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDate"></a>

```typescript
public readonly recurrencePeriodStartDate: string;
```

- *Type:* string

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceType"></a>

```typescript
public readonly recurrenceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingAccountCostManagementExportConfig <a name="BillingAccountCostManagementExportConfig" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.Initializer"></a>

```typescript
import { billingAccountCostManagementExport } from '@cdktf/provider-azurerm'

const billingAccountCostManagementExportConfig: billingAccountCostManagementExport.BillingAccountCostManagementExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.billingAccountId">billingAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#billing_account_id BillingAccountCostManagementExport#billing_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#name BillingAccountCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#recurrence_period_end_date BillingAccountCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#recurrence_period_start_date BillingAccountCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrenceType">recurrenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#recurrence_type BillingAccountCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#active BillingAccountCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#id BillingAccountCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billingAccountId`<sup>Required</sup> <a name="billingAccountId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.billingAccountId"></a>

```typescript
public readonly billingAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#billing_account_id BillingAccountCostManagementExport#billing_account_id}.

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataOptions"></a>

```typescript
public readonly exportDataOptions: BillingAccountCostManagementExportExportDataOptions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#export_data_options BillingAccountCostManagementExport#export_data_options}

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataStorageLocation"></a>

```typescript
public readonly exportDataStorageLocation: BillingAccountCostManagementExportExportDataStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#export_data_storage_location BillingAccountCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#name BillingAccountCostManagementExport#name}.

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodEndDate"></a>

```typescript
public readonly recurrencePeriodEndDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#recurrence_period_end_date BillingAccountCostManagementExport#recurrence_period_end_date}.

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodStartDate"></a>

```typescript
public readonly recurrencePeriodStartDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#recurrence_period_start_date BillingAccountCostManagementExport#recurrence_period_start_date}.

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrenceType"></a>

```typescript
public readonly recurrenceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#recurrence_type BillingAccountCostManagementExport#recurrence_type}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#active BillingAccountCostManagementExport#active}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#id BillingAccountCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BillingAccountCostManagementExportTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#timeouts BillingAccountCostManagementExport#timeouts}

---

### BillingAccountCostManagementExportExportDataOptions <a name="BillingAccountCostManagementExportExportDataOptions" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.Initializer"></a>

```typescript
import { billingAccountCostManagementExport } from '@cdktf/provider-azurerm'

const billingAccountCostManagementExportExportDataOptions: billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.timeFrame">timeFrame</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#time_frame BillingAccountCostManagementExport#time_frame}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#type BillingAccountCostManagementExport#type}. |

---

##### `timeFrame`<sup>Required</sup> <a name="timeFrame" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.timeFrame"></a>

```typescript
public readonly timeFrame: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#time_frame BillingAccountCostManagementExport#time_frame}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#type BillingAccountCostManagementExport#type}.

---

### BillingAccountCostManagementExportExportDataStorageLocation <a name="BillingAccountCostManagementExportExportDataStorageLocation" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.Initializer"></a>

```typescript
import { billingAccountCostManagementExport } from '@cdktf/provider-azurerm'

const billingAccountCostManagementExportExportDataStorageLocation: billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.containerId">containerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#container_id BillingAccountCostManagementExport#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.rootFolderPath">rootFolderPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#root_folder_path BillingAccountCostManagementExport#root_folder_path}. |

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#container_id BillingAccountCostManagementExport#container_id}.

---

##### `rootFolderPath`<sup>Required</sup> <a name="rootFolderPath" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.rootFolderPath"></a>

```typescript
public readonly rootFolderPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#root_folder_path BillingAccountCostManagementExport#root_folder_path}.

---

### BillingAccountCostManagementExportTimeouts <a name="BillingAccountCostManagementExportTimeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.Initializer"></a>

```typescript
import { billingAccountCostManagementExport } from '@cdktf/provider-azurerm'

const billingAccountCostManagementExportTimeouts: billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#create BillingAccountCostManagementExport#create}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#delete BillingAccountCostManagementExport#delete}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#read BillingAccountCostManagementExport#read}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#update BillingAccountCostManagementExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#create BillingAccountCostManagementExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#delete BillingAccountCostManagementExport#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#read BillingAccountCostManagementExport#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/billing_account_cost_management_export#update BillingAccountCostManagementExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingAccountCostManagementExportExportDataOptionsOutputReference <a name="BillingAccountCostManagementExportExportDataOptionsOutputReference" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer"></a>

```typescript
import { billingAccountCostManagementExport } from '@cdktf/provider-azurerm'

new billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput">timeFrameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrame">timeFrame</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeFrameInput`<sup>Optional</sup> <a name="timeFrameInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput"></a>

```typescript
public readonly timeFrameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `timeFrame`<sup>Required</sup> <a name="timeFrame" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrame"></a>

```typescript
public readonly timeFrame: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BillingAccountCostManagementExportExportDataOptions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

---


### BillingAccountCostManagementExportExportDataStorageLocationOutputReference <a name="BillingAccountCostManagementExportExportDataStorageLocationOutputReference" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer"></a>

```typescript
import { billingAccountCostManagementExport } from '@cdktf/provider-azurerm'

new billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput">containerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput">rootFolderPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath">rootFolderPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput"></a>

```typescript
public readonly containerIdInput: string;
```

- *Type:* string

---

##### `rootFolderPathInput`<sup>Optional</sup> <a name="rootFolderPathInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput"></a>

```typescript
public readonly rootFolderPathInput: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---

##### `rootFolderPath`<sup>Required</sup> <a name="rootFolderPath" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath"></a>

```typescript
public readonly rootFolderPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BillingAccountCostManagementExportExportDataStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

---


### BillingAccountCostManagementExportTimeoutsOutputReference <a name="BillingAccountCostManagementExportTimeoutsOutputReference" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer"></a>

```typescript
import { billingAccountCostManagementExport } from '@cdktf/provider-azurerm'

new billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingAccountCostManagementExportTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>

---



