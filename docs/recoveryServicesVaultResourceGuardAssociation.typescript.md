# `recoveryServicesVaultResourceGuardAssociation` Submodule <a name="`recoveryServicesVaultResourceGuardAssociation` Submodule" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecoveryServicesVaultResourceGuardAssociation <a name="RecoveryServicesVaultResourceGuardAssociation" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association azurerm_recovery_services_vault_resource_guard_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer"></a>

```typescript
import { recoveryServicesVaultResourceGuardAssociation } from '@cdktf/provider-azurerm'

new recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation(scope: Construct, id: string, config: RecoveryServicesVaultResourceGuardAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig">RecoveryServicesVaultResourceGuardAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig">RecoveryServicesVaultResourceGuardAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: RecoveryServicesVaultResourceGuardAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RecoveryServicesVaultResourceGuardAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isConstruct"></a>

```typescript
import { recoveryServicesVaultResourceGuardAssociation } from '@cdktf/provider-azurerm'

recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformElement"></a>

```typescript
import { recoveryServicesVaultResourceGuardAssociation } from '@cdktf/provider-azurerm'

recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformResource"></a>

```typescript
import { recoveryServicesVaultResourceGuardAssociation } from '@cdktf/provider-azurerm'

recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport"></a>

```typescript
import { recoveryServicesVaultResourceGuardAssociation } from '@cdktf/provider-azurerm'

recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RecoveryServicesVaultResourceGuardAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RecoveryServicesVaultResourceGuardAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RecoveryServicesVaultResourceGuardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RecoveryServicesVaultResourceGuardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference">RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.resourceGuardIdInput">resourceGuardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.resourceGuardId">resourceGuardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference">RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGuardIdInput`<sup>Optional</sup> <a name="resourceGuardIdInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.resourceGuardIdInput"></a>

```typescript
public readonly resourceGuardIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RecoveryServicesVaultResourceGuardAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a>

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGuardId`<sup>Required</sup> <a name="resourceGuardId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.resourceGuardId"></a>

```typescript
public readonly resourceGuardId: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RecoveryServicesVaultResourceGuardAssociationConfig <a name="RecoveryServicesVaultResourceGuardAssociationConfig" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.Initializer"></a>

```typescript
import { recoveryServicesVaultResourceGuardAssociation } from '@cdktf/provider-azurerm'

const recoveryServicesVaultResourceGuardAssociationConfig: recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.resourceGuardId">resourceGuardId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#resource_guard_id RecoveryServicesVaultResourceGuardAssociation#resource_guard_id}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#vault_id RecoveryServicesVaultResourceGuardAssociation#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#id RecoveryServicesVaultResourceGuardAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#name RecoveryServicesVaultResourceGuardAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceGuardId`<sup>Required</sup> <a name="resourceGuardId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.resourceGuardId"></a>

```typescript
public readonly resourceGuardId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#resource_guard_id RecoveryServicesVaultResourceGuardAssociation#resource_guard_id}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#vault_id RecoveryServicesVaultResourceGuardAssociation#vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#id RecoveryServicesVaultResourceGuardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#name RecoveryServicesVaultResourceGuardAssociation#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RecoveryServicesVaultResourceGuardAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#timeouts RecoveryServicesVaultResourceGuardAssociation#timeouts}

---

### RecoveryServicesVaultResourceGuardAssociationTimeouts <a name="RecoveryServicesVaultResourceGuardAssociationTimeouts" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.Initializer"></a>

```typescript
import { recoveryServicesVaultResourceGuardAssociation } from '@cdktf/provider-azurerm'

const recoveryServicesVaultResourceGuardAssociationTimeouts: recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#create RecoveryServicesVaultResourceGuardAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#delete RecoveryServicesVaultResourceGuardAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#read RecoveryServicesVaultResourceGuardAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#create RecoveryServicesVaultResourceGuardAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#delete RecoveryServicesVaultResourceGuardAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/recovery_services_vault_resource_guard_association#read RecoveryServicesVaultResourceGuardAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference <a name="RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { recoveryServicesVaultResourceGuardAssociation } from '@cdktf/provider-azurerm'

new recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RecoveryServicesVaultResourceGuardAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a>

---



