# `siteRecoveryHypervReplicationPolicy` Submodule <a name="`siteRecoveryHypervReplicationPolicy` Submodule" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryHypervReplicationPolicy <a name="SiteRecoveryHypervReplicationPolicy" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy azurerm_site_recovery_hyperv_replication_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer"></a>

```typescript
import { siteRecoveryHypervReplicationPolicy } from '@cdktf/provider-azurerm'

new siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy(scope: Construct, id: string, config: SiteRecoveryHypervReplicationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig">SiteRecoveryHypervReplicationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig">SiteRecoveryHypervReplicationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: SiteRecoveryHypervReplicationPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SiteRecoveryHypervReplicationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isConstruct"></a>

```typescript
import { siteRecoveryHypervReplicationPolicy } from '@cdktf/provider-azurerm'

siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformElement"></a>

```typescript
import { siteRecoveryHypervReplicationPolicy } from '@cdktf/provider-azurerm'

siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformResource"></a>

```typescript
import { siteRecoveryHypervReplicationPolicy } from '@cdktf/provider-azurerm'

siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.generateConfigForImport"></a>

```typescript
import { siteRecoveryHypervReplicationPolicy } from '@cdktf/provider-azurerm'

siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SiteRecoveryHypervReplicationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SiteRecoveryHypervReplicationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SiteRecoveryHypervReplicationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SiteRecoveryHypervReplicationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference">SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHoursInput">applicationConsistentSnapshotFrequencyInHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHoursInput">recoveryPointRetentionInHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultIdInput">recoveryVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSecondsInput">replicationIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHours">applicationConsistentSnapshotFrequencyInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHours">recoveryPointRetentionInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultId">recoveryVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSeconds">replicationIntervalInSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference">SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference</a>

---

##### `applicationConsistentSnapshotFrequencyInHoursInput`<sup>Optional</sup> <a name="applicationConsistentSnapshotFrequencyInHoursInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHoursInput"></a>

```typescript
public readonly applicationConsistentSnapshotFrequencyInHoursInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recoveryPointRetentionInHoursInput`<sup>Optional</sup> <a name="recoveryPointRetentionInHoursInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHoursInput"></a>

```typescript
public readonly recoveryPointRetentionInHoursInput: number;
```

- *Type:* number

---

##### `recoveryVaultIdInput`<sup>Optional</sup> <a name="recoveryVaultIdInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultIdInput"></a>

```typescript
public readonly recoveryVaultIdInput: string;
```

- *Type:* string

---

##### `replicationIntervalInSecondsInput`<sup>Optional</sup> <a name="replicationIntervalInSecondsInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSecondsInput"></a>

```typescript
public readonly replicationIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SiteRecoveryHypervReplicationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>

---

##### `applicationConsistentSnapshotFrequencyInHours`<sup>Required</sup> <a name="applicationConsistentSnapshotFrequencyInHours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHours"></a>

```typescript
public readonly applicationConsistentSnapshotFrequencyInHours: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recoveryPointRetentionInHours`<sup>Required</sup> <a name="recoveryPointRetentionInHours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHours"></a>

```typescript
public readonly recoveryPointRetentionInHours: number;
```

- *Type:* number

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultId"></a>

```typescript
public readonly recoveryVaultId: string;
```

- *Type:* string

---

##### `replicationIntervalInSeconds`<sup>Required</sup> <a name="replicationIntervalInSeconds" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSeconds"></a>

```typescript
public readonly replicationIntervalInSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryHypervReplicationPolicyConfig <a name="SiteRecoveryHypervReplicationPolicyConfig" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.Initializer"></a>

```typescript
import { siteRecoveryHypervReplicationPolicy } from '@cdktf/provider-azurerm'

const siteRecoveryHypervReplicationPolicyConfig: siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.applicationConsistentSnapshotFrequencyInHours">applicationConsistentSnapshotFrequencyInHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#application_consistent_snapshot_frequency_in_hours SiteRecoveryHypervReplicationPolicy#application_consistent_snapshot_frequency_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#name SiteRecoveryHypervReplicationPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryPointRetentionInHours">recoveryPointRetentionInHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_point_retention_in_hours SiteRecoveryHypervReplicationPolicy#recovery_point_retention_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryVaultId">recoveryVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_vault_id SiteRecoveryHypervReplicationPolicy#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.replicationIntervalInSeconds">replicationIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#replication_interval_in_seconds SiteRecoveryHypervReplicationPolicy#replication_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#id SiteRecoveryHypervReplicationPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationConsistentSnapshotFrequencyInHours`<sup>Required</sup> <a name="applicationConsistentSnapshotFrequencyInHours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.applicationConsistentSnapshotFrequencyInHours"></a>

```typescript
public readonly applicationConsistentSnapshotFrequencyInHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#application_consistent_snapshot_frequency_in_hours SiteRecoveryHypervReplicationPolicy#application_consistent_snapshot_frequency_in_hours}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#name SiteRecoveryHypervReplicationPolicy#name}.

---

##### `recoveryPointRetentionInHours`<sup>Required</sup> <a name="recoveryPointRetentionInHours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryPointRetentionInHours"></a>

```typescript
public readonly recoveryPointRetentionInHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_point_retention_in_hours SiteRecoveryHypervReplicationPolicy#recovery_point_retention_in_hours}.

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryVaultId"></a>

```typescript
public readonly recoveryVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_vault_id SiteRecoveryHypervReplicationPolicy#recovery_vault_id}.

---

##### `replicationIntervalInSeconds`<sup>Required</sup> <a name="replicationIntervalInSeconds" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.replicationIntervalInSeconds"></a>

```typescript
public readonly replicationIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#replication_interval_in_seconds SiteRecoveryHypervReplicationPolicy#replication_interval_in_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#id SiteRecoveryHypervReplicationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SiteRecoveryHypervReplicationPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#timeouts SiteRecoveryHypervReplicationPolicy#timeouts}

---

### SiteRecoveryHypervReplicationPolicyTimeouts <a name="SiteRecoveryHypervReplicationPolicyTimeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.Initializer"></a>

```typescript
import { siteRecoveryHypervReplicationPolicy } from '@cdktf/provider-azurerm'

const siteRecoveryHypervReplicationPolicyTimeouts: siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#create SiteRecoveryHypervReplicationPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#delete SiteRecoveryHypervReplicationPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#read SiteRecoveryHypervReplicationPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#update SiteRecoveryHypervReplicationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#create SiteRecoveryHypervReplicationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#delete SiteRecoveryHypervReplicationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#read SiteRecoveryHypervReplicationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/site_recovery_hyperv_replication_policy#update SiteRecoveryHypervReplicationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference <a name="SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { siteRecoveryHypervReplicationPolicy } from '@cdktf/provider-azurerm'

new siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SiteRecoveryHypervReplicationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>

---



